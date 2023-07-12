import axios from 'axios';
import { ChartsDataset, ServicesDataset, APIResponse } from './interfaces/interfaces';

const apiUrl = process.env.REACT_APP_API_URL;

export function GetServicesAPI () : Promise<APIResponse> {
    return axios.get(`${apiUrl}services/`)
    .then((response) => {
      if (response.status !== 200) {
        throw new Error(`Request failed with status code ${response.status}`);
      }

      const output = response.data as ServicesDataset;
      return { 
        'key': 'services', 
        'output': output
      };
    })
    .catch((err) => {
      throw err;
    });
}

export function GetServicesByStatusAPI () : Promise<APIResponse> {
  return axios.get(`${apiUrl}services/status_count/`)
  .then((response) => {
    if (response.status !== 200) {
      throw new Error(`Request failed with status code ${response.status}`);
    }

    const output = response.data as ChartsDataset;
    return { 
      'key': 'services_by_status', 
      'output': output
    };
  })
  .catch((err) => {
    throw err;
  });
}

export function GetNewServicesCountByDateByAPI () : Promise<APIResponse> {
  return axios.get(`${apiUrl}services/service_ingress_count_by_date/`)
  .then((response) => {
    if (response.status !== 200) {
      throw new Error(`Request failed with status code ${response.status}`);
    }

    const output = response.data as ChartsDataset;
    return { 
      'key': 'new_services_by_date', 
      'output': output
    };
  })
  .catch((err) => {
    throw err;
  });
}

export function GetServicesStatusCountbyDateAPI () : Promise<APIResponse> {
  return axios.get(`${apiUrl}services/status_count_by_date/`)
  .then((response) => {
    if (response.status !== 200) {
      throw new Error(`Request failed with status code ${response.status}`);
    }
    
    const output = response.data as ChartsDataset;
    return { 
      'key': 'services_status_count_by_date', 
      'output': output
    };
  })
  .catch((err) => {
    throw err;
  });
}

