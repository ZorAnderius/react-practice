import { useState } from "react"

export const ControlForm = () => {
    const [loginForm, setLoginForm] = useState({
        login: "",
        password: ""
    })

    const handleAuth = (e) => {
        const { name, value } = e.target;
        setLoginForm(prevState => ({...prevState, [name]: value}))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(loginForm);
    }

    return <form onSubmit={handleSubmit}>
        <input type="text" name="login" value={loginForm.login} onChange={handleAuth} />
        <input type="text" name="password" value={loginForm.password} onChange={handleAuth} />
        <button type="submit">Log in</button>
    </form>
}