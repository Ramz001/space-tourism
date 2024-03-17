import backgroundDestinationDesktop from "../../assets/destination/background-destination-desktop.jpg";
import backgroundDestionationTablet from "../../assets/destination/background-destination-tablet.jpg";
import backgroundDestionMobile from "../../assets/destination/background-destination-mobile.jpg";
import { useSelector } from "react-redux";
import "../../index.css";
import { useDispatch } from "react-redux";

function Destination() {
  const display = "desktop"
  ;
  // const { currentPlanet } = useSelector((state) => state.currentPlanet);
  // const dispatch = useDispatch();

  const fittingImg = () => {
    switch (display) {
      case "desktop":
        return backgroundDestinationDesktop;
      case "tablet":
        return backgroundDestionationTablet;
      case "mobile":
        return backgroundDestionMobile;
      default:
        return backgroundDestinationDesktop;
    }
  };

  const imgStyle = {
    backgroundImage: `url(${fittingImg()})`,
    backgroundSize: "cover",
    position: "absolute",
    right: "0",
    left: "0",
  };

  // const { title, description, image, estimatedTravelTime, averageDistance } =
  //   data[currentPlanet];

  // const planetBtnStyle = (n) =>
  //   currentPlanet === n
  //     ? "text-white border-b-2 border-white destination-btn"
  //     : "hover:border-b-2 hover:border-opacity-25 hover:border-white destination-btn";

  return (
    <main
      className="font-text pt-[10rem] pb-[6rem] d:pt-[12.5rem] lg:pb-[8rem] 
      d:pb-[10rem] 2xl:pb-[11rem] px-8 xl:px-32 "
      style={imgStyle}
    >
      {/* <h2 className="page-intro-header mb-8 t:mb-16">
        <span className="page-intro-header-number">01 </span>
        Pick Your Destination
      </h2>
      <div className="flex xl:flex-row flex-col justify-center gap-16 xl:gap-40 items-center px-20 xl:px-0">
        <img
          className="animate-spin-slow w-full h-full t:w-3/5 t:h-3/5 xl:w-2/5 xl:h-2/5"
          src={image}
          alt={title}
        ></img>
        <div className="text-white flex flex-col items-center xl:items-start justify-between gap-2">
          <div
            className="flex justify-center xl:justify-start gap-10 text-nav text-bluish-gray 
                    tracking-nav uppercase opacity-75 mb-8 h-auto"
          >
            <div
              onClick={() => dispatch(setCurrentPlanet(0))}
              className={planetBtnStyle(0)}
            >
              Moon
            </div>
            <div
              onClick={() => dispatch(setCurrentPlanet(1))}
              className={planetBtnStyle(1)}
            >
              Mars
            </div>
            <div
              onClick={() => dispatch(setCurrentPlanet(2))}
              className={planetBtnStyle(2)}
            >
              Europa
            </div>
            <div
              onClick={() => dispatch(setCurrentPlanet(3))}
              className={planetBtnStyle(3)}
            >
              Titan
            </div>
          </div>
          <h3 className="text-head-3 t:text-head-2 uppercase font-main">
            {title}
          </h3>
          <p
            className="max-w-lg pb-8 text-body-text font-text text-bluish-gray border-b 
                    border-opacity-50 border-bluish-gray mb-4 text-center xl:text-left"
          >
            {description}
          </p>
          <div className="flex t:flex-row flex-col gap-y-12 t:gap-y-0 gap-x-24">
            <div className="flex flex-col gap-2 items-center">
              <span className="uppercase text-subhead-2 text-bluish-gray font-main">
                avg. distance
              </span>
              <span className="text-head-4">{averageDistance}</span>
            </div>
            <div className="flex flex-col gap-2 items-center">
              <span className="uppercase text-subhead-2 text-bluish-gray font-main">
                est. travel time
              </span>
              <span className="text-head-4">{estimatedTravelTime}</span>
            </div>
          </div>
        </div>
      </div> */}
    </main>
  );
}

export default Destination;
