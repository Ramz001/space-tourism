import { nanoid } from "nanoid";
import imageAnoushehAnsari from "../../assets/crew/image-anousheh-ansari.webp";
import imageDouglasHurley from "../../assets/crew/image-douglas-hurley.webp";
import imageMarkShuttleworth from "../../assets/crew/image-mark-shuttleworth.webp";
import imageVictorGlover from "../../assets/crew/image-victor-glover.webp";

export const crewData = [
  {
    id: nanoid(),
    name: "Douglas Hurley",
    job: "commander",
    image: imageDouglasHurley,
    description:
      "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  },
  {
    id: nanoid(),
    name: "Mark Shuttleworth",
    job: "Mission Specialist",
    image: imageMarkShuttleworth,
    description:
      "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
  },
  {
    id: nanoid(),
    name: "Victor Glover",
    job: "Pilot",
    image: imageVictorGlover,
    description:
      "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.   ",
  },
  {
    id: nanoid(),
    name: "Anousheh Ansari",
    job: "Flight Engineer",
    image: imageAnoushehAnsari,
    description:
      "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
  },
];
