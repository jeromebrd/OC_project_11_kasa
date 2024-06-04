import Banner from '../../components/Banner/Banner';
import aboutImg from '../../../public/images/about.png';
import Collapse from '../../components/Collapse/Collapse';
import { textAboutPage } from '../../data/text';

import styles from './About.module.scss';
const { fiabilite, respect, service, securite } = textAboutPage;
function About() {
  return (
    <section className="container ">
      <Banner srcImg={aboutImg} />
      <main className={styles.main}>
        {}
        <Collapse title={'Fiabilité'} className="bradius__5" data={fiabilite} />
        <Collapse title={'Respect'} className="bradius__5" data={respect} />
        <Collapse title={'Service'} className="bradius__5" data={service} />
        <Collapse title={'Sécurité'} className="bradius__5" data={securite} />
      </main>
    </section>
  );
}

export default About;
