import { FetchedData } from '../type';

const getProfileId = (fetchedProfile: FetchedData) => {
  const { data } = fetchedProfile;
  if (data) {
    const profileId: number = data.id;
    return profileId;
  }

  return 0;
};

export default getProfileId;
