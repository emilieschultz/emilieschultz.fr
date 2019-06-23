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
    <div className="bg-dark pb-6">
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
            <a href="#" className={styles.downloadLink}>
              Téléchargez mon CV
            </a>
          </div>

          <div className="row d-flex justify-content-around">
            <IoLogoFacebook size={50} color="#fff" />
            <IoLogoInstagram size={50} color="#fff" />
            <IoLogoLinkedin size={50} color="#fff" />
            <IoLogoTwitter size={50} color="#fff" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
