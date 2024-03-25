// import { screen, waitFor } from '@testing-library/dom';
// import { renderWithRouter } from './utils/renderWithRouter';
// import Recipes from '../pages/Recipes';
// import MealsProvider from '../context/MealContext/MealsProvider';
// import DrinksProvider from '../context/DrinkContext/DrinksProvider';

// describe('Testa o componente Recipes', () => {
//   test('Testa se as 12 receitas são carregadas corretamente na rota "/meals"', async () => {
//     renderWithRouter(
//       <MealsProvider>
//         <Recipes />
//       </MealsProvider>,
//       { route: '/meals' },
//     );

//     await waitFor(() => {
//       screen.getByText('Corba');
//     }, { timeout: 5000 });

//     screen.getAllByText('Corba');
//   });
//   test('Testa se as 12 receitas são carregadas corretamente na rota "/drinks"', async () => {
//     renderWithRouter(
//       <DrinksProvider>
//         <Recipes />
//       </DrinksProvider>,
//       { route: '/drinks' },
//     );

//     await waitFor(() => {
//       screen.getByText('GG');
//     }, { timeout: 5000 });

//     screen.getAllByText('GG');
//   });
// });
