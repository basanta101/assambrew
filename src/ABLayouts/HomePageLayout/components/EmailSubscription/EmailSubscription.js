import { Input, Button } from "../../../../ABComponents";

import styles from "./EmailSubscription.module.css";

const EMAIL_SUBSCRIPTION_HEADER = "STAY INFORMED WITH OUR NEWSLETTER";
const EMAIL_SUBSCRIPTION_INPUT_PLACEHOLDER = "ENTER YOUR EMAIL";
const BUTTON_TEXT = "SUBSCRIBE";

const EmailSubscription = () => {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.header}>{EMAIL_SUBSCRIPTION_HEADER}</h3>
      <div className={styles.subs}><Input
        classes={{ 'wrapper': styles.input }}
        placeholder={EMAIL_SUBSCRIPTION_INPUT_PLACEHOLDER}
      />
      <Button classes={{ wrapper: styles.button}}children={BUTTON_TEXT} /></div>

    </div>
  );
};

export default EmailSubscription;
