import Banner from '../../components/Banner/Banner';
import aboutImg from '../../../public/images/about.png';
import Collapse from '../../components/Collapse/Collapse';

import styles from './About.module.scss';
function About() {
  return (
    <section className="container ">
      <Banner srcImg={aboutImg} />
      <main className={styles.main}>
        {}
        <Collapse title={'Fiabilité'} />
        <Collapse title={'Respect'} />
        <Collapse title={'Service'} />
        <Collapse title={'Sécurité'} />
      </main>
    </section>
  );
}

export default About;
