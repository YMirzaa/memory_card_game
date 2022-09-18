import React, { useState, useEffect } from "react";
import Card from "./Card";
import '../styles/grids.css';

const Grids = () =>{

  let initialPokemons =[
    {cardImgSrc: 1, cardName: 'Pikachu1'  },
    {cardImgSrc: 2, cardName: 'Pikachu2'  },
    {cardImgSrc: 3, cardName: 'Pikachu3'  },
    {cardImgSrc: 4, cardName: 'Pikachu4'  },
    {cardImgSrc: 5, cardName: 'Pikachu5'  },
    {cardImgSrc: 6, cardName: 'Pikachu6'  },
    {cardImgSrc: 7, cardName: 'Pikachu7'  },
    {cardImgSrc: 8, cardName: 'Pikachu8'  },
    {cardImgSrc: 9, cardName: 'Pikachu9'  },
    {cardImgSrc: 10, cardName: 'Pikachu10' },
    {cardImgSrc: 11, cardName: 'Pikachu11' },
    {cardImgSrc: 12, cardName: 'Pikachu12' },
  ];


  const [pokeSpec, setPokeSpec] =  useState(
    initialPokemons
  );
  
  function shuffleCards(){

    let shuffled = pokeSpec
    .map(value => ({ value, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map(({ value }) => value);

    setPokeSpec(shuffled);

  };

  return (
    <div className="grids">
        <Card pokeSpec = {pokeSpec[0]} onClickFunc = {shuffleCards}/>
        <Card pokeSpec = {pokeSpec[1]} onClickFunc = {shuffleCards}/>
        <Card pokeSpec = {pokeSpec[2]} onClickFunc = {shuffleCards}/>
        <Card pokeSpec = {pokeSpec[3]} onClickFunc = {shuffleCards}/>
        <Card pokeSpec = {pokeSpec[4]} onClickFunc = {shuffleCards}/>
        <Card pokeSpec = {pokeSpec[5]} onClickFunc = {shuffleCards}/>
        <Card pokeSpec = {pokeSpec[6]} onClickFunc = {shuffleCards}/>
        <Card pokeSpec = {pokeSpec[7]} onClickFunc = {shuffleCards}/>  
        <Card pokeSpec = {pokeSpec[8]} onClickFunc = {shuffleCards}/>
        <Card pokeSpec = {pokeSpec[9]} onClickFunc = {shuffleCards}/>
        <Card pokeSpec = {pokeSpec[10]} onClickFunc = {shuffleCards}/>
        <Card pokeSpec = {pokeSpec[11]} onClickFunc = {shuffleCards}/>  

    </div>
  );
}

export default Grids;
