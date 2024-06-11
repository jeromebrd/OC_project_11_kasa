import { NavLink } from 'react-router-dom';
import styles from './Card.module.scss';
import PropTypes from 'prop-types';

function Card({ title, id, cover }) {
  const styleBgCoverImg = {
    backgroundImage: `var(--gradient-dark), url('${cover}')`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  };
  return (
    <NavLink
      to={`/housing/${id}`}
      className={styles.card}
      style={styleBgCoverImg}
    >
      <span className={styles.card__title}>{title}</span>
    </NavLink>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  id: PropTypes.string,
  cover: PropTypes.string,
};

export default Card;
