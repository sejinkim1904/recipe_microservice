const shell = require('shelljs');
const request = require('supertest');
const app = require('../../app');
const timeResponse = require("../../__fixtures__/time_recipes");
const mockAxios = require('axios');
const recipe = require('../../models').Recipe;

describe('Recipes API', () => {
  describe('Time search GET request', () => {
    beforeEach(async () => {
      await recipe.destroy({where: {}});
    });
    afterEach(async () => {
      await recipe.destroy({where: {}});
    });

    test('It returns a list of recipes by max total cook/prep time', () => {
      mockAxios.get.mockImplementationOnce(() =>
        Promise.resolve(timeResponse)
      );

      return request(app).get('/api/v1/recipes/time_search?q=tongue&max=20')
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
