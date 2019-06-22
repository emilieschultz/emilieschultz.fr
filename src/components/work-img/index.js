import React from 'react';
import styles from './style.module.scss';

function WorkImg({ url }) {
  return (
    <div>
      <img src={url} alt="" style={{ width: '100%' }} />
    </div>
  );
}

export default WorkImg;
