import { screen } from '@testing-library/dom';
import { vi } from 'vitest';
import { renderWithRouter } from './utils/renderWithRouter';
import Footer from '../components/Footer';
import Provider from '../context/Provider/Provider';

describe('Testa o componente Footer', () => {
  test('Testa se os botões de meals, drinks e home estão presentes', () => {
    renderWithRouter(<Footer />, { route: '/meals' });

    const homeBtn = screen.getByLabelText('home-btn');
    const mealsBtn = screen.getByLabelText('meals-btn');
    const drinksBtn = screen.getByLabelText('drinks-btn');

    expect(homeBtn).toBeInTheDocument();
    expect(mealsBtn).toBeInTheDocument();
    expect(drinksBtn).toBeInTheDocument();
  });

  test('Testa se os botões de meals, drinks e home estão funcionando', async () => {
    const { user } = renderWithRouter(
      <Provider>
        <Footer />
      </Provider>,
      { route: '/meals' },
    );

    const homeBtn = screen.getByLabelText('home-btn');
    const mealsBtn = screen.getByLabelText('meals-btn');
    const drinksBtn = screen.getByLabelText('drinks-btn');

    const firstLocation = window.location.pathname;

    expect(firstLocation).toBe('/meals');

    await user.click(drinksBtn);

    const secondLocation = window.location.pathname;

    expect(secondLocation).toBe('/drinks');

    await user.click(homeBtn);

    const thirdLocation = window.location.pathname;

    expect(thirdLocation).toBe('/meals');

    await user.click(drinksBtn);
    await user.click(mealsBtn);

    const fourthLocation = window.location.pathname;

    expect(fourthLocation).toBe('/meals');
  });

  // test('Testa se a função handleReset é chamada', async () => {
  //   const { user } = renderWithRouter(
  //     <Provider>
  //       <Footer />
  //     </Provider>,
  //     { route: '/meals' },
  //   );

  //   const handleResetSpy = vi.spyOn(global, 'SubmitEvent');

  //   const homeBtn = screen.getByLabelText('home-btn');

  //   await user.click(homeBtn);

  //   expect(handleResetSpy).toHaveBeenCalled();
  // });
});
