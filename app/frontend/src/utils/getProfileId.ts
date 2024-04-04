import { FetchedData } from '../type';

const getProfileId = (fetchedProfile: FetchedData) => {
  if (fetchedProfile?.data) {
    const profileId: number = fetchedProfile?.data?.id;
    return profileId;
  }

  return 0;
};

export default getProfileId;
