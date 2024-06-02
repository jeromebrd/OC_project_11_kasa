import { useState } from 'react';
import PropTypes from 'prop-types';
import arrowDown from '../../assets/icons/arrow-down.svg';
import arrowUp from '../../assets/icons/arrow-up.svg';
import styles from './Collapse.module.scss';

function Collapse({ title, data, className }) {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const dataStr = typeof data === 'string' && data;
  const dataArr = typeof data === 'object' && data;

  return (
    <div className={styles.collapse} onClick={handleClick}>
      <div className={`${styles.collapse__bar} ${className}`}>
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
          {dataStr && <p>{dataStr}</p>}
          {dataArr && (
            <ul>
              {dataArr.map((data, index) => (
                <li key={index}>{data}</li>
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
  className: PropTypes.string,
};

export default Collapse;
