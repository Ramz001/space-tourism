import data from './crewData'
import backgroundCrewDesktop from '../../assets/crew/background-crew-desktop.jpg'
import backgroundCrewTablet from '../../assets/crew/background-crew-tablet.jpg'
import backgroundCrewMobile from '../../assets/crew/background-crew-mobile.jpg'
import { useSelector } from 'react-redux'
import { setCurrentPerson } from '../../features/currentPersonSlice'
import { useDispatch } from 'react-redux'

function Crew(){
    const { display } = useSelector(state => state.findWidth)
    const { currentPerson } = useSelector(state => state.currentPerson)
    const { name, description, image, job } = data[currentPerson]
    
    const fittingImg = () => {
        switch (display) {
            case 'desktop':
                return backgroundCrewDesktop
            case 'tablet':
                return backgroundCrewTablet
            case 'mobile':
                return backgroundCrewMobile
            default:
                return backgroundCrewDesktop
        }
    }
    const imgStyle = {
        backgroundImage: `url(${fittingImg()})`,
        backgroundSize: 'cover',
        position: 'absolute',
        right: '0',
        left: '0',
    }
    const dispatch = useDispatch()

    const personBtnStyle = (n) => currentPerson === n
        ? 'bg-white'
        : 'hover:bg-white hover:opacity-75 bg-white opacity-50'

    return(
        <div className='lg:pt-[12rem] desktop:pt-[14rem] px-32 h-auto' style={imgStyle}>
            <article 
                className="flex justify-center h-[80vh] text-white" 
                >
                <div className="flex flex-col justify-around w-[57.5%]">
                    <h2 className='text-white tracking-head-5 text-head-5 uppercase'>
                        <span className='text-white opacity-25 font-bold tracking-subhead-2'>02 </span> 
                        Meet your crew
                    </h2>
                    <div>
                        <h4 className="text-white opacity-30 text-head-4  uppercase">{job}</h4>
                        <h3 className="text-head-3 font-main select-all uppercase">{name}</h3>
                        <p className="text-body-text mt-4 text-bluish-gray max-w-lg">{description}</p>
                    </div>
                    <div className='mb-20 flex gap-8'>
                        <button 
                            className={`w-3 h-3 rounded-full ${personBtnStyle(0)}`} 
                            onClick={() => dispatch(setCurrentPerson(0))}
                        />
                        <button 
                            className={`w-3 h-3 rounded-full ${personBtnStyle(1)}`} 
                            onClick={() => dispatch(setCurrentPerson(1))}
                        />
                        <button 
                            className={`w-3 h-3 rounded-full ${personBtnStyle(2)}`} 
                            onClick={() => dispatch(setCurrentPerson(2))}
                        />
                        <button 
                            className={`w-3 h-3 rounded-full ${personBtnStyle(3)}`} 
                            onClick={() => dispatch(setCurrentPerson(3))}
                        />
                    </div>
                </div>
                    <img src={image} alt={name + job} className='w-[42.5%] '></img>
            </article>
        </div>
    )
}

export default Crew