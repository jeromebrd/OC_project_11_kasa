import { NavLink } from 'react-router-dom';
import styles from './Card.module.scss';
import PropTypes from 'prop-types';

function Card({ title, id }) {
  return (
    <NavLink to={`/housing/${id}`} className={styles.card}>
      <span className={styles.card__title}>{title}</span>
    </NavLink>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
};

export default Card;
