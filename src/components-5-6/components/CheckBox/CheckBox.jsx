import { useState } from "react";

export const CheckBox = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleChecked = (e) => {
        console.dir(e.target.checked);
        setIsChecked(e.target.checked);
    }

    const handleClick = () => {
        console.log('Clicked');
    }

    return <>
        <label>
            <input type="checkbox" name='agree' checked={isChecked} onChange={handleChecked} />
            I agree
        </label>

        <button type='button' disabled={!isChecked} onClick={handleClick}>Click me!</button>
    </>
}