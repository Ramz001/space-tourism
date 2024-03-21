import DestinationDesktop from "../../assets/destination/background-destination-desktop.jpg";
import DestinationTablet from "../../assets/destination/background-destination-tablet.jpg";
import DestinationMobile from "../../assets/destination/background-destination-mobile.jpg";
import { useSelector } from "react-redux";
import "../../index.css";
import { useState } from "react";

function Destination() {
  const { destinationData } = useSelector((store) => store.tabs);
  const [currentPlanet, setCurrentPlanet] = useState(0);
  const { title, description, image, estimatedTravelTime, averageDistance } =
    destinationData[currentPlanet];

  const planetBtnStyle = (n) =>
    currentPlanet === n
      ? "text-white border-b-2 border-white pb-2 cursor-pointer select-none"
      : "hover:border-b-2 hover:border-opacity-25 hover:border-white pb-2 cursor-pointer select-none";

  return (
    <main
      className="font-text px-8 d:px-32 bg-slate-900 min-h-svh d:min-h-screen
     text-white relative pt-40 d:pt-[14.5%] flex flex-col"
    >
      <img
        srcSet={`${DestinationMobile} 375w, ${DestinationTablet} 768w, ${DestinationDesktop} 1400w`}
        sizes="(max-width: 768px) 375px, (max-width: 1064px) 768px, 1400px"
        alt="stars background"
        className="absolute w-full h-full left-0 top-0 z-0 object-cover"
      />
      <h2
        className="text-white tracking-lg text-center t:text-left text-base 
        t:text-xl d:text-[28px] uppercase mb-8 t:mb-16 z-0"
      >
        <span className="opacity-25 mb-8 font-bold tracking-lg mr-4">01</span>
        Pick Your Destination
      </h2>
      <section
        className="flex d:flex-row flex-col justify-between z-0 items-center d:gap-0 gap-y-10 mb-8 t:mb-4"
      >
        <img
          className="d:w-[28rem] d:h-[28rem] t:w-[19rem] t:h-[19rem] w-44 h-44"
          src={image}
          alt={title}
        />
        <div
          className="text-white flex flex-col items-center xl:items-start 
        justify-between gap-2"
        >
          <div
            className="flex justify-center xl:justify-start gap-10 text-sm 
            t:text-base text-bluish-gray tracking-sm uppercase mb-4 h-auto"
          >
            <span
              className={planetBtnStyle(0)}
              onClick={() => setCurrentPlanet(0)}
            >
              Moon
            </span>
            <span
              className={planetBtnStyle(1)}
              onClick={() => setCurrentPlanet(1)}
            >
              Mars
            </span>
            <span
              className={planetBtnStyle(2)}
              onClick={() => setCurrentPlanet(2)}
            >
              Europa
            </span>
            <span
              className={planetBtnStyle(3)}
              onClick={() => setCurrentPlanet(3)}
            >
              Titan
            </span>
          </div>
          <h3 className="d:text-[100px] t:text-[80px] text-[56px] uppercase font-main">
            {title}
          </h3>
          <p
            className="max-w-md pb-10 text-[15px] t:text-base d:text-lg font-text 
            text-bluish-gray border-b border-opacity-50 border-bluish-gray 
            mb-4 text-center xl:text-left"
          >
            {description}
          </p>
          <div className="flex t:flex-row flex-col gap-y-12 t:gap-y-0 gap-x-24">
            <div className="flex flex-col gap-2 items-center">
              <span className="uppercase text-sm text-bluish-gray font-main">
                avg. distance
              </span>
              <span className="text-[28px] tracking-sm font-light">{averageDistance}</span>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <span className="uppercase text-sm text-bluish-gray font-main">
                est. travel time
              </span>
              <span className="text-[28px] tracking-sm font-light">{estimatedTravelTime}</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Destination;
