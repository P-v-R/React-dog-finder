import React from "react";
import { NavLink } from "react-router-dom";


/**
 * Nav
 *  Props: array of dog names 
 *      ["name","otherName",...]
 * todo - more detail here!
 */

function Nav({ names }) {
  // could save map to a var to clean up the return route 
  return (
    <div className="NavBar">
      {names.map(dogName => (
        <span key={dogName}>
          <NavLink exact to={`/dogs/${dogName}`}>Show me {dogName}!</NavLink>
        </span>
      ))}
      <span>
      <NavLink to={`/dogs`}>🏡 HOME 🏡 </NavLink>
      </span>
    </div>
  );
}


export default Nav;
