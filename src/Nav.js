import React from "react";
import { Link } from "react-router-dom";

function Nav({ names }) {
  console.log("prop for name ===>", names)
  return (
    <div className="NavBar">
      {names.map(dogName => (
        <span key={dogName}>
          <Link to={`/dogs/${dogName}`}>Show me {dogName}!</Link>
          <span>  </span>
        </span>
      ))}
    </div>
  );
}


export default Nav;
