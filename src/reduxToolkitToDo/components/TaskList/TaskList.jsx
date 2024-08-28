import { useSelector } from "react-redux";
import { Task } from "../Task/Task";
import css from "./TaskList.module.css";
import { getStatusFilter, getTasks } from "../../redux/selectors";
import { statusFilters } from "../../redux/constans";

const visibleTasks = (tasks, filter) => {
    switch (filter) {
        case statusFilters.completed: 
            return tasks.filter(({ completed }) => completed)
        case statusFilters.active: 
            return tasks.filter(({completed}) => !completed)
        default: {
            return tasks;
        }
    }
}

export const TaskList = () => {
    const tasks = useSelector(getTasks);
    const filterValue = useSelector(getStatusFilter);
    const filterTasks = visibleTasks(tasks, filterValue);

  return (
    <ul className={css.list}>
      {filterTasks.map((task) => (
        <li className={css.listItem} key={task.id}>
          <Task task={task} />
        </li>
      ))}
    </ul>
  );
};
