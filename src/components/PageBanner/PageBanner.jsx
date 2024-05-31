import PropTypes from 'prop-types';
import styles from './PageBanner.module.scss';
function PageBanner({ srcImg, children }) {
  return (
    <div className={styles.banner}>
      <img src={srcImg} alt="image" />
      <div className={styles.banner__mask}>
        {children && <h2>{children}</h2>}
      </div>
    </div>
  );
}

// Validation des types de propriétés avec PropTypes
PageBanner.propTypes = {
  srcImg: PropTypes.string.isRequired, // Valider que srcImg est une chaîne de caractères (string) et qu'elle est requise
  children: PropTypes.string.isRequired,
};

export default PageBanner;
