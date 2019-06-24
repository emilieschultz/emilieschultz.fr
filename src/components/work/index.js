import React, { useState, useEffect } from 'react';
import SectionTitle from '../section-title';
import styles from './style.module.scss';
import WorkImg from '../work-img';
import { Tab, Nav, Modal } from 'react-bootstrap';
import { client } from '../../lib/contentful';

function getImageUrlsFromWork(work) {
  if (!work.fields || !work.fields.pictures) {
    return [];
  }

  const imagesURLS = work.fields.pictures.map(picture => {
    const imageSmall = picture.fields.small || picture.fields.large;
    const imageLarge = picture.fields.large || picture.fields.small;
    if (!imageSmall && !imageLarge) {
      return null;
    }

    return {
      small: imageSmall.fields,
      large: imageLarge.fields
    };
  });

  return imagesURLS.filter(x => x);
}

function Work() {
  const [isModalOpen, setModalState] = useState(false);
  const [currentImage, setImage] = useState(null);

  const [data, setData] = useState(null);

  useEffect(() => {
    client
      .getEntries({
        content_type: 'work',
        include: 1,
        order: 'sys.createdAt'
      })
      .then(entries => setData(entries))
      .catch(err => console.log(err));
  }, []);

  if (!data || !data.items) {
    return null;
  }

  return (
    <div id="work" className="container">
      <SectionTitle name="Réalisations" iconName="crayon" className="pt-5" />

      <div className="row">
        <div className="col-8 offset-2">
          <Tab.Container id="left-tabs-example" defaultActiveKey="0">
            <Nav className="justify-content-center">
              {data.items.map((work, i) => (
                <Nav.Item key={`nav-item-${work.sys.id}`}>
                  <Nav.Link eventKey={i}>{work.fields.title}</Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
            <Tab.Content className="mt-6">
              {data.items.map((work, i) => (
                <Tab.Pane eventKey={i} key={`tab-pane-${work.sys.id}`}>
                  <div className="row">
                    {getImageUrlsFromWork(work).map(image => (
                      <div
                        className="col-4 mb-4"
                        key={`small-image-${image.small.file.url}`}
                        onClick={() => {
                          setModalState(true);
                          setImage(image.large);
                        }}
                      >
                        <WorkImg url={image.small.file.url} />
                      </div>
                    ))}
                  </div>
                </Tab.Pane>
              ))}
            </Tab.Content>
          </Tab.Container>
        </div>
      </div>

      <Modal show={isModalOpen} onHide={() => setModalState(false)}>
        <Modal.Header closeButton>
          <Modal.Title>{currentImage && currentImage.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {currentImage && (
            <img src={currentImage.file.url} alt="" style={{ width: '100%' }} />
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Work;
