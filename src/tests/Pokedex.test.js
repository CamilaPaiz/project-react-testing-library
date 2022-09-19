import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import renderWithRouter from '../renderWithRouter';
import App from '../App';

describe('testando componente Pokedex', () => {
  test('Teste se a Pokédex tem os botões de filtro', () => {
    renderWithRouter(<App />);
    const buttonAll = screen.getByRole('button', { name: /all/i });
    expect(buttonAll).toBeInTheDocument();
    const buttonElectric = screen.getByRole('button', { name: /electric/i });
    expect(buttonElectric).toBeInTheDocument();
    const buttonFire = screen.getByRole('button', { name: /fire/i });
    expect(buttonFire).toBeInTheDocument();
    const buttonBug = screen.getByRole('button', { name: /bug/i });
    expect(buttonBug).toBeInTheDocument();
    const buttonPoison = screen.getByRole('button', { name: /poison/i });
    expect(buttonPoison).toBeInTheDocument();
    const buttonPsychic = screen.getByRole('button', { name: /psychic/i });
    expect(buttonPsychic).toBeInTheDocument();
    const buttonNormal = screen.getByRole('button', { name: /normal/i });
    expect(buttonNormal).toBeInTheDocument();
    const buttonDragon = screen.getByRole('button', { name: /dragon/i });
    expect(buttonDragon).toBeInTheDocument();
  });

  test('Botões de filtragem por tipo possuem o data-testid=pokemon-type-button', () => {
    renderWithRouter(<App />);
    const buttons = screen.getAllByTestId('pokemon-type-button');
    expect(buttons[0]).toHaveAttribute('data-testid', 'pokemon-type-button');
  });

  test('É possível clicar no botão de filtragem All', () => {
    renderWithRouter(<App />);
    const buttonAll = screen.getByText(/all/i);
    userEvent.click(buttonAll);
    expect(buttonAll).toBeInTheDocument();
  });
});
