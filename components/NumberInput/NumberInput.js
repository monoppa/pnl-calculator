import React from 'react';
import { string } from 'prop-types';
import styles from './NumberInput.module.css';

const NumberInput = ({ label, ...rest }) => {
  return (
    <div className='flex flex-col'>
      <label className='mb-2 tracking-wide text-gray-600'>{label}</label>

      <input className={styles.input} {...rest} type='number' />
    </div>
  );
};

NumberInput.propTypes = {
  label: string.isRequired,
};

NumberInput.defaultProps = {};

export default NumberInput;
