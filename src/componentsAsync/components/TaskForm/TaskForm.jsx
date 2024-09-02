import { useDispatch, useSelector } from "react-redux";
import { Button } from "../Button/Button";
import { isExist } from "../../helpers/isExist";
import { selectTasks } from "../../redux/selectors";

import css from "./TaskForm.module.css";
import { addTask } from "../../redux/operation";

export const TaskForm = () => {
  const dispatch = useDispatch();
  const tasks = useSelector(selectTasks);

  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target.elements.textTask.value.trim();
    const isTextExist = isExist(tasks, value);
    value
      ? !isTextExist
        ? dispatch(addTask(value))
        : alert(`Task "${value}" is already exist`)
      : alert("Task description mustn't be empty");
    e.target.reset();
  };

  return (
    <form className={css.form} onSubmit={handleSubmit}>
      <input
        className={css.field}
        type="text"
        name="textTask"
        placeholder="Enter task text..."
      />
      <Button type="submit">Add task</Button>
    </form>
  );
};
