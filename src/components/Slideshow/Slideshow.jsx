import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Slideshow.module.scss';
import arrowLeft from '../../assets/icons/arrow-left.svg';
import arrowRight from '../../assets/icons/arrow-right.svg';

function Slideshow({ slides }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };
  return (
    <div className={styles.slideshow}>
      <div>
        <input
          type="image"
          className={styles.btn__back}
          role="button"
          src={arrowLeft}
          onClick={goToPrevious}
        />
        <div className={styles.ctn__imgs}>
          <img src={slides[currentIndex]} alt="pictures" />
        </div>
        <input
          type="image"
          className={styles.btn__next}
          role="button"
          src={arrowRight}
          onClick={goToNext}
        />
        <span className={styles.counter}>{`${currentIndex + 1}/${
          slides.length
        }`}</span>
      </div>
    </div>
  );
}

Slideshow.propTypes = {
  slides: PropTypes.array,
};

export default Slideshow;
