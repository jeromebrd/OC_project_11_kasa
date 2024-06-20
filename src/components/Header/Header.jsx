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
              className={({ isActive }) => isActive && styles.active}
            >
              Accueil
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? styles.active : '')}
            >
              À Propos
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
