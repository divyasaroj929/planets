import React from "react";
import { Routes, Router, Route } from "react-router-dom";
import "./App.css";
import PlanetList from "./component/PlanetList";
import ResidentDetails from "./component/ResidentDetails";
import PlanetCard from "./component/ResidentDetails";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<PlanetList />} />
        <Route path="/residents/:residentId" element={<PlanetCard />} />
      </Routes>
    </div>
  );
}

export default App;
