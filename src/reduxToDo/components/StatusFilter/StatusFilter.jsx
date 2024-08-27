import { useDispatch, useSelector } from "react-redux";
import { Button } from "../Button/Button";
import css from "./StatusFilter.module.css";
import { statusFilters } from "../../redux/constans";
import { getStatusFilter } from "../../redux/selectors";
import { setStatusFilter } from "../../redux/actions";

export const StatusFilter = () => {
  const filter = useSelector(getStatusFilter);
  const dispatch = useDispatch();

  const handleClick = (value) => {
    dispatch(setStatusFilter(value));
  };
  return (
    <div className={css.wrapper}>
      <Button
        onClick={() => handleClick(statusFilters.all)}
        selected={filter === statusFilters.all}
      >
        All
      </Button>
      <Button
        onClick={() => handleClick(statusFilters.active)}
        selected={filter === statusFilters.active}
      >
        Active
      </Button>
      <Button
        onClick={() => handleClick(statusFilters.completed)}
        selected={filter === statusFilters.completed}
      >
        Completed
      </Button>
    </div>
  );
};
