import React, { useState } from "react";
import Card from "./Card";
import '../styles/content.css';

import bulbasaurLogoSrc from '../images/bulbasaur.svg'
import charizardLogoSrc from '../images/charizard.svg'
import eeveeLogoSrc from '../images/eevee.svg'
import charmanderLogoSrc from '../images/charmander.svg'
import gengarLogoSrc from '../images/gengar.svg'
import jigglypuffLogoSrc from '../images/jigglypuff.svg'
import meowthLogoSrc from '../images/meowth.svg'
import mewtwoLogoSrc from '../images/mewtwo.svg'
import pikachuLogoSrc from '../images/pikachu.svg'
import psyduckLogoSrc from '../images/psyduck.svg'
import snorlaxLogoSrc from '../images/snorlax.svg'
import squirtleLogoSrc from '../images/squirtle.svg'

const Content = () =>{
  

  let initialPokemons =[
    {id:1 ,cardImgSrc: bulbasaurLogoSrc, cardName: 'Bulbasaur'  },
    {id:2 ,cardImgSrc: charizardLogoSrc, cardName: 'Charizard'  },
    {id:3 ,cardImgSrc: eeveeLogoSrc, cardName: 'Eevee'  },
    {id:4 ,cardImgSrc: charmanderLogoSrc, cardName: 'Charmander'  },
    {id:5 ,cardImgSrc: gengarLogoSrc, cardName: 'Gengar'  },
    {id:6 ,cardImgSrc: jigglypuffLogoSrc, cardName: 'Jigglypuff'  },
    {id:7 ,cardImgSrc: meowthLogoSrc, cardName: 'Meowth'  },
    {id:8 ,cardImgSrc: mewtwoLogoSrc, cardName: 'Mewtwo'  },
    {id:9 ,cardImgSrc: pikachuLogoSrc, cardName: 'Pikachu'  },
    {id:10 ,cardImgSrc: psyduckLogoSrc, cardName: 'Psyduck' },
    {id:11 ,cardImgSrc: snorlaxLogoSrc, cardName: 'Snorlax' },
    {id:12 ,cardImgSrc: squirtleLogoSrc, cardName: 'Squirtle' },
  ];

  const [pokeSpec, setPokeSpec] =  useState(initialPokemons);
  const [score, setScore] = useState({initialScore: 0, bestScore: 0});
  const [choosedPokeIds, setChoosedPokeIds] = useState([]);

  function gameLogic(pokeId){

    if(choosedPokeIds.includes(pokeId)){

      setScore({initialScore:0 ,bestScore: score.bestScore});
      setChoosedPokeIds([]);

    }else{

      setChoosedPokeIds([...choosedPokeIds, pokeId]);
      if(score.initialScore === score.bestScore){
        setScore({initialScore: score.initialScore+1, bestScore: score.bestScore +1});
      }else{
        setScore({initialScore: score.initialScore+1, bestScore: score.bestScore});
      }

    }
    shuffleCards();
  }

  function shuffleCards(){

    let shuffled = pokeSpec
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

    setPokeSpec(shuffled);

  };

  return (
    <div className="content">
      <div className="scores">
        <div>Current Score: {score.initialScore}</div>
        <div>Best Score: {score.bestScore}</div>
      </div>
      <div className="grids" >
        
        <Card pokeSpec = {pokeSpec[0]} onClickFunc = {gameLogic} />
        <Card pokeSpec = {pokeSpec[1]} onClickFunc = {gameLogic}/>
        <Card pokeSpec = {pokeSpec[2]} onClickFunc = {gameLogic}/>
        <Card pokeSpec = {pokeSpec[3]} onClickFunc = {gameLogic}/>
        <Card pokeSpec = {pokeSpec[4]} onClickFunc = {gameLogic}/>
        <Card pokeSpec = {pokeSpec[5]} onClickFunc = {gameLogic}/>
        <Card pokeSpec = {pokeSpec[6]} onClickFunc = {gameLogic}/>
        <Card pokeSpec = {pokeSpec[7]} onClickFunc = {gameLogic}/>  
        <Card pokeSpec = {pokeSpec[8]} onClickFunc = {gameLogic}/>
        <Card pokeSpec = {pokeSpec[9]} onClickFunc = {gameLogic}/>
        <Card pokeSpec = {pokeSpec[10]} onClickFunc = {gameLogic}/>
        <Card pokeSpec = {pokeSpec[11]} onClickFunc = {gameLogic}/>  

      </div>
    </div>
    
  );
}

export default Content;
