import React from 'react';
import styles from './style.module.scss';
import Card, { CardList } from '../../components/card';

// CardList1.args = {
//   title: 'Mes compétences créatives',
//   backgroundColor: 'purple',
//   titleColor: 'white',
//   textColor: 'white',
//   list: [
//     'Réalisation d’illustrations',
//     'Création de logotypes',
//     'Conception de supports print',
//   ],
//   listColor: 'white',
// };
//
// CardList2.args = {
//   title: 'Savoir-être professionnels',
//   backgroundColor: 'green',
//   titleColor: 'black',
//   list: [
//     'Capacité d’adaptation',
//     'Gestion du stress',
//     'Polyvalence',
//     'Curiosité',
//     'Autonomie',
//     'Sens de la communication',
//     'Persévérance',
//   ],
// };

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
