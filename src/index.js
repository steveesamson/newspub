import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

// Create an application host from the #root DOM
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render application as a Child of the host.
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);


