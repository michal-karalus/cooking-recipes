import axios from 'axios'

import { API_KEY, API_URL } from './constants'

axios.defaults.params = {
  apiKey: API_KEY,
}

export const fetchRecipes = (query: string) => {
  return axios.get(`${API_URL}/recipes/complexSearch?query=${query}`)
}

export const fetchRecipe = (id: string) => {
  return axios.get(`${API_URL}/recipes/${id}/information`)
}
