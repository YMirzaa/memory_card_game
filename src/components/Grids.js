import React, { useState } from "react";
import Card from "./Card";
import '../styles/grids.css';

const Grids = () =>{

  let initialPokemons =[
    {id:1 ,cardImgSrc: 1, cardName: 'Pikachu1'  },
    {id:2 ,cardImgSrc: 2, cardName: 'Pikachu2'  },
    {id:3 ,cardImgSrc: 3, cardName: 'Pikachu3'  },
    {id:4 ,cardImgSrc: 4, cardName: 'Pikachu4'  },
    {id:5 ,cardImgSrc: 5, cardName: 'Pikachu5'  },
    {id:6 ,cardImgSrc: 6, cardName: 'Pikachu6'  },
    {id:7 ,cardImgSrc: 7, cardName: 'Pikachu7'  },
    {id:8 ,cardImgSrc: 8, cardName: 'Pikachu8'  },
    {id:9 ,cardImgSrc: 9, cardName: 'Pikachu9'  },
    {id:10 ,cardImgSrc: 10, cardName: 'Pikachu10' },
    {id:11 ,cardImgSrc: 11, cardName: 'Pikachu11' },
    {id:12 ,cardImgSrc: 12, cardName: 'Pikachu12' },
  ];

  const [pokeSpec, setPokeSpec] =  useState(initialPokemons);
  const [score, setScore] = useState({initialScore: 0, bestScore: 0});
  const [choosedPokeIds, setChoosedPokeIds] = useState([]);

  function gameLogic(pokeId){

    if(choosedPokeIds.includes(pokeId)){
      // console.log(choosedPokeIds);
      // console.log('hello');
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
// choosedPokeIds ={choosedPokeIds} setChoosedPokeIds ={setChoosedPokeIds} score ={score} setScore ={setScore} bestScore ={bestScore} setBestScore ={setBestScore}
  return (
    <div>
      <div>Score: {score.initialScore}</div>
      <div>Best Score: {score.bestScore}</div>
      <div className="grids">
        
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

export default Grids;
