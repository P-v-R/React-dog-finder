import React from "react";
import {Link} from 'react-router-dom';
/**
 * DogList
 *  Props: object of multiple dogs and their information 
 *      {dogs:{name:"...", age:int, src:img, facts["...","..."]}, ...}
 * 
 * renders dog name and photo for each dog in props
 */
function DogList({dogs}){
  const dogListItems = dogs.map(d => (
    <div className="DogList-dog" key={d.name}>
      <div><Link to={`/dogs/${d.name}`}>{d.name}</Link></div>
      <img src={d.src} alt={d.name} width="150"/>
    </div>
  ))
  return (
  <div className="DogList">
    {dogListItems}
  </div>);
};

export default DogList;