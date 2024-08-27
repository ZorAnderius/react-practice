import { devToolsEnhancer } from "@redux-devtools/extension";
import { combineReducers, createStore } from "redux";
import { statusFilters } from "./constans";

const tasksInitialState = [
  { id: 0, text: "Learn HTML and CSS", completed: true },
  { id: 1, text: "Get good at JavaScript", completed: true },
  { id: 2, text: "Master React", completed: false },
  { id: 3, text: "Discover Redux", completed: false },
  { id: 4, text: "Build amazing apps", completed: false },
];

const enhancer = devToolsEnhancer();

const taskReducer = (state = tasksInitialState, { type, payload }) => { 
    switch (type) {
      case "tasks/addTask": {
            return [...state, payload];
      }
      case "tasks/deleteTask": {
            return state.filter(({ id }) => id !== payload);
      }
      case "tasks/toggleCompleted": {
            return state.map((task) =>
                task.id === payload ? { ...task, completed: !task.completed } : task
            )
        }
            default:
            return state;
    }
}
 
const filtersInitialSate = {
    status: statusFilters.all,
}

const filtersReducer = (state = filtersInitialSate, { type, payload }) => { 
    switch (type) {
        case "filters/setStatusFilter":
            return {
                ...state,
                status: payload,
            };
        default:
            return state;
    }
 }

const rootReducer = combineReducers({
  tasks: taskReducer,
  filters: filtersReducer,
});

export const store = createStore(rootReducer, enhancer);
