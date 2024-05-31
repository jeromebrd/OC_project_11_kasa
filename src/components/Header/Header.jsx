import { NavLink } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import styles from './Header.module.scss';
export default function Header() {
  return (
    <header className={`container ${styles.header}`}>
      <nav>
        <div className={styles.logo}>
          <img src={logo} alt="logo Kasa" />
        </div>
        <ul>
          <li>
            <NavLink
              to="/"
              className={({ isActive, isPending, isTransitioning }) =>
                [
                  isPending ? 'pending' : '',
                  isActive ? 'active' : '',
                  isTransitioning ? 'transitioning' : '',
                ].join(' ')
              }
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive, isPending, isTransitioning }) =>
                [
                  isPending ? 'pending' : '',
                  isActive ? 'active' : '',
                  isTransitioning ? 'transitioning' : '',
                ].join(' ')
              }
            >
              À Propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
