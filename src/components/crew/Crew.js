/* eslint-disable no-unused-vars */
import CrewDesktop from "../../assets/crew/background-crew-desktop.jpg";
import CrewTablet from "../../assets/crew/background-crew-tablet.jpg";
import CrewMobile from "../../assets/crew/background-crew-mobile.jpg";
import { useSelector, useDispatch } from "react-redux";
import "../../index.css";

function Crew() {
  ;
  // const { name, description, image, job } = crewData[currentPerson];

  // const dispatch = useDispatch();

  // const personBtnStyle = (n) =>
  //   currentPerson === n
  //     ? "bg-white"
  //     : "hover:bg-white hover:opacity-75 bg-white opacity-50";

  return (
    <main
      className="pt-[8rem] pb-20 xl:pb-0 sm:pt-[10rem] d:pt-[12.5rem] px-8 sm:px-10 xl:px-32 h-auto"
    >
      <img
        srcSet={`${CrewMobile} 375w, ${CrewTablet} 768w, ${CrewDesktop} 1400w`}
        sizes="(max-width: 768px) 375px, (max-width: 1064px) 768px, 1400px"
        alt="stars rotating background"
        className="absolute w-full h-full left-0 top-0 z-0 object-cover select-none"
      />
      {/* <h2 className="page-intro-header mb-8 ">
        <span className="page-intro-header-number">02 </span>
        Meet your crew
      </h2>
      <article
        className="flex flex-col xl:flex-row items-center justify-center
        text-white"
      >
        <div className="flex flex-col justify-evenly items-center xl:items-start xl:w-[57.5%] order-2 t:order-1">
          <div className="mb-8 font-main text-center xl:text-left order-2 t:order-1">
            <h4
              className="text-white mb-4 xl:mb-8 opacity-50 text-nav t:text-head-4 
            uppercase"
            >
              {job}
            </h4>
            <h3 className="text-head-5 t:text-head-3 select-all uppercase">
              {name}
            </h3>
            <p className="text-body-text font-text mt-4 text-bluish-gray xl:max-w-lg">
              {description}
            </p>
          </div>
          <div className="t:mb-20 my-8 t:my-0 flex gap-8 order-1 t:order-2">
            <button
              className={`w-3 h-3 rounded-full ${personBtnStyle(0)}`}
              onClick={() => dispatch(setCurrentPerson(0))}
            />
            <button
              className={`w-3 h-3 rounded-full ${personBtnStyle(1)}`}
              onClick={() => dispatch(setCurrentPerson(1))}
            />
            <button
              className={`w-3 h-3 rounded-full ${personBtnStyle(2)}`}
              onClick={() => dispatch(setCurrentPerson(2))}
            />
            <button
              className={`w-3 h-3 rounded-full ${personBtnStyle(3)}`}
              onClick={() => dispatch(setCurrentPerson(3))}
            />
          </div>
        </div>
        <img
          src={image}
          alt={job + " " + name}
          className="xl:w-2/5  w-3/4 sm:w-3/5 order-1 t:order-2 border-b border-white border-opacity-50 t:border-none"
        />
      </article> */}
    </main>
  );
}

export default Crew;
