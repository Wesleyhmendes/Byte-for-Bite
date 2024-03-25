// import { screen, waitFor } from '@testing-library/dom';
// import { renderWithRouter } from './utils/renderWithRouter';
// import App from '../App';

// const routeInProgress = '/drinks/178319/in-progress';

// const ingredients = ['Hpnotiq', 'Pineapple Juice', 'Banana Liqueur'];

// describe('Testa o componente RecipesInProgress', () => {
//   test('Testa se existe input para cada ingredientes', async () => {
//     renderWithRouter(<App />, { route: routeInProgress });

//     await waitFor(() => {
//       screen.getByText('Aquamarine');
//     }, { timeout: 5000 });

//     screen.debug();

//     ingredients.forEach((ingredient) => {
//       screen.getByLabelText(ingredient);
//     });
//   });

//   test('Testa se ao selecionar todos os checkbox o botão "Finalizar" é ativado e redireciona a aplicação para a rota "/done-recipes"', async () => {
//     const { user } = renderWithRouter(<App />, { route: routeInProgress });

//     await waitFor(() => {
//       screen.getByText('Aquamarine');
//     }, { timeout: 5000 });

//     const ingredient1 = screen.getByLabelText('Hpnotiq');
//     const ingredient2 = screen.getByLabelText('Pineapple Juice');
//     const ingredient3 = screen.getByLabelText('Banana Liqueur');

//     await user.click(ingredient1);
//     await user.click(ingredient2);
//     await user.click(ingredient3);

//     const buttonFinish = screen.getByTestId('finish-recipe-btn');
//     await user.click(buttonFinish);

//     screen.debug();

//     expect(window.location.pathname).toBe('/done-recipes');
//   });

//   test('Testa se ao selecionar apenas um ingrediente botão "Finalizar" não é ativado e a rota permanece a mesma', async () => {
//     const { user } = renderWithRouter(<App />, { route: routeInProgress });

//     await waitFor(() => {
//       screen.getByText('Aquamarine');
//     }, { timeout: 5000 });

//     const ingredient1 = screen.getByLabelText('Hpnotiq');

//     await user.click(ingredient1);

//     const buttonFinish = screen.getByTestId('finish-recipe-btn');
//     await user.click(buttonFinish);

//     expect(window.location.pathname).toBe(routeInProgress);
//   });
// });
