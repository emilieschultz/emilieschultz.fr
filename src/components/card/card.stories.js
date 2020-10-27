import React from 'react';

import Card, { CardList, CardDefault } from './index';

export default {
  title: 'Components/Card',
  component: Card
};

const TemplateSmall = Component => args => (
  <div style={{ width: '250px' }}>
    <Component {...args} />
  </div>
);

const TemplateLarge = Component => args => (
  <div style={{ width: '250px', height: '400px' }}>
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

export const CardStudies = TemplateLarge(CardDefault).bind({});
CardStudies.args = {
  title: 'Mes formations',
  useChevron: true,
  content:
    'Dans cette section je vous liste les différentes formations que j’ai accompli ces dernières années et qui m’ont permis de devenir qui je suis aujourd’hui.',
  largeImg: require('./img/profil-pic.png'),
  titleColor: 'white',
  backgroundColor: 'purple',
  textColor: 'white'
};

export const CardPortfolio = TemplateLarge(CardDefault).bind({});
CardPortfolio.args = {
  title: 'Qui suis-je ?',
  useChevron: true,
  content:
    'Si vous souhaitez en apprendre davantage sur moi, sur ma manière de travailler, mes passions et mes objectifs, c’est ici que ça se passe !',
  largeImg: require('./img/profil-pic.png')
};

export const CardSkills = TemplateLarge(CardDefault).bind({});
CardSkills.args = {
  title: 'Qui suis-je ?',
  titleColor: 'purple',
  useChevron: true,
  content:
    'Si vous souhaitez en apprendre davantage sur moi, sur ma manière de travailler, mes passions et mes objectifs, c’est ici que ça se passe !',
  largeImg: require('./img/profil-pic.png')
};

export const CardList1 = TemplateSmall(CardList).bind({});
CardList1.args = {
  title: 'Qui suis-je ?',
  backgroundColor: 'green',
  titleColor: 'white'
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
