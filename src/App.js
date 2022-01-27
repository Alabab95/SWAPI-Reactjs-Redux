import "./App.css";
import React from "react";
import FleetManager from "./components/FleetManager";
import DetailView from "./Components/DetailView";
import { Route } from "react-router";
import { BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route exact path="/" element={<FleetManager />} />
          <Route exact path="/detail" element={<DetailView />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
