import { useDispatch, useSelector } from "react-redux";
import { AppBar } from "./components/AppBar/AppBar";
import { Layout } from "./components/Layout/Layout";
import { TaskForm } from "./components/TaskForm/TaskForm";
import { TaskList } from "./components/TaskList/TaskList";
import { selectAllTaskInfo } from "./redux/selectors";
import { useEffect } from "react";
import { fetchTasks } from "./redux/operation";

const App = () => {
  const dispatch = useDispatch();
  const { isLoading, error } = useSelector(selectAllTaskInfo);

  useEffect(() => {
    dispatch(fetchTasks());
  }, [dispatch]);

  return (
    <Layout>
      {isLoading ? (
        <b>Loading...</b>
      ) : !error ? (
        <>
          <AppBar />
          <TaskForm />
          <TaskList />
        </>
      ) : (
        <b>{error}</b>
      )}
    </Layout>
  );
};

export default App;
