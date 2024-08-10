import { useState } from "react";

export const SearchBar = () => {
    const [inputValue, setInputValue] = useState('');

    const handleChange = (e) => {
        const data = e.target;
        setInputValue(data.value);
    }

    return <>
        <input type='text' name='search' value={inputValue} onChange={handleChange}/>
        <p>{inputValue}</p>
    </>
}