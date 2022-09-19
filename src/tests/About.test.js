import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import { About } from '../pages';

describe('Testando componente About', () => {
  test('teste se a página contém as informações sobre a Pokédex', () => {
    renderWithRouter(<About />);
    const pokedexInfo = screen
      .getByText(/this application simulates a pokédex/i);
    expect(pokedexInfo).toBeInTheDocument();
    const pokeInfo2 = screen
      .getByText(/one can filter pokémons by type/i);
    expect(pokeInfo2).toBeInTheDocument();
  });
  test('teste se a página contém heading h2 com o texto About Pokédex', () => {
    renderWithRouter(<About />);
    const pokedexHeading = screen
      .getByRole('heading', { level: 2, name: /about pokédex/i });
    expect(pokedexHeading).toBeInTheDocument();
  });
  test('teste se a página contém imagem Pokédex', () => {
    renderWithRouter(<About />);
    const image = screen.getByRole('img', { src: 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png' });
    expect(image).toHaveAttribute('src', 'https://cdn2.bulbagarden.net/upload/thumb/8/86/Gen_I_Pok%C3%A9dex.png/800px-Gen_I_Pok%C3%A9dex.png');
  });
});
