import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom/cjs/react-router-dom.min';
import Header from '../components/Header';
import FavoriteRecipesList from '../components/RecipesList';

function DoneRecipes() {
  const [filter, setFilter] = useState('All');
  const [pageType, setPageType] = useState('');
  const location = useLocation();

  useEffect(() => {
    // Current URL
    const URL = location.pathname.split('/')[1];
    setPageType(URL);
  }, []);

  const handleFilterClick = ({ target: { innerText } }) => {
    setFilter(innerText);
  };

  return (
    <>
      <Header title="Done Recipes" searchBtn={ false } />
      <div>Done Recipes</div>
      <button
        id="filter-by-all-btn"
        data-testid="filter-by-all-btn"
        onClick={ handleFilterClick }
      >
        All
      </button>
      <button
        id="filter-by-meal-btn"
        data-testid="filter-by-meal-btn"
        onClick={ handleFilterClick }
      >
        Meals
      </button>
      <button
        id="filter-by-drink-btn"
        data-testid="filter-by-drink-btn"
        onClick={ handleFilterClick }
      >
        Drinks
      </button>
      <FavoriteRecipesList
        listFilter={ filter }
        pageType={ pageType }
      />
    </>
  );
}

export default DoneRecipes;
