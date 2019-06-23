import React from 'react';
import styles from './style.module.scss';

import cartableIcon from './icons/cartable.svg';
import chapeauIcon from './icons/chapeau.svg';
import crayonIcon from './icons/crayon.svg';
import lunetteIcon from './icons/lunette.svg';
import mainsIcon from './icons/mains.svg';
import phoneIcon from './icons/phone.svg';
import rollerIcon from './icons/roller.svg';
import theIcon from './icons/the.svg';
import starIcon from './icons/star.svg';

const icons = {
  cartable: cartableIcon,
  chapeau: chapeauIcon,
  crayon: crayonIcon,
  lunette: lunetteIcon,
  mains: mainsIcon,
  phone: phoneIcon,
  roller: rollerIcon,
  the: theIcon,
  star: starIcon
};

function SectionTitle({ name, iconName, className }) {
  return (
    <div className={`${className} text-center`}>
      <img
        src={icons[iconName]}
        alt=""
        className={`${styles.img} ${styles[iconName]}`}
      />
      <h3>{name}</h3>
    </div>
  );
}

export default SectionTitle;
