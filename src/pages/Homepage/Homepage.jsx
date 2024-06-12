import Banner from '../../components/Banner/Banner';
import Card from '../../components/Card/Card';
import homepageImg from '../../../public/images/homepage.png';
import styles from './Homepage.module.scss';
import { data } from '../../data/data';

function Homepage() {
  return (
    <section className="home container height-100">
      <Banner srcImg={homepageImg}>Chez vous, partout et ailleurs</Banner>
      <main className={styles.main}>
        {data.map((d) => (
          <Card key={d.id} title={d.title} id={d.id} cover={d.cover} />
        ))}
      </main>
    </section>
  );
}

export default Homepage;
