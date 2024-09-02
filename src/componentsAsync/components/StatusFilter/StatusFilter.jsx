import { useDispatch, useSelector } from "react-redux";
import { Button } from "../Button/Button";

import css from "./StatusFilter.module.css";
import { filterStatus } from "../../helpers/filterStatus";
import { chnageFilterStatus } from "../../redux/filterSlice";
import { selectStatusFilter } from "../../redux/selectors";

export const StatusFilter = () => {
  const dispatch = useDispatch();
  const filterValue = useSelector(selectStatusFilter);

  const handleClick = (status) => {
    dispatch(chnageFilterStatus(status));
  };

  return (
    <div className={css.wrapper}>
      <Button
        selected={filterStatus.all === filterValue}
        onClick={() => handleClick(filterStatus.all)}
      >
        All
      </Button>
      <Button
        selected={filterStatus.active === filterValue}
        onClick={() => handleClick(filterStatus.active)}
      >
        Active
      </Button>
      <Button
        selected={filterStatus.completed === filterValue}
        onClick={() => handleClick(filterStatus.completed)}
      >
        Completed
      </Button>
    </div>
  );
};
