/* eslint-disable no-unused-vars */
import CrewDesktop from "../../assets/crew/background-crew-desktop.jpg";
import CrewTablet from "../../assets/crew/background-crew-tablet.jpg";
import CrewMobile from "../../assets/crew/background-crew-mobile.jpg";
import { useSelector, useDispatch } from "react-redux";
import "../../index.css";
import { useState } from "react";

function Crew() {
  const { crewData } = useSelector((store) => store.tabs);
  const [currentCrew, setCurrentCrew] = useState(0);

  const { name, description, image, job } = crewData[currentCrew];

  const crewBtnStyle = (n) =>
    currentCrew === n
      ? "bg-white"
      : "hover:bg-white hover:opacity-75 bg-white opacity-50";

  return (
    <main
      className="font-text px-4 t:px-8 d:px-32 bg-slate-900 min-h-svh d:min-h-screen
      text-white relative pt-28 t:pt-40 d:pt-[14%] flex flex-col"
    >
      <img
        srcSet={`${CrewMobile} 375w, ${CrewTablet} 768w, ${CrewDesktop} 1400w`}
        sizes="(max-width: 768px) 375px, (max-width: 1064px) 768px, 1400px"
        alt="stars rotating background"
        className="absolute w-full h-full left-0 top-0 z-0 object-cover select-none"
      />
      <h2
        className="text-white tracking-lg text-center t:text-left text-base 
          t:text-xl d:text-[28px] uppercase mb-8 d:mb-32 z-0 d:hidden"
      >
        <span className="opacity-25 mb-8 font-bold tracking-lg mr-4">02</span>
        Meet your crew
      </h2>
      <section
        className="z-0 flex d:flex-row flex-col-reverse t:flex-col gap-y-8 t:gap-y-10 d:gap-8  
      justify-center d:justify-between items-center"
      >
        <div className="flex flex-col gap-4 t:gap-6 d:gap-8 d:self-start self-center d:text-start text-center">
          <h2
            className="text-white tracking-lg text-center t:text-left text-base 
          t:text-xl d:text-[28px] uppercase mb-8 d:mb-32 z-0 hidden d:block"
          >
            <span className="opacity-25 mb-8 font-bold tracking-lg mr-4 ">
              02
            </span>
            Meet your crew
          </h2>
          <h3 className="d:text-[32px] t:text-2xl text-base uppercase tracking-sm text-white opacity-50">
            {job}
          </h3>
          <h2 className="d:text-[56px] t:text-[40px] text-2xl font-main uppercase">
            {name}
          </h2>
          <p className="d:text-xl t:text-base text-[15px] max-w-lg tracking-wider mb-8 d:mb-16">
            {description}
          </p>
          <div className="flex gap-6 justify-center d:justify-start items-center mb-8 t:mb-0">
            <span
              onClick={() => setCurrentCrew(0)}
              className={`cursor-pointer w-4 h-4 rounded-full ${crewBtnStyle(
                0
              )}`}
            />
            <span
              onClick={() => setCurrentCrew(1)}
              className={`cursor-pointer w-4 h-4 rounded-full ${crewBtnStyle(
                1
              )}`}
            />
            <span
              onClick={() => setCurrentCrew(2)}
              className={`cursor-pointer w-4 h-4 rounded-full ${crewBtnStyle(
                2
              )}`}
            />
            <span
              onClick={() => setCurrentCrew(3)}
              className={`cursor-pointer w-4 h-4 rounded-full ${crewBtnStyle(
                3
              )}`}
            />
          </div>
        </div>
        <div className="w-full d:w-auto flex justify-center items-center border-b border-white border-opacity-50 pb-1 t:pb-0">
          <img
            src={image}
            alt={name}
            className=" max-h-[223px] t:max-h-[572px] d:max-h-[712px]"
          />
        </div>
      </section>
    </main>
  );
}

export default Crew;
