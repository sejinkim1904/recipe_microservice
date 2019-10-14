const shell = require('shelljs');
const request = require('supertest');
const app = require('../../app');
const recipeResponse = require("../../__fixtures__/chicken_recipes");
const mockAxios = require('axios');
const recipe = require('../../models').Recipe;

describe('Recipes API', () => {
  describe('Average calories GET request', () => {
    beforeEach(async () => {
      await recipe.destroy({where: {}});
    });
    afterEach(async () => {
      await recipe.destroy({where: {}});
    });

    test('It returns average calories for food type', () => {
      mockAxios.get.mockImplementationOnce(() =>
        Promise.resolve(recipeResponse)
      );

      return request(app).get('/api/v1/recipes/avg_calories?q=chicken')
        .then(response => {
          expect(response.status).toBe(200)
          expect(response.body.averageCalories).toBe(4113.29)
        });
    });
  });
});
