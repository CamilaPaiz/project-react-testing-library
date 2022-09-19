import React from 'react';
import { screen } from '@testing-library/react';
import renderWithRouter from '../renderWithRouter';
import { NotFound } from '../pages';
describe('testando component Not Found', () =>{
  test('Teste se contém h2 com o texto Page requested not found', () => {
    renderWithRouter(<NotFound />);
    const notFoundEl = screen
      .getByRole('heading', { level: 2, name: /page requested not found/i });
    expect(notFoundEl).toBeInTheDocument();
  });
  test('teste se renderiza a imagem https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif', () => {
    renderWithRouter(<NotFound />);
    const image = screen.getByRole('img', { src: 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif' });
    expect(image).toHaveAttribute('src', 'https://media.giphy.com/media/kNSeTs31XBZ3G/giphy.gif');
  });
});
