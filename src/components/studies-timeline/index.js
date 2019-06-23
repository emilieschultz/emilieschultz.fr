import React from 'react';
import styles from './style.module.scss';

function StudiesTimeline({ date, name, school }) {
  return (
    <div>
      <h4 className="text-dark">{date}</h4>
      <p className="text-light">{name}</p>
      <p className="text-light">{school}</p>
    </div>
  );
}

export default StudiesTimeline;
