import React from 'react';
import styles from './style.module.scss';
import Card from '../../components/card';

export default function Skills() {
  return (
    <div className={styles.skills}>
      <div className="d-flex align-content-stretch flex-wrap h-100">
        <div className="d-flex flex-fill">
          <div className="d-flex flex-column w-100">
            <div className="flex-fill m-3">
              <Card title={'test'}></Card>
            </div>
            <div className="flex-fill m-3">
              <Card title={'test2'}></Card>
            </div>
          </div>
        </div>

        <div className="d-flex flex-fill">
          <div className="d-flex flex-column  w-100">
            <div className="flex-fill m-3">
              <Card title={'test'}></Card>
            </div>
            <div className="flex-fill m-3">
              <Card title={'test2'}></Card>
            </div>
          </div>
        </div>

        <div className="d-flex flex-fill">
          <div className="d-flex flex-column  w-100  m-3">
            <Card title={'test2'}></Card>
          </div>
        </div>
      </div>
    </div>
  );
}
