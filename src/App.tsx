import DrinksProvider from './context/DrinkContext/DrinksProvider';
import MealsProvider from './context/MealContext/MealsProvider';
import UserInfoProvider from './context/UserInfo/UserInfoProvider';
import RoutesApp from './routes/RoutesApp';

export default function App() {
  return (
    <UserInfoProvider>
      <DrinksProvider>
        <MealsProvider>
          <RoutesApp />
        </MealsProvider>
      </DrinksProvider>
    </UserInfoProvider>
  );
}
