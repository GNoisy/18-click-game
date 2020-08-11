import React from "react";
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import CharCard from "./components/CharCard";
import images from './images.json';
import Wrapper from "./components/Wrapper";


function App() {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <Wrapper>
        <CharCard 
        image={images[0].image}
        />
        <CharCard 
        image={images[1].image}
        />
        <CharCard 
        image={images[2].image}
        />
        <CharCard 
        image={images[3].image}
        />
        <CharCard 
        image={images[4].image}
        />
        <CharCard 
        image={images[5].image}
        />
        <CharCard 
        image={images[6].image}
        />
        <CharCard 
        image={images[7].image}
        />
        <CharCard 
        image={images[8].image}
        />
        <CharCard 
        image={images[9].image}
        />
        <CharCard 
        image={images[10].image}
        />
        <CharCard 
        image={images[11].image}
        />
      </Wrapper>
    </div>
  );
}

export default App;

