import React from 'react';
import './SingleCards.css';


 
function SingleCards({card , handleChoice, flipped }) {

  const handleClick = ()=>{
    handleChoice(card)
      
    }

  return (
  
          <div className="card" key={card.id}>
              <div className= {flipped ? "flipped" : "" }>
              <img className="front" src={card.src} alt="card-front" height= "200px" width = "200px" />
              <img className="back"
               src="src/assets/1.jpg" 
               alt="card back" 
                onClick = {handleClick} />
               </div>
       
            </div>
       
  )
}

export default SingleCards; 
