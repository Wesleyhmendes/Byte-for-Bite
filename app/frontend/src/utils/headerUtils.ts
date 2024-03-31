import { User } from '../type';

export const getHeaderTitle = (route: string) => {
  if (route !== '/meals') {
    return 'Drinks';
  }

  return 'Meals';
};

export const getProfileImage = (data: any, defaultIcon: string) => {
  const user: User = data;
  if (!data || !user.profileImage) {
    return defaultIcon;
  }

  return user.profileImage;
};
