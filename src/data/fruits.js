import apple from "../assets/apple.png";
import mango from "../assets/mango.png";
import orange from "../assets/orange.png";
import banana from "../assets/banana.png";
import kiwi from "../assets/kiwi.png";
import pear from "../assets/pear.png";
import grape from "../assets/grape.png";

export const fruits = [
  {
    id: 1,
    name: "Apple",
    class: "apple",
    colour: "Red",
    speciality: "Rich in fiber",
    image: apple,
  },
  {
    id: 2,
    name: "Mango",
    class: "mango",
    colour: "Yellow",
    speciality: "King of fruits",
    image: mango,
  },
  {
    id: 3,
    name: "Orange",
    class: "orange",
    colour: "Orange",
    speciality: "Vitamin C rich",
    image: orange,
  },
  {
    id: 4,
    name: "Banana",
    class: "banana",
    colour: "Yellow",
    speciality: "High potassium",
    image: banana,
  },
  {
    id: 5,
    name: "Kiwi",
    class: "kiwi",
    colour: "Green",
    speciality: "Boosts immunity",
    image: kiwi,
  },
  {
    id: 6,
    name: "Pear",
    class: "pear",
    colour: "Green",
    speciality: "Good for digestion",
    image: pear,
  },
  {
    id: 7,
    name: "Grape",
    class: "grape",
    colour: "Purple",
    speciality: "Rich in antioxidants",
    image: grape,
  },
];

export const fruitColors = {
  Apple: "bg-red-500 hover:bg-red-600",
  Mango: "bg-yellow-400 hover:bg-yellow-500 text-black",
  Orange: "bg-orange-500 hover:bg-orange-600",
  Banana: "bg-yellow-300 hover:bg-yellow-400 text-black",
  Kiwi: "bg-green-500 hover:bg-green-600",
  Pear: "bg-lime-400 hover:bg-lime-500 text-black",
  Grape: "bg-purple-500 hover:bg-purple-600",
};
