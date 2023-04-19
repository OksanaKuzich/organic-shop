import axios from 'axios';

axios.defaults.baseURL = `https://organick.onrender.com/api/products`;

export const getAllProducts = async () => {
  try {
    const responce = await axios('/');
    return responce.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const getPopularProducts = async () => {
  try {
    const responce = await axios('/popular');
    return responce.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const getRandomProducts = async () => {
  try {
    const responce = await axios('/random');
    return responce.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const getOneProducts = async id => {
  try {
    const responce = await axios(`/${id}`);
    return responce.data;
  } catch (error) {
    console.log(error.message);
  }
};

export const sendOrder = async data => {
  try {
    const responce = await axios.post('/', data);
    return responce.data;
  } catch (error) {
    console.log(error.message);
  }
};
