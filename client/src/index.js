import React from 'react';
// import ReactDOM from 'react-dom';
import App from './App';
import { createRoot } from "react-dom/client";
// import { StrictMode } from "react";
import { ContextProvider } from './context/Context';


const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  // <React.StrictMode>
    <ContextProvider>
    <App />
    </ContextProvider>
  /* </React.StrictMode> */
  // document.getElementById('root')
);
