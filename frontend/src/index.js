import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from './App';
import Edit from './components/Edit/Edit';
import List from './components/List/List';
import Create from './components/Create/Create';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} exact />
      <Route path='/list' element={<List />} />
      <Route path="/update" element={<Edit />} />
      <Route path="/insert" element={<Create />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
