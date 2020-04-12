import React from 'react';

import './App.module.css';
import Header from './components/UI/Header/Header';
import Layout from './components/Layout/Layout';

function App() {
  return (
    <div className="App">
      <Header>
        Шагомер
      </Header>
      <Layout/>
    </div>
  );
}

export default App;
