const axios = require('axios');
const id = process.env.EDA_APP_ID;
const key = process.env.EDA_APP_KEY;

class EdamamService {
  constructor(foodType) {
    this.foodType = foodType
  }

  getRecipes() {
    return axios.get("https://api.edamam.com/search", {
      params: {
        q: this.foodType,
        app_id: id,
        app_key: key,
        to: 10,
        time: '1%2B'
      }
    })
      .then(response => {
        return response
      })
  }
}

module.exports = { EdamamService: EdamamService }
