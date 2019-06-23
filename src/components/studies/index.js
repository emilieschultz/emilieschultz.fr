import React from 'react';
import styles from './style.module.scss';
import SectionTitle from '../section-title';
import StudiesTimeline from '../studies-timeline';
import Timeline from 'react-dual-timeline';
import { StyleRoot } from 'radium';

function Studies() {
  return (
    <div className="bg-dark pb-6">
      <SectionTitle
        name="Formations"
        iconName="chapeau"
        className="pt-5 mb-6 text-light"
      />

      <StyleRoot>
        <Timeline activeColor={'#f3966d'} itemWidth={300} evenItemOffset={-20}>
          <StudiesTimeline
            date="2018"
            name="DUT Métiers du Multimédia et de l'Internet"
            school="Université de Strasbourg"
          />
          <StudiesTimeline
            date="2018"
            name="Droit Européen et International"
            school="Université de Nantes"
          />
          <StudiesTimeline
            date="2016 - 2017"
            name="Licence Administration publique"
            school="Université de Nantes"
          />
          <StudiesTimeline
            date="2014 - 2016"
            name="DUT Carrières Juridiques"
            school="Université de Haute-Alsace"
          />
          <StudiesTimeline
            date="2014"
            name="Baccalauréat Economique et Social"
            school="Lycée Alphonse Heinrich Haguenau"
          />
        </Timeline>
      </StyleRoot>
    </div>
  );
}

export default Studies;
