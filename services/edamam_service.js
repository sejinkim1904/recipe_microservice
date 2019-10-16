const axios = require('axios');
const id = process.env.EDA_APP_ID;
const key = process.env.EDA_APP_KEY;

class EdamamService {
  constructor(foodType) {
    this.foodType = foodType
  }

  async getRecipes(max = 100000, from = 0, to = 100000) {
    const url = 'https://api.edamam.com/search?'
    const app_id = `app_id=${id}&`
    const app_key = `app_key=${key}&`
    const calories = `calories=${from}-${to}`
    const time = `time=1-${max}`
    const params = `q=${this.foodType}&to=10&${time}&${calories}`

    return await axios.get(`${url}${app_id}${app_key}${params}`)
      .then(async response => {
        return await response.data
      })
  }
}

module.exports = { EdamamService: EdamamService }
