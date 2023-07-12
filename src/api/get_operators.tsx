import axios from 'axios';
import { OperatorDataset, ChartsDataset, APIResponse } from './interfaces/interfaces';

const apiUrl = process.env.REACT_APP_API_URL;

export function GetOperatorsAPI () : Promise<APIResponse> {
    return axios.get('http://localhost:8000/operators/')
    .then((response) => {
      if (response.status !== 200) {
        throw new Error(`Request failed with status code ${response.status}`);
      }
      const output = response.data as OperatorDataset;

      return { 
        'key': 'operators', 
        'output': output
      };
    })
    .catch((err) => {
      throw err;
    });
}

export function GetOperatorsChartsAPI () : Promise<APIResponse> {
    return axios.get('http://localhost:8000/operators/operator_by_workload/')
    .then((response) => {
      if (response.status !== 200) {
        throw new Error(`Request failed with status code ${response.status}`);
      }
      const output = response.data as ChartsDataset;

      return { 
        'key': 'operators_by_status', 
        'output': output
      };
    })
    .catch((err) => {
      throw err;
    });
}

export function GetTopOperatorsChartsAPI () : Promise<APIResponse> {
  return axios.get('http://localhost:8000/operators/top_operator_by_workload/')
  .then((response) => {
    if (response.status !== 200) {
      throw new Error(`Request failed with status code ${response.status}`);
    }
    const output = response.data as ChartsDataset;

    return { 
      'key': 'top_operators_by_status', 
      'output': output
    };
  })
  .catch((err) => {
    throw err;
  });
}