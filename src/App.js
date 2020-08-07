import React from 'react';
import DirContainer from "./directory/dirContainer";
import { BrowserRouter as Router, Route } from "react-router-dom";
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={DirContainer} />
      </div>
    </Router>
  );
}

export default App;
