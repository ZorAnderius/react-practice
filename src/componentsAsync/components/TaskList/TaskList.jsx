import { useSelector } from "react-redux";
import css from "./TaskList.module.css";
import { selectVisibleTasks } from "../../redux/selectors";
import { Task } from "../Task/Task";

export const TaskList = () => {
    const filteredTask = useSelector(selectVisibleTasks);
  return (
    filteredTask?.length > 0 && (
      <ul className={css.list}>
        {filteredTask.map((task) => (
          <li key={task.id}>
            <Task task={task} />
          </li>
        ))}
      </ul>
    )
  );
};
