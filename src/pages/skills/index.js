import React from 'react';
import styles from './style.module.scss';
import { CardList, CardLogos } from '../../components/card';
import imgFigma from './img/figma.png';
import imgAe from './img/ae.png';
import imgAi from './img/ai.png';
import imgProcreate from './img/procreate.png';
import imgPs from './img/ps.png';
import imgSketch from './img/sketch.png';
import imgIn from './img/invision.png';

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

const maquettagesProps = {
  title: 'Outils de maquettage et de prototypage',
  backgroundColor: 'white',
  titleColor: 'black',
  logos: [imgFigma, imgSketch, imgIn],
};

const createGraphProps = {
  title: 'Outils de création graphique',
  backgroundColor: 'white',
  titleColor: 'black',
  logos: [imgProcreate, imgPs, imgAi],
};

const animProps = {
  title: "Outils d'animation et de motion design",
  backgroundColor: 'white',
  titleColor: 'black',
  logos: [imgProcreate, imgAe],
};

export default function Skills() {
  return (
    <div className={styles.skills}>
      <div className={styles.grid}>
        <div className={styles.item1}>
          <CardLogos {...maquettagesProps} />
        </div>
        <div className={styles.item2}>
          <CardList {...skillProps} />
        </div>

        <div className={styles.item3}>
          <CardLogos {...createGraphProps} />
        </div>
        <div className={styles.item4}>
          <CardLogos {...animProps} />
        </div>
        <div className={styles.item5}>
          <CardList {...proProps} />
        </div>
      </div>
    </div>
  );
}
