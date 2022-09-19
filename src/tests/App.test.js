import React from 'react';
import { screen, act } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import renderWithRouter from '../renderWithRouter';

describe('Testando componente App', () => {
  test('Teste se o topo da aplicação contém link home', () => {
    renderWithRouter(<App />);
    const homeElLink = screen.getByRole('link', { name: /home/i });
    expect(homeElLink).toBeInTheDocument();
  });
  test('Teste se o topo da aplicação contém link about', () => {
    renderWithRouter(<App />);
    const aboutElLink = screen.getByRole('link', { name: /about/i });
    expect(aboutElLink).toBeInTheDocument();
  });
  test('Teste se o topo da aplicação contém link favorite pokémons', () => {
    renderWithRouter(<App />);
    const favPokemonElLink = screen.getByRole('link', { name: /favorite pokémons/i });
    expect(favPokemonElLink).toBeInTheDocument();
  });
  test('Teste se a página é redirecionada para página inicial ao clicar em Home', () => {
    const { history } = renderWithRouter(<App />);
    const homeElLink = screen.getByRole('link', { name: /home/i });
    userEvent.click(homeElLink);
    expect(history.location.pathname).toBe('/');
  });
  test('Teste se a página é redirecionada para  /about ao clicar em About', () => {
    const { history } = renderWithRouter(<App />);
    const aboutElLink = screen.getByRole('link', { name: /about/i });
    userEvent.click(aboutElLink);
    expect(history.location.pathname).toBe('/about');
  });
  test(
    'Teste se ao clicar em pokémons favoritados a página é redirecionada para /favorites',
    () => {
      const { history } = renderWithRouter(<App />);
      const favPokemonsElLink = screen.getByRole('link', { name: /favorite pokémons/i });
      userEvent.click(favPokemonsElLink);
      expect(history.location.pathname).toBe('/favorites');
    },
  );
  test(
    'Teste se a página é redirecionada para /not found ao entrar em uma url desconhecida',
    () => {
      const { history } = renderWithRouter(<App />);
      act(() => {
        history.push('/alerta');
      });

      const notFoundEl = screen
        .getByRole('heading', { name: /page requested not found/i });
      expect(history.location.pathname).toBe('/alerta');
      expect(notFoundEl).toBeInTheDocument();
    },
  );
});
