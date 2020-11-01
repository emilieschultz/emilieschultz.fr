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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In sodales
          arcu risus, placerat pellentesque nunc ultrices nec. Aliquam accumsan
          odio id nibh lobortis, non gravida risus lobortis. Nulla sed euismod
          nibh. Donec aliquam hendrerit semper. Ut venenatis quam lacus, a
          bibendum metus interdum at. Suspendisse luctus convallis metus, quis
          tincidunt ex tincidunt vel. Curabitur molestie ut ligula nec tempor.
          Nullam vel feugiat diam. Ut rutrum, nisi ut volutpat fermentum, odio
          magna hendrerit lorem, id consequat tellus enim sit amet risus. Sed
          sit amet fringilla lacus, sit amet finibus nisl.
        </p>
        <p className={styles.p}>
          Aenean pharetra nulla sed tortor varius venenatis. Suspendisse dapibus
          pellentesque mi non egestas. Cras volutpat convallis volutpat. Nam
          varius id tortor quis finibus. Cras consectetur orci aliquam sapien
          gravida tristique. Maecenas nisi nunc, lobortis sed lorem eu, tempor
          dictum odio. Proin ac sem at tortor congue mollis non vitae est.
          Phasellus et nulla nec sem dictum volutpat. Integer turpis sem,
          lobortis id mi ac, vehicula interdum metus. Donec eros velit,
          tincidunt vitae risus in, placerat fermentum nunc. Sed et odio ac
          nulla ornare fringilla. Integer elementum, sem sed varius mattis, nibh
          ante venenatis justo, sed sodales eros enim fringilla mi. Fusce
          fringilla gravida luctus. Fusce egestas congue ligula vel fermentum.
          Nulla mollis sapien mauris, vehicula vulputate quam blandit sit amet.
        </p>
        <p className={styles.p}>
          Cras sit amet nisi in odio porttitor consectetur. Cras non fringilla
          magna. Curabitur luctus porttitor congue. Vestibulum dapibus eleifend
          nulla vel congue. Vivamus nisl purus, eleifend sit amet blandit non,
          facilisis at purus. Nam pellentesque interdum vulputate. Nulla
          efficitur euismod dolor, ac posuere lorem.
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
