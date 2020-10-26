import React from 'react';

import SectionTitle from './index';

export default {
  title: 'Example/SectionTitle',
  component: SectionTitle,
  argTypes: {
    name: 'hey'
  }
};

const Template = args => <SectionTitle {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  primary: true,
  label: 'Button',
  name: 'test'
};

export const Secondary = Template.bind({});
Secondary.args = {
  label: 'Button'
};
