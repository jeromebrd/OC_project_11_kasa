import styles from './NotFound.module.scss';
import { Link } from 'react-router-dom';
function NotFound() {
  return (
    <main className={`${styles.main} container`}>
      <h1>404</h1>
      <h2>Oups! La page que vous demandez n&apos;existe pas.</h2>
      <Link to={'/'}>Retourner sur la page d&apos;accueil</Link>
    </main>
  );
}

export default NotFound;
