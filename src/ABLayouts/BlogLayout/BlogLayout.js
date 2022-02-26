import classNames from "classnames";
import styles from "./BlogLayout.module.css";
import { IMAGES } from "../../ABAssets";

const BLOG1 = {
  top: {
    blockQuote1: `The tropical climate contributes to its unique malty taste and the briskness on the brew.`,
    blogDate: "10/3/93",
    h1: "What makes Assam Tea unique?",
    h2: "The conducive environment:",
    h3: "The climate:",
    topParallaxImg: IMAGES.SLIDE_IMG_1,
    p1: `Assam tea is made from Camellia sinensis var. assamica, an indigenous variety of tea grown in Assam.
  Assam tea is worldwide famous full-bodied tea with robust flavour and briskness produced in the state of Assam in India. It is mainly sold as breakfast tea, known for its body, briskness, malty flavour and strong bright colour.`,
    p2: `This northeastern state of India is encompassed by the northern Himalaya,
  the Brahmaputra plains and the Deccan plateau resulting it to be one of
  the richest biodiversity zones in the world. The valley is fertile and
  offers rich loamy soil to the region, creating the perfect natural setting
  for the production of tea. The malty flavour is suited to the tropical
  weather.`,
    p3: `Assam’s tropical monsoon climate makes a perfect weather environment for a tea production. The daytime temperature rises to about 36 °C (96.8 °F), creating greenhouse-like conditions of extreme humidity and heat. This tropical climate contributes to Assam’s unique malty taste, a feature for which this tea is well known.`,
  },
  mid: {
    blockQuote2: `Assam’s tropical monsoon climate makes a perfect weather environment for a tea production.`,
  },

  bottom: {
    blockQuote3: `Assam Tea is harvested twice a year. The second harvest is more expensive because of its rich quality`,
  },
};

export default function BlogLayout(props) {
  return (
    <section className={styles.wrapper}>
      <div
        style={{ backgroundImage: `url(${IMAGES.SLIDE_IMG_1})` }}
        className={classNames(styles.parallax, styles.largeParallax)}
      >
        <div className={styles.largeParallaxChild}>
          <div>
            <blockquote cite="http://www.worldwildlife.org/who/index.html">
              For 50 years, WWF has been protecting the future of nature. The
              world's leading conservation organization, WWF works in 100
              countries and is supported by 1.2 million members in the United
              States and close to 5 million globally.
            </blockquote>
          </div>
        </div>
      </div>
      <p>blog here</p>
      <div
        style={{ height: "1000px", backgroundColor: "red", fontSize: "36px" }}
      >
        Scroll Up and Down this page to see the parallax scrolling effect. This
        div is just here to enable scrolling. Tip: Try to remove the
        background-attachment property to remove the scrolling effect.
      </div>
      <div
        style={{ backgroundImage: `url(${IMAGES.SLIDE_IMG_2})` }}
        className={classNames(styles.parallax, styles.smallParallax)}
      >
        <div className={styles.smallParallaxChild}></div>
      </div>
      <div
        style={{ height: "1000px", backgroundColor: "red", fontSize: "36px" }}
      >
        Scroll Up and Down this page to see the parallax scrolling effect. This
        div is just here to enable scrolling. Tip: Try to remove the
        background-attachment property to remove the scrolling effect.
      </div>
    </section>
  );
}
