import React from 'react';
// import ReactDOM from 'react-dom';
import App from './App';
import { createRoot } from "react-dom/client";
// import { StrictMode } from "react";


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  // document.getElementById('root')
);
