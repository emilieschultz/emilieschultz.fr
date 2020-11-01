import React from 'react';

import Card, { CardList, CardDefault, CardStudy } from './index';

export default {
  title: 'Components/Card',
  component: Card
};

const TemplateSmall = Component => args => (
  <div style={{ width: '300px', height: '200px' }}>
    <Component {...args} />
  </div>
);

const TemplateLarge = Component => args => (
  <div style={{ width: '300px', height: '400px' }}>
    <Component {...args} />
  </div>
);

const TemplateXLarge = Component => args => (
  <div style={{ width: '1000px', height: '100px' }}>
    <Component {...args} />
  </div>
);

export const CardAbout = TemplateSmall(CardDefault).bind({});
CardAbout.args = {
  title: 'Qui suis-je ?',
  useChevron: true, //require('./img/chevron.svg'),
  content:
    'Si vous souhaitez en apprendre davantage sur moi, sur ma manière de travailler, mes passions et mes objectifs, c’est ici que ça se passe !',
  smallImg: require('./img/profil-pic.png'),
  titleColor: 'green'
};

export const CardStudies = TemplateSmall(CardDefault).bind({});
CardStudies.args = {
  title: 'Mes formations',
  useChevron: true,
  content:
    'Dans cette section je vous liste les différentes formations que j’ai accompli ces dernières années et qui m’ont permis de devenir qui je suis aujourd’hui.',
  titleColor: 'white',
  backgroundColor: 'purple',
  textColor: 'white',
  chevronColor: 'white'
};

export const CardPortfolio = TemplateLarge(CardDefault).bind({});
CardPortfolio.args = {
  title: 'Portfolio',
  useChevron: true,
  content:
    'N’hésitez pas à consulter mes créations personnelles. Elles sont présentes dans cette section.',
  largeImg: require('./img/illustration-portfolio.png'),
  titleColor: 'purple'
};

export const CardSkills = TemplateLarge(CardDefault).bind({});
CardSkills.args = {
  title: 'Mes compétences',
  useChevron: true,
  content:
    'Je vous énumère ici les outils que je sais utiliser et que j’emploie ainsi qui mes savoir être professionnels.',
  largeImg: require('./img/illustration-skills.png'),
  titleColor: 'black',
  backgroundColor: 'green'
};

export const CardList1 = TemplateSmall(CardList).bind({});
CardList1.args = {
  title: 'Mes compétences créatives',
  backgroundColor: 'purple',
  titleColor: 'white',
  textColor: 'white',
  list: [
    'Réalisation d’illustrations',
    'Création de logotypes',
    'Conception de supports print'
  ],
  listColor: 'white'
};

export const CardList2 = TemplateLarge(CardList).bind({});
CardList2.args = {
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
    'Persévérance'
  ]
};

export const CardStudy1 = TemplateXLarge(CardStudy).bind({});
CardStudy1.args = {
  title:
    'Licence Professionnelle : métiers du numérique : conception, rédaction et réalisation web',
  titleColor: 'black',
  backgroundColor: 'green',
  content:
    'Conception et réalisations graphiques - Communication et culture numérique - Conception et réalisation Web - Design d’information - Typographie, calligraphie, lettrage - Arts visuels - Motion Design - Créations graphiques - Projets tutorés',
  content2: 'Université de Strasbourg',
  dateStart: '2020',
  dateEnd: '2021'
};

export const CardStudy2 = TemplateXLarge(CardStudy).bind({});
CardStudy2.args = {
  title: 'DUT : Métiers du Multimédia et de l’Internet',
  titleColor: 'black',
  backgroundColor: 'white',
  content:
    'Communication - Infographie - Esthétique et expression artistique - Ecriture pour les médias numériques - Intégration web - Référencement - Sciences cognitives - Théories de l’information et de la communication - Production audiovisuelle',
  content2: 'Université de Strasbourg',
  dateStart: '2018',
  dateEnd: '2020',
  dateColor: 'white'
};

export const CardStudy3 = TemplateXLarge(CardStudy).bind({});
CardStudy3.args = {
  title: 'Master 1 Droit Européen et International',
  titleColor: 'black',
  backgroundColor: 'white',
  content:
    'Droit du marché intérieur - Droit économique international - Droit de la concurrence - Politique de l’Union Européenne - Droit international privé',
  content2: 'Université de Nantes',
  dateStart: '2017',
  dateEnd: '2018',
  dateColor: 'white'
};

export const CardStudy4 = TemplateXLarge(CardStudy).bind({});
CardStudy4.args = {
  title: 'Licence Administration Publique',
  titleColor: 'black',
  backgroundColor: 'white',
  content:
    'Droit constitutionnel - Institutions Administratives et financières - Economie - Droit administratif - Finances publiques - Culture générales',
  content2: 'Université de Nantes',
  dateStart: '2016',
  dateEnd: '2017',
  dateColor: 'white'
};

export const CardStudy5 = TemplateXLarge(CardStudy).bind({});
CardStudy5.args = {
  title: 'DUT Carrières Juridique',
  titleColor: 'black',
  backgroundColor: 'white',
  content:
    'Introduction générale au droit - Fondamentaux du droit civil - Fondamentaux du droit constitutionnel - Expression et communication - Droit commercial - Droit Administratif - Comptabilité et finance d’entreprise',
  content2: 'Université de Nantes',
  dateStart: '2014',
  dateEnd: '2016',
  dateColor: 'white'
};
// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button'
// };
//
// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button'
// };
//
// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button'
// };
