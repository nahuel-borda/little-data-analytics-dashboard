import axios from 'axios';
import { DashboardDataset } from './interfaces/interfaces';

const apiUrl = process.env.REACT_APP_API_URL;

export function GetDashboardAPI() : Promise<DashboardDataset> {
    return axios.get(`${apiUrl}dashboard/`)
}