import React from 'react';
// import food from '../../images/food-diets-options.jpg';
import './landing.scss';


const Landing = () => (
    <div className = 'land-img-container'>
      {/* <img className = 'foods' src = {food} alt = 'Food Diets' /> */}
      <div className = 'landing-content-container'>
        <h1>Welcome to Taste Budz</h1>
        <p>This is the Hub for personal recipes being shared by it's users.</p>
      </div>
    </div>
)

export default Landing;
