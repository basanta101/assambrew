import styles from "./HomePageGrid.module.css";
import { IMAGES, TEXT } from "../../../../ABAssets";

const gridItems = [
  { img: IMAGES.GRID_IMG_1, title: TEXT.FIRST_GRID_TEXT, key: "gridItem1", alt: "man feeding buffaloes" },
  { img: IMAGES.GRID_IMG_2, title: TEXT.SECOND_GRID_TEXT, key: "gridItem2", alt: "men riding elephants" },
  { img: IMAGES.GRID_IMG_3, title: TEXT.THIRD_GRID_TEXT, key: "gridItem3", alt: "woman plucking fresh tea leaves" },
];


// TODO: try with css grid.
const HomePageGrid = () => {
  return (
    <div className={styles.gridWrapper}>
      {gridItems.map((gridItem) => (
        <div className={styles.gridItem} key={gridItem.key}>
          <img
            className={styles.gridImg}
            src={gridItem.img}
            alt={gridItem.alt}
          />
          <p className={styles.gridTitle}>{gridItem.title}</p>
        </div>
      ))}
    </div>
  );
};

export default HomePageGrid;
