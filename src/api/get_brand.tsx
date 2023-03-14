import axios from 'axios';
import { BrandsDataset, APIResponse} from './interfaces/interfaces';

export function GetBrandsAPI () : Promise<APIResponse> {
    return axios.get('http://localhost:8000/brand/')
    .then((response) => {
      if (response.status !== 200) {
        throw new Error(`Request failed with status code ${response.status}`);
      }

      const output = response.data as BrandsDataset;
      return { 
        'key': 'brands', 
        'output': output
      };
    })
    .catch((err) => {
      throw err;
    });
}