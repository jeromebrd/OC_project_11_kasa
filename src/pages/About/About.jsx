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
        <Collapse title={'Fiabilité'} className="bradius__5" />
        <Collapse title={'Respect'} className="bradius__5" />
        <Collapse title={'Service'} className="bradius__5" />
        <Collapse title={'Sécurité'} className="bradius__5" />
      </main>
    </section>
  );
}

export default About;
