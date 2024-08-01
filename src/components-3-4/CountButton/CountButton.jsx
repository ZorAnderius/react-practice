import { useState } from "react";
import Button from "../Button/Button";

const CountButton = () => {
    const [click, setClick] = useState(0);
    const handlerClick = () => {
        setClick(click + 1);
    }
    return <Button value={click} handle={handlerClick}>Current:</Button>
}

export default CountButton;