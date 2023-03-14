import axios from 'axios';
import { DevicesDataset, APIResponse } from './interfaces/interfaces';

export function GetDevicesAPI () : Promise<APIResponse> {
    return axios.get('http://localhost:8000/devices/')
    .then((response) => {
      if (response.status !== 200) {
        throw new Error(`Request failed with status code ${response.status}`);
      }

      const output = response.data as DevicesDataset;
      return { 
        'key': 'devices', 
        'output': output
      };
    })
    .catch((err) => {
      throw err;
    });
}