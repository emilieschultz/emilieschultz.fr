import React from 'react';
import styles from './style.module.scss';
import Card, { CardList } from '../../components/card';

const skillProps = {
  title: 'Mes compétences créatives',
  backgroundColor: 'purple',
  titleColor: 'white',
  textColor: 'white',
  list: [
    'Réalisation d’illustrations',
    'Création de logotypes',
    'Conception de supports print',
  ],
  listColor: 'white',
};

const proProps = {
  title: 'Savoir-être professionnels',
  backgroundColor: 'green',
  titleColor: 'black',
  list: [
    'Capacité d’adaptation',
    'Gestion du stress',
    'Polyvalence',
    'Curiosité',
    'Autonomie',
    'Sens de la communication',
    'Persévérance',
  ],
};

export default function Skills() {
  return (
    <div className={styles.skills}>
      <div className={styles.grid}>
        <div className={styles.item1}>
          <CardList {...skillProps} />
        </div>
        <div className={styles.item2}>
          <CardList {...skillProps} />
        </div>

        <div className={styles.item3}>
          <CardList {...skillProps} />
        </div>
        <div className={styles.item4}>
          <CardList {...skillProps} />
        </div>
        <div className={styles.item5}>
          <CardList {...proProps} />
        </div>
      </div>
    </div>
  );
}
