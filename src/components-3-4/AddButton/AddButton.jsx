import { useEffect, useState } from "react";
import Button from "../Button/Button"
import styles from './AddButton.module.css'

const STOR_KEY = 'firstBtn';
const STOR_KEY2 = 'secondBtn';

const getFromStorage = (key) => {
    const data = localStorage.getItem(key);
    return data ? +JSON.parse(data) : 0;
}

const AddButton = () => {
    const [firstBtn, setFirstBtn] = useState(()=>getFromStorage(STOR_KEY));
    const [secondBtn, setSecondBtn] = useState(()=>getFromStorage(STOR_KEY2));

    const res = firstBtn + secondBtn;

    const handleIncrise= (func, value) => {
        func(value + 1);
    }

    const handleDecrise = (func, value) => {
        func(value - 1);
    }

    const handleReset = (func1, func2=0) => {
        func1(0);
        func2 && func2(0);
    }

    useEffect(() => {
        localStorage.setItem(STOR_KEY, JSON.stringify(firstBtn));
    }, [firstBtn]);

    useEffect(() => {
        localStorage.setItem(STOR_KEY2, JSON.stringify(secondBtn));
    }, [secondBtn]);

    useEffect(() => {
        console.log('First and second update', firstBtn + secondBtn)
    }, [firstBtn, secondBtn]);

    return <div className={styles.container}>
        <Button handle={()=> handleDecrise(setFirstBtn, firstBtn)}>-1:</Button>
        <p>{ firstBtn}</p>
        <Button value={firstBtn} handle={() => handleIncrise(setFirstBtn, firstBtn)}>+ 1: </Button>
        <Button handle={()=>handleReset(setFirstBtn)}>Reset first button</Button>
        <p>{`${firstBtn} ${secondBtn >= 0 ? "+" : ""} ${secondBtn} = ${res}`}</p>
        <Button handle={()=>handleReset(setSecondBtn, setFirstBtn)}>Reset all</Button>
        <Button handle={()=> handleDecrise(setSecondBtn, secondBtn)}>-1:</Button>
        <p>{ secondBtn}</p>
        <Button value={secondBtn} handle={() => handleIncrise(setSecondBtn, secondBtn)}>+ 1: </Button>
        <Button handle={()=>handleReset(setSecondBtn)}>Reset second button</Button>
    </div>
}

export default AddButton