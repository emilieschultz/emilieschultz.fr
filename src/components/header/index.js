import React from 'react';
import styles from './style.module.scss';
import { bounce } from 'react-animations';
import Radium, { StyleRoot } from 'radium';

import profilPic from './header-pic.png';
import { Nav, Navbar } from 'react-bootstrap';
import {
  IoMdHome,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoTwitter,
  IoLogoLinkedin
} from 'react-icons/io';

const stylesAnim = {
  title: {
    animation: 'x 1s',
    animationName: Radium.keyframes(bounce, 'bounce')
  }
};

function Header() {
  const screenHeight =
    window.innerHeight ||
    document.documentElement.clientHeight ||
    document.body.clientHeight;

  const screenWidth =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  const height = screenWidth >= 768 ? screenHeight : 'auto';

  return (
    <StyleRoot>
      <div
        className="Header bg-dark d-flex flex-column"
        style={{ height: height }}
      >
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
          fixed="top"
        >
          <div className="container">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="ml-auto" activeKey="/home">
                <Nav.Link href="#home">
                  <IoMdHome className={styles.nav} size={20} />
                </Nav.Link>
                <Nav.Link className={styles.nav} eventKey={2} href="#about">
                  À propos
                </Nav.Link>
                <Nav.Link className={styles.nav} eventKey={2} href="#work">
                  Réalisations
                </Nav.Link>
                <Nav.Link className={styles.nav} eventKey={2} href="#studies">
                  Formations
                </Nav.Link>
                <Nav.Link className={styles.nav} eventKey={2} href="#skills">
                  Compétences
                </Nav.Link>
                <Nav.Link className={styles.nav} eventKey={2} href="#contact">
                  Contact
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </div>
        </Navbar>

        <div id="home" className="container flex-grow-1">
          <div className="row h-100">
            <div className="col-md d-flex flex-column justify-content-center pt-8">
              <div className="test" style={stylesAnim.title}>
                <h1 className={styles.title}>Emilie Schultz</h1>
              </div>

              <p className="text-white">
                Je suis une étudiante aspirant à devenir webdesigner.
              </p>
              <p className="text-white">Bienvenue sur mon site !</p>
            </div>

            <div className="col-md d-flex row align-self-end">
              <img height={600} src={profilPic} className={styles.pic} alt="" />
            </div>

            <div className="col-md d-sm-flex align-items-center justify-content-around flex-column">
              <div></div>
              <div className="d-none d-sm-block">
                <h2 className={styles.subtitle}>Webdesign</h2>
                <h2 className={styles.subtitle}>Graphisme</h2>
              </div>
              <div className="d-none d-sm-block ">
                <a
                  className={styles.logo}
                  href="https://www.facebook.com/emilie.schultz.92"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoLogoFacebook size={25} />
                </a>
                <a
                  className={styles.logo}
                  href="https://www.instagram.com/balnibarbe/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoLogoInstagram size={25} />
                </a>
                <a
                  className={styles.logo}
                  href="https://www.linkedin.com/in/emilie-schultz-977629142/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoLogoLinkedin size={25} />
                </a>
                <a
                  className={styles.logo}
                  href="https://twitter.com/balnibarbe"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <IoLogoTwitter size={25} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </StyleRoot>
  );
}
export default Header;
