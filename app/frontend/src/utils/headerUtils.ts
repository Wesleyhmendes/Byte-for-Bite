import { User } from '../type';
import mealTitle from '../assets/Images/Meals-title.png';
import drinkTitle from '../assets/Images/Drinks-title.png';

export const getHeaderTitle = (route: string) => {
  if (route !== '/meals') {
    return drinkTitle;
  }

  return mealTitle;
};

export const getProfileImage = (data: any, defaultIcon: string) => {
  const user: User = data;
  if (!data || !user.profileImage) {
    return defaultIcon;
  }

  return user.profileImage;
};
