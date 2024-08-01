import Button from "../Button/Button";
import { useState, useEffect } from "react";

const EffectButton = () => {
    const [clickMe, setClickMe] = useState(0);
    const handleClickMe = () => {
        setClickMe(clickMe + 1);
    }

    useEffect(() => {
        console.log('One time effect');
        return () => console.log('One time cleanup');
    },[])

    useEffect(() => {
        document.title = `You clicked ${clickMe} times`;
        return () => console.log("click unmount title")
    })

    useEffect(() => {
        console.log('click: ', clickMe);
        return () => console.log('click unmount: ', clickMe);
    },[clickMe]);
    return <Button value={clickMe} handle={handleClickMe}>You click </Button>
}

export default EffectButton;