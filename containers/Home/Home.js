import { useCallback, useEffect, useMemo, useState } from 'react';
import NumberInput from 'components/NumberInput';
import React from 'react';
import {} from 'prop-types';
import styles from './Home.module.css';
import useMounted from 'hooks/useMounted';

const useLocalState = (initialValue, cacheKey) => {
  const [state, setState] = useState(initialValue);

  useEffect(() => {
    const cache = localStorage.getItem(cacheKey);

    if (cache) {
      setState(cache);
    }
  }, [cacheKey]);

  const setStateCached = useCallback(
    (value) => {
      localStorage.setItem(cacheKey, value);
      setState(value);
    },
    [cacheKey]
  );

  return [state, setStateCached];
};

const Home = () => {
  const [initialPrice, setInitialPrice] = useLocalState(0, 'initialPrice');
  const [currentPrice, setCurrentPrice] = useLocalState(0, 'currentPrice');
  const [capital, setCapital] = useLocalState(0, 'capital');
  const [mounted] = useMounted();

  const percentGain = useMemo(() => {
    if (typeof window === 'object') {
      const revenue = currentPrice - initialPrice;

      const result = revenue ? revenue / initialPrice : 0;

      return result * 100;
    }

    return 0;
  }, [initialPrice, currentPrice]);

  const gain = (function calculateGain() {
    return capital * (percentGain / 100);
  })();

  const handleInitialChange = (e) => {
    const value = Number(e.target.value);
    setInitialPrice(value);
  };

  const handleCurrentChange = (e) => {
    const value = Number(e.target.value);
    setCurrentPrice(value);
  };

  return (
    <div>
      <main className='flex flex-col items-center max-w-4xl pt-24 mx-auto'>
        <h1 className='mb-12 text-xl font-bold text-gray-600 uppercase'>
          Gains Calculator
        </h1>

        <div className='w-full p-4'>
          <div className={styles.calculatorWrap}>
            <div className='flex flex-col items-center w-full lg:w-1/2'>
              {/* <div className='mb-8'>
                <Image src='/moon.svg' width={200} height={200} />
              </div> */}

              {mounted && (
                <div className=''>
                  <span className='text-center'>
                    <p className='font-bold text-gray-500'>PNL %</p>
                    <p className={styles.result}>{percentGain.toFixed(2)} %</p>
                  </span>

                  <span className='text-center'>
                    <p className='font-bold text-gray-500'>PNL</p>
                    <p className={styles.result}>{gain.toFixed(2)}</p>
                  </span>
                </div>
              )}
            </div>

            <div className={styles.divider} />

            <div className='w-full space-y-8 lg:w-1/2'>
              <NumberInput
                label='Capital'
                placeholder='1,000'
                value={capital > 0 ? capital : undefined}
                onChange={(e) => {
                  const value = Number(e.target.value);
                  setCapital(value);
                }}
              />

              <NumberInput
                label='Initial price'
                placeholder='50,000'
                onChange={handleInitialChange}
                value={initialPrice > 0 ? initialPrice : undefined}
              />

              <NumberInput
                label='Current price'
                placeholder='50,000'
                onChange={handleCurrentChange}
                value={currentPrice > 0 ? currentPrice : undefined}
              />

              <button className={styles.submit} type='submit'>
                Calculate
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

Home.propTypes = {};

Home.defaultProps = {};

export default Home;
