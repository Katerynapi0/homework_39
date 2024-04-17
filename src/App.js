import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Container from './Container';
import './App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="content">
        <Sidebar />
        <Container />
      </div>
    </div>
  );
}

export default App;