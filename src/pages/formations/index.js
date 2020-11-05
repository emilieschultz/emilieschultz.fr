import React from 'react';
import { CardStudy } from '../../components/card';
import styles from './style.module.scss';

const studies = [
  {
    title:
      'Licence Professionnelle : métiers du numérique : conception, rédaction et réalisation web',
    titleColor: 'black',
    backgroundColor: 'green',
    content:
      'Conception et réalisations graphiques - Communication et culture numérique - Conception et réalisation Web - Design d’information - Typographie, calligraphie, lettrage - Arts visuels - Motion Design - Créations graphiques - Projets tutorés',
    content2: 'Université de Strasbourg',
    dateStart: '2020',
    dateEnd: '2021',
  },

  {
    title: 'DUT : Métiers du Multimédia et de l’Internet',
    titleColor: 'black',
    backgroundColor: 'white',
    content:
      'Communication - Infographie - Esthétique et expression artistique - Ecriture pour les médias numériques - Intégration web - Référencement - Sciences cognitives - Théories de l’information et de la communication - Production audiovisuelle',
    content2: 'Université de Strasbourg',
    dateStart: '2018',
    dateEnd: '2020',
    dateColor: 'white',
  },
  {
    title: 'Master 1 Droit Européen et International',
    titleColor: 'black',
    backgroundColor: 'white',
    content:
      'Droit du marché intérieur - Droit économique international - Droit de la concurrence - Politique de l’Union Européenne - Droit international privé',
    content2: 'Université de Nantes',
    dateStart: '2017',
    dateEnd: '2018',
    dateColor: 'white',
  },
  {
    title: 'Licence Administration Publique',
    titleColor: 'black',
    backgroundColor: 'white',
    content:
      'Droit constitutionnel - Institutions Administratives et financières - Economie - Droit administratif - Finances publiques - Culture générales',
    content2: 'Université de Nantes',
    dateStart: '2016',
    dateEnd: '2017',
    dateColor: 'white',
  },
  {
    title: 'DUT Carrières Juridique',
    titleColor: 'black',
    backgroundColor: 'white',
    content:
      'Introduction générale au droit - Fondamentaux du droit civil - Fondamentaux du droit constitutionnel - Expression et communication - Droit commercial - Droit Administratif - Comptabilité et finance d’entreprise',
    content2: 'Université de Nantes',
    dateStart: '2014',
    dateEnd: '2016',
    dateColor: 'white',
  },
];

export default function Formations() {
  return (
    <div className={styles.studies}>
      {studies.map((study) => (
        <CardStudy
          {...study}
          key={study.title}
          style={{ marginBottom: '30px' }}
        />
      ))}
    </div>
  );
}
