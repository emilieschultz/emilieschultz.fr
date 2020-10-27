import React from 'react';
import styles from './style.module.scss';
import Chevron from '../chevron';

function Card({
  title,
  children,
  useChevron = false,
  chevronColor = 'black',
  titleColor = 'green',
  backgroundColor = 'white'
}) {
  return (
    <div className={`${styles.container} ${styles[backgroundColor]}`}>
      <h2 className={`${styles.title} ${styles[titleColor]}`}>
        {title}
        {!!useChevron && <Chevron color={chevronColor} />}
      </h2>
      {children}
    </div>
  );
}

export const CardDefault = ({
  content,
  smallImg,
  largeImg,
  textColor = 'black',
  ...otherProps
}) => (
  <Card {...otherProps}>
    <p className={`${styles.content} ${styles[textColor]}`}>{content}</p>
    {!!smallImg && <img src={smallImg} width="60" alt="" />}
    {!!largeImg && <img src={largeImg} width="100%" alt="" />}
  </Card>
);

export const CardList = ({ ...otherProps }) => (
  <Card {...otherProps}>
    <ul>
      <li>Réalisation</li>
      <li>Création de logotypes</li>
    </ul>
  </Card>
);

export default Card;
