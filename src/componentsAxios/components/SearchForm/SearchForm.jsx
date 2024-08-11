import { useId } from "react"

export const SearchForm = ({onSearch}) => {
    const searchId = useId();
    const handleSearch = e => {
        e.preventDefault();
        const { value } = e.target.elements.topic;
        if(value.trim() === '') return alert('Enter search term!')
        onSearch(value);
        e.target.reset();
    }

  return (
    <form onSubmit={handleSearch}>
          <label htmlFor={searchId}>Find article by title:</label>
          <input id={searchId} type="text" name="topic"/>
          <button type="submit">Search</button>
    </form>
  )
}
