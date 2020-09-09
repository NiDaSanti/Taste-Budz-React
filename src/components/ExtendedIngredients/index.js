import React from 'react';
import RandomRecipe, {ForkAndKnife} from '../RandomRecipe';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import posed from 'react-pose';
import { tween } from 'popmotion';
import './extended.scss';
library.add(faTimes);

// const IngredientPanel = posed.div({
//   fullscreen: {
//     width: '100vw',
//     height: '100vh',
//     transition: tween,
//     flip: true
//   },
//   thumbnail: {
//     width: 100,
//     height: 100,
//     transition: tween,
//     flip: true
//   }
// })

const Frame = posed.div({
  init: {
    applyAtEnd: { display: 'none' },
    opacity: 0
  },
  zoom: {
    applyAtStart: { display: 'block' },
    opacity: 1
  }
});

const transition = { duration: 400, ease: [0.08, 0.69, 0.2, 0.99] };

const Image = posed.img({
  init: {
    position: 'static',
    width: 'auto',
    height: 'auto', 
    transition,
    flip: true
  },
  zoom: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    transition,
    flip: true
  }
});

class ZoomImage extends React.Component {
  state = { isZoomed: false };

  zoomIn() {
    window.addEventListener('scroll', this.zoomOut);
    this.setState({ isZoomed: true });
  }

  zoomOut = () => {
    window.removeEventListener('scroll', this.zoomOut);
    this.setState({ isZoomed: false });
  };

  toggleZoom = () => (this.state.isZoomed ? this.zoomOut() : this.zoomIn());

  render() {
    const { isZoomed } = this.state;
    const { imageWidth, imageHeight, ...props } = this.props;
    const pose = isZoomed ? 'zoom' : 'init';

    return(
      <div style = {{ width: imageWidth, height: imageHeight }}
      onClick = {this.toggleZoom}>
        <Frame pose={pose} className = 'frame' />
        <Image pose={pose} {...props} />
      </div>
    )
  }
}

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
                            <ZoomImage 
                              imageWidth={100} 
                              imageHeight={100} 
                              className = 'detailed-ing-pixel' 
                              key = {det.image} 
                              src = {'https://spoonacular.com/cdn/ingredients_100x100/' + ingredientImage} 
                              alt = 'Food' />
                            <ol>
                              <li className = 'detail-original' key = {det.original}>{det.original}</li>
                            </ol>
                          </div>
                  }))}
                </div>
      }))}
    </div>
  )
}
export default ExtendedIngredients;
export { ZoomImage }
              






/* So far most things are working fine in the detailed ingredient page, but I still need 
 to finish a few more things
 1. The images do not work.
 2. My last p element on line 40 is not working properly.
 
 Last note for the evening....

 adding style to the extended ingredient component....
 
 */