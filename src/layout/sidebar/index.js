import React from 'react';
import { Link } from 'react-router-dom';
import styles from './style.module.scss';
import Logo from '../../components/logo';

const ROUTES = [
  { path: '/qui-suis-je', title: 'Qui-suis-je' },
  { path: '/formations', title: 'Formations' },
  { path: '/portfolio', title: 'Portfolio' },
  { path: '/competences', title: 'Compétences' },
];

export default function Sidebar() {
  return (
    <aside className={styles.aside}>
      <div className={styles.header}>
        <Logo />

        <ul className={styles.links}>
          {ROUTES.map((route) => (
            <li key={route.path}>
              <Link to={route.path}>{route.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.footer}>Footer</div>
    </aside>
  );
}
