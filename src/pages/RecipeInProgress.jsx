import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import copy from 'clipboard-copy';
import { Link } from 'react-router-dom';
import blackHeartIcon from '../images/blackHeartIcon.svg';
import whiteHeartIcon from '../images/whiteHeartIcon.svg';
import { fetchDrinkByIdAPI } from '../services/drinksAPI';
import { fetchFoodByIdAPI } from '../services/mealsAPI';
import { getLocalStorage, setLocalStorage } from '../services/localStorage';

function RecipeInProgress() {
  const [recipeDetails, setRecipeDetails] = useState([]);
  const [ingredientDetails, setIngredientDetails] = useState([]);
  const [isLinkCopied, setIsLinkCopied] = useState(false);
  const [favoriteIcon, setFavoriteIcon] = useState(false);
  const [checkboxValues, setCheckboxValues] = useState({});
  const [isFinishBtnEnabled, setIsFinishBtnEnabled] = useState(false);
  const history = useHistory();
  const LINK_COPIED_MESSAGE_TIME = 4000;
  const LAST_LETTER = -1;
  const recipeID = history.location.pathname.split('/')[2];
  const recipeType = history.location.pathname.split('/')[1];

  useEffect(() => {
    const handleFetchDetails = async () => {
      let recipeDetail;
      let recipeIngredient;
      if (recipeType === 'meals') {
        recipeDetail = await fetchFoodByIdAPI(recipeID);
        recipeIngredient = Object
          .entries(recipeDetail[0])
          .filter(([key, value]) => key.startsWith('strIngredient') && value);
      }
      if (recipeType === 'drinks') {
        recipeDetail = await fetchDrinkByIdAPI(recipeID);
        recipeIngredient = Object
          .entries(recipeDetail[0])
          .filter(([key, value]) => key.startsWith('strIngredient') && value);
      }
      setRecipeDetails(recipeDetail);
      setIngredientDetails(recipeIngredient);
    };
    handleFetchDetails();
  }, [recipeID, recipeType]);

  useEffect(() => {
    const recipesInProgress = getLocalStorage('inProgressRecipes') || {};
    const favoriteRecipes = getLocalStorage('favoriteRecipes') || [];

    if (recipesInProgress[recipeType]?.[recipeID]) {
      setCheckboxValues(recipesInProgress);
    }

    if (favoriteRecipes.some((recipe) => recipe.id === recipeID)) {
      setFavoriteIcon(true);
    }
  }, [recipeType, recipeID]);

  const handleShareButton = () => {
    const modifiedURL = window.location.href.replace('/in-progress', '');
    copy(modifiedURL);
    setIsLinkCopied(true);
    setTimeout(() => setIsLinkCopied(false), LINK_COPIED_MESSAGE_TIME);
  };

  const handleFavoriteButton = () => {
    const favoriteObj = {
      id: recipeDetails[0].idMeal || recipeDetails[0].idDrink,
      type: recipeType.slice(0, LAST_LETTER),
      nationality: recipeDetails[0].strArea || '',
      category: recipeDetails[0].strCategory,
      alcoholicOrNot: recipeDetails[0].strAlcoholic || '',
      name: recipeDetails[0].strMeal || recipeDetails[0].strDrink,
      image: recipeDetails[0].strMealThumb || recipeDetails[0].strDrinkThumb,
    };

    const favoriteRecipes = getLocalStorage('favoriteRecipes') || [];
    const recipeExists = favoriteRecipes.some((recipe) => recipe.id === favoriteObj.id);

    if (recipeExists) {
      const favoriteRecipesFiltered = favoriteRecipes
        .filter((recipe) => recipe.id !== favoriteObj.id);
      setLocalStorage('favoriteRecipes', favoriteRecipesFiltered);
    } else {
      const newFavoriteRecipes = [...favoriteRecipes, favoriteObj];
      setLocalStorage('favoriteRecipes', newFavoriteRecipes);
    }
    setFavoriteIcon(!favoriteIcon);
  };

  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckboxValues((prevState) => ({
      ...prevState,
      [recipeType]: {
        ...prevState[recipeType],
        [recipeID]: {
          ...(prevState[recipeType]?.[recipeID] || {}),
          [name]: checked,
        },
      },
    }));

    const inProgressRecipes = getLocalStorage('inProgressRecipes') || {};
    setLocalStorage('inProgressRecipes', {
      ...inProgressRecipes,
      [recipeType]: {
        ...(inProgressRecipes[recipeType] || {}),
        [recipeID]: {
          ...(inProgressRecipes[recipeType]?.[recipeID] || {}),
          [name]: checked,
        },
      },
    });
  };

  useEffect(() => {
    const checkboxes = Object.values(checkboxValues?.[recipeType]?.[recipeID] || {});
    const checkboxesChecked = checkboxes.filter(Boolean);
    setIsFinishBtnEnabled(ingredientDetails.length === checkboxesChecked.length);
  }, [checkboxValues, ingredientDetails, recipeID, recipeType]);

  const getCurrentDateTime = () => { const now = new Date(); return now.toISOString(); };

  const handleFinishButton = () => {
    const doneObj = {
      id: recipeDetails[0].idMeal || recipeDetails[0].idDrink,
      nationality: recipeDetails[0].strArea || '',
      name: recipeDetails[0].strMeal || recipeDetails[0].strDrink,
      category: recipeDetails[0].strCategory,
      image: recipeDetails[0].strMealThumb || recipeDetails[0].strDrinkThumb,
      tags: recipeDetails[0].strTags ? recipeDetails[0].strTags
        .split(',').map((tag) => tag.trim()) : [],
      alcoholicOrNot: recipeDetails[0].strAlcoholic || '',
      type: recipeType.slice(0, LAST_LETTER),
      doneDate: getCurrentDateTime(),
    };

    const doneRecipes = getLocalStorage('doneRecipes') || [];
    const recipeExists = doneRecipes.some((recipe) => recipe.id === doneObj.id);

    if (recipeExists) {
      const doneRecipesFiltered = doneRecipes
        .filter((recipe) => recipe.id !== doneObj.id);
      setLocalStorage('doneRecipes', doneRecipesFiltered);
    } else {
      const newDoneRecipes = [...doneRecipes, doneObj];
      setLocalStorage('doneRecipes', newDoneRecipes);
    }
  };

  return (
    <div>
      <p>{`Hello World! Your recipe type is: ${recipeType}`}</p>
      <button id="share-btn" data-testid="share-btn" onClick={ handleShareButton }>
        Compartilhar receita
      </button>
      <button
        id="favorite-btn"
        data-testid="favorite-btn"
        onClick={ handleFavoriteButton }
        src={ favoriteIcon ? blackHeartIcon : whiteHeartIcon }
      >
        <img src={ favoriteIcon ? blackHeartIcon : whiteHeartIcon } alt="favorite icon" />
      </button>
      {isLinkCopied && <p>Link copied!</p>}
      {recipeDetails.map((recipe, index) => (
        <div key={ index }>
          <p data-testid="recipe-title">{recipe.strDrink || recipe.strMeal}</p>
          {recipe.strAlcoholic && (
            <p data-testid="recipe-category">{recipe.strAlcoholic}</p>
          )}
          <p data-testid="recipe-category">{recipe.strCategory}</p>
          <div>
            <p>Ingredients:</p>
            {ingredientDetails.map((ingredient, i) => (
              <label
                key={ i }
                data-testid={ `${i}-ingredient-step` }
                style={ {
                  textDecoration: (
                    checkboxValues[recipeType]?.[recipeID]?.[`ingredientstep${i}`]
                      ? 'line-through solid rgb(0, 0, 0)' : 'none'
                  ),
                } }
              >
                <input
                  type="checkbox"
                  id={ `ingredientstep${i}` }
                  name={ `ingredientstep${i}` }
                  checked={ checkboxValues[recipeType]?.
                    [recipeID]?.[`ingredientstep${i}`] || false }
                  onChange={ handleCheckboxChange }
                />
                {`${ingredient[1]} - ${recipe[`strMeasure${i + 1}`]}`}
              </label>
            ))}
          </div>
          <p> Instructions: </p>
          <p data-testid="instructions">{recipe.strInstructions}</p>
          {recipeType === 'meals' && (
            <iframe
              data-testid="video"
              title="video"
              width="320"
              height="240"
              src={ recipe.strYoutube.replace('watch?v=', 'embed/') }
            />
          )}
          <img
            src={ recipe.strDrinkThumb || recipe.strMealThumb }
            alt="Product"
            data-testid="recipe-photo"
          />
        </div>
      ))}
      <Link to="/done-recipes">
        <button
          data-testid="finish-recipe-btn"
          className="fixed bottom-0"
          disabled={ !isFinishBtnEnabled }
          onClick={ handleFinishButton }
        >
          Finalizar
        </button>
      </Link>
    </div>
  );
}
export default RecipeInProgress;
