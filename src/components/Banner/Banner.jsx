import PropTypes from 'prop-types';
import styles from './Banner.module.scss';
function Banner({ srcImg, children }) {
  return (
    <div className={styles.banner}>
      <img src={srcImg} alt="image" />
      <div className={styles.banner__mask}>
        {children && <h1>{children}</h1>}
      </div>
    </div>
  );
}

// Validation des types de propriétés avec PropTypes
Banner.propTypes = {
  srcImg: PropTypes.string.isRequired, // Valider que srcImg est une chaîne de caractères (string) et qu'elle est requise
  children: PropTypes.string.isRequired,
};

export default Banner;
