import React, {Component} from 'react';
import {BrowserRouter, Route} from "react-router-dom";

import Home from './pages/Home';
import Bulkb from './pages/Bulkb';
import Register from './pages/Register';

import Navbar from './components/Navbar';
import BottomInfoBar from './components/BottomInfoBar';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Route exact path='/' component={Home}/>
        <Route path='/Bulkbuy' component={Bulkb}/>
        <Route path='/Register' component={Register}/>
        <BottomInfoBar />
      </div>
    </BrowserRouter>
  );
}

export default App;
