// Get API functions
import { GetDashboardAPI } from './get_dashboard'

export const APIRequest = async () => {
    let get_dashboard = GetDashboardAPI();
    return get_dashboard
    .then((values) => values)
    .catch((err) => {
        console.error(err);
    });;
}