import React from "react";
import {Link} from 'react-router-dom';

function DogList({dogs}){
  const dogListItems = dogs.map(d => (
    <div className="DogList-dog">
      <div><Link to={`/dogs/${d.name}`}>{d.name}</Link></div>
      <img src={d.src} alt={d.name} width="200"/>
    </div>
  ))
  return (

  <div className="DogList">
    {dogListItems}
  </div>)
}

export default DogList;