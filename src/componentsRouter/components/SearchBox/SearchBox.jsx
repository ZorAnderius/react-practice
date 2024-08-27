import { HiSearch } from "react-icons/hi";
import styles from "./SearchBox.module.css";
import toast from "react-hot-toast";
import clsx from "clsx";
import { useSearchParams } from "react-router-dom";

const SearchBox = () => {
  const [searchParams, setSearchParams] = useSearchParams();

    const handleSubmit = (e) => {
      e.preventDefault();
        const valueQuery = e.target.elements.search.value.trim();
        if (!valueQuery) {
          toast.error("Search field can't be empty!");
        }
        const newParam = valueQuery !== "" ? { q: valueQuery } : {};
        setSearchParams({ ...searchParams, ...newParam });
  };

  return (
    <form className={styles.wrapper} onSubmit={handleSubmit}>
      <input
        className={clsx(styles.input, "form-control mr-sm-2")}
        type="text"
        name="search"
      />
      <button
        type="submit"
        className={clsx(styles.button, "btn btn-outline-success my-2 my-sm-0")}
      >
        <HiSearch className={styles.icon} />
      </button>
    </form>
  );
};

export default SearchBox;
