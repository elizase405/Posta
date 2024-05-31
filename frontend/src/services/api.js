import axios from 'axios';

const auth = 'https://posta-qwxv.onrender.com/api/auth'
const api = 'https://posta-qwxv.onrender.com/api/recipes' 

export const getAllRecipes = async () => {
  const response = await axios.get(api);
  return response.data;
};

export const getRecipeById = async (id) => {
  const response = await axios.get(`${api}/${id}`);
  return response.data;
};

export const createRecipe = async (recipe) => {
  const response = await axios.post(api, recipe)
  return response.data;
};

export const updateRecipe = async (id, recipe, token) => {
  const response = await axios.put(`${api}/${id}`, recipe, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return response.data;
};

export const deleteRecipe = async (id) => {
  const response = await axios.delete(`${api}/${id}`);
  return response.data;
};

export const signup = async (user) => await axios.post(`${auth}/signup`, user);
export const login = async (user) => await axios.post(`${auth}/login`, user);
