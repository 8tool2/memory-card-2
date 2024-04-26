import { useState } from 'react';
import './App.css';

const CardImages = [
  { src: "/img/image1.jpeg" },
  { src: "/img/image2.jpeg" },
  { src: "/img/image3.jpeg" },
  { src: "/img/image4.jpeg" },
  { src: "/img/image5.jpeg" },
  { src: "/img/image6.jpeg" },
  { src: "/img/image7.jpeg" },
  { src: "/img/image8.jpeg" },
];

function App() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);

  const shuffleCards = () => {
    const shuffledCards = [];
    let copyArray = [...CardImages];
    while (copyArray.length > 0) {
      const randomArrayIndex = Math.floor(Math.random() * copyArray.length);
      const randomCard = copyArray.splice(randomArrayIndex, 1)[0];

      shuffledCards.push({ ...randomCard, id: Math.random() }); // Assign unique ID

    }
    console.log(shuffledCards, turns);
    setCards(shuffledCards);
    setTurns(0);
  };

  return (
    <div className="App">
      <h1>Open Source Matching</h1>
      <p>Match the legendary founders with their creations and Remember it !!! </p>
      <button onClick={shuffleCards}>New Game</button>
      <div className="card-grid">
        {cards.map((card) => (
          <div className="card" key={card.id}>
            <div>
              <img className="front" src={card.src} alt="card-front" height= "200px" width = "200px" />
              <img className="back" src="src/assets/cover.png" alt="card back" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
