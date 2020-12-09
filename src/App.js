import React, { Component } from 'react';
import axios from 'axios'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Home from './components/Home'

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}
export default App;