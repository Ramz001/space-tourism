import { Link } from "react-router-dom";
import HeroDesktop from "../../assets/home/background-home-desktop.jpg";
import HeroTablet from "../../assets/home/background-home-tablet.jpg";
import HeroMobile from "../../assets/home/background-home-mobile.jpg";
import "../../index.css";

function Home() {
  return (
    <main
      className="min-h-svh t:min-h-screen pt-32 t:pt-[25%] d:pt-40 px-4
      flex flex-col d:flex-row items-center relative d:justify-between font-main 
      gap-4 t:gap-24 z-0"
    >
      <img
        srcSet={`${HeroMobile} 375px, ${HeroTablet} 768w, ${HeroDesktop} 1440w`}
        sizes="(max-width: 768px) 37px, (max-width: 1064px) 768px, 1440px"
        alt="planet earth"
        className="absolute w-full h-full left-0 top-0 z-0 object-cover"
      />
      <div className="text-white flex flex-col gap-y-4 items-center xl:items-start z-10">
        <h5 className="text-subhead-2 xl:text-subhead-1 text-bluish-gray tracking-head-5">
          SO, YOU WANT TO TRAVEL TO
        </h5>
        <h1 className="text-head-2 t:text-head-1">SPACE</h1>
        <p className="text-body-text font-text max-w-sm t:max-w-lg text-center xl:text-left text-bluish-gray">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <Link to="/destinations" className="home-main-button">
        <div className="w-40 h-40 t:w-60 t:h-60 d:w-72 d:h-72 flex items-center justify-center">
          <span className="uppercase text-very-dark-blue text-subhead-1 tracking-subhead-2">
            Explore
          </span>
        </div>
      </Link>
    </main>
  );
}

export default Home;
