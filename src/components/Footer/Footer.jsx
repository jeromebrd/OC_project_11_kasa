import logo from '../../assets/images/logo-white.png';
import styles from './Footer.module.scss';

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__img}>
        <img src={logo} alt="logo Kasa" />
      </div>
      <p className={styles.footer__text}>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;
