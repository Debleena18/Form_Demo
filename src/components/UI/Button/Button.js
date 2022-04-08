import React from 'react';

import styles from './Button.module.css';

//This file uses CSS mudule styling.
const Button = props => {
  return (
    <button type={props.type} className={styles.button} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;