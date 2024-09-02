import { createSelector } from "@reduxjs/toolkit";
import { statusFilters } from "../../reduxToolkitToDo/redux/constans";

export const selectTasks = (state) => state.tasks.items;

export const selectAllTaskInfo = (state) => state.tasks;

export const selectIsLoading = (state) => state.tasks.isLoading;

export const selectError = (state) => state.tasks.error;

export const selectStatusFilter = (state) => state.filter.status;

export const selectVisibleTasks = createSelector(
  [selectTasks, selectStatusFilter],
  (tasks, filterStatus) => {
    switch (filterStatus) {
      case statusFilters.active:
        return tasks.filter(({ completed }) => !completed);
      case statusFilters.completed:
        return tasks.filter(({ completed }) => completed);
      default:
        return tasks;
    }
  }
);

export const selectTaskCount = createSelector([selectTasks], (tasks) => {
  console.log("olen");
  return tasks.reduce(
    (count, task) => {
      if (task.completed) {
        count.completed += 1;
      } else {
        count.active += 1;
      }
      return count;
    },
    { active: 0, completed: 0 }
  );
});
