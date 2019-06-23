import React from 'react';
import styles from './style.module.scss';
import SectionTitle from '../section-title';
import {
  IoIosCall,
  IoIosMail,
  IoLogoFacebook,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoLogoTwitter
} from 'react-icons/io';

function Contact() {
  return (
    <div id="contact" className="bg-dark pb-6">
      <SectionTitle
        name="Contact"
        iconName="phone"
        className="pt-5 mb-6 text-light"
      />
      <div className="container justify-content-center align-items-center flex-column d-flex">
        <div className="">
          <div className="row d-flex align-items-center">
            <IoIosCall size={50} color="#E8532B" />
            <a href="tel:06.89.81.85.56" className="m-0 ml-4 text-light">
              06.89.81.85.56
            </a>
          </div>
          <div className="row d-flex align-items-center">
            <IoIosMail size={50} color="#E8532B" />
            <a
              href="mailto:mail@emilieschultz.fr"
              className="m-0 ml-4 text-light"
            >
              mail@emilieschultz.fr
            </a>
          </div>

          <div className="d-flex align-items-center justify-content-center my-4">
            <a
              href="https://assets.ctfassets.net/rnvnzobusat8/10q1omnpUELJWf9XyedKGh/7fc5842ed1fa33476cf56b3f0bedc558/cv-emilie-schultz-2019.pdf"
              className={styles.downloadLink}
              target="_blank"
            >
              Téléchargez mon CV
            </a>
          </div>

          <div className="row d-flex justify-content-between">
            <a
              className={styles.iologo}
              href="https://www.facebook.com/emilie.schultz.92"
              target="_blank"
            >
              <IoLogoFacebook size={30} />
            </a>
            <a
              className={styles.iologo}
              href="https://www.instagram.com/balnibarbe/"
              target="_blank"
            >
              <IoLogoInstagram size={30} />
            </a>
            <a
              className={styles.iologo}
              href="https://www.linkedin.com/in/emilie-schultz-977629142/"
              target="_blank"
            >
              <IoLogoLinkedin size={30} />
            </a>
            <a
              className={styles.iologo}
              href="https://twitter.com/balnibarbe"
              target="_blank"
            >
              <IoLogoTwitter size={30} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
