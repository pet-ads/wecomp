import React from 'react';
import ReactDOM from 'react-dom/client';

import App from "./pages/App";

import "./style/wecompcolors/wecomp-theme.css"
import "./style/index.css";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
