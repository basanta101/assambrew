import ClassNames from "ClassNames";
import styles from "./Input.module.css";

const Input = ({ classes = {}, ...restProps}) => {

  // const 
  return (
    <input
      {...restProps}
      className={ClassNames(classes?.wrapper, styles.wrapper,)}
    />
  );
};

export default Input;
