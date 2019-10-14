const shell = require('shelljs');
const request = require('supertest');
const app = require('../../app');
const recipeResponse = require("../../__fixtures__/chicken_recipes");
const mockAxios = require('axios');
const recipe = require('../../models').Recipe;

describe('Recipes API', () => {
  describe('Food search GET request', () => {
    beforeEach(async () => {
      await recipe.destroy({where: {}});
    });
    afterEach(async () => {
      await recipe.destroy({where: {}});
    });

    test('It returns a list of recipes by food type', () => {
      mockAxios.get.mockImplementationOnce(() =>
        Promise.resolve(recipeResponse)
      );

      return request(app).get('/api/v1/recipes/food_search?q=chicken')
        .then(response => {
          expect(response.status).toBe(200)
          expect(response.body.length).toBe(10)
          expect(Object.keys(response.body[0])).toContain("id")
          expect(Object.keys(response.body[0])).toContain("name")
          expect(Object.keys(response.body[0])).toContain("image")
          expect(Object.keys(response.body[0])).toContain("yield")
          expect(Object.keys(response.body[0])).toContain("url")
          expect(Object.keys(response.body[0])).toContain("ingredients")
          expect(Object.keys(response.body[0])).toContain("calories")
          expect(Object.keys(response.body[0])).toContain("totalTime")
        });
    });
  });
});
