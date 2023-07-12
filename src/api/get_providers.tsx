import axios from 'axios';
import { ChartsDataset, ProvidersDataset, APIResponse } from './interfaces/interfaces';

const apiUrl = process.env.REACT_APP_API_URL;

export function GetProvidersAPI() : Promise<APIResponse> {
    return axios.get(`${apiUrl}providers/`)
    .then((response) => {
      if (response.status !== 200) {
        throw new Error(`Request failed with status code ${response.status}`);
      }

      const output = response.data as ProvidersDataset;
      return { 
        'key': 'providers', 
        'output': output
      };
    })
    .catch((err) => {
      throw err;
    });
}

export function GetProvidersByParticipationAPI() : Promise<APIResponse> {
  return axios.get(`${apiUrl}providers/provider_by_participation/`)
  .then((response) => {
    if (response.status !== 200) {
      throw new Error(`Request failed with status code ${response.status}`);
    }

    const output = response.data as ChartsDataset;
    return { 
      'key': 'providers_by_participation', 
      'output': output
    };
  })
  .catch((err) => {
    throw err;
  });
}

export function GetTopProvidersByParticipationAPI() : Promise<APIResponse> {
  return axios.get(`${apiUrl}providers/top_provider_by_participation/`)
  .then((response) => {
    if (response.status !== 200) {
      throw new Error(`Request failed with status code ${response.status}`);
    }

    const output = response.data as ChartsDataset;
    return { 
      'key': 'top_providers_by_participation', 
      'output': output
    };
  })
  .catch((err) => {
    throw err;
  });
}