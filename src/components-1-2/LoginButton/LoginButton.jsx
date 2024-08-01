import Button from "../Button/Button";
import css from './LoginButton.module.css';

const LoginButton = ({children }) => { 
    return <Button variant={css.login}>{children}</Button>
}

export default LoginButton