import backgroundDestinationDesktop from '../../assets/destination/background-destination-desktop.jpg';
import backgroundDestionationTablet from '../../assets/destination/background-destination-tablet.jpg';
import backgroundDestionMobile from '../../assets/destination/background-destination-mobile.jpg';
import { useSelector } from 'react-redux'
import '../../index.css'
import data from './destionationData'
import { setCurrentPlanet } from '../../features/currentPlanetSlice'
import { useDispatch } from 'react-redux'

function Destination(){
    const { display } = useSelector(state => state.findWidth)
    const { currentPlanet } = useSelector(state => state.currentPlanet)
    const dispatch = useDispatch()

    const fittingImg = () => {
        switch(display){
            case 'desktop':
                return backgroundDestinationDesktop
            case 'tablet':
                return backgroundDestionationTablet
            case 'mobile':
                return backgroundDestionMobile
            default:
                return backgroundDestinationDesktop
        }
    }

    const imgStyle = {
        backgroundImage: `url(${fittingImg()})`,
        backgroundSize: 'cover',
        position: 'absolute',
        right: '0',
        left: '0',
    }

    const {title, description, image, estimatedTravelTime, averageDistance} = data[currentPlanet]

    const planetBtnStyle = (n) => currentPlanet === n 
                        ? 'text-white border-b-2' 
                        : 'hover:border-b-2 hover:border-opacity-25'

    return (
        <article 
        className="font-text lg:pt-[10rem] desktop:pt-[12.5rem] lg:pb-[8rem] desktop:pb-[10rem] 2xl:pb-[11rem] px-32 h-auto" 
        style={imgStyle}
        >
            <h2 className='page-intro-header mb-16'>
                <span className='page-intro-header-number'>01 </span> 
                Pick Your Destination
            </h2>
            <div className='flex justify-center gap-40 items-center'>
                <img className='animate-spin-slow w-2/5 h-2/5' src={image} alt={title}></img>
                <div className='text-white flex flex-col justify-between gap-2'>
                    <div className='flex gap-10 text-nav text-bluish-gray 
                    tracking-nav uppercase opacity-75 mb-8 h-auto'>
                        <div
                            onClick={() => dispatch(setCurrentPlanet(0))}
                            className={`${planetBtnStyle(0)} border-white pb-2 cursor-pointer select-none`} 
                        >
                            Moon
                        </div>
                        <div
                            onClick={() => dispatch(setCurrentPlanet(1))}
                            className={`${planetBtnStyle(1)} border-white pb-2 cursor-pointer select-none`}
                        >
                            Mars
                        </div>
                        <div
                            onClick={() => dispatch(setCurrentPlanet(2))}
                            className={`${planetBtnStyle(2)} border-white pb-2 cursor-pointer select-none`}
                        >
                            Europa
                        </div>
                        <div
                            onClick={() => dispatch(setCurrentPlanet(3))}
                            className={`${planetBtnStyle(3)} border-white pb-2 cursor-pointer select-none`}
                        >
                            Titan
                        </div>
                    </div>
                    <h3 className='text-head-2 uppercase font-main'>{title}</h3>
                    <p className='max-w-lg pb-8 text-body-text font-text text-bluish-gray border-b 
                    border-opacity-50 border-bluish-gray mb-4'>
                        {description}
                    </p>
                    <div className='grid grid-cols-2 grid-rows-2'>
                        <span className='uppercase text-subhead-2 text-bluish-gray font-main'>
                            avg. distance
                        </span>
                        <span className='uppercase text-subhead-2 text-bluish-gray font-main'>
                            est. travel time
                        </span>
                        <span className='text-subhead-1'>{averageDistance}</span>
                        <span className='text-subhead-1'>{estimatedTravelTime}</span>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default Destination;