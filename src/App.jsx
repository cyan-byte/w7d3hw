// import { useState } from 'react';
import './app.css';
import HomePage from './components/HomePage/HomePage.jsx';
import EmployeePage from './components/EmployeePage/EmployeePage';

export default function App() {

  return (
    <div className="app">
      <h1>App</h1>
      <HomePage />
      <EmployeePage />
    </div>
  );
}