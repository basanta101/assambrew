import { useRef, useLayoutEffect, useEffect } from "react";
import ClassNames from 'classnames';
import styles from "./Navbar.module.css";

export default function Navbar() {
  const navRef = useRef();


  useEffect(() => {
    window.addEventListener("scroll", resizeHeaderOnScroll);

    return () => {
      window.removeEventListener("scroll", resizeHeaderOnScroll);
    };
  }, []);

  const resizeHeaderOnScroll = () => {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop;
    const shrinkOn = 10;
    const headerEl = navRef.current;

    if (distanceY > shrinkOn) {
      headerEl.classList.add(`${styles.smaller}`);
    } else {
      headerEl.classList.remove(`${styles.smaller}`);
    }
  };

  return (
    <nav className={styles.navWrapper} ref={(node) => (navRef.current = node)}>
      <div>LOGO</div>
      <div className={ClassNames(styles.talk, styles.linksTag)}>The Assam Tea legacy</div>
      <div className={styles.linksTag}>Tea Talks</div>
      <div className={styles.linksTag}>Survey</div>
      <div className={styles.linksTag}>Find Us</div>
    </nav>
  );
}

//TODO: refactor this to use ul, li tag elements.
//TODO: find better ways to optimise the animation.