import { useId } from "react"

export const Filter = ({ value, setFilter }) => {
    const handleChange = e => {
        setFilter(e.target.value);
    }

    const filterId = useId();
    return <>
        <label htmlFor={filterId} >Filter</label>
        <input id={ filterId } type="text" name="filter" value={value} onChange={handleChange} />
    </>
}