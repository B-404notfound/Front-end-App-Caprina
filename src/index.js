import React from 'react';
import App from './App';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import bootstrap from 'bootstrap/dist/css/bootstrap.css'

const rootElement = document.getElementById("root");
const root=createRoot(rootElement);


root.render(
  <StrictMode>
    <App />
  </StrictMode>
);


reportWebVitals();
