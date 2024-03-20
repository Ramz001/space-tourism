import { Link } from "react-router-dom";
import HeroDesktop from "../../assets/home/background-home-desktop.jpg";
import HeroTablet from "../../assets/home/background-home-tablet.jpg";
import HeroMobile from "../../assets/home/background-home-mobile.jpg";
import "../../index.css";

function Home() {
  return (
    <main
      className="min-h-svh t:min-h-screen pt-32 t:pt-[25%] d:pt-40 px-4 t:px-16 d:px-32
      flex flex-col d:flex-row items-center relative d:justify-between font-main 
      gap-12 t:gap-24 z-0"
    >
      <img
        srcSet={`${HeroMobile} 375w, ${HeroTablet} 768w, ${HeroDesktop} 1400w`}
        sizes="(max-width: 768px) 375px, (max-width: 1064px) 768px, 1400px"
        alt="planet earth"
        className="absolute w-full h-full left-0 top-0 z-0 object-cover select-none"
      />
      <div className="text-white flex flex-col gap-y-4 items-center xl:items-start z-10">
        <h5
          className="text-base t:text-xl d:text-[28px] text-bluish-gray tracking-sm t:tracking-[3.3px] 
          d:tracking-lg"
        >
          SO, YOU WANT TO TRAVEL TO
        </h5>
        <h1 className="text-[80px] t:text-[150px]">SPACE</h1>
        <p className="text-[15px] d:text-lg d:tracking-wide font-text max-w-xs 
        t:max-w-lg text-center d:text-left text-bluish-gray">
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <Link
        to="/destinations"
        className="z-10 relative bg-white rounded-full w-40 h-40 t:w-60 t:h-60 
        d:w-72 d:h-72 flex items-center justify-center uppercase text-very-dark-blue 
        text-xl t:text-[32px] tracking-lg hover:bg-opacity-85"
      >
        Explore
      </Link>
    </main>
  );
}

export default Home; 
