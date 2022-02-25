import styles from "./Footer.module.css";
import { IMAGES } from "../../ABAssets";

export default function Footer() {
  return (
    <>
      <section className={styles.projectContact}>
        <h3 className={styles.projectHeader}>
          Want to discuss your new project?
        </h3>
        <div>
          <a href="mailto:assambrew@gmail.com" className={styles.contactUsBtn}>
            LET’S TALK
          </a>
        </div>
      </section>
      <section className={styles.brandInfo}>
        <img
          src={IMAGES.BRAND_LOGO}
          alt="Assam Brew Logo"
          className={styles.logo}
        />
        <a className={styles.brandCopyright}>© ASSAMBREW 2021</a>
        <span className={styles.brandGesture}>
          Made with love for great people.
        </span>
      </section>
    </>
  );
}
