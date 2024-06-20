import { useEffect, useState } from 'react';
import Banner from '../../components/Banner/Banner';
import Card from '../../components/Card/Card';
import homepageImg from '../../../public/images/homepage.png';
import styles from './Homepage.module.scss';

function Homepage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch('/data.json')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Response was not ok ' + response.statusText);
        }
        return response.json();
      })
      .then((jsonData) => {
        setData(jsonData);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <p>Loading...</p>;
  }
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
