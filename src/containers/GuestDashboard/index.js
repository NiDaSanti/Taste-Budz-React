import React from 'react';
import RandomRecipe from '../../components/RandomRecipe';
import ExtendedIngredients from '../../components/ExtendedIngredients';
// import AnalyzedRecipeInstruction from '../../components/AnalyzedRecipeInstruction';

class GuestDashboard extends React.Component {
    state = {
        isLoaded: false,
        recipes: [],
        modalScreenOpen: false,
        summaryPiece: false,
        
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

    handleSummaryOfRandomRecipe = () => {
        this.setState(prevState => ({summaryPiece: !prevState.summaryPiece}),
        () => console.log(this.state.summaryPiece));
    }

    openModalScreen = () => {
        this.setState(prevState => ({modalScreenOpen: !prevState.modalScreenOpen}),
        ()=> console.log(this.state.modalScreenOpen));
    }

    render() {
        let ingredientModalScreen = <ExtendedIngredients 
                                        ingredientScreen = {this.openModalScreen} 
                                        recipes = {this.state.recipes} />

        if(this.state.modalScreenOpen === true) {
            return ingredientModalScreen;
        }
      return (
          <div className = 'guest-page-dashboard'>
              {this.state.recipes ? (<RandomRecipe 
                recipes = {this.state.recipes} 
                ingredientScreen = {this.openModalScreen}
                recipeSummaryLog = {this.handleSummaryOfRandomRecipe}>
                {ingredientModalScreen}
                {/* <AnalyzedRecipeInstruction recipes = {this.state.recipes} /> */}
                </RandomRecipe>) : null}
          </div>
      )
    }
}

export default GuestDashboard;