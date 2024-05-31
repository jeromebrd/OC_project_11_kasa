import PageBanner from '../../components/PageBanner/PageBanner';
import homepageImg from '../../../public/images/homepage.png';
function Homepage() {
  return (
    <section className="home container height-100">
      <PageBanner srcImg={homepageImg}>
        Chez vous, partout et ailleurs
      </PageBanner>
      <main></main>
    </section>
  );
}

export default Homepage;
