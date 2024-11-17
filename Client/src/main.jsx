import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App'; // Main application component
import './index.css'; // Tailwind or global styles

// Rendering the application
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <App />
  </React.StrictMode>
);
