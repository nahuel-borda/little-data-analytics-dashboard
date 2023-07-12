import axios from 'axios';
import { ModelsDataset, APIResponse } from './interfaces/interfaces';

const apiUrl = process.env.REACT_APP_API_URL;

export function GetModelsAPI () : Promise<APIResponse> {
    return axios.get('http://localhost:8000/model/')
    .then((response) => {
      if (response.status !== 200) {
        throw new Error(`Request failed with status code ${response.status}`);
      }

      const output = response.data as ModelsDataset;
      return { 
        'key': 'models', 
        'output': output
      };
    })
    .catch((err) => {
      throw err;
    });
}