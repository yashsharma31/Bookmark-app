export const addDataToLocalStorage = ({ key, value }) => {
  localStorage.setItem(key, value);
};
export const getDataFromLocalStorage = ({ key }) => {
  return localStorage.getItem(key);
};
export const removeDataFromLocalStorage = () => {
  localStorage.clear();
};
