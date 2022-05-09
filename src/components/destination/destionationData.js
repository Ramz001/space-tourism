import imageMoon from "../../assets/destination/image-moon.webp";
import imageEuropa from "../../assets/destination/image-europa.webp";
import imageTitan from "../../assets/destination/image-titan.webp";
import imageMars from "../../assets/destination/image-mars.webp";
import { nanoid } from "nanoid";

export default [
  {
    id: nanoid(),
    title: "Moon",
    image: imageMoon,
    description:
      "See our planet as you've never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you're there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
    averageDistance: "384,400 KM",
    estimatedTravelTime: "3 DAYS",
  },
  {
    id: nanoid(),
    title: "Mars",
    image: imageMars,
    description:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
    averageDistance: "225 MIL. KM",
    estimatedTravelTime: "9 MONTHS",
  },
  {
    id: nanoid(),
    title: "Europa",
    image: imageEuropa,
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
    averageDistance: "628 MIL. KM",
    estimatedTravelTime: "3 YEARS",
  },
  {
    id: nanoid(),
    title: "Titan",
    image: imageTitan,
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
    averageDistance: "1.6 BIL. KM",
    estimatedTravelTime: "7 YEARS",
  },
];
