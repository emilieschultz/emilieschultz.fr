import React from 'react';
import styles from './style.module.scss';
import Chevron from '../chevron';
import Bullet from '../bullet';
import { Link } from 'react-router-dom';

function Card({
  title,
  children,
  useChevron = false,
  chevronColor = 'black',
  titleColor = 'green',
  backgroundColor = 'white',
  rightContent,
  style = {},
  linkTo = '',
}) {
  function Inner() {
    return (
      <div
        className={`${styles.container} ${styles[backgroundColor]} ${
          !!rightContent ? styles.hasRightContent : ''
        }`}
        style={style}
      >
        <div className={styles.innerContainer}>
          <h2 className={`${styles.title} ${styles[titleColor]}`}>
            {title}
            {!!useChevron && <Chevron color={chevronColor} />}
          </h2>
          {children}
        </div>

        {!!rightContent && rightContent}
      </div>
    );
  }

  if (!!linkTo) {
    return (
      <Link to={linkTo} className={styles.linkTo}>
        <Inner />
      </Link>
    );
  }

  return <Inner />;
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

export const CardList = ({ list, listColor = 'black', ...otherProps }) => (
  <Card {...otherProps}>
    <ul className={`${styles.list} ${styles[listColor]}`}>
      {list.map((element) => (
        <li key={element}>
          <div className={styles.bullet}>
            <Bullet color={listColor} />
          </div>
          {element}
        </li>
      ))}
    </ul>
  </Card>
);

export const CardStudy = ({
  content,
  content2,
  dateStart,
  dateEnd,
  dateColor = 'green',
  textColor = 'black',
  ...otherProps
}) => (
  <Card
    {...otherProps}
    rightContent={
      <div className={styles.rightContent}>
        <div className={`${styles.date} ${styles[dateColor]}`}>
          {dateEnd} <br /> - <br /> {dateStart}
        </div>
      </div>
    }
  >
    <div className={`${styles.content} ${styles[textColor]}`}>
      <p className={`${styles.content} ${styles[textColor]}`}>{content}</p>
      <p className={`${styles.content2} ${styles[textColor]}`}>{content2}</p>
    </div>
  </Card>
);

export const CardLogos = ({ logos, ...otherProps }) => (
  <Card {...otherProps}>
    <div className={styles.logosContainer}>
      {logos.map((logo) => (
        <img src={logo} className={styles.logo}/>
      ))}
    </div>
  </Card>
);

export default Card;
