import data from "./technologyData";
import backgroundTechnologyDesktop from "../../assets/technology/background-technology-desktop.jpg";
import backgroundTechnologyTablet from "../../assets/technology/background-technology-tablet.jpg";
import backgroundTechnologyMobile from "../../assets/technology/background-technology-mobile.jpg";
import { useSelector } from "react-redux";
import "../../index.css";
import { setCurrentTechnology } from "../../features/currentTechnologySlice";
import { useDispatch } from "react-redux";

function Technology() {
  const { display } = useSelector((state) => state.findWidth);
  const { currentTechnology } = useSelector((state) => state.currentTechnology);
  const dispatch = useDispatch();
  const imageType = display === "desktop" ? "portrait" : "landscape";

  const { title, description, image } = data[currentTechnology];

  const fittingImg = () => {
    switch (display) {
      case "desktop":
        return backgroundTechnologyDesktop;
      case "tablet":
        return backgroundTechnologyTablet;
      case "mobile":
        return backgroundTechnologyMobile;
      default:
        return backgroundTechnologyDesktop;
    }
  };

  const imgStyle = {
    backgroundImage: `url(${fittingImg()})`,
    backgroundSize: "cover",
    position: "absolute",
    right: "0",
    left: "0",
  };

  const bntStyle = (n) =>
    currentTechnology === n
      ? "bg-white text-very-dark-blue "
      : "bg-very-dark-blue text-white  ";

  return (
    <main
      className="pt-[8rem] desktop:pb-0 pb-16 tablet:pt-[10rem] desktop:pt-[12rem] lg:pb-[2rem] xl:pl-32"
      style={imgStyle}
    >
      <h2 className="page-intro-header mb-8 tablet:mb-12 tablet:ml-10 xl:ml-0 xl:mb-0">
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
            <h3 className="uppercase text-head-4 mb-4 tablet:text-head-3">
              {title}
            </h3>
            <p className="max-w-md font-text px-4 tablet:px-0 text-body-text text-bluish-gray">
              {description}
            </p>
          </article>
        </div>
        <img
          src={image(imageType)}
          alt={title}
          className="w-full xl:w-2/5 order-1 xl:order-2"
        />
      </article>
    </main>
  );
}

export default Technology;
