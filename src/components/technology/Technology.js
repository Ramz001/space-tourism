/* eslint-disable no-unused-vars */
import TechnologyDesktop from '../../assets/technology/background-technology-desktop.webp'
import TechnologyTablet from '../../assets/technology/background-technology-tablet.webp'
import TechnologyMobile from '../../assets/technology/background-technology-mobile.webp'
import { useSelector, useDispatch } from 'react-redux'
import '../../index.css'
import { useState } from 'react'

function Technology() {
  const { technologyData } = useSelector((store) => store.tabs)
  const [currentTechnology, setCurrentTechnology] = useState(0)
  const { title, description, image } = technologyData[currentTechnology]

  const bntStyle = (n) =>
    currentTechnology === n
      ? 'bg-white text-very-dark-blue'
      : 'bg-very-dark-blue text-white'

  return (
    <main className="z-0 mt-32 flex flex-col text-white t:mt-40 d:ml-32 bg-slate-900">
      <img
        srcSet={`${TechnologyMobile} 375w, ${TechnologyTablet} 768w, ${TechnologyDesktop} 1400w`}
        sizes="(max-width: 768px) 375px, (max-width: 1064px) 768px, 1400px"
        alt="stars rotating background"
        className="fixed left-0 top-0 z-0 min-h-full w-full 
        select-none object-cover"
      />
      <h2
        className=" z-0 mb-8 text-center text-base 
        uppercase tracking-lg t:text-xl d:text-left d:text-[28px]"
      >
        <span className="mb-8 mr-4 font-bold tracking-lg opacity-25">03 </span>
        Space Launch 101
      </h2>
      <section
        className="z-0 flex flex-col-reverse items-center justify-between gap-6 text-center 
      t:gap-8 d:flex-row d:gap-0 d:text-start"
      >
        <div className="flex flex-col gap-8 d:flex-row d:gap-16">
          <div
            className="flex flex-row justify-center gap-6 font-main 
          d:flex-col d:justify-start d:gap-8"
          >
            <button
              onClick={() => setCurrentTechnology(0)}
              className={`technology-btn ${bntStyle(0)}`}
            >
              1
            </button>
            <button
              onClick={() => setCurrentTechnology(1)}
              className={`technology-btn ${bntStyle(1)}`}
            >
              2
            </button>
            <button
              onClick={() => setCurrentTechnology(2)}
              className={`technology-btn ${bntStyle(2)}`}
            >
              3
            </button>
          </div>
          <div className="flex flex-col gap-4 t:gap-6 d:gap-8">
            <p className="uppercase tracking-sm text-bluish-gray">
              The Terminology...
            </p>
            <h3 className="font-main text-2xl uppercase t:text-[40px] d:mb-4 d:text-[56px]">
              {title}
            </h3>
            <p className="max-w-xs text-[15px] leading-7 tracking-wide text-bluish-gray t:max-w-lg t:text-base d:text-lg">
              {description}
            </p>
          </div>
        </div>
        <div className="mx-auto h-auto w-auto t:self-center d:m-0 d:self-end">
          <img
            src={image('portrait')}
            alt={title}
            className="hidden d:block d:h-[528px]"
          />
          <img
            src={image('landscape')}
            alt={title}
            className="h-[170px] t:h-[310px] d:hidden"
          />
        </div>
      </section>
    </main>
  )
}

export default Technology
