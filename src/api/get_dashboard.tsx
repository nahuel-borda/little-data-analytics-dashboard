import axios from 'axios';
import { DashboardDataset } from './interfaces/interfaces';

export function GetDashboardAPI() : Promise<DashboardDataset> {
    return axios.get('http://localhost:8000/dashboard/')
}