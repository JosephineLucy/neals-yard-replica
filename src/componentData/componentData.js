import userIcon from "../images/user.jpeg";
import search from "../images/search.jpeg";
import burger from "../images/burger-menu.jpeg";
import bag from "../images/bag.jpeg";
import floral from "../images/floral-img.jpg";
import soap from "../images/soap.jpg";

const currencyList = [
  "United Kingdom (GBP £)",
  "United States (USD $)",
  "China (CNY ¥)",
  "Japan (JPY ¥)",
  "Taiwan (NTD $)",
  "Hong Kong (HKD $)",
  "Malaysia (RM)",
  "Thailand (THB ฿)",
  "Philippines (PHP ₱)",
  "Israel (ILS ₪)",
  "Sweden (SEK kr)",
  "Greece (EUR €)",
  "Canada (CAD $)",
  "Singapore (SGD $)",
];

const navItems = [
  "Best Sellers",
  "Offers",
  "Skincare",
  "Bath & Body",
  "Mother & Baby",
  "Gifts",
  "Aromatherapy",
  "Wellbeing",
  "Therapies",
  "About Us",
];
const announcements = [
  { title: "CURATED WELLBEING BUNDLES AT UP TO 33% OFF", id: 1 },
  { title: "FREE Hand Rub when you spend £30", id: 2 },
  { title: "20% OFF ESSENTIAL OILS", id: 3 },
  { title: "FREE 300ml Shower Gel when you spend £50", id: 4 },
];

const headerIcons = [
  {
    id: 1,
    image: userIcon,
    title: "userIcon",
  },
  {
    id: 2,
    image: search,
    title: "searchIcon",
  },
  {
    id: 3,
    image: burger,
    title: "burgerMenu",
  },
  {
    id: 4,
    image: bag,
    title: "shoppingBag",
  },
];

const heroImages = [
  {
    id: 1,
    image: floral,
  },
  {
    id: 2,
    image: soap,
  },
];

export { navItems, announcements, currencyList, headerIcons, heroImages };
