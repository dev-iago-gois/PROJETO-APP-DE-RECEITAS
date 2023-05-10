import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithRouterAndRedux } from './helpers/renderWithRouter';
import FavoriteRecipes from '../pages/FavoriteRecipes';

const initialState = { recipesReducer: { countFavoriteList: 0, searchRecipes: [] } };
const initialEntries = ['/favorite-recipes'];

const favoriteRecipes = [
  {
    id: '52771',
    type: 'meal',
    nationality: 'Italian',
    category: 'Vegetarian',
    alcoholicOrNot: '',
    name: 'Spicy Arrabiata Penne',
    image: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
  },
  {
    id: '178319',
    type: 'drink',
    nationality: '',
    category: 'Cocktail',
    alcoholicOrNot: 'Alcoholic',
    name: 'Aquamarine',
    image: 'https://www.thecocktaildb.com/images/media/drink/zvsre31572902738.jpg',
  },
];

describe('Teste a tela de receitas favoritas', () => {
  beforeEach(() => {
    localStorage.setItem('favoriteRecipes', JSON.stringify(favoriteRecipes));
    renderWithRouterAndRedux(<FavoriteRecipes />, { initialState, initialEntries });
  });

  afterEach(() => {
    localStorage.clear();
  });

  test('Testa se os componentes renderizam na tela', () => {
    const allFilter = screen.getByRole('button', { name: /all/i });
    const mealFilter = screen.getByRole('button', { name: /meals/i });
    const drinkFilter = screen.getByRole('button', { name: /drinks/i });

    expect(allFilter).toBeInTheDocument();
    expect(mealFilter).toBeInTheDocument();
    expect(drinkFilter).toBeInTheDocument();
  });

  test('Testa se os cards de receitas favoritas são renderizados', async () => {
    const imgObj1 = await screen.findByTestId('0-horizontal-image');
    const imgObj2 = await screen.findByTestId('1-horizontal-image');
    expect(imgObj1).toBeInTheDocument();
    expect(imgObj2).toBeInTheDocument();
  });
});
