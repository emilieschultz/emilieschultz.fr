import React from 'react';
import './style.css';

function Header() {
  return (
    <div className="Header bg-dark">
      <nav>NAVBAR</nav>
      <div className="container">
        <div className="row">
          <div className="col-sm">
            <h1 className="text-primary">Emilie Schultz</h1>
            <p className="text-white">
              Je suis une étudiante aspirant à devenir webdesigner.
            </p>
            <p className="text-white">Bienvenue sur mon site !</p>
          </div>

          <div className="col-sm">One of three columns</div>
          <div className="col-sm">One of three columns</div>
        </div>
      </div>
    </div>
  );
}

export default Header;
