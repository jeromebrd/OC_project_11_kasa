import { useState } from 'react';
import PropTypes from 'prop-types';
import arrowDown from '../../assets/icons/arrow-down.svg';
import arrowUp from '../../assets/icons/arrow-up.svg';
import styles from './Collapse.module.scss';

function Collapse({ title, data }) {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const description = typeof data === 'string' && data;
  const equipments = typeof data === 'object' && data;
  console.log(description);
  console.log(equipments);
  return (
    <div className={styles.collapse} onClick={handleClick}>
      <div className={styles.collapse__bar}>
        <p className={styles.collapse__title}>{title}</p>
        <div
          className={`${styles.collapse__arrows} ${click ? '' : styles.active}`}
        >
          <img src={arrowUp} alt="icon" />
        </div>
        <div
          className={`${styles.collapse__arrows} ${click ? styles.active : ''}`}
        >
          <img src={arrowDown} alt="icon" />
        </div>
      </div>
      {click && (
        <div className={styles.collapse__menu}>
          {description && <p>{description}</p>}
          {equipments && (
            <ul>
              {equipments.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
            </ul>
          )}
        </div>
      )}
    </div>
  );
}

Collapse.propTypes = {
  title: PropTypes.string,
  data: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.string),
  ]),
};

export default Collapse;
