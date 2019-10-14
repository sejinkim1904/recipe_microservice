const axios = require('axios');
const id = process.env.EDA_APP_ID;
const key = process.env.EDA_APP_KEY;

class EdamamService {
  constructor(foodType) {
    this.foodType = foodType
  }

  async getRecipes() {
    const url = 'https://api.edamam.com/search?'
    const app_id = `app_id=${id}&`
    const app_key = `app_key=${key}&`
    const params = `q=${this.foodType}&to=10&time=1%2B`

    return await axios.get(`${url}${app_id}${app_key}${params}`)
      .then(async response => {
        return await response.data
      })
      .catch(async error => {
        return error
      })
  }

  async getRecipesByCalories(from, to) {
    const url = 'https://api.edamam.com/search?'
    const app_id = `app_id=${id}&`
    const app_key = `app_key=${key}&`
    const params = `q=${this.foodType}&to=10&time=1%2B&calories=${from}-${to}`

    return await axios.get(`${url}${app_id}${app_key}${params}`)
      .then(async response => {
        return await response.data
      })
      .catch(async error => {
        return error
      })
  }

  async getRecipesByTime(max) {
    const url = 'https://api.edamam.com/search?'
    const app_id = `app_id=${id}&`
    const app_key = `app_key=${key}&`
    const params = `q=${this.foodType}&to=10&time=1-${max}`

    return await axios.get(`${url}${app_id}${app_key}${params}`)
      .then(async response => {
        return await response.data
      })
      .catch(async error => {
        return error
      })
  }
}

module.exports = { EdamamService: EdamamService }
