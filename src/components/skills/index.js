import React from 'react';
import styles from './style.module.scss';
import SectionTitle from '../section-title';
import cn from 'classnames';

function Circle({ className, children }) {
  return (
    <div className="col-6 col-sm-3">
      <div className={cn(styles.circle, className)}>
        <div className={styles.circleContent}>{children}</div>
      </div>
    </div>
  );
}

function Skills() {
  return (
    <div className="bg-light pb-6">
      <SectionTitle
        name="Compétences"
        iconName="star"
        className="pt-5 mb-6 text-dark"
      />
      <div className="container">
        <div className="row">
          <div className="col-8 offset-2">
            <div className="row">
              <Circle className={'bg-orange'}>Illustrator</Circle>
              <Circle className={'bg-orange-80'}>Photoshop</Circle>
              <Circle className={'bg-orange-60'}>HTML/CSS</Circle>
              <Circle className={'bg-orange-40'}>WordPress</Circle>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-8 offset-2">
            <div className="row">
              <Circle className={'bg-indigo'}>Anglais</Circle>
              <Circle className={'bg-indigo-80'}>SEO</Circle>
              <Circle className={'bg-indigo-60'}>MySQL</Circle>
              <Circle className={'bg-indigo-40'}>PHP</Circle>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
