import { useState, useEffect, useRef } from "react";
import classNames from "classnames";
import styles from "./Carousel.module.css";
import { IMAGES } from "../../ABAssets";

// store in constants
const ARROW_CLICK_TYPE = {
  PREV: "PREVIOUS",
  NEXT: "NEXT",
};

const IMAGES_ARRAY = [
  { src: IMAGES.SLIDE_IMG_1, key: "img1" },
  { src: IMAGES.SLIDE_IMG_2, key: "img2" },
  { src: IMAGES.SLIDE_IMG_3, key: "img3" },
  { src: IMAGES.SLIDE_IMG_4, key: "img4" },
  { src: IMAGES.SLIDE_IMG_5, key: "img5" },
];

const SLIDE_CHANGE_INTERVAL = 2000;

const Carousel = () => {
  const [currentSlideIndex, updateCurrentSlideIndex] = useState(0);
  const trackRef = useRef();
  const timerRef = useRef();
  const propRef = useRef();
  propRef.current = { currentSlideIndex };

  const setSlideShowTimer = () => {
    timerRef.current = setInterval(() => {
      handleImgChange({ type: ARROW_CLICK_TYPE.NEXT });
    }, SLIDE_CHANGE_INTERVAL);
  };

  const loadImg = ({ index }) => {
    const slides = Array.from(trackRef.current.children);
    const nextSlide = slides[index];
    const amountToMove = nextSlide.offsetLeft;
    trackRef.current.style.transform = `translateX(-${amountToMove}px)`;
  };

  const handleImgChange = ({ type }) => {
    const { currentSlideIndex: currIndex } = propRef.current;
    let newSlideIndex = currIndex;
    if (type === ARROW_CLICK_TYPE.PREV) {
      // decrement the current slide index
      newSlideIndex = currIndex - 1;
      if (newSlideIndex < 0) {
        newSlideIndex = IMAGES_ARRAY.length - 1;
      }
      loadImg({ index: newSlideIndex });
    } else if (type === ARROW_CLICK_TYPE.NEXT) {
      // increment the current slide index
      newSlideIndex = currIndex + 1;
      if (newSlideIndex > IMAGES_ARRAY.length - 1) {
        newSlideIndex = 0;
      }
      loadImg({ index: newSlideIndex });
    }
    clearInterval(timerRef.current);
    updateCurrentSlideIndex(newSlideIndex);
    setSlideShowTimer();
  };

  useEffect(() => {
    const track = trackRef.current;
    const slides = Array.from(track.children);
    const slideWidth = slides[0].getBoundingClientRect().width;
    // arrange slides next to one another
    slides.forEach((slide, index) => {
      slide.style.left = slideWidth * index + "px";
    });

    console.log("xxx", trackRef.current, slideWidth);

    setSlideShowTimer();

    return () => {
      clearInterval(timerRef.current);
    };
  }, []);

  return (
    <>
      <div className={styles.carousel}>
        <button
          className={classNames(
            styles.carouselButton,
            styles.carouselButtonLeft
          )}
          onClick={() => handleImgChange({ type: ARROW_CLICK_TYPE.PREV })}
        >
          prev
        </button>

        <div className={styles.carouselTrackContainer}>
          <ul className={styles.carouselTrack} ref={trackRef}>
            {IMAGES_ARRAY.map((img) => {
              return (
                <li className={styles.carouselSlide} key={img.key}>
                  <img className={styles.carouselImage} src={img.src} />
                </li>
              );
            })}
          </ul>
        </div>

        <button
          className={classNames(
            styles.carouselButton,
            styles.carouselButtonRight
          )}
          onClick={() => handleImgChange({ type: ARROW_CLICK_TYPE.NEXT })}
        >
          next
        </button>

        <div className={styles.carouselNav}>
          <button className={styles.carouselIndicator}></button>
          <button className={styles.carouselIndicator}></button>
          <button className={styles.carouselIndicator}></button>
        </div>
      </div>
    </>
  );
};

export default Carousel;
// TODO: change the carousel nav into a dynamic component.
