import React from 'react';
import styles from './style.module.scss';
import image from './icones.svg';
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';

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
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">More deets</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              Dank memes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>

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
