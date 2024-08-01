import { useEffect } from "react";

const Modal = () => {
    useEffect(() => {
        const id = setInterval(() => {
            console.log(`Interval - ${Date.now()}`);
        }, 2000)
        return ()=> clearInterval(id);
    }, []);
    return <div>
        <h1>Modal</h1>
    </div>
}

export default Modal;