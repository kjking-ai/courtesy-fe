
import './App.css';
import HotelTable from './components/HotelTable';
import NavigationBar from './components/NavigationBar';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
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