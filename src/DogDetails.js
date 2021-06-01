import React from "react";
import {useParams} from 'react-router-dom';

import DogFinder from './DogFinder';

// TODO could have a helper search component to find the 
// dog info before this component is rendered
/**
 * DogDetails 
 *  Props: object of multiple dogs and their information 
 *      {dogs:{name:"...", age:int, src:img, facts["...","..."]}, ...}
 * 
 *  Query: name
 *         so we can find single dog in prop
 * renders all information on a single dog
 */
function DogDetails({dogs}){
  const {name} = useParams();
  const dog = DogFinder(dogs, name);

  const dogFacts = dog.facts.map(f =><li key={f}>{f}</li>);

  return (
    <div>
      <h1>{dog.name}</h1>
      <h3>{dog.name}'s age: {dog.age}</h3>
      <h4>{dog.name}'s photo: </h4>
      <img src={dog.src} alt={dog.name} width="300"/>
      <h3>Facts about {dog.name}:</h3>
      <ul>{dogFacts}</ul>
    </div>
  );
};

export default DogDetails;