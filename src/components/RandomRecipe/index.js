import React from 'react';
import './random-recipe.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUtensils, faInfo } from '@fortawesome/free-solid-svg-icons';
import posed from 'react-pose';
import {ZoomImage} from '../ExtendedIngredients';
import ReactPlayer from 'react-player';
library.add(faUtensils, faInfo);

/* this component does a hover animation for the fork and knife icon and info icon */
const ForkAndKnife = posed.div({
  hoverable: true,
  pressable: true,
  init: {
    scale: 1,
    boxShadow: '0px 0px 0px rgba(0,0,0,0)'
  },
  hover: {
    scale: 1.3,
    boxShadow: '0px 5px 10px rgba(0,0,0,0)'
  },
  press: {
    scale: 1.1,
    boxShadow: '0px 2px 5px rgba(0,0,0,0)'
  }
});

/* this component is attempting to load all videos related to my recipe creation  */
const Videos = () => {
  const santiUrls = [
    'https://www.youtube.com/embed/z-DdfeYw60I', 
    'https://www.youtube.com/embed/SSueVEKu9tE', 
    'https://www.youtube.com/embed/cuM3bRSdD7I', 
    'https://www.youtube.com/embed/eumYaDUOr3k', 
    'https://www.youtube.com/embed/HwlqzGuiLO0', 
    'https://www.youtube.com/embed/yygMlzUKDOM', 
    'https://www.youtube.com/embed/RY74e2pczkg', 
    'https://www.youtube.com/embed/HiNJeltwVZQ',
  ];

  let loadRandomVideo = santiUrls[Math.floor(Math.random() * 8)];

  return(
    <>
      {santiUrls.map((url, i) => {
        return (
          <ReactPlayer
            className = 'width-height'
            width = '350px'
            height = '250px' 
            key = {i.url}
            url = {loadRandomVideo} />
        )
      })}
    </>
  )
}

/* this component creates a random recipe when the page is refreshed or loaded */
const RandomRecipe = ({ recipes, ingredientScreen, instructionScreen }) => {
   console.log("check for props ", recipes);
   return (
     <>
       {recipes.map((recipe) => {
          let randomRecipeImage = recipe.image;
          let word = recipe.dishTypes;
          console.log('check dish type ', word);
         console.log("check for", recipe);
         return (
                <div className = 'recipe-contain' key={recipe.id}>
                  <img className = 'picture' src = {randomRecipeImage} alt = 'foodImage' />
                  <div className = 'ingredient-button'>
                  <ForkAndKnife className = 'food'>
                    <FontAwesomeIcon 
                      onClick = {()=> ingredientScreen()}  
                      icon = {faUtensils} />
                  </ForkAndKnife>
                  <ForkAndKnife className = 'summary'>
                    <FontAwesomeIcon 
                      onClick = {()=>  instructionScreen()}
                      icon = {faInfo} />
                  </ForkAndKnife>
                  </div>
                  <div className = 'text-container'>
                     <h1 className = 'food-title'>{recipe.title}</h1>
                  </div>  
               </div>
       )})}
       <div className = 'player'>
          <Videos />
       </div>
     </>
   );
 };


export default RandomRecipe;
export {ForkAndKnife}


/*I 
NEED TO WORK ON THE STRINGS OF THE CONTENT
1. CAPITALIZE DISH TYPES
2. TAKE OUT ELEMENTS TAGS OUT OF THE RECIPE.INSTRUCTIONS 
 */
