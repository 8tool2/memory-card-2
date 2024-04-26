import { useState } from 'react';
import './App.css';

const CardImages = [
  { "src": "/img/image1.jpeg" },
  { "src": "/img/image2.jpeg" },
  { "src": "/img/image3.jpeg" },
  { "src": "/img/image1.jpeg" },
  { "src": "/img/image1.jpeg" },
  { "src": "/img/image1.jpeg" },
];

function App() {
  const shuffleCards = () => {
    const shuffledCards = [];
    let copyArray = [...CardImages]; // Make a copy of the array
    console.log("this is copyArray " + copyArray.length);
    while (copyArray.length > 0) { // Use a while loop to shuffle the entire array
      const randomArrayIndex = Math.floor(Math.random() * copyArray.length); // Generate a random index
      const randomCard = copyArray.splice(randomArrayIndex, 1)[0]; // Remove and get the item at the random index
      shuffledCards.push(randomCard); // Push the random card into shuffledCards
    }

    console.log(shuffledCards); // Output the shuffled cards (for testing)

    // Perform further actions with shuffledCards if needed

    return shuffledCards;
  };

  return (
    <>
      <div className="App">
        <h1>Magic Match</h1>
        <button onClick={shuffleCards}>New Game</button>
      </div>
    </>
  );
}

export default App;
