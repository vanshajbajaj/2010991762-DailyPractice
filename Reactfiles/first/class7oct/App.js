import React, { Component } from 'react';
//import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Apidata from './Apidata';
import Senddata from './Senddata';

function App() {
  return (
    <div>
      <Apidata />
      <Senddata />
    </div>
  )
}

export default App;
