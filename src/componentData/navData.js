import bath from "../images/bath-best-sellers.jpeg";
import motherAndBaby from "../images/mother-and-baby.jpeg";
import shower from "../images/shower-gel.jpeg";
import handRub from "../images/hand-rub.jpeg";
import essentials from "../images/essential-oils.jpeg";

const navItems = [
  {
    title: "Best Sellers",
    id: 1,
    items: [
      { title: "BATH & BODY BESTSELLERS", image: bath, id: 1 },
      { title: "MOTHER & BABY COLLECTION", id: 2, image: motherAndBaby },
      {
        title: "FREE 300ML SHOWER GEL WHEN YOU SPEND £50",
        id: 3,
        image: shower,
      },
      {
        title: "FREE HAND RUB WHEN YOU SPEND £30",
        id: 4,
        image: handRub,
      },
      { title: "20% OFF ESSENTIAL OILS", id: 5, image: essentials },
    ],
  },
  { title: "Offers", id: 2 },
  { title: "Skincare", id: 3 },
  { title: "Bath & Body", id: 4 },
  { title: "Mother & Baby", id: 5 },
  { title: "Gifts", id: 6 },
  { title: "Aromatherapy", id: 7 },
  { title: "Wellbeing", id: 8 },
  { title: "Therapies", id: 9 },
  { title: "About Us", id: 10 },
];

export { navItems };
