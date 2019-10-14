const shell = require('shelljs');
const request = require('supertest');
const app = require('../../app');
const recipeResponse = require("../../__fixtures__/chicken_recipes");
const mockAxios = require('axios');
const EdamamService = require('../../services/edamam_service').EdamamService


describe('Edamam Service', () => {
  describe('Instance methods', () => {
    test('it returns recipe data', () => {
      mockAxios.get.mockImplementationOnce(() =>
        Promise.resolve(recipeResponse)
      );

      const recipes = new EdamamService("chicken")
      return recipes.getRecipes().then(response => {
        let hits = response.hits
        expect(Object.keys(hits[0])).toContain("recipe")
        expect(Object.keys(hits[0].recipe)).toContain("label")
        expect(Object.keys(hits[0].recipe)).toContain("url")
        expect(Object.keys(hits[0].recipe)).toContain("image")
        expect(Object.keys(hits[0].recipe)).toContain("yield")
        expect(Object.keys(hits[0].recipe)).toContain("ingredientLines")
        expect(Object.keys(hits[0].recipe)).toContain("calories")
        expect(Object.keys(hits[0].recipe)).toContain("totalTime")
      })
    })
  })
})
