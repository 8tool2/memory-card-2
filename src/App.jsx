  import { useState,useEffect } from 'react';
  import './App.css';
  import SingleCards from './Components/SingleCards'; 

  const CardImages = [
    { src: "https://upload.wikimedia.org/wikipedia/commons/2/28/Richard_Stallman_at_LibrePlanet_2019.jpg", name:"richard-feynman",matched:false },
    { src: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcR2a8LLjkXzYOMMMUVGQES3mrBHRxb5cyHW7DNzxnt7aVRkHItR", name:"linus-toldavis" ,matched:false},
    { src: "https://cdn.vox-cdn.com/thumbor/bKFaEEWhT9n08enNW4KnB8DMIpw=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/15800415/brendan-eich-mozilla-firefox-square.0.1467740722.jpg", name: "mozilla",matched:false },
    { src: "https://eu-images.contentstack.com/v3/assets/blt10e444bce2d36aa8/blte8cff20f03963ec1/652655102f875275076dab08/untitled_2_0.png?width=850&auto=webp&quality=95&format=jpg&disable=upscale", name:"richard-feynman",matched:false },
    { src: "https://static-00.iconduck.com/assets.00/linux-icon-1024x1024-opqr19tb.png", name:"linus-toldavis",matched:false  },
    { src: "https://www.cnet.com/a/img/hub/2014/06/13/c582d2aa-092e-4d29-a616-a1e5c9403b36/firefox-logo-2014-vertical-4sts.jpg", name: "mozilla",matched:false},
    { src: "https://miro.medium.com/v2/resize:fit:947/1*tXi4QoDAuHVqjGpHvhPG0w.png", name:"blender" ,matched:false},
    { src: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Ton_Roosendaal_2018_%28ZkKPXn6QBx8%29.jpg", name:"blender",matched:false },
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
