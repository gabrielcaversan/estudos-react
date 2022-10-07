import React from 'react';
import ReactDOM from 'react-dom/client';
import './css/index.css';
import Todo from './pages/index';
import reportWebVitals from './utils/reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Todo />
  </React.StrictMode>
);

reportWebVitals();
