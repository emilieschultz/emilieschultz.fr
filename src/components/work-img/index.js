import React from 'react';
import styles from './style.module.scss';

function WorkImg({ url }) {
  return (
    <div className={styles.container}>
      <img src={url} alt="" className={styles.img} />
    </div>
  );
}

export default WorkImg;
