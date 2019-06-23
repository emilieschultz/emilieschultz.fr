import React, { useState, useEffect } from 'react';
import styles from './style.module.scss';
import SectionTitle from '../section-title';
import WorkImg from '../work-img';
import { Tab, Nav } from 'react-bootstrap';
import { client } from '../../lib/contentful';

function Work() {
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
    <div className="container">
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
                    {work.fields &&
                      work.fields.pictures &&
                      work.fields.pictures.map(picture => {
                        const image =
                          picture.fields.small || picture.fields.large;
                        if (!image) {
                          return null;
                        }
                        return (
                          <div className="col-4 mb-4" key={image.sys.id}>
                            <WorkImg url={image.fields.file.url} />
                          </div>
                        );
                      })}
                  </div>
                </Tab.Pane>
              ))}
            </Tab.Content>
          </Tab.Container>
        </div>
      </div>
    </div>
  );
}

export default Work;
