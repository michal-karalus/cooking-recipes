import axios from 'axios'

import { API_KEY, API_URL } from './constants'

axios.defaults.params = {
  apiKey: API_KEY,
}

export const fetchRecipes = (recipeName: string) => {
  return axios.get(`${API_URL}/recipes/complexSearch?query=${recipeName}`)
}

export const fetchRecipe = (id: string) => {
  return axios.get(`${API_URL}/recipes/${id}/information`)
}
