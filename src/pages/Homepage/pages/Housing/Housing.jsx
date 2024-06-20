import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import styles from './Housing.module.scss';
import Slideshow from '../../../../components/Slideshow/Slideshow';
import Collapse from '../../../../components/Collapse/Collapse';

function Tag({ tag }) {
  return <li className={styles.housing__tag}>{tag}</li>;
}

function Star({ color }) {
  return (
    <li className={styles.housing__rate}>
      <i className={`fa-solid fa-star ${color}`}></i>
    </li>
  );
}

function Housing() {
  const params = useParams();
  const [data, setData] = useState([]);
  const [dataHousing, setDataHousing] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch('/data.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Response was not ok: ' + response.statusText);
        }
        return response.json();
      })
      .then((jsonData) => {
        setData(jsonData);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (data.length > 0) {
      const housing = data.find((d) => d.id === params.id);
      setDataHousing(housing);
    }
  }, [data, params.id]);
  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <section className={`${styles.housing} container`}>
      {dataHousing && (
        <>
          <Slideshow slides={dataHousing.pictures} />
          <div className={styles.housing__header}>
            <div className={styles.housing__text}>
              <h1>{dataHousing.title}</h1>
              <h2>{dataHousing.location}</h2>
              <ul className={styles.ctn__tags}>
                {dataHousing.tags.map((tag, i) => (
                  <Tag tag={tag} key={i} />
                ))}
              </ul>
            </div>
            <div className={styles.housing__host}>
              <div className={styles.profil}>
                <p>{dataHousing.host.name}</p>
                <img src={dataHousing.host.picture} />
              </div>
              <div className={styles.housing__rating}>
                <ul className={styles.ctn__stars}>
                  {dataHousing.rating >= 1 ? (
                    <Star color={'primary'} />
                  ) : (
                    <Star color={'light-grey'} />
                  )}
                  {dataHousing.rating >= 2 ? (
                    <Star color={'primary'} />
                  ) : (
                    <Star color={'light-grey'} />
                  )}
                  {dataHousing.rating >= 3 ? (
                    <Star color={'primary'} />
                  ) : (
                    <Star color={'light-grey'} />
                  )}
                  {dataHousing.rating >= 4 ? (
                    <Star color={'primary'} />
                  ) : (
                    <Star color={'light-grey'} />
                  )}
                  {dataHousing.rating == 5 ? (
                    <Star color={'primary'} />
                  ) : (
                    <Star color={'light-grey'} />
                  )}
                </ul>
              </div>
            </div>
          </div>
          <div></div>
          <div className={styles.ctn__collapse}>
            <Collapse
              title={'Description'}
              data={dataHousing.description}
              className="bradius__10"
            />
            <Collapse
              title={'Equipements'}
              data={dataHousing.equipments}
              className="bradius__10"
            />
          </div>
        </>
      )}
    </section>
  );
}

Tag.propTypes = {
  tag: PropTypes.array,
};

Star.propTypes = {
  color: PropTypes.string,
};

export default Housing;
