import React, { useState, useEffect } from 'react';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';
import styles from './style.module.scss';
import WorkImg from '../../components/work-img';
import { Tab, Nav, Modal } from 'react-bootstrap';
import { client } from '../../lib/contentful';

function getImageUrlsFromWork(work) {
  console.log(work);
  if (!work.fields || !work.fields.medias) {
    return [];
  }

  const imagesURLS = work.fields.medias.map((media) => {
    if (!media) {
      return null;
    }

    return {
      small: `${media.fields.file.url}?w=200&h=200`,
      large: `${media.fields.file.url}?w=1000&h=1000`,
      title: 'test',
    };
  });

  return imagesURLS.filter((x) => x);
}

function Portfolio() {
  const [isModalOpen, setModalState] = useState(false);
  const [currentImage, setImage] = useState(null);

  const [data, setData] = useState(null);

  useEffect(() => {
    client
      .getEntries({
        content_type: 'work',
        include: 1,
        order: 'sys.createdAt',
      })
      .then((entries) => setData(entries))
      .catch((err) => console.log(err));
  }, []);

  if (!data || !data.items) {
    return null;
  }

  return (
    <div id="work" className={styles.portfolio}>
      <div className="row">
        <div className="col-12">
          <Tab.Container id="left-tabs-example" defaultActiveKey="0">
            <Nav className="justify-content-center">
              {data.items.map((work, i) => (
                <Nav.Item key={`nav-item-${work.sys.id}`}>
                  <Nav.Link eventKey={i}>{work.fields.title}</Nav.Link>
                </Nav.Item>
              ))}
            </Nav>
            <Tab.Content className="mt-5">
              {data.items.map((work, i) => (
                <Tab.Pane eventKey={i} key={`tab-pane-${work.sys.id}`}>
                  <div className="row">
                    {!!work.fields.description && (
                      <div className={styles.workDescription}>
                        {documentToReactComponents(work.fields.description)}
                      </div>
                    )}
                    {getImageUrlsFromWork(work).map((image) => (
                      <div
                        className="col-4 mb-4"
                        key={`small-image-${image.small}`}
                        onClick={() => {
                          setModalState(true);
                          setImage(image);
                        }}
                      >
                        <WorkImg url={image.small} />
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
            <img src={currentImage.large} alt="" style={{ width: '100%' }} />
          )}
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Portfolio;
