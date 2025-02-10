import React from "react";
import ReactDOM from "react-dom/client";
import { HydratedRouter } from "react-router/dom";
import './index.css';
// import { HelmetProvider } from 'react-helmet-async';

ReactDOM.hydrateRoot(
    document,
  <React.StrictMode>
    {/* <HelmetProvider> */}
      <HydratedRouter />
    {/* </HelmetProvider> */}
  </React.StrictMode>
);