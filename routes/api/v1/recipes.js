const express = require('express');
const router = express.Router();
const recipe = require('../../../models').Recipe;
const Sequelize = require('sequelize');
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
      if (recipes.length < 10) {
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

router.get('/time_search', async (req, res, next) => {
  res.setHeader('Content-Type', 'application/json')
  let createdRecipes = []

  await recipe.findAll({
    where: {
      foodType: req.query.q,
      totalTime: { [Op.lte]: req.query.max },
    }
  })
    .then(async recipes => {
      if (recipes.length < 10) {
        let edamam = await new edamamService(req.query.q);
        let max = req.query.max

        await edamam.getRecipesByTime(max)
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

router.get('/avg_calories', async (req, res, next) => {
  res.setHeader('Content-Type', 'application/json')
  let createdRecipes = []

  await recipe.findAll({
    where: {
      foodType: req.query.q,
    },
    attributes: [
      [Sequelize.fn('AVG', Sequelize.col('calories')),'averageCalories']
    ],
    // group: [ 'Recipe.id' ]
  })
    .then(async recipes => {
      if (recipes[0].dataValues.averageCalories === null) {
        let edamam = await new edamamService(req.query.q);

        await edamam.getRecipes()
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
        let caloriesTotal = 0

        for (let i = 0; i < createdRecipes.length; i++) {
          let recipe = createdRecipes[i];

          caloriesTotal += recipe.calories
        };
        let avgCalories = caloriesTotal / createdRecipes.length

        res.status(200).send(
          { averageCalories: parseFloat(avgCalories.toFixed(2)) }
        )
        return;
      };
      res.status(200).send(recipes)
    })
    .catch(async error => {
      res.status(500).send( {error} )
    });
});

module.exports = router;
