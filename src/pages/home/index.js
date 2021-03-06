import React from 'react';
import styles from './style.module.scss';
import { CardDefault } from '../../components/card';
import { Row, Col } from 'react-bootstrap';
import profilPic from '../../components/card/img/profil-pic.png';
import porfolioPic from '../../components/card/img/illustration-portfolio.png';
import skillsPic from '../../components/card/img/illustration-skills.png';

const aboutProps = {
  title: 'Qui suis-je ?',
  useChevron: true,
  content:
    'Si vous souhaitez en apprendre davantage sur moi, sur ma manière de travailler et mes objectifs, c’est ici que ça se passe !',
  smallImg: profilPic,
  titleColor: 'green',
  linkTo: '/qui-suis-je',
};

const formationProps = {
  title: 'Mes formations',
  useChevron: true,
  content:
    'Dans cette section je vous liste les différentes formations que j’ai accompli ces dernières années et qui m’ont permis de devenir qui je suis aujourd’hui.',
  titleColor: 'white',
  backgroundColor: 'purple',
  textColor: 'white',
  chevronColor: 'white',
  linkTo: '/formations',
};

const portfolioProps = {
  title: 'Portfolio',
  useChevron: true,
  content:
    'N’hésitez pas à consulter mes créations personnelles. Elles sont présentes dans cette section.',
  largeImg: porfolioPic,
  titleColor: 'purple',
  linkTo: '/portfolio',
};

const skillsProps = {
  title: 'Mes compétences',
  useChevron: true,
  content:
    'Je vous énumère ici les outils que je sais utiliser et que j’emploie ainsi qui mes savoir être professionnels.',
  largeImg: skillsPic,
  titleColor: 'black',
  backgroundColor: 'green',
  linkTo: '/competences',
};

export default function Skills() {
  return (
    <div className={styles.home}>
      <Row>
        <Col sm={12} lg={4}>
          <div className={styles.cardWrapper}>
            <CardDefault {...aboutProps} />
          </div>
          <div className={styles.cardWrapper}>
            <CardDefault {...formationProps} />
          </div>
        </Col>
        <Col sm={12} lg={4}>
          <div className={`${styles.cardWrapper} ${styles.large}`}>
            <CardDefault {...portfolioProps} small={false} />
          </div>
        </Col>
        <Col sm={12} lg={4}>
          <div className={`${styles.cardWrapper} ${styles.large}`}>
            <CardDefault {...skillsProps} small={false} />
          </div>
        </Col>
      </Row>
    </div>
  );
}
