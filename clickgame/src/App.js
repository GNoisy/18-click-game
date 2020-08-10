import React from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import CharCard from "./components/CharCard";
import images from './images.json';


function App() {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <CharCard />
    </div>
  );
}

export default App;

