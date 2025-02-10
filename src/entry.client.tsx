import React from "react";
import ReactDOM from "react-dom/client";
import { HydratedRouter } from "react-router/dom";
import './index.css';
import './App.css';

ReactDOM.hydrateRoot(
    document,
  <React.StrictMode>
      <HydratedRouter />
  </React.StrictMode>
);