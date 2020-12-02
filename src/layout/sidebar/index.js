import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import styles from './style.module.scss';
import Logo from '../../components/logo';
import behance from './icons/behance.svg';
import dribbble from './icons/dribbble.svg';
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

function SidebarMobile() {
  return (
    <aside className={`${styles.asideMobile} d-block d-sm-none`}>
      <Link className={styles.logo} to={'/'}>
        <Logo />
      </Link>

      <footer className={styles.footer}>
        {ROUTES.map((route) => (
          <div key={route.path} className={styles.footerLinkWrapper}>
            <NavLink
              to={route.path}
              className={styles.nav}
              activeClassName={styles.activenav}
            >
              {route.title} <img src={route.icon} width="15" alt="" />
            </NavLink>
          </div>
        ))}
      </footer>
    </aside>
  );
}

function SidebarDesktop() {
  return (
    <aside className={`${styles.aside} d-none d-sm-flex`}>
      <div className={styles.header}>
        <Link className={styles.logo} to={'/'}>
          <Logo />
        </Link>

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

      <div className={styles.footer}>
        <a
          href={'https://www.linkedin.com/in/emilie-schultz-977629142/'}
          target={'_blank'}
        >
          {' '}
          <img src={linkedin} width="20" alt="" />
        </a>
        <a href={'https://www.behance.net/emilieschultz'} target={'_blank'}>
          <img src={behance} width="20" alt="" />
        </a>
        <a href={'https://dribbble.com/Balnibarbe'} target={'_blank'}>
          <img src={dribbble} width="20" alt="" />
        </a>
        {/*<img src={instagram} width="20" alt="" />*/}
      </div>
    </aside>
  );
}

export default function Sidebar() {
  return (
    <div style={{ position: 'relative' }}>
      <SidebarDesktop />
      <SidebarMobile />
    </div>
  );
}
