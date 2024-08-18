import React from 'react';
import ReactDOM from 'react-dom/client';
// import App from '.components-1-2/App.jsx'
// import App from './components-3-4/App.jsx'
// import App from './components-5-6/App.jsx';
// import App from './componentsTaskList/App.jsx';
// import App from './componentsAxios/App';
// import App from './componentsMemoRef/App';
import App from './componentsRouter/App';
import './index.css'
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
