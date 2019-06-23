import React from 'react';
import styles from './style.module.scss';
import image from './icones.svg';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { IoMdHome } from 'react-icons/io';

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
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
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

          <div className="col-md d-flex align-items-center justify-content-center">
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
