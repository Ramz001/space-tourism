/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import TechnologyDesktop from "../../assets/technology/background-technology-desktop.jpg";
import TechnologyTablet from "../../assets/technology/background-technology-tablet.jpg";
import TechnologyMobile from "../../assets/technology/background-technology-mobile.jpg";
import { useSelector, useDispatch } from "react-redux";
import "../../index.css";

function Technology() {

  // const { currentTechnology } = useSelector((state) => state.currentTechnology);
  // const dispatch = useDispatch();
  // const imageType = display === "desktop" ? "portrait" : "landscape";

  // const { title, description, image } = data[currentTechnology];


  const bntStyle = (n) =>
    currentTechnology === n
      ? "bg-white text-very-dark-blue"
      : "bg-very-dark-blue text-white";

  return (
    <main
      className="pt-[8rem] d:pb-0 pb-16 t:pt-[10rem] d:pt-[12rem] lg:pb-[2rem] xl:pl-32"
    >
      <img
        srcSet={`${TechnologyMobile} 375w, ${TechnologyTablet} 768w, ${TechnologyDesktop} 1400w`}
        sizes="(max-width: 768px) 375px, (max-width: 1064px) 768px, 1400px"
        alt="stars rotating background"
        className="absolute w-full h-full left-0 top-0 z-0 object-cover select-none"
      />
      {/* <h2 className="page-intro-header mb-8 t:mb-12 t:ml-10 xl:ml-0 xl:mb-0">
        <span className="page-intro-header-number">03 </span>
        Space Launch 101
      </h2>
      <article className="flex flex-col xl:flex-row text-white justify-center xl:justify-start items-center xl:h-[80vh]">
        <div className="flex w-full items-center flex-col xl:flex-row xl:w-3/5 xl:order-1 order-2">
          <div className="flex xl:flex-col xl:gap-10 gap-16 xl:my-0 my-12">
            <button
              className={`technology-btn ${bntStyle(0)}`}
              onClick={() => dispatch(setCurrentTechnology(0))}
            >
              1
            </button>
            <button
              className={`technology-btn ${bntStyle(1)}`}
              onClick={() => dispatch(setCurrentTechnology(1))}
            >
              2
            </button>
            <button
              className={`technology-btn ${bntStyle(2)}`}
              onClick={() => dispatch(setCurrentTechnology(2))}
            >
              3
            </button>
          </div>
          <article className="font-main xl:ml-16 text-center xl:text-left mb-20 xl:mb-0">
            <p className="text-nav text-bluish-gray uppercase mb-4">
              The Terminology...
            </p>
            <h3 className="uppercase text-head-4 mb-4 t:text-head-3">
              {title}
            </h3>
            <p className="max-w-md font-text px-4 t:px-0 text-body-text text-bluish-gray">
              {description}
            </p>
          </article>
        </div>
        <img
          src={image(imageType)}
          alt={title}
          className="w-full xl:w-2/5 order-1 xl:order-2"
        />
      </article> */}
    </main>
  );
}

export default Technology;
