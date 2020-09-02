import React from 'react';
import './extended.scss';
import RandomRecipe, {ForkAndKnife} from '../RandomRecipe';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
library.add(faTimes);


const ExtendedIngredients = (props) => {
  let ingredient = props.recipes;
  console.log('hello world ', ingredient);
  let exitModal = <RandomRecipe />;
  if(props.OpenModalScreen === false) {
    return exitModal;
  }

  return(
    <div style = {{backgroundColor: '#9bd7d5'}}>
      {ingredient.map((ing => {
        console.log(ing);
        let detailsIng = ing.extendedIngredients;
        console.log('now this is the test ', detailsIng);
        return <div className = 'ingredient-container' key = {ing.id}>
                <div className = 'exit-btn-contain'>
                  <ForkAndKnife className = 'exit'>
                    <FontAwesomeIcon onClick = {props.ingredientScreen} className = 'exit' icon = {faTimes} />
                  </ForkAndKnife>
                </div>
                {detailsIng.map((det => {
                  let ingMeasurements = det.measures.us;
                  let ingredientImage = 'https://ya-webdesign.com/images250_/placeholder-image-png.png';
                  console.log('Im testing this default image', ingredientImage);
                  console.log('I need to see if this works ', det);
                  console.log('A new line so I can understand the issue ', det.image);
                  console.log('I need the metrics in U.S ', ingMeasurements.amount);
                  if(det.image) {
                    ingredientImage = det.image;
                  }
                  return <div className = 'detailed-ing-in-metrics' key = {det.id}>
                          <img className = 'detailed-ing-pixel' key = {det.image} src = {'https://spoonacular.com/cdn/ingredients_100x100/' + ingredientImage} alt = 'Food' />
                          <ol>
                            <li className = 'name-details'>{det.name}</li>
                            <li className = 'original-name-details'>{det.originalName}</li>
                            <li className = 'detail-original' key = {det.original}>{det.original}</li>
                            <li className = 'measure-amount'>{ingMeasurements.amount}{'\n'}{ingMeasurements.unitShort} or {ingMeasurements.amount}{'\n'}{ingMeasurements.unitLong}</li>
                          </ol>
                        </div>

                }))}
              </div>
      }))}
    </div>
  )
}
export default ExtendedIngredients;




/* So far most things are working fine in the detailed ingredient page, but I still need 
 to finish a few more things
 1. The images do not work.
 2. My last p element on line 40 is not working properly.
 
 Last note for the evening....

 adding style to the extended ingredient component....
 
 */