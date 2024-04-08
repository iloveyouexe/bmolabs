import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRoutes'; // Make sure this path is correct

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <AppRoutes /> {/* Render your routes component */}
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
