import recipe1 from "./images/vegan-laab-600x600.jpg";
import recipe2 from "./images/vegan-stirfry-600x600.jpg";
import recipe3 from "./images/vegan-redcurry-600x600.jpg";
import recipe4 from "./images/indian-eggplant-600x600.jpg";
import recipe5 from "./images/vegan-tomyum-600x600.jpg";
import recipe6 from "./images/massaman-curry-600x600.jpg";
import recipe7 from "./images/tofu-padthai-600x600.jpg";
import recipe8 from "./images/banana-pancakes-600x600.jpg";

export default [
  {
    id: 1,
    name: "Vegan Laab",
    slug: "vegan-laab",
    image: recipe1,
    videoID: "M5pVP7sQYR0",
    yields: "4",
    preptime: { hours: "0", mins: "5" },
    cooktime: { hours: "0", mins: "10" },
    totaltime: { hours: "0", mins: "15" },
    ingredients: [
      "2 pc pressed tofu (170g)",
      "1/2 cup cooked corn kernels",
      "1½  Tbsp soy sauce",
      "½ Tbsp Golden Mountain Sauce",
      "3 Tbsp lime juice",
      "2 Tbsp uncooked jasmine rice or sticky rice",
      "Any chili flakes",
      "3 Tbsp thinly sliced shallots",
      "2-inch piece lemongrass from the garden",
      "¼ cup mint leaves, torn into small pieces if large",
      "3 Kaffir lime leaves",
    ],
    instructions: [
      { id: 1, text: "Crumble the tofu into small pieces with your hands." },
      {
        id: 2,
        text:
          "In a medium pot, add about 2 Tbsp of water then turn the heat on high. Add tofu and corn and stir until hot.",
      },
      {
        id: 3,
        text:
          "Turn off the heat then add shallots, lemongrass, kaffir lime leaves, and chilies; stir to mix well.",
      },
      { id: 4, text: "Add soy sauce, Golden Mountain Sauce and lime juice." },
      {
        id: 5,
        text:
          "When ready to serve stir in toasted rice powder, mint and cilantro. (Don’t add these too far in advance as the rice will absorb the liquid and make it dry, and the herbs will wilt.)",
      },
      {
        id: 6,
        text:
          "Serve with lettuce leaves and eat like a bite-sized lettuce wrap, or serve with jasmine or sticky rice as part of a meal.",
      },
    ],
  },
  {
    id: 2,
    name: "Vegan Noodle Stir-Fry",
    slug: "noodle-stirfry",
    image: recipe2,
    videoID: "BsY6mzglx-Q",
    yields: "4",
    preptime: { hours: "0", mins: "15" },
    cooktime: { hours: "0", mins: "8" },
    totaltime: { hours: "0", mins: "23" },
    ingredients: [
      "150g dried Chinese wheat noodles, no eggs",
      "5 cloves garlic, chopped",
      "100g pressed tofu, marinated, cut into small pieces",
      "2 cups cabbage, bite-sized pieces",
      "1 cup julienned carrots",
      "5–6 dried shiitake mushrooms, rehydrated, stems removed, chopped",
      "2 Tbsp Thai soy sauce",
      "1 Tbsp Golden Mountain sauce",
      "1 ½  tsp sugar",
      "½ tsp ground white pepper",
      "1 cup garlic chives, 2-inch pieces",
    ],
    instructions: [
      {
        id: 1,
        text:
          "Add noodles to rapidly boiling water and cook for about 2 minutes, just until they are pliable and release from each other but are still slightly undercooked. Timing may vary depending on your specific kind of noodles. Drain, rinse with cold water and set aside.",
      },
      {
        id: 2,
        text:
          "In a wok, add just enough oil to coat the bottom followed by chopped garlic and pressed tofu. Once the garlic starts to turn golden, add cabbage, carrots, and mushrooms. Add a little splash of soy sauce over the vegetables and stir-fry for about a minute to wilt them slightly. ",
      },
      {
        id: 3,
        text:
          "Add the noodles, then drizzle the soy sauce and golden mountain sauce over the noodles and toss with tongs until the sauces are well distributed. Sprinkle sugar and white pepper and toss to mix well.",
      },
      {
        id: 4,
        text:
          "Check doneness of noodles, they should be done by this point, but if they’re still too hard, you can add a splash of water and toss it around until all the water is absorbed.",
      },
      {
        id: 5,
        text:
          "Turn off the heat and immediately add garlic chives, tossing it until the garlic chives are slightly wilted.",
      },
    ],
  },
  {
    id: 3,
    name: "Vegan Red Curry แกงเผ็ดมังสวิรัติ",
    slug: "redcurry",
    image: recipe3,
    videoID: "daMi8AdSRY0",
    yields: "4",
    preptime: { hours: "0", mins: "15" },
    cooktime: { hours: "0", mins: "15" },
    totaltime: { hours: "0", mins: "30" },
    ingredients: [
      "2 cups hot water",
      "6–8 pc dried shiitake mushrooms",
      "1 cup bamboo shoots, canned, strips or sticks",
      "2 cups coconut milk",
      "3–5 Tbsp red curry paste",
      "1 heaping Tbsp tomato paste",
      "1 Tbsp soy sauce",
      "½ Tbsp Golden Mountain Sauce",
      "2 Tbsb palm sugar, chopped",
      "6–7 kaffir lime leaves",
      "300 g medium firm tofu",
      "A handful red peppers for colour ",
      "1 big handful Thai basil",
    ],
    instructions: [
      {
        id: 1,
        text:
          "Soak shiitake mushrooms in hot water for at least 30 minutes or until the mushrooms are fully hydrated. Remove from water (reserve the water) and squeeze out water from the mushrooms. Slice off the stems and discard, and cut the cap into 1/4-inch slices.",
      },
      {
        id: 2,
        text:
          "Rinse bamboo shoots well, then boil in water for 5 minutes. Drain and rinse. This will remove the odour from the bamboo which some find unpleasant.",
      },
      {
        id: 3,
        text:
          "Add 3/4 cup of the coconut milk into a heavy bottomed pot and reduce over medium heat until thick and the coconut oil starts separating from the coconut milk. If using canned coconut milk, this may not happen, in which case just proceed with the recipe.",
      },
      {
        id: 4,
        text:
          "Add curry paste and stir to break it up and mix with coconut milk, then and tomato paste and keep stirring until the oil starts to sizzle around the edges of the paste.",
      },
      {
        id: 5,
        text:
          "Add remaining coconut milk and 1 cup of mushroom water and bring to a boil. Add soy sauce, Golden Mountain sauce and palm sugar and stir to dissolve the sugar.  Add bamboo shoots, mushrooms, and tear in kaffir lime leaves and stir. Then gently add the tofu pieces and push them down so they are submerged, being careful not to break the tofu. Simmer for at least 10 minutes, if it looks a little thick, you can add more mushroom water. Add red peppers and cook for 1 minute. Stir in Thai basil and remove from heat. Serve with jasmine rice. Enjoy!",
      },
    ],
  },
  {
    id: 4,
    name: "Indian Eggplant Curry",
    slug: "indian-eggplant-curry",
    image: recipe4,
    videoID: "TGHKYZe6DDE",
    yields: "4",
    preptime: { hours: "0", mins: "5" },
    cooktime: { hours: "0", mins: "15" },
    totaltime: { hours: "0", mins: "20" },
    ingredients: [
      "1 large globe eggplant",
      "1 ½ tsp cumin seeds",
      "1 tsp ground coriander",
      "½ tsp turmeric powder",
      "1 green/red chilies",
      "3 cloves garlic, chopped",
      "½ a medium onion, chopped",
      "1-inch piece ginger, minced",
      "2 tomatoes",
      "A handful chopped cilantro, optional",
      "For serving: naan, other flatbreads, or rice",
      "half lime",
      "1 tbsp Salt and Chilli flakes",
    ],
    instructions: [
      {
        id: 1,
        text:
          "Add oil to a pot and turn the heat on to medium. Immediately add cumin seeds and cook, stirring constantly, until it is aromatic and is darkened slightly.",
      },
      {
        id: 2,
        text:
          "Once cumin seeds are toasted, stir in coriander and turmeric powder and toast for 10 seconds, then right away add the onion and stir to mix. Add green chilies, garlic, ginger and ½ tsp salt. Saute for 3-4 minutes until the onions are translucent.",
      },
      {
        id: 3,
        text:
          "Add tomatoes, then cook, stirring occasionally until the tomatoes are soft and mushy. Add eggplant, cayenne pepper, another ¼ tsp salt, stir to mix and break up any big eggplant chunks. Add frozen peas and a splash of water to loosen the texture a bit, then cover and cook over low heat for 15 minutes, stirring occasionally. Once done, taste and add more salt or cayenne pepper as needed (you’ll probably need a pinch more salt, but this depends on the size of your eggplant.)",
      },
      {
        id: 4,
        text:
          "Turn off the heat, the stir in chopped cilantro and lime. Mix well and Serve with some yummy naan or rice!",
      },
    ],
  },
  {
    id: 5,
    name: "Vegan Tom Yum Soup",
    slug: "tomyum-soup",
    image: recipe5,
    videoID: "TZv6srfTnRA",
    yields: "4",
    preptime: { hours: "0", mins: "15" },
    cooktime: { hours: "0", mins: "30" },
    totaltime: { hours: "0", mins: "45" },
    ingredients: [
      "1 Tbsp coconut oil",
      "1 stalk lemongrass, cut in half then halved lengthwise",
      "1/2 medium yellow onion",
      "1½ Tbsp fresh minced ginger",
      "2 Thai red chili peppers",
      "31½ cups thinly sliced shiitake mushrooms",
      "4 cloves garlic",
      "3 Tbsp green curry paste ",
      "6 cups vegetable broth",
      "1/2 cup light coconut milk",
      "2 medium limes",
      "1 15-oz can diced tomatoes",
      "1 Tbsp of tamari",
      "1-2 Tbsp sugar",
    ],
    instructions: [
      {
        id: 1,
        text:
          "Heat a large pot or dutch oven over medium heat. Once hot, add oil or water",
      },
      {
        id: 2,
        text:
          "Add lemongrass (optional) and onion and sauté for 5 minutes, stirring occasionally. The onions should become translucent and soft and slightly browned.",
      },
      {
        id: 3,
        text:
          "Add fresh ginger, chili peppers, shiitake mushrooms, garlic, and curry paste (which is added to substitute for fresh kaffir lime leaf and lemongrass) and stir. Sauté for 4-5 minutes, stirring occasionally.",
      },
      {
        id: 4,
        text:
          "Add vegetable broth, coconut milk, a few slices of lime peel, diced (drained) tomatoes, coconut aminos, and coconut sugar and stir to combine. Bring back to a boil, then reduce heat to a simmer, cover, and cook for 10-15 minutes.",
      },
      {
        id: 5,
        text:
          "Add the lime juice and stir. Simmer for a few more minutes. Then taste and adjust flavor as needed, adding more lime for acidity, coconut sugar for sweetness, coconut aminos (or salt) for saltiness / depth of flavor, or coconut milk for creaminess.",
      },
      {
        id: 6,
        text:
          "Serve as is, or over zucchini noodles, kelp noodles, or cooked rice noodles. You could also serve it over white rice or brown rice. Garnish with fresh cilantro for a pop of color (optional).",
      },
      {
        id: 7,
        text:
          "Store leftovers covered in the refrigerator up to 4-5 days, or in the freezer up to 1 month. Reheat on the stovetop, covered, until warmed through.",
      },
    ],
  },
  {
    id: 6,
    name: "Vegan Massaman Curry",
    slug: "vegan-massaman-curry",
    image: recipe6,
    videoID: "VyJWLyKXHNw",
    yields: "4",
    preptime: { hours: "0", mins: "10" },
    cooktime: { hours: "0", mins: "30" },
    totaltime: { hours: "0", mins: "40" },
    ingredients: [
      "1 batch Tofu",
      "2 Tbsp coconut or avocado oil",
      "3 medium shallots, thinly sliced",
      "1 tsp whole cumin seed",
      "1 tsp whole coriander powder",
      "5 Tbsp red curry paste",
      "1 ½ cups baby potatoes cut into bite-size pieces",
      "2 large carrots, peeled and diced 1/4-inch thick",
      "2 14-oz. cans light fat coconut milk",
      "1/4 tsp ground cinnamon",
      "1 dash each cardamom and nutmeg (optional)",
      "1-2 Tbsp maple syrup or coconut sugar",
      "2 Tbsp peanut butter",
      "1-2 Tbsp lime juice",
    ],
    instructions: [
      {
        id: 1,
        text:
          "simply add (pressed) cubed extra-firm tofu to the curry in the last 10 minutes of cooking or sauté pressed tofu in a little oil and season with salt, pepper, and curry powder before cooking the curry. Set aside, then add back in in the last few minutes of cooking for best results.",
      },
      {
        id: 2,
        text:
          "Heat a large pot or dutch oven (we like this one) over medium heat. Once hot, add oil (or water) and shallot. Sauté 2 minutes, stirring frequently. Turn down heat if browning too quickly.",
      },
      {
        id: 3,
        text:
          "Add whole cumin and coriander seeds (or powder) and sauté for another 1-2 minutes, stirring frequently. Then add red curry paste and stir to combine. Cook for 1 minute more.",
      },
      {
        id: 4,
        text:
          "Add potatoes and carrots and stir to coat. Cook for 2 minutes. Then add coconut milk, water (starting with the lesser amount), cinnamon, cardamom, nutmeg, coconut aminos, maple syrup, and peanut butter. (Reserve lime juice for later).",
      },
      {
        id: 5,
        text:
          "The liquid should cover all of the ingredients — if it does not, add a bit more coconut milk or water to cover. Bring to a simmer over medium-high heat. Once it reaches a low boil, reduce heat to a simmer(add meat at this time if cooking with shrimp or chicken) and cook for 10 - 15 minutes uncovered.You don't want it boiling, so ensure it's cooking over low heat at a simmer.",
      },
      {
        id: 6,
        text:
          "Add lime in the last few minutes of cooking and stir. Then taste and adjust flavor as needed, adding more lime for acidity, salt or coconut aminos for saltiness, curry paste for heat / more intense curry taste, maple syrup for sweetness, cinnamon or nutmeg for warmth, or peanut butter for creaminess / more intense peanut flavor. Stir and cook a few minutes more.Then turn off heat and let stand for at least 5 minutes before serving(this allows the flavors to meld).",
      },
      {
        id: 7,
        text:
          "To serve, divide between serving bowls and enjoy as is or with a side of rice, cauliflower rice, quinoa, or steamed greens (optional). Fresh lime juice, cilantro, and roasted peanuts (optional) make lovely additions as well.",
      },
    ],
  },
  {
    id: 7,
    name: "Tofu Pad Thai",
    slug: "tofu-padthai",
    image: recipe7,
    videoID: "gu81H2fTK8g",
    yields: "4",
    preptime: { hours: "0", mins: "20" },
    cooktime: { hours: "0", mins: "10" },
    totaltime: { hours: "0", mins: "30" },
    ingredients: [
      "1 ½ tsp tamarind paste / concentrate",
      "1/3 cup coconut aminos",
      "3 ½ Tbsp sugar",
      "1 ½ tsp chili garlic sauce",
      "1 ½ Tbsp lime juice",
      "1 Tbsp fish sauce",
      "1 Tbsp sesame oil",
      "1 cup cubed extra firm tofu",
      "2 Thai red chilies",
      "2 cloves garlic, minced",
      "1 Tbsp coconut aminos",
      "1 cup bean sprouts",
      "1 cup chopped green onions",
      "1/3 cup chopped roasted salted peanuts",
      "8 ounces Pad Thai rice noodles",
    ],
    instructions: [
      {
        id: 1,
        text:
          "To a small saucepan, add tamarind, coconut aminos, coconut sugar, chili garlic sauce, lime juice, and vegetarian fish sauce (optional) and heat over medium heat until just simmering. Cook for 30 seconds, stirring occasionally, then turn off heat. Set aside.",
      },
      {
        id: 2,
        text:
          "Ensure all stir fry ingredients are prepped, including cubed (briefly pressed) tofu, chopped green onions, minced garlic, bean sprouts, and chopped peanuts. If serving with peanut sauce (optional), prepare at this time.",
      },
      {
        id: 3,
        text:
          "Add Pad Thai noodles to a large bowl and cover with just boiling water. Stir and cover and cook according to package instructions (usually about 5-6 minutes or until al dente).",
      },
      {
        id: 4,
        text:
          "Drain noodles and toss with a little sesame oil to prevent sticking. Set aside",
      },
      {
        id: 5,
        text:
          "Heat a large-rimmed skillet over medium heat. Once hot, add oil and tofu and sauté for about 4 minutes, turning occasionally so it browns on all sides. Add red pepper flakes or Thai chilies, garlic, and coconut aminos (be careful, as the coconut aminos can splatter). Toss gently to combine until garlic is just slightly browned. ",
      },
      {
        id: 6,
        text:
          "Add noodles, Pad Thai sauce, bean sprouts, green onions, and peanuts and cook over medium-high heat, tossing occasionally (tongs are most useful) for about 2-3 minutes or until the sauce has coated everything and the dish is hot.",
      },
      {
        id: 7,
        text:
          "To serve, plate with additional garnishes such as lime wedges, bean sprouts, peanut sauce, shredded carrot, cilantro, and sriracha or chili garlic sauce (all optional).",
      },
      {
        id: 8,
        text:
          "eftovers will keep in the refrigerator for approximately 3-4 days.",
      },
    ],
  },
  {
    id: 8,
    name: "Banana Egg Pancakes",
    slug: "banana-egg-pancakes",
    image: recipe8,
    videoID: "bLIHYi7XN7c",
    yields: "6",
    preptime: { hours: "0", mins: "5" },
    cooktime: { hours: "0", mins: "10" },
    totaltime: { hours: "0", mins: "15" },
    ingredients: [
      "2 medium ripe bananas",
      "2 tsp baking powder",
      "1 tsp vanilla extract",
      "2 large eggs",
      "4-6 Tbsp coconut flour",
      "Butter",
      "Berries / Fruit",
      "Peanut butter",
      "Seeds",
      "Maple syrup",
    ],
    instructions: [
      {
        id: 1,
        text:
          "We’ve found that while these pancakes cook well on the stove-top, it can be helpful to keep them warm in the oven where they will continue to bake and firm up while the remaining pancakes cook. If this sounds helpful, preheat oven to 350 degrees F (176 C) and line a baking sheet with parchment paper. However, this is not necessary, meaning you can skip this step.",
      },
      {
        id: 2,
        text:
          "To a large mixing bowl, add bananas and mash until only small bits remain. Then add baking powder and vanilla extract and use a fork or whisk to mash until thoroughly combined.",
      },
      {
        id: 3,
        text:
          "Next add eggs, break yolks with a fork or whisk, and whisk thoroughly until well combined.",
      },
      {
        id: 4,
        text:
          "Lastly, add coconut flour 1 Tbsp (9 g) at a time until a thick but scoopable batter is achieved (thicker than your average pancake batter, but not so thick that it appears dry). If you add too much coconut flour, add a little dairy-free milk to thin.",
      },
      {
        id: 5,
        text:
          "Heat a large skillet over medium heat. Once hot, add a little cooking oil to coat the pan. Then spoon in roughly 3-Tbsp amounts of batter and reduce heat to low. These benefit from cooking slower and lower than your average pancakes. Cover with a lid to help the center cook through.",
      },
      {
        id: 6,
        text:
          "Cook for 3-4 minutes, then remove lid and flip carefully. Cook for 3-4 minutes more (lowering heat as needed if cooking too fast) or until the underside is golden brown. Transfer cooked pancakes to the preheated oven on the prepared baking sheet (or to a serving plate). Continue cooking until all batter is used up — as recipe is written, ~6 pancakes.",
      },
      {
        id: 7,
        text:
          "To serve, top with desired toppings, such as nut butter, sliced bananas or fresh fruit, dairy-free yogurt, or maple syrup. We also love a sprinkle of seeds for more fiber and healthy fats.",
      },
      {
        id: 8,
        text:
          "Best when fresh, though leftovers keep covered in the refrigerator 3-4 days, or in the freezer up to 1 month. To reheat, microwaving is most effective. Otherwise, toast or bake in a 350 degree F (176 C) oven until hot.",
      },
    ],
  },
];
