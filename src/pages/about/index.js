import React from 'react';
import Content from '../../layout/content';
import styles from './style.module.scss';
import { Carousel } from 'react-bootstrap';
import profilImg from './profil-pic.png';
import otter from './otter.png';
import tournesol from './tournesol.png';

export default function About() {
  return (
    <Content>
      <div className={styles.about}>
        <h1 className={styles.title}>
          Je m’appelle Emilie, <br /> je suis designer web.
          <img src={profilImg} alt="" className={styles.profilImg} />
        </h1>

        <p className={styles.p}>
          Pour être plus précise, je suis <b>designer web</b> en alternance. Je
          me consacre à la fois à mes études et à ma vie professionnelle. Mon
          métier est de concevoir des <b>interfaces web et mobile</b>. Pour se
          faire, je me concentre sur l’<b>apparence</b> et le <b>style</b> ainsi
          qui sur l’<b>ergonomie</b>
          et le <b>parcours de l’utilisateur</b>. Mon but est que les écrans que
          je crée soient faciles et agréables à employer.
        </p>
        <p className={styles.p}>
          Un des aspect de mon métier est de faire des{' '}
          <b>recherches utilisateurs</b>. Avant de construire une{' '}
          <b>interface</b>, je me pose différentes questions ; À qui s’adresse
          l’interface que je suis en train de réaliser ? Est-ce que l’interface
          répond aux besoins et attentes de la cible ? L’
          <b>analyse du besoin</b> fait donc partie intégrante de la{' '}
          <b>conception d’interface</b>. Afin de comprendre l’utilisateur, je
          réalise des <b>personae</b> et des <b>ateliers de co-conception</b>{' '}
          avec les utilisateurs finaux. Mais il existe encore beaucoup d’autre
          manières, que j’ai hâte d’expérimenter, pour créer des{' '}
          <b>interfaces toujours plus cohérentes</b>.
        </p>
        <p className={styles.p}>
          Selon moi, pour obtenir un design réussi, il est important de
          <b>communiquer</b> avec son équipe, de savoir <b>être créatif</b> et
          de <b>tester</b>
          encore et encore afin d’obtenir un résultat satisfaisant car la
          solution n’arrive jamais du premier coup.
        </p>
        <p className={styles.p}>
          Je ne perds pas non plus de vue que le produit que je suis en train de
          designer et un <b>travail collectif</b>. La <b>communication</b> est
          donc indispensable car le livrable final est assurément élaboré par
          toute une <b>équipe</b>. Je reste donc proche du client, des chefs de
          projets, des commerciaux ainsi que des développeurs. L’objectif est
          que nous puissions <b>faire évoluer l’interface tous ensemble</b>.
        </p>
        <p className={styles.p}>
          Être <b>designer web</b>, c’est également concevoir une{' '}
          <b>identité graphique</b>
          qui corresponde à l’univers du client. Créer une{' '}
          <b>interface harmonieuse</b>
          qui soit en lien avec le secteur d’activité auquel elle appartient et
          sa cible. Pour être honnête, il s’agit de l’aspect de mon métier que
          je préfère car, avoir une bonne <b>identité visuelle</b> est un atout
          majeur pour le client. Elle traduit non seulement l’image et le
          caractère que l’on souhaite avoir auprès de sa cible mais elle est
          aussi indispensable si l’on souhaite{' '}
          <b>se différencier de la concurrence</b>. Il s’agit de laisser libre
          cours à sa créativité tout en restant cohérent avec l’atmosphère
          voulue par le client. Pour se faire, je suis en mesure de construire
          une <b>charte graphique</b> en réalisant des <b>logotypes</b>, en
          définissant les couleurs, en choisissant la typographie mais par
          ailleurs, j’aime réaliser des <b>illustrations</b> qui viennent
          égailler le
          <b>parcours de l’utilisateur</b>.
        </p>

        <p className={styles.p}>
          Finalement, j’aimerais continuer à exercer cette profession dans
          laquelle je me projette. J’ai à coeur d’en{' '}
          <b>apprendre davantage chaque jours</b> afin de pouvoir à l’avenir
          accéder à des postes avec de
          <b>nouvelles responsabilités</b>.
        </p>
      </div>
      <aside className={`${styles.asideRight} carousel-h-100`}>
        <Carousel className={styles.carousel}>
          <Carousel.Item>
            <div className={styles.carouselItem}>
              <img src={otter} alt="" className="d-block w-100" />
              <p className={styles.p}>
                Si j’étais un animal je serais une <b>loutre</b>. Symbole de
                l'énergie féminine, de l'<b>efficacité</b>, de la <b>joie</b> et
                du <b>partage</b>.
              </p>
            </div>
          </Carousel.Item>

          <Carousel.Item>
            <div className={styles.carouselItem}>
              <img src={tournesol} alt="" className="d-block w-100" />
              <p className={styles.p}>
                Si j’étais une fleur, je serais un <b>tournesol</b>. Symbole de{' '}
                <b>joie</b>, emprunt de <b>positivité</b>, toujours tourné vers
                le soleil.
              </p>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className={styles.carouselItem}>
              <img src={otter} alt="" className="d-block w-100" />
              <p className={styles.p}>
                Si j’étais un animal je serais une loutre. Symbole de l'énergie
                féminine, de l'<b>efficacité</b>, de la <b>joie</b> et du{' '}
                <b>partage</b>.
              </p>
            </div>
          </Carousel.Item>
        </Carousel>
      </aside>
    </Content>
  );
}
