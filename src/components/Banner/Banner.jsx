import PropTypes from 'prop-types';
import styles from './Banner.module.scss';
function Banner({ srcImg, children }) {
  const styleBgCoverImg = {
    backgroundImage: `url(${srcImg})`,
  };
  return (
    <div className={styles.banner} style={styleBgCoverImg}>
      {children && <h1>{children}</h1>}
    </div>
  );
}

// Validation des types de propriétés avec PropTypes
Banner.propTypes = {
  srcImg: PropTypes.string.isRequired, // Valider que srcImg est une chaîne de caractères (string) et qu'elle est requise
  children: PropTypes.string.isRequired,
};

export default Banner;
