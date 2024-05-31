import PageBanner from '../../components/PageBanner/PageBanner';
import aboutImg from '../../../public/images/about.png';

function About() {
  return (
    <section className="container height-100">
      <PageBanner srcImg={aboutImg} />
      <h1>About</h1>
    </section>
  );
}

export default About;
