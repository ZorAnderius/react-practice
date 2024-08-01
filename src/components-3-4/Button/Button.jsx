import styles from './Button.module.css'

const Button = ({ value, handle, children }) => {
    return <button className={styles.btn} onClick={handle}>{children}{value && value}</button>
}

export default Button;