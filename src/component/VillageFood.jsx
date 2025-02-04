import Banner from "./Banner";
import Feature from "./Feature";
import Foodlist from "./Foodlist";
import Footer from "./Footer";
import Header from "./Header";
import Review from "./Review";
import Searce from "./Searce";
import { useState } from "react";

const FOODS = [
  {
    id: 1,
    title: "Rice Cooking Method",
    Water: "broth for added flavor",
    Ingredients: " basmati, jasmine, brown rice, white rice, or sushi rice.",
    OiButter: "for cooking or sautéing",
    product: "This product contains natural ingredients.",
    offer: true,
    price: "$50",
  },
  {
    id: 2,
    title: "Rost Lover",
    water: "adjust based on rice type",
    product: "This product contains natural ingredients.",
    Ingredients: " this recipe include flour, sugar, eggs, and butter.",
    offer: false,
    price: "$250",
  },
  {
    id: 3,
    title: "vigetable Lover",
    water: "adjust based on rice type",
    product: "Fresh Vegetables.",
    Ingredients: " this recipe include flour, sugar, eggs, and butter.",
    offer: true,
    WashThoroughly:
      "Rinse vegetables under cold water to remove dirt and pesticides.",
    price: "$250",
  },
  {
    id: 4,
    title: "Chicken Biryani",
    water: "adjust based on rice type",
    Ingredients: " this recipe include flour, sugar, eggs, and butter.",
    ChickenMarinade: "500g chicken coriander powder Salt to taste ",
    FortheRice: "basmati rice,water,cumin seeds",
    ForLayeringCooking: "large onions,medium tomatoes,oil or ghee",
    LayeringBiryani:
      "Sprinkle fried onions, saffron milk,rose/kewra water over the rice.",
    product: "This product contains natural ingredients.",
    offer: true,
    price: "$450",
  },
  {
    id: 5,
    title: "Rost Lover",
    water: "adjust based on rice type",
    ChickenMarinade: "NO",
    Ingredients: " this recipe include flour, sugar, eggs, and butter.",
    product: "This product contains natural ingredients.",
    offer: "50%",
    price: "$450",
  },
  {
    id: 6,
    title: "Rost Lover",
    water: "adjust based on rice type",
    Ingredients: " this recipe include flour, sugar, eggs, and butter.",
    product: "This product contains natural ingredients.",
    offer: false,
    price: "$250",
  },
  {
    id: 7,
    title: "Rost Lover",
    water: "adjust based on rice type",
    Ingredients: " this recipe include flour, sugar, eggs, and butter.",
    product: "This product contains natural ingredients.",
    offer: true,
    price: "$250",
  },
  {
    id: 8,
    title: "Rost Lover",
    water: "adjust based on rice type",
    Ingredients: " this recipe include flour, sugar, eggs, and butter.",
    product: "This product contains natural ingredients.",
    offer: false,
    price: "$250",
  },
  {
    id: 9,
    title: "Rost Lover",
    water: "adjust based on rice type",
    Ingredients: " this recipe include flour, sugar, eggs, and butter.",
    product: "This product contains natural ingredients.",
    offer: true,
    price: "$250",
  },
];

const VillageFood = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [cheackOffer, setCheackOffer] = useState(false);
  const onCheaker = () => {
    setCheackOffer(!cheackOffer);
  };
  return (
    <div className="mx-auto ">
      <Header />
      <Banner />
      <Searce
        searchTerm={searchTerm}
        onCheaker={onCheaker}
        cheackOffer={cheackOffer}
        onSearchFood={setSearchTerm}
      />
      <Foodlist
        searchTerm={searchTerm}
        foods={FOODS}
        cheackOffer={cheackOffer}
      />
      <Feature />
      <Review />
      <Footer />
    </div>
  );
};

export default VillageFood;
