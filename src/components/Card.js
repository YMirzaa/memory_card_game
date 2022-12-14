import React  from "react";
import '../styles/card.css';

const Card = (props) =>{
    const pokeSpec = props.pokeSpec;
    const onClickFunc = props.onClickFunc;
    
  return (
    <div className="card" onClick={ ()=>onClickFunc(pokeSpec.id)}>
        <img className="card-img" src={pokeSpec.cardImgSrc} alt="card-img" /> 
        <div className="card-name">{pokeSpec.cardName}</div>
    </div>
  );
}

export default Card;
