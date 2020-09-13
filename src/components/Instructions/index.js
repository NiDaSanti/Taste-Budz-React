import React from 'react';
import RandomRecipe from '../RandomRecipe';

const Instructions = (props) => {
  let exitInstructionsPage = <RandomRecipe/>;
  if(props.instructionsInfoIcon === false) {
    return exitInstructionsPage;
  } 
  let arrInstruct = props.recipes;
  console.log('testing for ', arrInstruct);
  const analyzeArray = arrInstruct.map((ana) => {
    console.log(ana.analyzedInstructions);
    const recipeInstruction = ana.analyzedInstructions;
    console.log('now lets see ', recipeInstruction);
    
    
  })
  


  return (
    <div>

    </div>
  )
}

export default Instructions;