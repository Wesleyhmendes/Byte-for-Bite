import { FetchedData } from '../type';

const checkInProgress = (fetchedData: FetchedData) => {
  const { data } = fetchedData;
  if (data) {
    return !(data.message);
  }
  return false;
};

export default checkInProgress;
