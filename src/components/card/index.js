import React from 'react';
import styles from './style.module.scss';

function Card({ title, content, smallImg, largeImg }) {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>
        {title}
        <img src={require('./img/chevron.svg')} alt="" />
      </h2>
      <p className={styles.content}>{content}</p>
      {!!smallImg && <img src={smallImg} width="60" alt="" />}
      {!!largeImg && <img src={largeImg} width="100%" alt="" />}
    </div>
  );
}

export default Card;
