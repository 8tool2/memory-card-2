  import { useState,useEffect } from 'react';
  import './App.css';
  import SingleCards from './Components/SingleCards'; 

  const CardImages = [
    { src: "/img/image1.jpeg", name:"richard-feynman",matched:false },
    { src: "/img/image2.jpeg", name:"linus-toldavis" ,matched:false},
    { src: "/img/image3.jpeg", name: "mozilla",matched:false },
    { src: "/img/image4.jpeg", name:"richard-feynman",matched:false },
    { src: "/img/image5.jpeg", name:"linus-toldavis",matched:false  },
    { src: "/img/image6.jpeg", name: "mozilla",matched:false},
    { src: "/img/image7.jpeg", name:"blender" ,matched:false},
    { src: "/img/image8.jpeg", name:"blender",matched:false },
  ];

  function App() {
    const [cards, setCards] = useState([]);
    const [turns, setTurns] = useState(0);
    const [choiceOne,setChoiceOne] = useState(null); 
    const [choiceTwo,setChoiceTwo] = useState(null); 

    const shuffleCards = () => {
      const shuffledCards = [];
      let copyArray = [...CardImages];
      setChoiceOne(null);
      setChoiceTwo(null);
      while (copyArray.length > 0) {
        const randomArrayIndex = Math.floor(Math.random() * copyArray.length);
        const randomCard = copyArray.splice(randomArrayIndex, 1)[0];

        shuffledCards.push({ ...randomCard, id: Math.random() }); // Assign unique ID

      }
      console.log(shuffledCards, turns);
      setCards(shuffledCards);
      setTurns(0);
    };

    const handleChoice = (card)=>{

      choiceOne ? setChoiceTwo(card):setChoiceOne(card);
      console.log("selected"+card.name);

    

    }

    useEffect(()=>{
      if(choiceOne && choiceTwo){
        console.log("works here ");
      if(choiceOne.name === choiceTwo.name)
      {
        setCards(prevCards=>{
          return prevCards.map(card=>{
            if(card.name === choiceOne.name){
              return {...card,matched:true};
            }
            else{
              return card; 
            }
          })
        })
      }
      else{
        console.log("Do not match"); 
        resetTurn();
      }
    }

    },[choiceOne,choiceTwo])

    console.log(cards);

    const resetTurn = () =>{
      setChoiceOne(null);
      setChoiceTwo(null);
      setTurns(prevTurns => prevTurns+1)

    }

    useEffect(()=>{
      shuffleCards()
    },[])

    return (
      <div className="App">
        <h1>Open Source Matching</h1>
        <p> Have a nice day</p>
        <button onClick={shuffleCards}>New Game</button>
        <div className="card-grid">
        {cards.map(card=>(
              <SingleCards key= {card.id} card = {card} handleChoice= {handleChoice} flipped = {card == choiceOne || card == choiceTwo || card.matched} /> 
        ))}
        </div>
        <p>Turns: {turns} </p>
      </div>
    );
  }

  export default App;
