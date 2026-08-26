import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles.css';
import './product-scenes.css';
import './product-intelligence.css';
import './commercial-polish.css';

createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
