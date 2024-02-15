import { screen } from '@testing-library/dom';
import { renderWithRouter } from './utils/renderWithRouter';
import Footer from '../components/Footer';

describe('Testa o componente Footer', () => {
  test('Testa se os ícones de meal e drink estão presentes', () => {
    renderWithRouter(<Footer />, { route: '/meals' });

    expect(screen.getByTestId('drinks-bottom-btn')).toBeInTheDocument();
    expect(screen.getByTestId('meals-bottom-btn')).toBeInTheDocument();
  });
});
