import React, {useState} from 'react';
import './random-recipe.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faUtensils, faInfo } from '@fortawesome/free-solid-svg-icons';
// import { useSpring, animated } from 'react-spring';
library.add(faUtensils, faInfo);


const RandomRecipe = ({ recipes, ingredientScreen }) => {
   console.log("check for props ", recipes);
  //  const [ state, toggle ] = useState(true);
  //  const { x } = useSpring({ from: { x: 0 }, x: state ? 1 : 0, config: { duration: 1000 } })
   return (
     <>
       {recipes.map((recipe) => {
          let randomRecipeImage = recipe.image;
          let word = recipe.dishTypes;
          console.log('check dish type ', word);
         console.log("check for", recipe);
         return <div className = 'recipe-contain' key={recipe.id}>
                  <img className = 'picture' src = {randomRecipeImage} alt = 'foodImage' />
                  <div className = 'ingredient-button'>
                    <FontAwesomeIcon 
                      // style = {{
                      //   opacity: x.interpolate({ range: [0, 1], output: [0.3, 1] }),
                      //   transform: x.interpolate({
                      //     range: [0, 0.25, 0.35, 0.45, 0.55, 0.65, 0.75, 1],
                      //     output: [1, 0.97, 0.9, 1.1, 0.9, 1.1, 1.03, 1]})
                      //     .interpolate(x => `scale(${x})`)
                      // }}
                      onClick = {()=>ingredientScreen()} 
                      className = 'food' 
                      icon = {faUtensils} />
                    <FontAwesomeIcon 
                      className = 'summary' 
                      icon = {faInfo} />
                  </div>
                  <div className = 'text-container'>
                     <h1 className = 'food-title'>{recipe.title}</h1>
                     <h3 className = 'culture'>Culture Type: {recipe.cuisines}</h3>
                     <h4 className = 'dish-type'>{recipe.dishTypes}</h4>
                     <p className = 'instructions'><strong>Instructions: </strong> {recipe.instructions}</p>
                  </div>   
               </div>;
       })}
     </>
   );
 };

export default RandomRecipe;

/*I 
NEED TO WORK ON THE STRINGS OF THE CONTENT
1. CAPITALIZE DISH TYPES
2. TAKE OUT ELEMENTS TAGS OUT OF THE RECIPE.INSTRUCTIONS 
 */
