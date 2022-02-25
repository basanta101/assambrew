import styles from './Button.module.css';
import ClassNames from 'classnames';


const Button = (props) => {

    const { classes : { wrapper = '', }  = {}} = props;
    return <button  className={ClassNames(wrapper, styles.wrapper)} {...props} />
}


export default Button;