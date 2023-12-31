import React from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import '../carroussel.css';

const MAX_RECIPE_RECOMMENDATION = 5;

export default function Recommendations({ baseRecipes }) {
  const maxRecommendations = baseRecipes
    .filter((_item, index) => index <= MAX_RECIPE_RECOMMENDATION);

  const settings = {
    dots: true,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 2,
  };
  return (
    <Slider { ...settings }>
      {maxRecommendations.map((recipe, index) => (
        <div
          className="recommendation-card"
          key={ index }
          data-testid={ `${index}-recommendation-card` }
        >
          <p
            data-testid={ `${index}-recommendation-title` }
          >
            {recipe.strDrink || recipe.strMeal}
          </p>
          <img
            src={ recipe.strDrinkThumb || recipe.strMealThumb }
            alt="Product"
            data-testid={ `${index}-card-img` }
          />
        </div>
      ))}
    </Slider>
  );
}

Recommendations.propTypes = {
  baseRecipes: PropTypes.arrayOf(PropTypes.shape(PropTypes.string)),
}.isRequired;
