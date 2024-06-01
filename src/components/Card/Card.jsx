import styles from './Card.module.scss';
import PropTypes from 'prop-types';

function Card({ title }) {
  return (
    <div className={styles.card}>
      <p className={styles.card__title}>{title}</p>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string,
};

export default Card;
