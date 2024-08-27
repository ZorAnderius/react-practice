import { useEffect, useState } from "react";
import { Filter, Form, TaskList } from "./components";

import styles from "./App.module.css";

const STOR_KEY = "tasks";

const getFromStorage = () => {
  const data = JSON.parse(localStorage.getItem(STOR_KEY));
  return data || [];
};

const App = () => {
  const [tasks, setTasks] = useState(getFromStorage);
  const [filter, setFilter] = useState("");
  useEffect(() => {
    localStorage.setItem(STOR_KEY, JSON.stringify(tasks));
  }, [tasks]);
  const addTask = (task) => setTasks((prevTasks) => [...prevTasks, task]);
  const deletTask = (taskId) =>
    setTasks((prevTasks) => prevTasks.filter(({ id }) => id !== taskId));
  const filterTasks = tasks.filter(({ text }) =>
    text.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <div className={styles.container}>
      <Form addTask={addTask} />
      <Filter value={filter} setFilter={setFilter} />
      <TaskList tasks={filterTasks} deletTask={deletTask} />
    </div>
  );
};

export default App;
