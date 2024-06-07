import { useParams } from 'react-router-dom';
import { data } from '../../../../data/data';
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
  let dataHousing;
  data.map((d) => {
    const id = d.id;
    if (id == params.id) {
      dataHousing = d;
    }
  });
  const {
    // cover,
    title,
    location,
    host,
    tags,
    rating,
    description,
    equipments,
    pictures,
  } = dataHousing;
  console.log(dataHousing);

  return (
    <section className={`${styles.housing} container`}>
      <Slideshow slides={pictures} />
      {dataHousing && (
        <>
          <div className={styles.housing__header}>
            <div className={styles.housing__text}>
              <h1>{title}</h1>
              <h2>{location}</h2>
              <ul className={styles.ctn__tags}>
                {tags.map((tag, i) => (
                  <Tag tag={tag} key={i} />
                ))}
              </ul>
            </div>
            <div className={styles.housing__host}>
              <div className={styles.profil}>
                <p>{host.name}</p>
                <img src={host.picture} />
              </div>
              <div className={styles.housing__rating}>
                <ul className={styles.ctn__stars}>
                  {rating >= 1 ? (
                    <Star color={'primary'} />
                  ) : (
                    <Star color={'light-grey'} />
                  )}
                  {rating >= 2 ? (
                    <Star color={'primary'} />
                  ) : (
                    <Star color={'light-grey'} />
                  )}
                  {rating >= 3 ? (
                    <Star color={'primary'} />
                  ) : (
                    <Star color={'light-grey'} />
                  )}
                  {rating >= 4 ? (
                    <Star color={'primary'} />
                  ) : (
                    <Star color={'light-grey'} />
                  )}
                  {rating == 5 ? (
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
              data={description}
              className="bradius__10"
            />
            <Collapse
              title={'Equipements'}
              data={equipments}
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
