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
      className=" lg:pt-[10rem] desktop:pt-[12rem]  lg:pb-[2rem] pl-32"
      style={imgStyle}
    >
      <h2 className="page-intro-header ">
        <span className="page-intro-header-number">03 </span>
        Space Launch 101
      </h2>
      <article className="flex text-white items-center h-[80vh]">
        <div className="flex w-3/5">
          <div className="flex flex-col gap-10">
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
          <article className="font-main ml-16">
            <p className="text-nav text-bluish-gray uppercase">
              The Terminology...
            </p>
            <h3 className="uppercase text-head-3">{title}</h3>
            <p className="max-w-md font-text text-body-text text-bluish-gray">
              {description}
            </p>
          </article>
        </div>
        <img src={image(imageType)} alt={title} className="w-2/5" />
      </article>
    </main>
  );
}

export default Technology;
