import star2 from "../assets/images/Rating Stars2.svg";
import star4 from "../assets/images/Rating Stars4.svg";
import apple from "../assets/images/apple.jpg";
import image2 from "../assets/images/Potato.jpg";
import almond from "../assets/images/almond.jpg";
import pineapple from "../assets/images/Pineapple.jpg";
import image3 from "../assets/images/Zucchini.jpg";

export const DUMMAY_PRODUCTS = [
  {
    id: "v1",
    image: image2,
    title: "Potato",
    subtitle: "Fresh Potato from Gujarat",
    starCount: star4,
    verified: true,
    price: 50,
    weight: 500,
  },
  {
    id: "f1",
    image: apple,
    title: "Apple",
    subtitle: "Fresh Apple from Kashmir",
    starCount: star4,
    verified: true,
    price: 100,
    weight: 500,
  },
  {
    id: "df1",
    image: almond,
    title: "Almonds",
    subtitle: "Fresh Almonds from Kashmir",
    starCount: star4,
    verified: true,
    price: 1000,
    weight: 500,
  },
  {
    id: "f2",
    image: pineapple,
    title: "Pineapple",
    subtitle: "Fresh Pineapple from Mp",
    starCount: star2,
    verified: false,
    price: 250,
    weight: 400,
  },
  {
    id: "v2",
    image: image3,
    title: "Kasoori Methi",
    subtitle: "Fresh Kasoori Methi",
    starCount: star2,
    verified: false,
    price: 80,
    weight: 500,
  },
];
