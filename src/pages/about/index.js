import React from 'react';
import Content from '../../layout/content';
import styles from './style.module.scss';

import profilImg from './profil-pic.png';

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
          Vestibulum at nisl vel leo vestibulum bibendum. Nunc tempus laoreet
          eros, sed consequat augue vulputate non. Phasellus nec posuere purus,
          ac consectetur mi. Aenean vel posuere libero. Etiam sit amet justo ac
          magna rhoncus consequat. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Pellentesque volutpat turpis risus, at porttitor
          tortor porttitor et. Duis nec nisl tincidunt, fermentum ex ac,
          malesuada mauris. Fusce nec nunc ut nulla rutrum efficitur. Fusce nec
          maximus turpis. Aenean pharetra eu ante id faucibus. Duis lobortis,
          sem vitae ullamcorper consequat, elit quam dapibus urna, eget mollis
          ipsum diam ac mauris. Integer at dui arcu. Nam placerat, tellus a
          accumsan fermentum, ex neque tincidunt est, vitae vestibulum mauris
          tortor sagittis tellus. Quisque at nibh tempus, tincidunt lacus vitae,
          vestibulum eros.
        </p>
        <p className={styles.p}>
          Pellentesque id leo commodo, aliquam massa quis, sagittis ligula.
          Proin tincidunt sem mauris. Vestibulum eget lacus rutrum, finibus
          lectus vitae, tristique quam. Ut vitae dui viverra, posuere urna ac,
          ornare mauris. Maecenas fermentum non purus eget volutpat. Cras magna
          lectus, volutpat sed libero sit amet, suscipit mattis risus. Donec
          congue condimentum neque, a posuere mauris. Maecenas rutrum eleifend
          sem. Etiam gravida ipsum orci, id viverra libero vestibulum ut. Nam
          egestas nibh et dui congue sollicitudin. Integer ac porttitor felis.
        </p>
      </div>
      <aside className={styles.asideRight}></aside>
    </Content>
  );
}
