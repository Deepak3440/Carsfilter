//  it is index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import App from './App';

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/page/:page" element={<App />} />
    </Routes>
  </Router>,
  document.getElementById('root')
);
