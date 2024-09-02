import { MdClose } from "react-icons/md";
import css from "./Task.module.css";
import { useDispatch } from "react-redux";
import { deleteTask, updateTask } from "../../redux/operation";

export const Task = ({ task }) => {
    const dispatch = useDispatch();
    const handleChange = () => {
        dispatch(updateTask(task));
    };

    const handleDelete = () => {
        dispatch(deleteTask(task.id));
    };
  
  return (
    <div className={css.wrapper}>
      <input
        type="checkbox"
        className={css.checkbox}
              checked={task.completed}
              onChange={handleChange}
      />
      <p className={css.text}>{task.text}</p>
      <button className={css.btn} onClick={handleDelete}>
        <MdClose size={24} />
      </button>
    </div>
  );
};
