import React from 'react';
import styles from './style.module.scss';
import logoGreen from './img/logo-green.png';
import logoBlack from './img/logo-black.png';

export default function Logo() {
  return (
    <div className={styles.container}>
      <img className={styles.logo} src={logoBlack} />
      <div>
        Emilie <br />
        Schultz
      </div>
    </div>
  );
}
