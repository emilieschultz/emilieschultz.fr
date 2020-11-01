import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './style.module.scss';
import Logo from '../../components/logo';
import behance from './icons/behance.svg';
import dribbble from './icons/dribbble.svg';
import instagram from './icons/instagram.svg';
import linkedin from './icons/linkedin.svg';
import profil from './icons/profil.svg';
import studies from './icons/hat-school.svg';
import portfolio from './icons/wand.svg';
import skills from './icons/suitcae.svg';

const ROUTES = [
  { path: '/qui-suis-je', title: 'Qui-suis-je', icon: profil },
  { path: '/formations', title: 'Formations', icon: studies },
  { path: '/portfolio', title: 'Portfolio', icon: portfolio },
  { path: '/competences', title: 'Compétences', icon: skills },
];

export default function Sidebar() {
  return (
    <aside className={styles.aside}>
      <div className={styles.header}>
        <NavLink to={'/'}>
          <Logo />
        </NavLink>

        <ul className={styles.links}>
          {ROUTES.map((route) => (
            <li key={route.path}>
              <NavLink
                to={route.path}
                className={styles.nav}
                activeClassName={styles.activenav}
              >
                {route.title} <img src={route.icon} width="15" alt="" />
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.footer}>Footer</div>
    </aside>
  );
}
