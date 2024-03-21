import { Link } from 'react-router-dom'
import HeroDesktop from '../../assets/home/background-home-desktop.jpg'
import HeroTablet from '../../assets/home/background-home-tablet.jpg'
import HeroMobile from '../../assets/home/background-home-mobile.jpg'
import '../../index.css'

function Home() {
  return (
    <main
      className="relative z-0 flex min-h-svh flex-col items-center gap-12 px-4
      pt-32 font-main t:min-h-screen t:gap-24 t:px-16 t:pt-[25%] d:flex-row 
      d:justify-between d:px-32 d:pt-40"
    >
      <img
        srcSet={`${HeroMobile} 375w, ${HeroTablet} 768w, ${HeroDesktop} 1400w`}
        sizes="(max-width: 768px) 375px, (max-width: 1064px) 768px, 1400px"
        alt="planet earth"
        className="fixed left-0 top-0 z-0 h-full w-full select-none object-cover"
      />
      <div className="z-10 flex flex-col items-center gap-y-4 text-white xl:items-start">
        <h5
          className="text-base tracking-sm text-bluish-gray t:text-xl t:tracking-[3.3px] d:text-[28px] 
          d:tracking-lg"
        >
          SO, YOU WANT TO TRAVEL TO
        </h5>
        <h1 className="text-[80px] t:text-[150px]">SPACE</h1>
        <p
          className="max-w-xs text-center font-text text-[15px] text-bluish-gray 
        t:max-w-lg d:text-left d:text-lg d:tracking-wide"
        >
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </div>
      <Link
        to="/destinations"
        className="home-link-button-hover relative z-10 flex h-40 w-40 items-center justify-center 
        rounded-full bg-white text-xl uppercase tracking-lg text-very-dark-blue t:h-60 
        t:w-60 t:text-[32px] d:h-72 d:w-72"
      >
        Explore
      </Link>
    </main>
  )
}

export default Home
