import DestinationDesktop from '../../assets/destination/background-destination-desktop.jpg'
import DestinationTablet from '../../assets/destination/background-destination-tablet.jpg'
import DestinationMobile from '../../assets/destination/background-destination-mobile.jpg'
import { useSelector } from 'react-redux'
import '../../index.css'
import { useState } from 'react'

function Destination() {
  const { destinationData } = useSelector((store) => store.tabs)
  const [currentPlanet, setCurrentPlanet] = useState(0)
  const { title, description, image, estimatedTravelTime, averageDistance } =
    destinationData[currentPlanet]

  const planetBtnStyle = (n) =>
    currentPlanet === n
      ? 'text-white border-b-2 border-white pb-2 cursor-pointer select-none'
      : 'hover:border-b-2 hover:border-opacity-25 hover:border-white pb-2 cursor-pointer select-none'

  return (
    <main
      className="relative flex min-h-svh flex-col bg-slate-900 px-8
     pt-40 font-text text-white d:min-h-screen d:px-32 d:pt-[14.5%]"
    >
      <img
        srcSet={`${DestinationMobile} 375w, ${DestinationTablet} 768w, ${DestinationDesktop} 1400w`}
        sizes="(max-width: 768px) 375px, (max-width: 1064px) 768px, 1400px"
        alt="stars background"
        className="fixed left-0 top-0 z-0 h-full w-full object-cover"
      />
      <h2
        className="z-0 mb-8 text-center text-base uppercase 
        tracking-lg text-white t:mb-16 t:text-left t:text-xl d:text-[28px]"
      >
        <span className="mb-8 mr-4 font-bold tracking-lg opacity-25">01</span>
        Pick Your Destination
      </h2>
      <section className="z-0 mb-8 flex flex-col items-center justify-between gap-y-10 t:mb-4 d:flex-row d:gap-0">
        <img
          className="h-44 w-44 t:h-[19rem] t:w-[19rem] d:h-[28rem] d:w-[28rem]"
          src={image}
          alt={title}
        />
        <div
          className="flex flex-col items-center justify-between gap-2 
        text-white xl:items-start"
        >
          <div
            className="mb-4 flex h-auto justify-center gap-10 
            text-sm uppercase tracking-sm text-bluish-gray t:text-base xl:justify-start"
          >
            <span
              className={planetBtnStyle(0)}
              onClick={() => setCurrentPlanet(0)}
            >
              Moon
            </span>
            <span
              className={planetBtnStyle(1)}
              onClick={() => setCurrentPlanet(1)}
            >
              Mars
            </span>
            <span
              className={planetBtnStyle(2)}
              onClick={() => setCurrentPlanet(2)}
            >
              Europa
            </span>
            <span
              className={planetBtnStyle(3)}
              onClick={() => setCurrentPlanet(3)}
            >
              Titan
            </span>
          </div>
          <h3 className="font-main text-[56px] uppercase t:text-[80px] d:text-[100px]">
            {title}
          </h3>
          <p
            className="mb-4 max-w-md border-b border-bluish-gray border-opacity-50 pb-10 
            text-center font-text text-[15px] text-bluish-gray 
            t:text-base xl:text-left d:text-lg"
          >
            {description}
          </p>
          <div className="flex flex-col gap-x-24 gap-y-12 t:flex-row t:gap-y-0">
            <div className="flex flex-col items-center gap-2">
              <span className="font-main text-sm uppercase text-bluish-gray">
                avg. distance
              </span>
              <span className="text-[28px] font-light tracking-sm">
                {averageDistance}
              </span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <span className="font-main text-sm uppercase text-bluish-gray">
                est. travel time
              </span>
              <span className="text-[28px] font-light tracking-sm">
                {estimatedTravelTime}
              </span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Destination
