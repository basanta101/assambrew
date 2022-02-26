import { Carousel } from "../../../../ABComponents";
import styles from "./HomePageCarouselSection.module.css";

export default function HomePageCarouselSection() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.carouselWrapper}>
        <Carousel />
      </div>
      <div className={styles.carouselDesc}>
        <h3>
          We are the tea community clustering tea connoisseurs, mavens,
          professionals, and enthusiasts to connect, learn, share ideas, and
          democratize the Assam tea.
        </h3>

        <h3>
          Continuing the legacy, the saga of strong and rich tasting tea grown
          in the heart of Assam. Have been serving as the breakfast
          accompaniment for millions of people nearly around 200 years,
          conquering the world of beverage through it’s malty flavour and
          briskness. Since freshness, as you know, is a habit you can’t easily
          get rid of.
        </h3>
      </div>
    </div>
  );
}
