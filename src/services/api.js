import axios from 'axios';

const BASE_URL = 'https://restcountries.com/v3.1/all';

const getData = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

export { getData };
