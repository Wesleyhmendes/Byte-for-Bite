import DrinksProvider from './context/DrinkContext/DrinksProvider';
import MealsProvider from './context/MealContext/MealsProvider';
import UserInfoProvider from './context/UserInfo/UserInfoProvider';
import RoutesApp from './routes/RoutesApp';
import Provider from './context/Provider/Provider';
import { useState } from 'react';

export default function App() {  
  return (
    <UserInfoProvider>
      <Provider>
        <DrinksProvider>
          <MealsProvider>
            <RoutesApp />
          </MealsProvider>
        </DrinksProvider>
      </Provider>
    </UserInfoProvider>
  );
}
