// src/index.js
import React from 'react';
import ReactDOM from 'react-dom/client'; // ✅ สำคัญ! ต้องเป็น react-dom/client
import App from './App';
import "font-awesome/css/font-awesome.min.css";
import '@fontsource/kanit/400.css'; // normal
import '@fontsource/kanit/700.css'; // bold

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement); // ✅ ใช้ createRoot แทน render

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
