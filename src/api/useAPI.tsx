// Get API functions
import { GetDashboardAPI } from './get_dashboard'

const apiUrl = process.env.REACT_APP_API_URL;

export const APIRequest = async () => {
    let get_dashboard = GetDashboardAPI();
    return get_dashboard
    .then((values) => values)
    .catch((err) => {
        console.error(err);
    });;
}