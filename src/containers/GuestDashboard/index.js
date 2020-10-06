import React from 'react';
import RandomRecipe from '../../components/RandomRecipe';
import ExtendedIngredients from '../../components/ExtendedIngredients';
import Instructions from '../../components/Instructions';
import '../GuestDashboard/guest-dashboard.scss';
// import axios from 'axios';

class GuestDashboard extends React.Component {
    state = {
        isLoaded: false,
        recipes: [],
        modalScreenOpen: false,
        summaryPiece: false,
        instructClicked: false,
        
    }

    componentDidMount() {
        this.getFoodNutritionRecipe();
    }
    
    async getFoodNutritionRecipe () {
        try {
            const response = await fetch('https://api.spoonacular.com/recipes/random?apiKey=c86a374e1b3e4a038683656166753c04');
            const json = await response.json();
            this.setState({ recipes: json.recipes});
        } catch (error) {
            console.log(error);
        }
    }

    instructionsInfoIcon = () => {
        this.setState(prevState => ({instructClicked: !prevState.instructClicked}),
        () => console.log(this.state.instructClicked));
    }

    openModalScreen = () => {
        this.setState(prevState => ({modalScreenOpen: !prevState.modalScreenOpen}),
        ()=> console.log(this.state.modalScreenOpen));
    }

    render() {
        let ingredientModalScreen = <ExtendedIngredients 
                                        ingredientScreen = {this.openModalScreen} 
                                        recipes = {this.state.recipes} />
        
        let foodInstructions = <Instructions 
                                recipes = {this.state.recipes} 
                                instructionScreen = {this.instructionsInfoIcon} />

        if(this.state.modalScreenOpen === true) {
            return ingredientModalScreen;
        }

        if(this.state.instructClicked === true) {
            return foodInstructions;
        }
      return (
          <div className = 'guest-page-dashboard'>
              {this.state.recipes ? (<RandomRecipe 
                recipes = {this.state.recipes} 
                ingredientScreen = {this.openModalScreen}
                instructionScreen = {this.instructionsInfoIcon}>
                {ingredientModalScreen}
                {foodInstructions}
                </RandomRecipe>) : null}
          </div>
      )
    }
}

export default GuestDashboard;