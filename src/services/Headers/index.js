import { getDataFromLocalStorage } from "../LocalStorage";
export const setHeaders = (config) => {
    const token = getDataFromLocalStorage({ key: '@authToken' });
    console.log(token);
    return Object.assign(Object.assign({}, config), { headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        } });
};