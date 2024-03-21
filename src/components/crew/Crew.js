/* eslint-disable no-unused-vars */
import CrewDesktop from '../../assets/crew/background-crew-desktop.jpg'
import CrewTablet from '../../assets/crew/background-crew-tablet.jpg'
import CrewMobile from '../../assets/crew/background-crew-mobile.jpg'
import { useSelector, useDispatch } from 'react-redux'
import '../../index.css'
import { useState } from 'react'

function Crew() {
  const { crewData } = useSelector((store) => store.tabs)
  const [currentCrew, setCurrentCrew] = useState(0)

  const { name, description, image, job } = crewData[currentCrew]

  const crewBtnStyle = (n) =>
    currentCrew === n
      ? 'bg-white'
      : 'hover:bg-white hover:opacity-75 bg-white opacity-50'

  return (
    <main
      className="relative flex min-h-svh flex-col bg-slate-900 px-4 pt-28
      font-text text-white t:px-8 t:pt-40 d:min-h-screen d:px-32 d:pt-[13.5%]"
    >
      <img
        srcSet={`${CrewMobile} 375w, ${CrewTablet} 768w, ${CrewDesktop} 1400w`}
        sizes="(max-width: 768px) 375px, (max-width: 1064px) 768px, 1400px"
        alt="stars rotating background"
        className="fixed left-0 top-0 z-0 min-h-full w-full select-none object-cover"
      />
      <h2
        className="z-0 mb-8 text-center text-base uppercase 
          tracking-lg text-white t:text-left t:text-xl d:mb-32 d:hidden d:text-[28px]"
      >
        <span className="mb-8 mr-4 font-bold tracking-lg opacity-25">02</span>
        Meet your crew
      </h2>
      <section
        className="z-0 flex flex-col-reverse items-center justify-center gap-y-8 t:flex-col t:gap-y-10  
      d:flex-row d:justify-between d:gap-8"
      >
        <div className="flex flex-col gap-4 self-center text-center t:gap-6 d:gap-8 d:self-start d:text-start">
          <h2
            className="z-0 mb-8 hidden text-center text-base 
          uppercase tracking-lg text-white t:text-left t:text-xl d:mb-28 d:block d:text-[28px]"
          >
            <span className="mb-8 mr-4 font-bold tracking-lg opacity-25 ">
              02
            </span>
            Meet your crew
          </h2>
          <h3 className="text-base uppercase tracking-sm text-white opacity-50 t:text-2xl d:text-[32px]">
            {job}
          </h3>
          <h2 className="font-main text-2xl uppercase t:text-[40px] d:text-[56px]">
            {name}
          </h2>
          <p className="mb-8 max-w-lg text-[15px] tracking-wider t:text-base d:mb-16 d:text-xl">
            {description}
          </p>
          <div className="mb-8 flex items-center justify-center gap-6 t:mb-0 d:justify-start">
            <span
              onClick={() => setCurrentCrew(0)}
              className={`h-4 w-4 cursor-pointer rounded-full ${crewBtnStyle(
                0
              )}`}
            />
            <span
              onClick={() => setCurrentCrew(1)}
              className={`h-4 w-4 cursor-pointer rounded-full ${crewBtnStyle(
                1
              )}`}
            />
            <span
              onClick={() => setCurrentCrew(2)}
              className={`h-4 w-4 cursor-pointer rounded-full ${crewBtnStyle(
                2
              )}`}
            />
            <span
              onClick={() => setCurrentCrew(3)}
              className={`h-4 w-4 cursor-pointer rounded-full ${crewBtnStyle(
                3
              )}`}
            />
          </div>
        </div>
        <div
          className="flex w-full items-center justify-center border-b border-white 
        border-opacity-50 pb-1 t:border-0 t:pb-0 d:w-auto"
        >
          <img
            src={image}
            alt={name}
            className=" max-h-[223px] t:max-h-[572px] d:max-h-[712px]"
          />
        </div>
      </section>
    </main>
  )
}

export default Crew
