const express = require('express');
const router = express.Router();
const recipe = require('../../../models').Recipe;
const Sequelize = require('Sequelize');
const Op = Sequelize.Op;
const edamamService = require('../../../services/edamam_service').EdamamService

router.get('/food_search', async (req, res, next) => {
  res.setHeader('Content-Type', 'application/json')
  let createdRecipes = []

  await recipe.findAll({
    where: { foodType: req.query.q }
  })
    .then(async recipes => {
      if (recipes.length === 0) {
        let edamam = await new edamamService(req.query.q);

        await edamam.getRecipes().then(async edamamResponse => {
          let edamamRecipes = await edamamResponse.hits;

          for (let i = 0; i < edamamRecipes.length; i++) {
            let result = edamamRecipes[i];
            await recipe.create({
              name: result.recipe.label,
              foodType: req.query.q,
              image: result.recipe.image,
              url: result.recipe.url,
              calories: result.recipe.calories,
              totalTime: result.recipe.totalTime,
              yield: result.recipe.yield,
              ingredients: result.recipe.ingredientLines
            })
              .then(async recipe =>
                createdRecipes.push(recipe)
              );
          };
        });
        res.status(200).send(createdRecipes)
        return;
      };
      res.status(200).send(recipes)
    })
    .catch(async error => {
      res.status(500).send( {error} )
    });
});

router.get('/calorie_search', async (req, res, next) => {
  res.setHeader('Content-Type', 'application/json')
  let createdRecipes = []

  await recipe.findAll({
    where: {
      foodType: req.query.q,
      calories: { [Op.between]: [req.query.from, req.query.to] },
    }
  })
    .then(async recipes => {
      if (recipes.length === 0) {
        let edamam = await new edamamService(req.query.q);
        let from = req.query.from
        let to = req.query.to

        await edamam.getRecipesByCalories(from, to)
          .then(async edamamResponse => {
            let edamamRecipes = await edamamResponse.hits;

            for (let i = 0; i < edamamRecipes.length; i++) {
              let result = edamamRecipes[i];
              await recipe.create({
                name: result.recipe.label,
                foodType: req.query.q,
                image: result.recipe.image,
                url: result.recipe.url,
                calories: result.recipe.calories,
                totalTime: result.recipe.totalTime,
                yield: result.recipe.yield,
                ingredients: result.recipe.ingredientLines
              })
                .then(async recipe =>
                  createdRecipes.push(recipe)
                );
            };
          });
        res.status(200).send(createdRecipes)
        return;
      };
      res.status(200).send(recipes)
    })
    .catch(async error => {
      res.status(500).send( {error} )
    });
});

module.exports = router;
