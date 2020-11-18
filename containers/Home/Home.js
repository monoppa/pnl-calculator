import { useMemo, useState } from 'react';
import NumberInput from 'components/NumberInput';

import React from 'react';
import {} from 'prop-types';
import Image from 'next/image';

import styles from './Home.module.css';
import useMounted from 'hooks/useMounted';

const Home = () => {
  const [initialPrice, setInitialPrice] = useState(0);
  const [currentPrice, setCurrentPrice] = useState(0);
  const [mounted] = useMounted();

  const percentGain = useMemo(() => {
    if (typeof window === 'object') {
      const revenue = currentPrice - initialPrice;

      const result = revenue ? revenue / initialPrice : 0;

      return result * 100;
    }

    return 0;
  }, [initialPrice, currentPrice]);

  const handleInitialChange = (e) => {
    setInitialPrice(Number(e.target.value));
  };

  const handleCurrentChange = (e) => {
    setCurrentPrice(Number(e.target.value));
  };

  console.log('Home -> percentGain', percentGain);

  return (
    <div>
      <main className='flex flex-col items-center max-w-4xl pt-24 mx-auto'>
        <h1 className='mb-12 text-xl font-bold text-gray-600 uppercase'>
          Gains Calculator
        </h1>

        <div className='w-full p-4'>
          <div className={styles.calculatorWrap}>
            <div className='flex flex-col items-center w-full lg:w-1/2'>
              <div className='mb-8'>
                <Image src='/moon.svg' width={200} height={200} />
              </div>

              <p className='font-bold text-gray-500'>PNL</p>
              {mounted && (
                <p className={styles.result}>{percentGain.toFixed(2)} %</p>
              )}
            </div>

            <div className={styles.divider} />

            <div className='w-full space-y-8 lg:w-1/2'>
              <NumberInput
                label='Initial price'
                placeholder='50,000'
                onChange={handleInitialChange}
              />

              <NumberInput
                label='Current price'
                placeholder='50,000'
                onChange={handleCurrentChange}
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
