import { FetchedData } from '../type';

const getUsername = (fetchedProfile: FetchedData) => {
  const { data } = fetchedProfile;

  if (data && data.username) {
    const userName: string = data.username;
    const upperName = userName[0].toUpperCase() + userName.slice(1);
    return upperName;
  }

  return 'Profile';
};

export default getUsername;
