import { screen } from '@testing-library/dom';
import { renderWithRouter } from './utils/renderWithRouter';
import Loading from '../components/Loading/Loading';
import Provider from '../context/Provider/Provider';

describe('Testes do componente Loading', () => {
  test('Testa se o componente é rederizado corretamente', () => {
    renderWithRouter(
      <Provider>
        <Loading />
      </Provider>,
      { route: '/meals' },
    );

    const loadingComponent = screen.getByLabelText('desktop-loading');

    expect(loadingComponent).toBeInTheDocument();
  });
});
