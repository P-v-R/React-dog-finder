import React from "react";
import {useParams} from 'react-router-dom';


function DogDetails({dogs}){
  const {name} = useParams();
  const dog = dogs.find(d => d.name === name);
  const dogFacts = dog.facts.map(f =><li>{f}</li>);
  // console.log('nameparams---->>>', name)
  return (
    <div>
      <h1>{dog.name}</h1>
      <h3>{dog.name}'s age: {dog.age}</h3>
      <h3>{dog.name}'s photo: </h3>
      <img src={dog.src} alt=""/>
      <h3>Facts about {dog.name}:</h3>
      <ul>{dogFacts}</ul>
    </div>
  )
}

export default DogDetails;