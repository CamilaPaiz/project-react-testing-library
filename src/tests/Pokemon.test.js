import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe.only('testando component pokemon', () => {
  test('A imagem do pokemon possui o src correto', () => {
    renderWithRouter(<App />);
    const pokemon = screen.getByRole('img', { name: /pikachu sprite/i });
    expect(pokemon.src).toBe('https://cdn2.bulbagarden.net/upload/b/b2/Spr_5b_025_m.png');
  });
  test('testando imagem e seus atributos', () => {
    renderWithRouter(<App />);
    const detailsLink = screen.getByRole('link', { name: /more details/i });
    userEvent.click(detailsLink);
    const check = screen.getByRole('checkbox', { name: /pokémon favoritado\?/i });
    userEvent.click(check);

    const favIcon = screen.getByRole('img', { name: /pikachu is marked as favorite/i });
    expect(favIcon.src.endsWith('star-icon.svg')).toBeTruthy();

    const pokemonTypeEl = screen.getByTestId('pokemon-type');
    const text = pokemonTypeEl.innerHTML;
    expect(text).toBe('Electric');
    expect(pokemonTypeEl).toBeInTheDocument();
  });
  test('É exibido na tela um link com o href /pokemons/<id>', () => {
    renderWithRouter(<App />);
    const linkEl = screen.getByRole('link', { name: /more details/i });
    expect(linkEl).toBeInTheDocument();
  });
});
