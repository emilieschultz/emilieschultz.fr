import React from 'react';
import styles from './style.module.scss';
import image from './icones.svg';

function Header() {
  const screenHeight =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight;

  return (
    <div
      className="Header bg-dark d-flex flex-column"
      style={{ height: screenHeight }}
    >
      <nav>NAVBAR</nav>
      <div className="container flex-grow-1">
        <div className="row h-100">
          <div className="col-md d-flex flex-column justify-content-end pb-8">
            <h1 className={styles.title}>Emilie Schultz</h1>
            <p className="text-white">
              Je suis une étudiante aspirant à devenir webdesigner.
            </p>
            <p className="text-white">Bienvenue sur mon site !</p>
          </div>

          <div className="col-md d-flex align-items-center">
            <img className="w-100" src={image} alt="" />
          </div>

          <div className="col-md d-flex align-items-center">
            <div>
              <h2 className={styles.subtitle}>Webdesign</h2>
              <h2 className={styles.subtitle}>Graphisme</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
