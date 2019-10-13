'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

    return queryInterface.bulkInsert("Recipes", [
      {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_09b4dbdf0c7244c462a4d2622d88958e",
          "name": "Pasta Frittata Recipe",
          "image": "https://www.edamam.com/web-img/5a5/5a5220b7a65c911a1480502ed0532b5c.jpg",
          "yield": 2.0,
          "ingredients": [
            "2 cups leftover pasta",
            "4 eggs beaten",
            "2 tablespoons butter",
            "1/2 cup whichever cheese the pasta called for"
          ],
          "calories": 1423.463,
          "totalTime": 0.0,
          "createdAt": new Date(),
          "updatedAt": new Date()
      },
      {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_b3ce18c4a415f62086a858c54f2c3f19",
          "name": "Kimchi Pasta",
          "image": "https://www.edamam.com/web-img/2d1/2d1770d49a37ccc618c0780c2abcf2b9.jpg",
          "yield": 4.0,
          "ingredients": [
            "2 Tbs olive oil",
            "3 oz thinly sliced pork belly (optional)",
            "1/2 C chopped kimchi",
            "1 clove garlic minced",
            "1 Tbs gochujang",
            "4 oz dry pasta (linguine or spaghetti work well)",
            "1 scallion sliced thinly"
          ],
          "calories": 725.3600481744218,
          "totalTime": 0.0,
          "createdAt": new Date(),
          "updatedAt": new Date()
      },
      {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_8551a35879e92bfb0974b3236f489e17",
          "name": "Mushroom Marsala Pasta With Artichokes",
          "image": "https://www.edamam.com/web-img/0ba/0bade5ee8d319b1a4bd8b88eae47a393.jpg",
          "yield": 6.0,
          "ingredients": [
            "3 tablespoons olive oil",
            "1 small onion, finely chopped",
            "1 pound mushrooms, trimmed, cleaned and chopped into small bits (I used creminis)",
            "1 teaspoon kosher salt, plus 1 tablespoon for pasta water",
            "1 cup dry Marsala wine",
            "1 pound pasta, Giada recommends thimble-shaped pasta, ditalini",
            "1/2 lb frozen artichoke hearts, thawed",
            "3/4 cup grated Parmesan",
            "1/2 cup Cream",
            "1/2 cup chopped fresh flat-leaf parsley",
            "1 tsp freshly ground black pepper"
          ],
          "calories": 3230.4552210500005,
          "totalTime": 0.0,
          "createdAt": new Date(),
          "updatedAt": new Date()
      },
      {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_12f07fca0e5a4346cd1dcfc75baa97a5",
          "name": "Pasta Carbonara",
          "image": "https://www.edamam.com/web-img/54d/54d4a0e755bf3f531d3ff252e1071957.jpg",
          "yield": 4.0,
          "ingredients": [
            "Kosher salt and freshly ground pepper",
            "1/3 lb. pancetta or good-quality bacon, cut into thin strips about 1/4 inch thick",
            "1/4 cup freshly grated Parmigiano-Reggiano; more for grating on the finished pasta",
            "1 Tbs. olive oil",
            "4 large eggs, at room temperature",
            "1 cup frozen peas (optional)",
            "1 lb. dried linguine or other pasta",
            "2 tsp. fresh thyme leaves, coarsely chopped"
          ],
  	      "calories": 2824.0360198948,
          "totalTime": 0.0,
          "createdAt": new Date(),
          "updatedAt": new Date()
      },
      {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_d85c39afd929b14206cd2c42fd6eac9b",
          "name": "Fresh Egg Pasta recipes",
          "image": "https://www.edamam.com/web-img/6f2/6f24457972e79c9b01e376dc92cab093",
          "yield": 5.0,
          "ingredients": [
            "2 cups flour, plus extra for rolling the pasta",
            "1/2 teaspoon salt",
            "3 large eggs"
          ],
          "calories": 1124.5,
          "totalTime": 65.0
      },
      {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_b56746967f751b506b5cb77b4be8de66",
          "name": "Pinky Pasta",
          "image": "https://www.edamam.com/web-img/509/5099a2937045a96a3746fd9c127e77cb.jpg",
          "yield": 4.0,
          "ingredients": [
            "1/2 pound campanelle pasta (or other short macaroni)",
            "1 to 2 garlic cloves, minced",
            "3 tablespoons tomato paste",
            "3/4 cup chicken stock",
            "Freshly ground black pepper",
            "1 tablespoon butter"
          ],
          "calories": 1057.6582726230502,
          "totalTime": 87.0
      },
      {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_4a1615faba11184fd258b6feed5219e1",
          "name": "Pasta Alla Genovese",
          "image": "https://www.edamam.com/web-img/e20/e20058986f5eb68d00f2a17d3a4712f0.jpg",
          "yield": 4.0,
          "ingredients": [
            "squeeze lemon and parmesan to serve",
            "100.0g green beans , trimmed",
            "1 small tub fresh pesto",
            "150.0g new potatoes , halved",
            "300.0g trofie pasta (or another short pasta shape)"
          ],
          "calories": 1638.6460674157304,
          "totalTime": 0.0,
          "createdAt": new Date(),
          "updatedAt": new Date()
      },
      {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_05a5b79820cc5e5a4563242a0f94b314",
          "name": "Pasta with Corn and Garlic",
          "image": "https://www.edamam.com/web-img/26c/26cc347878b11e95035f5b50b1725742.jpg",
          "yield": 4.0,
          "ingredients": [
            "2 ears corn, husks and silks removed, washed",
            "5 garlic cloves, skins on",
            "½ cup italian parsley, leaves only, washed, finely chopped",
            "2 tablespoons sweet butter",
            "2 tablespoons olive oil",
            "1 teaspoon kosher salt, for the pasta water",
            "1 box or pound pasta",
            "1 cup pasta water",
            "Sea salt and black pepper to taste",
            "¼ cup freshly grated parmesan or romano cheese"
          ],
          "calories": 2469.2130271211017,
          "totalTime": 256.0
      },
      {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_24e335333ca89d095ebcda973b62d934",
          "name": "Pasta with Ham and Peas",
          "image": "https://www.edamam.com/web-img/876/876dc994cccb72522bedee1a57fe1f8e.jpg",
          "yield": 4.0,
          "ingredients": [
            "3/4 pound fusili pasta",
            "Salt",
            "2 Tbsp butter",
            "3 garlic cloves, minced (about 1 Tbsp)",
            "1 1/2 cups diced ham",
            "1 1/2 cups frozen peas",
            "1/2 cup cream",
            "1 cup of pasta cooking water (reserved from cooking the pasta)",
            "1/2 cup grated Parmesan cheese",
            "1/2 teaspoon kosher salt",
            "3/4 teaspoon black pepper",
            "1/2 teaspoon lemon zest"
          ],
          "calories": 2883.5030195247855,
          "totalTime": 0.0,
          "createdAt": new Date(),
          "updatedAt": new Date()
      },
      {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_10dc1f9a52e508348b2647714ece6f97",
          "name": "Pasta with Pancetta and Miso",
          "image": "https://www.edamam.com/web-img/475/475d3a91133ffa4080af934fd01d3b9a.jpg",
          "yield": 4.0,
          "ingredients": [
            "3 tablespoons unsalted butter",
            "2 ounces pancetta cut into 1/4-inch cubes",
            "1/2 cup onion, chopped",
            "1/2 pound gemelli (braided pasta) or fusilli (spiral-shaped pasta)",
            "2 tablespoons miso",
            "2 tablespoons flat-leaf parsley, chopped, plus more",
            "1/2 teaspoon freshly cracked black pepper",
            "1/2 cup fresh mozzarella, torn"
          ],
          "calories": 1657.3263692125004,
          "totalTime": 225.0
      },
      {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_1f8a034117737c47cd89d227e67be98d",
          "name": "Pork Quesadillas",
          "image": "https://www.edamam.com/web-img/310/3109aa67eaebff453982004a29ae61f5.jpg",
          "yield": 4.0,
          "ingredients": [
            "1 cup reserved roasted vegetables (from pork chops with fennel and carrots), coarsely chopped",
            "1 tablespoon chopped pickled jalapenos",
            "4 large flour tortillas",
            "2 reserved cooked pork chops (from pork chops with fennel and carrots)",
            "3 1/2 ounces monterey jack cheese, grated (1 cup)"
          ],
          "calories": 2236.5412499999725,
          "totalTime": 93.0
      },
      {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_970bc99b5e3473482de3030f19c1fb56",
          "name": "Pork Rillettes",
          "image": "https://www.edamam.com/web-img/d23/d23884c327c2bb711065ece7be236612.jpg",
          "yield": 1.0,
          "ingredients": [
            "3 lbs pork belly (the really fatty kind) skinned and boned",
            "1 liter of water",
            "Bouquet garni (thyme, rosemary and bay leafs work well)",
            "6 peppercorns",
            "4 cloves of garlic",
            "Rock salt and pepper to season",
            "Slices of pork fat for sealing"
          ],
          "calories": 7268.489470938301,
          "totalTime": 360.0
      },
      {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_e2cbaaf0f6b3aaea8d90dcb4c673c50d",
          "name": "Grilled Pork Loin",
          "image": "https://www.edamam.com/web-img/1b2/1b24f1f5169ed00f9e75114aa84a8868.jpg",
          "yield": 12.0,
          "ingredients": [
            "4 to 5 lb pork loin, fat still attached",
            "Kosher salt and freshly ground black pepper"
          ],
          "calories": 4056.8779941574503,
          "totalTime": 0.0,
          "createdAt": new Date(),
          "updatedAt": new Date()
      },
      {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_755f13d5a3eeadf9ca3c3d144cf0d376",
          "name": "Pork Sorpotel (Goan Pork Offal Stew) Recipe",
          "image": "https://www.edamam.com/web-img/080/080794dec2aaba36885daabb16bcc82a.jpg",
          "yield": 4.0,
          "ingredients": [
            "1 pound pork shoulder",
            "1 pound pork liver",
            "1/2 pound pork heart/kidney/tongue (any offal of your choice or all—totally optional)",
            "1 teaspoon turmeric powder (divided)",
            "Kosher salt",
            "2 tablespoons vegetable oil",
            "10 cloves garlic chopped fine (about 3 tablespoons, divided)",
            "1 inch piece ginger chopped fine (divided)",
            "4 green chilies slit lengthwise (divided)",
            "2 bay leaves",
            "1/4 cup pork blood",
            "For the Spice Paste:",
            "10 peppercorns",
            "10 dry red chilies (reduce according to your spice tolerance)",
            "2 inch piece cinnamon",
            "3 cloves",
            "1 teaspoon cumin seeds (or 2 teaspoons cumin powder)",
            "1/4 cup coconut vinegar or any other vinegar (divided)"
          ],
          "calories": 2187.7427690000004,
          "totalTime": 90.0
      },
      {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_cc73a49d80f5f89d14d205ea7beac2fd",
          "name": "Pub-style pork scratchings",
          "image": "https://www.edamam.com/web-img/6c7/6c764aaddab053b8a962b44474cb735d.jpg",
          "yield": 8.0,
          "ingredients": [
            "60 g higher-welfare pork rind , in one piece",
            "1 teaspoon fennel seeds"
          ],
          "calories": 125.7,
          "totalTime": 70.0
      },
      {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_f866a5e71ce71200585c4167df93038c",
          "name": "Fried Pork Chops",
          "image": "https://www.edamam.com/web-img/f9f/f9f9b94b07c8a19b4bfa8233f54ad60a.jpg",
          "yield": 6.0,
          "ingredients": [
            "8 5 – 7 oz. pork chops",
            "Salt",
            "Freshly ground black pepper",
            "3 tbsp. lard or vegetable oil"
          ],
          "calories": 2116.8337268883,
          "totalTime": 76.0
      },
      {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_5ea0f86e0edf09d90eaa200bb502427e",
          "name": "Sticky pork",
          "image": "https://www.edamam.com/web-img/cea/cea74e3d36923760ab9cab530e5f033b.jpg",
          "yield": 4.0,
          "ingredients": [
            "500g piece pork fillet",
            "4 tbsp soy sauce",
            "1 tbsp clear honey",
            "finely grated zest and juice 1 orange",
            "large knob of root ginger, finely grated"
          ],
          "calories": 1164.33,
         "totalTime": 0.0,
         "createdAt": new Date(),
         "updatedAt": new Date()
      },
      {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_d559706e55c884c1bf70e68b8bd90729",
          "name": "Barbecued Pork",
          "image": "https://www.edamam.com/web-img/4b2/4b234f17846dabd0b06ee5c4b18043ba.jpg",
          "yield": 8.0,
          "ingredients": [
            "1½ pounds center cut pork loin, pork tenderloin, or pork steak",
            "½ cup hoisin sauce",
            "2 tablespoons soy sauce",
            "1½ tablespoons ketchup",
            "1 tablespoon minced garlic",
            "3 tablespoons water"
          ],
          "calories": 1684.1493389045472,
          "totalTime": 60.0
      },
      {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_de317334d9977cb969d516539b6e855b",
          "name": "Pork Chicharron Quesadillas",
          "image": "https://www.edamam.com/web-img/bc2/bc2386d04da921a3250ff3e76aa037aa.jpg",
          "yield": 4.0,
          "ingredients": [
            "¼ to ½ pound pork chicharron",
            "4 fresh corn tortillas",
            "½ pound Oaxaca, Asadero, Quesillo, or Monterey jack cheese, cut into cubes or torn into small pieces"
          ],
          "calories": 1392.0221047750001,
          "totalTime": 20.0
      },
      {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_537aa1763eeccc06934ad6cb352a9061",
          "name": "Double-Pork Carnitas",
          "image": "https://www.edamam.com/web-img/402/402c9eaeaa486495af64e4b9e0912ede.jpg",
          "yield": 8.0,
          "ingredients": [
            "3 pounds boneless pork shoulder (Boston butt), cut into 1 1/2-inch pieces",
            "1 pound pork belly, cut into 1-inch pieces",
            "1 cup homemade chicken stock or low-sodium chicken broth",
            "1 tablespoon (heaping) kosher salt",
            "1 teaspoon freshly ground black pepper",
            "Warm corn tortillas, chopped white onion, lime wedges, sliced avocado, dried oregano, chopped cilantro, and shredded cabbage (for serving)"
          ],
          "calories": 5653.2154562000005,
          "totalTime": 0.0,
          "createdAt": new Date(),
          "updatedAt": new Date()
      },
      {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_b65931a130aed7b1f69b553111f4f0bc",
          "name": "Baked Potato Snack",
          "image": "https://www.edamam.com/web-img/c03/c03870c0284bdb80902ce95f24187714.jpg",
          "yield": 2.0,
          "ingredients": [
            "1 medium sweet potato, or baking potato",
            "Salt and freshly ground black pepper"
          ],
          "calories": 195.3594042222222,
          "totalTime": 0.0,
          "createdAt": new Date(),
          "updatedAt": new Date()
      },
      {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_feada59ee17c28712fd23c37a2457387",
          "name": "potato kugel",
          "image": "https://www.edamam.com/web-img/1f7/1f7f3085e72b56416b0853b94c46abba.jpg",
          "yield": 12.0,
          "ingredients": [
            "1 large or 2 small yellow onions",
            "3 pounds or about 5 large baking — Russet or Idaho — potatoes, peeled",
            "1/3 cup potato starch*",
            "2 teaspoons kosher salt",
            "Lots of freshly ground black pepper",
            "3 large eggs",
            "5 tablespoons olive oil, schmaltz or another oil of your choice"
          ],
          "calories": 2084.483110088304,
          "totalTime": 0.0,
          "createdAt": new Date(),
          "updatedAt": new Date()
      },
      {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_70e5305726dc980ea1239a3ef38656dc",
          "name": "Homemade Potato Bread",
          "image": "https://www.edamam.com/web-img/d9e/d9eeea65936abc325933c38a400ea6a6.jpg",
          "yield": 10.0,
          "ingredients": [
            "1 large russet potato (about a 12 oz potato)",
            "2 cups (475 ml) milk",
            "2 teaspoons salt",
            "1 teaspoon sugar",
            "2 Tbsp olive oil",
            "1 packet instant yeast (2 1/4 teaspoons)",
            "5 cups (680g) all purpose flour"
          ],
          "calories": 3259.77630829345,
          "totalTime": 0.0,
          "createdAt": new Date(),
          "updatedAt": new Date()
      },
      {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_56f199006bfdcf00eaf792235088f776",
          "name": "Crisp Potato Galettes",
          "image": "https://www.edamam.com/web-img/119/11989fe199807f7265a68a48214f4304.jpg",
          "yield": 2.0,
          "ingredients": [
            "Olive-oil cooking spray",
            "1 (8-ounce) russet (baking) potato"
          ],
          "calories": 170.7547968375,
          "totalTime": 30.0
      },
      {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_7ab50fa939464967fc72aa1d3cf05034",
          "name": "How to Bake a Potato recipes",
          "image": "https://www.edamam.com/web-img/4b0/4b0a58ce302956e4af772f146649a096",
          "yield": 4.0,
          "ingredients": [
            "One russet potato per person",
            "olive oil",
            "salt",
            "pepper"
          ],
          "calories": 224.8089409333333,
          "totalTime": 65.0
      },
      {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_c84b04f76959e945c3fe7cb4f4d3a669",
          "name": "Super Bowl Snacks: Loaded Baked Potato Potato Chip Nachos Recipe",
          "image": "https://www.edamam.com/web-img/8d0/8d0f29fb341a1e8685304cdf29ea9c30.jpg",
          "yield": 6.0,
          "ingredients": [
            "1 seven-ounce bag of kettle-cooked potato chips",
            "1 medium russet potato, peeled, and cut into 1-inch cubes",
            "1/2 cup whole milk",
            "1 tablespoon butter",
            "Salt and pepper",
            "4 strips thick-cut bacon",
            "1 cup grated extra sharp cheddar cheese",
            "2 to 3 scallions, sliced",
            "1/4 cup sour cream"
          ],
          "calories": 2472.278740538919,
          "totalTime": 0.0,
          "createdAt": new Date(),
          "updatedAt": new Date()
      },
      {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_1269ffb1aae98bacec84324b95d06de6",
          "name": "One Potato, Two Potato Rolls",
          "image": "https://www.edamam.com/web-img/baf/baf1221933d73bb0a830c98e7344b76f.JPG",
          "yield": 10.0,
          "ingredients": [
            "3 cups unbleached flour",
            "2 teaspoons instant yeast",
            "4 tablespoons light brown sugar",
            "1/4 cup nonfat dry milk powder",
            "1/4 cup potato flour",
            "1 1/2 teaspoon kosher salt",
            "1/4 cup unsalted butter, softened",
            "1/2 cup mashed sweet potato",
            "2 large eggs",
            "1 cup water",
            "sesame seeds"
          ],
          "calories": 2437.357499997671,
          "totalTime": 0.0,
          "createdAt": new Date(),
          "updatedAt": new Date()
      },
      {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_f6a0ed4480be00c5fb2f90e828db805b",
          "name": "Sweet potato wedges",
          "image": "https://www.edamam.com/web-img/1c7/1c7acbc1781902cabad47c5a4bcea36e.jpg",
          "yield": 4.0,
          "ingredients": [
            "2 sweet potato, cut into wedges",
            "4 tbsp olive oil",
            "1 tbsp thyme leaves",
            "Salt and freshly ground black pepper",
            "Chervil, to garnish"
          ],
          "calories": 710.955894999871,
          "totalTime": 60.0
      },
      {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_f142ed9eac72b9379968443ba0396777",
          "name": "Mediterranean potato salad",
          "image": "https://www.edamam.com/web-img/3f3/3f3c1559b9743c89af4d3b71e668d178.jpg",
          "yield": 6.0,
          "ingredients": [
            "1kg baby new potato, halved",
            "1 tbsp olive oil",
            "3 tbsp grated Parmesan (or vegetarian alternative)",
            "small bunch basil, roughly chopped",
            "6 sundried tomato, finely sliced"
          ],
          "calories": 1095.6818,
          "totalTime": 0.0,
          "createdAt": new Date(),
          "updatedAt": new Date()
      },
      {
          "uri": "http://www.edamam.com/ontologies/edamam.owl#recipe_4d47979fcb21fd41c3c9ac1fe9292549",
          "name": "Potato Bread",
          "image": "https://www.edamam.com/web-img/297/2970a92ec3367fcf7f505bb7a9a2ef32.jpg",
          "yield": 10.0,
          "ingredients": [
            "1 yeast cake or 1 package active dry yeast",
            "1 tablespoon sugar",
            "¼ cup warm potato water",
            "¼ cup butter (½ stick)",
            "1 tablespoon salt",
            "¾ cup warm potato water and ¾ cup warm milk, or 1½ cups warm potato water",
            "¾ cup mashed potatoes",
            "5½ to 6 cups unbleached or all purpose flour"
          ],
          "calories": 3255.052,
    	    "totalTime": 0.5
      }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Recipes", null, {});
  }
};
