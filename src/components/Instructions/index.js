import React from 'react';
import RandomRecipe from '../RandomRecipe';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import '../Instructions/instruction.scss';
library.add(faTimes);


// const analyzedInstructions = (instruction) => {
//   console.log(instruction);
//   for(let i = 0; i < instruction.length; i++) {
//     let analyzedFoodInformation = instruction[i].analyzedInstructions;
//     console.log(analyzedFoodInformation)
//   }
// }

// const getTheFoodSteps = (ana) => {
//   console.log(analyzedInstructions);
// }

const Instructions = (props) => {
  let exitInstructionsPage = <RandomRecipe/>;
  if(props.instructionsInfoIcon === false) {
    return exitInstructionsPage;
  } 
  let instructionalSteps = props.recipes;
  console.log(instructionalSteps);
  // arrInstruct.map((ana) => {
    // // console.log('level one', ana.analyzedInstructions);
    // const recipeInstruction = ana.analyzedInstructions;
    // console.log('now lets see ', recipeInstruction);
    // recipeInstruction.map((sentence) => {
    //   console.log('map deeper ', sentence.steps);
    //   const equipNumberSteps = sentence.steps;
    //   const empty = '';
    //   const handleEmptyString = (sentence.name === empty) ? {...ana.title} : sentence.name;
    //   console.log('now ', handleEmptyString);
    //   const join = Object.values(handleEmptyString).join('');
    //   console.log('hahahah ', join);
    //   equipNumberSteps.map((inStep) => {
    //     console.log('level 4 ', inStep);
    //     const cookStepNumber = inStep.number;
    //     console.log(cookStepNumber)
    //     const cookStepSentence = inStep.step;
    //     console.log(cookStepSentence);
    //     const cookingEquip = inStep.equipment;
    //     console.log(cookingEquip);
    //   })
    // })
  // })
  return (
    <>{instructionalSteps.map((instruction) => {
        const foodName = instruction.title;
        const getAdditionalInformation = instruction.analyzedInstructions;
        console.log(getAdditionalInformation);
        const isItGlutenFree = (instruction.glutenFree === true) ? 'Yes' : 'No';
        const isItVegetarian = (instruction.vegetarian === true) ? 'Yes' : 'No';
        const isItVegan = (instruction.vegan === true) ? 'Yes' : 'No';
        const isItHealthy = (instruction.veryHealthy === true) ? 'Yes' : 'No';
        const isItPopular = (instruction.veryPopular === true) ? 'Yes' : 'No';
        return <div className = 'food-instruction-manual' key = {instruction.id}>
                <FontAwesomeIcon onClick = {props.instructionScreen} className = 'exit-instruction' icon = {faTimes} />
                <h3>{foodName}</h3>
                <ul>
                  <li>Gluten Free: {isItGlutenFree}</li>
                  <li>Vegetarian: {isItVegetarian}</li>
                  <li>Vegan: {isItVegan}</li>
                  <li>Healthy: {isItHealthy}</li>
                  <li>Popular: {isItPopular}</li>
                </ul>
                <img className = 'food-view' src = {instruction.image} alt = 'food'/>
                {getAdditionalInformation.map((information, index) => {
                  const getNumber = information.steps;
                  console.log(getNumber.number);
                  return <div key = {`${getNumber} - ${index}`}>
                    {getNumber.map((get, index) => (<p>{get.number}. {get.step}</p>))}
                  </div>
                })}
        </div>
      })
    }</>
  )
}

export default Instructions;