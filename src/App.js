import React from 'react';
import Add from './components/Add';
import Filter from './components/Filter';
import List from './components/List';

export default function App() {
  return (
    <div className="main-container">
      <h1 className="main-title">Shopping list:</h1>
      <Filter />
      <Add />
      <List />
    </div>
  );
}