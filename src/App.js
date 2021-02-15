
import './App.css';
import NavigationBar from './components/NavigationBar';

import React from "react";
import {
  BrowserRouter as Router
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div>
      <NavigationBar />
      </div>
    </Router>
  );
}