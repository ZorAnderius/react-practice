import { useSelector } from "react-redux";
import css from "./TaskCounter.module.css";
import { useMemo } from "react";
import { getTasks } from "../../redux/selectors";

export const TaskCounter = () => {
  const tasks = useSelector(getTasks);
  const count = useMemo(() =>
    tasks.reduce(
      (acc, { completed }) =>
        completed
          ? { ...acc, completed: acc.completed + 1 }
          : { ...acc, active: acc.active + 1 },
      { active: 0, completed: 0 }
    ),[tasks]);
  return (
    <div>
      <p className={css.text}>Active: {count.active}</p>
      <p className={css.text}>Completed: {count.completed}</p>
    </div>
  );
};
