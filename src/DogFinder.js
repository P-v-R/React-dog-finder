import React from "react";
import {Redirect} from 'react-router-dom';


// * Helper Function -> DogFinder
// *  Takes dogs arr, name
// */ return dog obj or redirect to homepage if not found.

function DogFinder(dogs, name){

 const dog = dogs.find(d => d.name === name);
 if(!dog){
   return <Redirect to="/dogs" />
 }
 return dog;
};

export default DogFinder;