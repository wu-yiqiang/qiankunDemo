import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import logo from './logo.svg';
import './App.css';
import './index.css';

const BASE_NAME = window.__POWERED_BY_QIANKUN__ ? "/app-react" : "";

const App = () => {
  return (
    // 设置路由命名空间
    <Router basename={BASE_NAME}>
      <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      </div>
    </Router>
  );
};

export default App;
