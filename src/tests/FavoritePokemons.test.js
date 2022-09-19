import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import { FavoritePokemons } from '../pages';

describe('testando component Favorite Pokémons', () => {
  test('Aparece a mensagem No favorite pokemon found, caso não haja favoritados;', () => {
    renderWithRouter(<FavoritePokemons />);
    const noFavPokemons = screen
      .getByText(/no favorite pokemon found/i);
    expect(noFavPokemons).toBeInTheDocument();
  });
});
