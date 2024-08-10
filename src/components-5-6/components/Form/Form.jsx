import {useId} from 'react';

import styles from './Form.module.css'


export const Form = ({onLogin}) => {

    const loginId = useId();
    const passwordId = useId();

    const handleSubmit = (e) => {
        e.preventDefault();
        const { login, password } = e.target.elements;
        
        onLogin({
            login: login.value,
            password: password.value
        });

        e.target.reset();
    }

    return <form className={styles.form} onSubmit={handleSubmit}>
        <label htmlFor={loginId}>Login:</label>
        <input id={loginId} type="text" name="login"/>

        <label htmlFor={passwordId}>Password:</label>
        <input id={passwordId} type="password" name='password'/>

        <button type="submit">Log in</button>
    </form>
}