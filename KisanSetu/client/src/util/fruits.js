import apple from "../assets/images/apple.jpg";
import banana from "../assets/images/banana.jpg";
import cherry from "../assets/images/Cherry.jpg";
import pineapple from "../assets/images/Pineapple.jpg";
import stw from "../assets/images/strawbarry.jpg";
import star2 from "../assets/images/Rating Stars2.svg";
import star4 from "../assets/images/Rating Stars4.svg";

export const DUMMAY_PRODUCTS = [
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
    id: "f2",
    image: banana,
    title: "Banana",
    subtitle: "Fresh Banana from Kerala",
    starCount: star4,
    verified: true,
    price: 50,
    weight: 800,
  },
  {
    id: "f3",
    image: cherry,
    title: "Cherry",
    subtitle: "Fresh Cherry from Gujarat",
    starCount: star2,
    verified: false,
    price: 200,
    weight: 500,
  },
  {
    id: "f4",
    image: pineapple,
    title: "Pineapple",
    subtitle: "Fresh Pineapple from Mp",
    starCount: star2,
    verified: false,
    price: 250,
    weight: 400,
  },
  {
    id: "f5",
    image: stw,
    title: "Strawberry",
    subtitle: "Fresh  Strawberry Kashmir",
    starCount: star4,
    verified: true,
    price: 50,
    weight: 500,
  },
];
