export const restaurants = [
  {
    id: 4,
    name: "Live Cake",
    rating: "4.9 Excellent",
    ratings: "(920+)",
    distance: "1 km away",
    img: require("../images/restaurants/vapiano.png"),
    tags: ["pancakes", "sweets", "waffles"],
    duration: "35 - 45",
  },
  {
    id: 3,
    name: "El Molino",
    rating: "4.9 Excellent",
    ratings: "(900+)",
    distance: "0.7 km away",
    img: require("../images/restaurants/molino.png"),
    tags: ["pancakes", "sweets", "waffles"],
    duration: "35 - 45",
  },

  {
    id: 1,
    name: "Vapiano",
    rating: "4.8 Excellent",
    ratings: "(500+)",
    distance: "1.2 km away",
    img: require("../images/restaurants/live_cake.png"),
    tags: ["cakes", "cupcakes", "macarons"],
    duration: "30 - 45",
  },
  {
    id: 2,
    name: "Urban Greens",
    rating: "4.5 Excellent",
    ratings: "(400+)",
    distance: "0.7 km away",
    img: require("../images/restaurants/urban_greens.png"),
    tags: ["desserts", "donuts"],
    duration: "30 - 45",
  },
];


export const getDishById = (id: number) => {
  const meals = restaurant.food.flatMap((category) => category.meals);
  return meals.find((food) => food.id === id);
};

export const restaurant = {
  name: "Live Cake",
  rating: "4.5 Excellent",
  ratings: "(400+)",
  img: require("../images/restaurants/vapiano.png"),
  distance: "0.85 miles away",
  delivery: "10-2 min",
  tags: ["pancakes", "sweets", "waffles"],
  about:
    "Sugar-free, egg-free, healthy handmade cakes made with yogurt and nuts",
  food: [
    {
      category: "cakes",
      meals: [
        {
          id: 1,
          name: "Chocolate Cake",
          price: 12.99,
          img: require("../images/restaurants/cakes/chocolate_cake.png"),
          info: "Chocolate cake with chocolate icing",
          // calories: 250,
          // tags: ["chocolate", "cake", "dessert"],
        },
        {
          id: 2,
          name: "Strawberry Cake",
          price: 12.99,
          img: require("../images/restaurants/cakes/strawberry_cake.png"),
          info: "Strawberry cake with strawberry icing",
          // calories: 250,
          // tags: ["strawberry", "cake", "dessert"],
        },
        {
          id: 3,
          name: "Vanilla Cake",
          price: 12.99,
          img: require("../images/restaurants/cakes/vanilla_cake.png"),
          info: "Vanilla cake with vanilla icing",
          // calories: 250,
          // tags: ["vanilla", "cake", "dessert"],
        },
        {
          id: 4,
          name: "Chocolate Cake",
          price: 12.99,
          img: require("../images/restaurants/cakes/chocolate_cake.png"),
          info: "Chocolate cake with chocolate icing",
          // calories: 250,
          // tags: ["chocolate", "cake", "dessert"],
        },
        {
          id: 5,
          name: "Strawberry Cake",
          price: 12.99,
          img: require("../images/restaurants/cakes/strawberry_cake.png"),
          info: "Strawberry cake with strawberry icing",
          // calories: 250,
          // tags: ["strawberry", "cake", "dessert"],
        },
        {
          id: 6,
          name: "Vanilla Cake",
          price: 12.99,
          img: require("../images/restaurants/cakes/vanilla_cake.png"),
          info: "Vanilla cake with vanilla icing",
          // calories: 250,
          // tags: ["vanilla", "cake", "dessert"],
        },
      ],
    },
  ],
};