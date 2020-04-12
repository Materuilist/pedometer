import React from 'react';
import {compose, applyMiddleware} from 'redux';

import './App.module.css';
import Header from './components/Header/Header';
import Layout from './components/Layout/Layout';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

function App() {
  return (
    <div className="App">
      <Header/>
      <Layout/>
    </div>
  );
}

export default App;
