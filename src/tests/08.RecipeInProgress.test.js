import React from 'react';
import { screen, waitFor, act } from '@testing-library/react';
import clipboardCopy from 'clipboard-copy';
import userEvent from '@testing-library/user-event';
import { renderWithRouterAndRedux } from './helpers/renderWithRouter';
import App from '../App';
import fetch from '../../cypress/mocks/fetch';

const initialState = { recipesReducer: { countFavoriteList: 0, searchRecipes: [] } };

const LINK_MEALS = '/meals/52771/in-progress';
const LINK_DRINK = '/drinks/15997/in-progress';

// const favoriteRecipe = [{ id: 52771 }];

const drinkInProgress = {
  drinks: {
    15997: {
      ingredientstep0: true,
      ingredientstep1: false,
      ingredientstep2: false,
    },
  },
};

// jest.mock('../services/localStorage', () => ({
//   getLocalStorage: jest.fn(),
//   setLocalStorage: jest.fn(),
// }));

jest.mock('clipboard-copy', () => jest.fn());

describe('Testa a tela de detalhes de uma receita', () => {
  beforeEach(() => {
    jest.spyOn(global, 'fetch').mockImplementation(fetch);
  });

  afterAll(() => localStorage.clear());

  test('Testa se os componentes renderizam na tela corretamente na página de Meals', async () => {
    // jest.spyOn(localStorage, 'getItem').mockReturnValue(JSON.stringify(favoriteRecipe));
    // localStorage.getItem('favoriteRecipes', favoriteRecipe);
    // localStorage.getItem.mockImplementation(() => JSON.stringify(favoriteRecipe));

    const { history } = renderWithRouterAndRedux(<App />, { initialState });
    act(() => {
      history.push(LINK_MEALS);
    });

    expect(history.location.pathname).toBe(LINK_MEALS);

    await waitFor(() => {
      expect(screen.getByTestId('recipe-photo')).toBeInTheDocument();
    });
    expect(screen.getByTestId('recipe-title')).toBeInTheDocument();
    const shareBtn = screen.getByTestId('share-btn');
    const favoriteBtn = screen.getByTestId('favorite-btn');
    expect(shareBtn).toBeInTheDocument();
    expect(favoriteBtn).toBeInTheDocument();
    expect(favoriteBtn).toHaveAttribute('src', 'whiteHeartIcon.svg');

    userEvent.click(favoriteBtn);
    expect(favoriteBtn).toHaveAttribute('src', 'blackHeartIcon.svg');

    userEvent.click(shareBtn);

    await waitFor(() => expect(clipboardCopy).toHaveBeenCalledTimes(1));
    expect(screen.getByText('Link copied!')).toBeInTheDocument();
  });

  test('Testa se os elementos são renderizados corretamente na página de Drinks', async () => {
    const { history } = renderWithRouterAndRedux(<App />, { initialState });
    localStorage.setItem('inProgressRecipes', JSON.stringify(drinkInProgress));
    act(() => {
      history.push(LINK_DRINK);
    });

    expect(history.location.pathname).toBe(LINK_DRINK);

    await waitFor(() => {
      expect(screen.getByTestId('recipe-photo')).toBeInTheDocument();
    });

    const checkboxes = screen.getAllByRole('checkbox');
    expect(checkboxes[0]).toBeChecked();
    expect(checkboxes).toHaveLength(3);

    const secondIngredient = screen.getByTestId('1-ingredient-step');
    const thirdIngredient = screen.getByTestId('2-ingredient-step');
    const finishBtn = screen.getByTestId('finish-recipe-btn');
    expect(finishBtn).toBeInTheDocument();
    expect(finishBtn).toBeDisabled();

    userEvent.click(secondIngredient);
    userEvent.click(thirdIngredient);

    expect(finishBtn).toBeEnabled();
    userEvent.click(finishBtn);

    expect(history.location.pathname).toBe('/done-recipes');
    expect(screen.getByTestId('0-horizontal-image')).toBeInTheDocument();
  });
});
