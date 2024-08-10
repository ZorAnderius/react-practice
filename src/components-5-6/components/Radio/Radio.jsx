import { useState } from "react";

const radioElements = {
    'sm': 'small',
    'md': 'medium',
    'lg': 'large'
}

export const Radio = () => {
    const [key, setKey] = useState('sm');

    const handleRadio = (e) => {
        setKey(e.target.value);
    }
    return <>
        {
            Object.keys(radioElements).map((element, idx) => {
                return (<label key={idx}>{radioElements[element]}
                        <input
                            type='radio'
                            value={element}
                            name='coffeeSize'
                            checked={key === element}
                            onChange={handleRadio}
                        />
                    </label>)
            })
        }
        <p>Selected size: {key}</p>
    </>;
}