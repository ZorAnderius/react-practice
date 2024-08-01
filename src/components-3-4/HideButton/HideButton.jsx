import { useState } from "react";
import Button from "../Button/Button"

const HideButton = () => {
    const [isHide, setIsHide] = useState(false);

    const handleClick = () => {
        setIsHide(!isHide);
    }

    return <>
        <Button handle={handleClick}> {isHide? "Show" : "Hide"} </Button>
        {isHide && <p>lorem ipsum dolor sit amet consectetur adipisicing elit.</p>}
    </>

}

export default HideButton;