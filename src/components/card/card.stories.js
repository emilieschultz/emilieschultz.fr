import React from 'react';

import Card from './index';

export default {
  title: 'Components/Card',
  component: Card
};

const Template = args => (
  <div style={{ width: '250px' }}>
    <Card {...args} />
  </div>
);

const TemplateTall = args => (
  <div style={{ width: '250px', height: '400px' }}>
    <Card {...args} />
  </div>
);

export const CardPrimary = Template.bind({});
CardPrimary.args = {
  title: 'Qui suis-je ?',
  content:
    'Si vous souhaitez en apprendre davantage sur moi, sur ma manière de travailler, mes passions et mes objectifs, c’est ici que ça se passe !',
  smallImg: require('./img/profil-pic.png')
};

export const CardSecondary = TemplateTall.bind({});
CardSecondary.args = {
  title: 'Qui suis-je ?',
  content:
    'Si vous souhaitez en apprendre davantage sur moi, sur ma manière de travailler, mes passions et mes objectifs, c’est ici que ça se passe !',
  largeImg: require('./img/profil-pic.png')
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
