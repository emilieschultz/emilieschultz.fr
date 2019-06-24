import React from 'react';
import SectionTitle from '../section-title';

function About() {
  return (
    <div id="about" className="container-fluid">
      <div className="row">
        <div className="col-md bg-primary  p-5 text-center d-flex flex-column justify-content-center align-items-center">
          <SectionTitle name="À propos" iconName="mains" />
        </div>
        <div className="col-md bg-secondary text-light text-justify p-5">
          <p>
            Je m’appelle Emilie. Je suis étudiante en DUT Métiers du Multimédia
            et de l’Internet à l’IUT de Haguenau. Mon objectif professionnel est
            de devenir webdesigner.
          </p>

          <p>
            Il m’arrive donc de créer des sites, des webdesign mais également
            des logotypes et des illustrations.
          </p>

          <p>
            J’ai des connaissances en ergonomie et UX/UI Design. Par ailleurs,
            je maîtrise les langages HTML et CSS, la suite Adobe et WordPress.
          </p>

          <p>Finalement, j’ai des notions en SQL et en PHP.</p>
        </div>
      </div>
    </div>
  );
}

export default About;
