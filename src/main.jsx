import React from "react";
import ReactDOM from "react-dom/client";
// import App from '.components-1-2/App.jsx'
// import App from './components-3-4/App.jsx'
// import App from './components-5-6/App.jsx';
// import App from './componentsTaskList/App.jsx';
// import App from './componentsAxios/App';
// import App from './componentsMemoRef/App';
// import App from './componentsRouter/App';
// import { App } from "./reduxToDo/components/App";
import { App } from './reduxToolkitToDo/components/App';
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./reduxToDo/redux/store";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
