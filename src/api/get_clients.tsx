import axios from 'axios';
import { ChartsDataset, ClientsDataset, APIResponse } from './interfaces/interfaces';

const apiUrl = process.env.REACT_APP_API_URL;

export function GetClientsAPI() : Promise<APIResponse> {
    return axios.get('http://localhost:8000/clients/')
    .then((response) => {
      if (response.status !== 200) {
        throw new Error(`Request failed with status code ${response.status}`);
      }

      const output = response.data as ClientsDataset;
      return { 
        'key': 'clients', 
        'output': output
      };
    })
    .catch((err) => {
      throw err;
    });
}

export function GetClientsByServicesAPI() : Promise<APIResponse> {
  return axios.get('http://localhost:8000/clients/client_by_services/')
  .then((response) => {
    if (response.status !== 200) {
      throw new Error(`Request failed with status code ${response.status}`);
    }

    const output = response.data as ChartsDataset;
    return { 
      'key': 'clients_by_services', 
      'output': output
    };
  })
  .catch((err) => {
    throw err;
  });
}

export function GetTopClientsByServicesAPI() : Promise<APIResponse> {
  return axios.get('http://localhost:8000/clients/top_client_by_services/')
  .then((response) => {
    if (response.status !== 200) {
      throw new Error(`Request failed with status code ${response.status}`);
    }

    const output = response.data as ChartsDataset;
    return { 
      'key': 'top_clients_by_services', 
      'output': output
    };
  })
  .catch((err) => {
    throw err;
  });
}