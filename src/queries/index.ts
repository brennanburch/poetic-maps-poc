import { QueryFunctionContext } from '@tanstack/react-query';
import axios from 'axios';

const mapsQuery = ({ queryKey }: QueryFunctionContext<[string, string, string]>) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_key, mapsCollectionId, poiCollectionId] = queryKey;
  return axios
    .post('/api', {
      mapsCollectionId,
      poiCollectionId,
    })
    .then((response) => {
      return response;
    })
    .catch((err: string) => {
      console.log(err);
      throw new Error(err);
    });
};

export default mapsQuery;
