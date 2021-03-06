import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import backgroundHeroDesktop from "../../assets/home/background-home-desktop.jpg";
import backgroundHeroTablet from "../../assets/home/background-home-tablet.jpg";
import backgroundHeroMobile from "../../assets/home/background-home-mobile.jpg";
import "../../index.css";

function Home() {
  //variables
  const { display } = useSelector((state) => state.findWidth);
  // functions
  const fittingImg = () => {
    switch (display) {
      case "desktop":
        return backgroundHeroDesktop;
      case "tablet":
        return backgroundHeroTablet;
      case "mobile":
        return backgroundHeroMobile;
      default:
        return backgroundHeroDesktop;
    }
  };
  // styles
  const imgStyle = {
    backgroundImage: `url(${fittingImg()})`,
    backgroundSize: "cover",
    position: "absolute",
    right: "0",
    left: "0",
  };
  return (
    <main
      className="bg-no-repeat pb-20 xl:pt-[20rem] desktop:pt-[25rem] pt-[12rem] tablet:pt-[14rem] 
      tablet:pb-[7rem] xl:pb-[8rem] desktop:pb-[12rem] px-4 tablet:px-32 flex flex-col xl:flex-row items-center 
      xl:justify-between font-main gap-12 tablet:gap-24 xl:gap-0"
      style={imgStyle}
    >
      <div className="text-white flex flex-col gap-y-4 items-center xl:items-start">
        <h5 className="text-subhead-2 xl:text-subhead-1 text-bluish-gray tracking-head-5">
          SO, YOU WANT TO TRAVEL TO
        </h5>
        <h1 className="text-head-2 tablet:text-head-1">SPACE</h1>
        <p className="text-body-text font-text max-w-sm tablet:max-w-lg text-center xl:text-left text-bluish-gray">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <Link to="/destinations" className="home-main-button">
        <div className="w-56 h-56 tablet:w-[274px] tablet:h-[274px] flex items-center justify-center">
          <span className="uppercase text-very-dark-blue text-subhead-1 tracking-subhead-2">
            Explore
          </span>
        </div>
      </Link>
    </main>
  );
}

export default Home;
