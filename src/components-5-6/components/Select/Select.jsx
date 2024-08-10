import { useId } from "react";

export const Select = ({value, onSelect}) => {
    const selectId = useId();

    const handleSelect = (e) => {
        onSelect(e.target.value);
    }

    return <div>
        <label htmlFor={selectId} / >
        <select value={value} onChange={handleSelect} id={selectId}>
            <option value='ua'>Urkainian</option>
            <option value='uk'>English</option>
            <option value='pl'>Polish</option>
        </select>
    </div>;
}