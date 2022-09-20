import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('testando o componente Pokemon Details', () => {
  test('testando renderização de pokemon details', () => {});
  renderWithRouter(<App />);
  const detailsLink = screen.getByRole('link', { name: /more details/i });
  userEvent.click(detailsLink);

  const textDetails = screen.getByRole('heading', { name: /pikachu details/i });
  expect(textDetails).toBeInTheDocument();

  const summaryEl = screen.getByRole('heading', { name: /summary/i });
  expect(summaryEl).toBeInTheDocument();

  const summaryP = screen.getByText(/This intelligent /i);
  expect(summaryP).toBeInTheDocument();

  const gameLocation = screen
    .getByRole('heading', { name: /game locations of pikachu/i });
  expect(gameLocation).toBeInTheDocument();

  const image = screen.getAllByRole('img', { name: 'Pikachu location' });
  expect(image[0].src).toBe('https://cdn2.bulbagarden.net/upload/0/08/Kanto_Route_2_Map.png');

  const favoritedText = screen.getByText(/pokémon favoritado\?/i);
  expect(favoritedText).toBeDefined();
});
