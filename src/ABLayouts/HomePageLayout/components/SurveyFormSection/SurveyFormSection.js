import { IMAGES } from "../../../../ABAssets";
import styles from "./SurveyFormSection.module.css";

export default function SurveyFormSection() {
  return (
    <div
      className={styles.surveyFormSectionWrapper}
      style={{ backgroundImage: `url(${IMAGES.SURVEY_BG})` }}
    >
      <div className={styles.surveyFormSectionInnerBlurWrapper}>
        <span className={styles.spanCircle1} />
        <span className={styles.spanCircle2} />
        <span className={styles.spanCircle3} />
        <div className={styles.surveyJsContent}>
          <a href="http://forms.gle/jtKRYNjQPTc8VNR27" target="_blank">
            Survey Form
          </a>
        </div>
      </div>
    </div>
  );
}
