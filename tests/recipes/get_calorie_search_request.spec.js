const shell = require('shelljs');
const request = require('supertest');
const app = require('../../app');
const tongueResponse = require("../../__fixtures__/tongue_recipes");
const mockAxios = require('axios');
const recipe = require('../../models').Recipe;

describe('Recipes API', () => {
  describe('Calorie search GET request', () => {
    beforeEach(async () => {
      await recipe.destroy({where: {}});
    });
    afterEach(async () => {
      await recipe.destroy({where: {}});
    });

    test('It returns a list of recipes by food type and calorie range(edamam API)', () => {
      mockAxios.get.mockImplementationOnce(() =>
        Promise.resolve(tongueResponse)
      );

      return request(app).get('/api/v1/recipes/calorie_search?food_type=tongue&from=100&to=750')
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

    test('It returns a list of recipes by food type and calorie range(database)', async () => {
      await recipe.create({
          name: "Chicken Gravy",
          foodType: "chicken",
          image: "https://www.edamam.com/web-img/fd1/fd1afed1849c44f5185720394e363b4e.jpg",
          url: "http://www.marthastewart.com/332664/chicken-gravy",
          calories: 1092.36063499987,
          totalTime: 270,
          yield: 6,
          ingredients: [
              "4 cups chicken bones and wings",
              "2 tablespoons unsalted butter, softened",
              "2 tablespoons all-purpose flour",
              "4 cups homemade bruce and eric bromberg's chicken stock, or store-bought low-sodium chicken stock",
              "1 tablespoon fresh thyme leaves",
              "Coarse salt and freshly ground black pepper"
          ]
      })
      await recipe.create({
          name: "Roast Chicken",
          foodType: "chicken",
          image: "https://www.edamam.com/web-img/1f5/1f5ef4145240080cfc2faab2a74ff12c.jpg",
          url: "http://www.bonappetit.com/recipe/roast-chicken",
          calories: 2384.8975,
          totalTime: 324,
          yield: 6,
          ingredients: [
              "1 tablespoon kosher salt",
              "1 whole 4-pound chicken, giblets reserved for another use",
              "1/4 cup (1/2 stick) unsalted butter, melted"
          ]
      });
      await recipe.create({
          name: "Kreplach (Chicken Dumplings)",
          foodType: "chicken",
          image: "https://www.edamam.com/web-img/4dd/4dd1c7a0d8b00e8929bd6babf0968ba2.jpg",
          url: "https://www.tastingtable.com/entry_detail/chefs_recipes/10154/Matzo_balls_watch_your_back.htm",
          calories: 4278.876994575,
          totalTime: 10,
          yield: 8,
          ingredients: [
              "1½ teaspoons canola oil",
              "½ small shallot, finely chopped",
              "1 cup (about ½ pound) raw, boneless chicken meat (preferably from 3 boneless chicken thighs), roughly chopped",
              "⅔ cup (about ¼ pound) chicken skin and fat (reserved from the 3 chicken thighs)",
              "2 chicken livers (optional)",
              "2 garlic cloves, finely chopped",
              "¼ cup finely chopped chives, plus extra for serving",
              "1¼ teaspoons kosher salt",
              "¾ teaspoon freshly ground black pepper",
              "30 to 34 square wonton wrappers",
              "8 cups store-bought or homemade chicken broth"
          ]
      });
      await recipe.create({
          name: "Chicken Marsala",
          foodType: "chicken",
          image: "https://www.edamam.com/web-img/4de/4de0bd5b79b1d8f701bbf02d2afd0b80.jpg",
          url: "http://www.saveur.com/classic-chicken-marsala-recipe",
          calories: 2404.22057465568,
          totalTime: 121,
          yield: 4,
          ingredients: [
              "1¼ lb. chicken cutlets, pounded until ¼\" thick (about 8)",
              "Kosher salt and freshly ground black pepper, to taste",
              "⅓ cup flour",
              "5 tbsp. olive oil",
              "5 tbsp. unsalted butter",
              "8 oz. white button mushrooms",
              "2 tbsp. minced shallots",
              "1 clove garlic, minced",
              "⅓ cup dry marsala wine",
              "⅓ cup chicken stock"
          ]
      });
      await recipe.create({
          name: "Penne Marsala with Chicken",
          foodType: "chicken",
          image: "https://www.edamam.com/web-img/425/42546d76c6a0f2d57f0eabed8d4dca86.JPG",
          url: "http://lacucinaitalianamagazine.com/recipe/penne-marsala",
          calories: 1439.36592293542,
          totalTime: 205,
          yield: 4,
          ingredients: [
              "3/4 cup all purpose flour",
              "1 (8 ounce) boneless, skinless chicken breast sliced in half",
              "5 tablespoons butter",
              "3 cups fresh sliced mushrooms",
              "5 ounces colombo marsala wine",
              "1 teaspoon chicken base",
              "4 ounces chicken stock",
              "Salt & pepper",
              "Penne noodles",
              "Parsley (garnish)"
          ]
      });
      await recipe.create({
          name: "Chicken cacciatore",
          foodType: "chicken",
          image: "https://www.edamam.com/web-img/2ca/2ca946a40338e9b93c1d14dec518e1b8.jpg",
          url: "http://www.bbc.co.uk/food/recipes/chickenalocacciatore_70349",
          calories: 4446.91470296676,
          totalTime: 60,
          yield: 6,
          ingredients: [
              "8 tbsp olive oil",
              "1 onion, sliced",
              "2 celery stalks, roughly chopped",
              "2 medium carrots, roughly chopped",
              "6 chicken breasts, or chicken thighs, bones removed",
              "175ml/6fl oz white wine",
              "3 tbsp tomato purée",
              "500ml/17 fl oz chicken stock",
              "2 bay leaves",
              "2-3 sage leaves",
              "1 rosemary sprig",
              "250g/9oz easy-cook polenta",
              "Knob of butter",
              "25g/1oz parmesan"
          ]
      });
      await recipe.create({
          name: "Delicate Chicken Soup",
          foodType: "chicken",
          image: "https://www.edamam.com/web-img/058/058bd4d77497e51bbdfdb16fd42586f1.jpg",
          url: "https://food52.com/recipes/9900-delicate-chicken-soup",
          calories: 2706.44723525568,
          totalTime: 141,
          yield: 10,
          ingredients: [
              "2 chicken breasts - skinned",
              "1 tablespoon olive oil",
              "Salt - a sprinkling",
              "Pepper - a sprinkling",
              "10 cups chicken stock",
              "3 stalks celery - chopped",
              "3 parsnips - chopped",
              "3 carrots - chopped",
              "1 handful parsley - rough chopped",
              "1 14 oz. can organic diced tomatoes - drained",
              "Salt and pepper to taste",
              "2 chicken breasts - roughly shredded"
          ]
      });
      await recipe.create({
          name: "Chicken Soup",
          foodType: "chicken",
          image: "https://www.edamam.com/web-img/e20/e20d522d53088284fc5a31f365cbdebd.jpg",
          url: "http://www.cookstr.com/recipes/chicken-soup-3-sharon-lebewohl",
          calories: 3185.3608877,
          totalTime: 120,
          yield: 8,
          ingredients: [
              "1 pound chicken parts",
              "2 stalks celery, including leafy tops, cut into 3-inch pieces",
              "1 whole chicken, thoroughly rinsed",
              "Salt to rub inside the chicken",
              "1 large whole onion, unpeeled (find one with a firm, golden-brown peel)",
              "1 large whole carrot, peeled",
              "1 medium parsnip, peeled",
              "2 teaspoons salt",
              "¼ teaspoon pepper",
              "1 bunch dill, cleaned and tied with a string"
          ]
      });
      await recipe.create({
          name: "Chicken Saltimbocca",
          foodType: "chicken",
          image: "https://www.edamam.com/web-img/36f/36f50faee795ad7c689c16afb606465d.jpg",
          url: "http://www.cookingchanneltv.com/recipes/chicken-saltimbocca.html",
          calories: 1491.65987143101,
          totalTime: 35,
          yield: 6,
          ingredients: [
              "6 (3-ounce) chicken cutlets, pounded to evenly flatten",
              "Salt and freshly ground black pepper",
              "6 paper-thin slices prosciutto",
              "1 (10-ounce) box frozen chopped spinach, thawed",
              "3 tablespoons olive oil",
              "1/4 cup grated parmesan",
              "1 (14-ounce) can low-salt chicken broth",
              "2 tablespoons fresh lemon juice"
          ]
      });
      await recipe.create({
          name: "Easy Chicken Stock",
          foodType: "chicken",
          image: "https://www.edamam.com/web-img/2fe/2fe1ba60ec3448742e895cd495c3d843.jpg",
          url: "http://www.myrecipes.com/recipe/easy-chicken-stock",
          calories: 2385.8958662,
          totalTime: 90,
          yield: 10,
          ingredients: [
              "2 pounds  chicken wings",
              "2   (32-oz.) containers chicken broth"
          ]
      });
      await recipe.create({
          name: "Kreplach (Chicken Dumplings)",
          foodType: "chicken",
          image: "https://www.edamam.com/web-img/4dd/4dd1c7a0d8b00e8929bd6babf0968ba2.jpg",
          url: "https://www.tastingtable.com/entry_detail/chefs_recipes/10154/Matzo_balls_watch_your_back.htm",
          calories: 4278.876994575,
          totalTime: 10,
          yield: 8,
          ingredients: [
              "1½ teaspoons canola oil",
              "½ small shallot, finely chopped",
              "1 cup (about ½ pound) raw, boneless chicken meat (preferably from 3 boneless chicken thighs), roughly chopped",
              "⅔ cup (about ¼ pound) chicken skin and fat (reserved from the 3 chicken thighs)",
              "2 chicken livers (optional)",
              "2 garlic cloves, finely chopped",
              "¼ cup finely chopped chives, plus extra for serving",
              "1¼ teaspoons kosher salt",
              "¾ teaspoon freshly ground black pepper",
              "30 to 34 square wonton wrappers",
              "8 cups store-bought or homemade chicken broth"
          ]
      });
      await recipe.create({
          name: "Chicken Reuben",
          foodType: "chicken",
          image: "https://www.edamam.com/web-img/141/141f3159fe249dd51240b9f6ff8161ff.jpg",
          url: "http://www.marthastewart.com/851307/chicken-reuben",
          calories: 1102.5253018,
          totalTime: 15,
          yield: 4,
          ingredients: [
              "Reserved roasted chicken breast halves from crispy mustard chicken with carrots, deboned",
              "8 slices rye bread",
              "4 ounces sliced swiss cheese",
              "1 pound (1 jar or package) sauerkraut, drained and squeezed dry (not rinsed)",
              "1/3 cup light mayonnaise",
              "2 tablespoons ketchup"
          ]
      });
      await recipe.create({
          name: "Chicken Rice Casserole recipes",
          foodType: "chicken",
          image: "https://www.edamam.com/web-img/0eb/0ebf4a35345cc535e06a984cac72d5be",
          url: "http://www.epicurious.com/recipes/food/views/Chicken-Rice-Casserole-51263950",
          calories: 1981.664093275,
          totalTime: 4,
          yield: 4,
          ingredients: [
              "1 can chicken in water (28 oz.)",
              "1 cup frozen green peas",
              "1 can cream of chicken soup (14oz.)",
              "1 pouch UNCLE BENS® READY RICE® Original Long Grain Rice"
          ]
      });
      await recipe.create({
          name: "Watercress, Chicken, Feta Quinoa",
          foodType: "chicken",
          image: "https://www.edamam.com/web-img/406/406f46e2644fba143a0ba43bc3ce7d0c.jpg",
          url: "http://honestcooking.com/watercress-chicken-and-feta-quinoa/",
          calories: 2407.06929145413,
          totalTime: 20,
          yield: 4,
          ingredients: [
              "½ garlic clove",
              "150g/5oz watercress, spinach,rocket",
              "Grated zest of ½ lemon",
              "175g/6oz quinoa",
              "500ml chicken stock",
              "250g/8.8 oz cooked roasted chicken",
              "45 unsalted cashew nuts",
              "2 tbsp olive oil",
              "Salt and pepper"
          ]
      });
      await recipe.create({
          name: "Chicken Noodle Soup",
          foodType: "chicken",
          image: "https://www.edamam.com/web-img/17f/17fabebb76f575b292bd8d3db4be037a.jpg",
          url: "http://www.pbs.org/food/recipes/chicken-noodle-soup/",
          calories: 294.783295446566,
          totalTime: 15,
          yield: 2,
          ingredients: [
              "1 can (14.5 ounces) reduced-sodium chicken broth",
              "1 garlic clove minced",
              "1/2 cup fine egg noodles",
              "2 ounces green beans cut crosswise into 1-inch pieces (1/2 cup)",
              "1 carrot coarsely grated",
              "4 ounces skinless boneless chicken breast, cut into 1/2-inch pieces (1 cup)",
              "1 scallion thinly sliced",
              "Coarse salt and ground pepper"
          ]
      });
      await recipe.create({
          name: "Honey-Roasted Chicken",
          foodType: "chicken",
          image: "https://www.edamam.com/web-img/a8a/a8a108270338ff41028800e45d43bcf2.jpg",
          url: "https://www.menshealth.com/recipes/honey-roasted-chicken",
          calories: 2425.59613482,
          totalTime: 20,
          yield: 10,
          ingredients: [
              "1 whole chicken (about 3 pounds)",
              "1/3 cup honey",
              "1 teaspoon ground cardamom",
              "1 cup chicken broth"
          ]
      });
      await recipe.create({
          name: "Southwestern Chicken Soup",
          foodType: "chicken",
          image: "https://www.edamam.com/web-img/216/216f2d87bd0921a4059ca89aeecad473.jpg",
          url: "https://www.realsimple.com/food-recipes/browse-all-recipes/southwestern-chicken-soup",
          calories: 2007.8006708875,
          totalTime: 15,
          yield: 4,
          ingredients: [
              "1  12-ounce jar salsa verde",
              "3 cups cooked chicken pieces (1 small deli-counter rotisserie chicken or leftovers)",
              "1  15-ounce can cannellini beans, drained",
              "3 cups chicken broth",
              "1 teaspoon ground cumin (optional)",
              "2 green onions, chopped",
              "1/2 cup sour cream",
              "tortilla chips (optional)"
          ]
      });
      await recipe.create({
          name: "Quick Cilantro Chicken",
          foodType: "chicken",
          image: "https://www.edamam.com/web-img/6e0/6e0dda8728c0d7b4acd621c101cb6df3.jpg",
          url: "http://www.cookstr.com/recipes/quick-cilantro-chicken",
          calories: 2069.28189965,
          totalTime: 15,
          yield: 8,
          ingredients: [
              "1½ pounds boneless, skinless chicken breast tenders or 4 chicken breast halves",
              "8 cloves garlic, minced",
              "2 tablespoons extra virgin olive oil, preferably Spanish",
              "1½ teaspoons Dijon mustard",
              "¼ cup coarsely chopped cilantro",
              "4 lime wedges, for garnish (optional)"
          ]
      });
      await recipe.create({
          name: "Chicken Scallopine recipes",
          foodType: "chicken",
          image: "https://www.edamam.com/web-img/d66/d6691428c18ff78a4d8946f3e4b630f5",
          url: "http://thepioneerwoman.com/cooking/chicken-scallopine/",
          calories: 5082.19138666215,
          totalTime: 15,
          yield: 6,
          ingredients: [
              "1 pound Linguine",
              "6 whole Boneless, Skinless, Trimmed Chicken Breasts",
              "salt",
              "pepper",
              "flour",
              "2 Tablespoons Olive Oil",
              "4 Tablespoons Butter",
              "12 ounces, weight White Mushrooms, Sliced Thin",
              "1 cup Dry White Wine",
              "chicken broth",
              "1 whole Lemon",
              "1/2 cup Heavy Cream (can Use Half-and-Half)",
              "1 teaspoon (heaping) Capers",
              "flat leaf parsley",
              "parmesan cheese"
          ]
      });
      await recipe.create({
          name: "Oodles of Pasta & Chicken",
          foodType: "chicken",
          image: "https://www.edamam.com/web-img/364/36437d38cce55c11ad6db1f0c47775ec.jpeg",
          url: "http://www.kitchendaily.com/recipe/oodles-pasta-chicken",
          calories: 1137.34608,
          totalTime: 20,
          yield: 4,
          ingredients: [
              "3 ½ cup Swanson® Chicken Broth",
              "½ tsp garlic powder",
              "1 medium carrot, shredded",
              "1 cup uncooked corkscrew-shaped pasta",
              "1 cup uncooked mini lasagna noodle-shaped pasta (mafalda) or egg noodles",
              "1 cup broccoli flowerets",
              "1 cup cubed cooked chicken",
              "chopped fresh parsley"
          ]
      });

      return request(app).get('/api/v1/recipes/calorie_search?food_type=chicken&from=1&to=100000')
        .then(response => {
          expect(response.status).toBe(200)
          expect(response.body.length).toBe(20)
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
