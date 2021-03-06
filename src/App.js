import React from "react";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
import Nav from "./Nav";
import DogList from "./DogList"
import DogDetails from "./DogDetails"

import whiskey from "./dogs/whiskey.jpg"
import perry from "./dogs/perry.jpg"
import tubby from "./dogs/tubby.jpg"
import duke from "./dogs/duke.jpg"


/** render DogFinder application 
 * Props: object of multiple dogs and their information 
 *          {dogs:{name:"...", age:int, src:img, facts["...","..."]}, ...}
 * navbar displayed on all components 
 * app -> DogList -> DogDetails 
 */
function App(props) {
  console.log("props ==>", props);
  return (
    <div className="App">
      <BrowserRouter>
        <Nav names={props.dogs.map(dog => dog.name)}/>
         <Switch>
          <Route exact path="/dogs" >
            <DogList dogs={props.dogs}/> 
          </Route>
          <Route exact path="/dogs/:name" >
            <DogDetails dogs={props.dogs}/> 
          </Route>
          <Redirect to="/dogs" />
        </Switch> 
      </BrowserRouter>
    </div>
  );
}

App.defaultProps = {
  dogs: [
    {
      name: "Whiskey",
      age: 5,
      src: whiskey,
      facts: [
        "Whiskey loves eating popcorn.",
        "Whiskey is a terrible guard dog.",
        "Whiskey wants to cuddle with you!"
      ]
    },
    {
      name: "Duke",
      age: 3,
      src: duke,
      facts: [
        "Duke believes that ball is life.",
        "Duke likes snow.",
        "Duke enjoys pawing other dogs."
      ]
    },
    {
      name: "Perry",
      age: 4,
      src: perry,
      facts: [
        "Perry loves all humans.",
        "Perry demolishes all snacks.",
        "Perry hates the rain."
      ]
    },
    {
      name: "Tubby",
      age: 4,
      src: tubby,
      facts: [
        "Tubby is really stupid.",
        "Tubby does not like walks.",
        "Angelina used to hate Tubby, but claims not to anymore."
      ]
    }
  ]
}

export default App;
