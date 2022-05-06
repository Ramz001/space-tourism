import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import backgroundHeroDesktop from '../../assets/home/background-home-desktop.jpg'
import backgroundHeroTablet from '../../assets/home/background-home-tablet.jpg'
import backgroundHeroMobile from '../../assets/home/background-home-mobile.jpg'
import '../../index.css'

function Home(){
    //variables
    const navigate = useNavigate();
    const { display } = useSelector(state => state.findWidth)
    // functions
    const fittingImg = () => {
        switch(display){
            case 'desktop':
                return backgroundHeroDesktop
            case 'tablet':
                return backgroundHeroTablet
            case 'mobile':
                return backgroundHeroMobile
            default:
                return backgroundHeroDesktop
        }
    }
    // styles
    const imgStyle = {
        backgroundImage: `url(${fittingImg()})`,
        backgroundSize: '100% 100%',
    }
    return(
        <main className='bg-no-repeat w-full backdrop-blur-lg h-full pt-[22rem] flex items-center 
        justify-between px-36 font-main pb-40' style={imgStyle}>
            <div className='text-white flex flex-col gap-4'>
                <h5 className='text-head-5 text-bluish-gray tracking-head-5 '>
                    SO, YOU WANT TO TRAVEL TO
                </h5>
                <h1 className='text-head-1'>SPACE</h1>
                <p className='text-body-text font-text max-w-lg text-bluish-gray'>
                    Let’s face it; if you want to go to space, you might as well genuinely go to outer 
                    space and not hover kind of on the edge of it. Well sit back, and relax because we’ll
                    give you a truly out of this world experience!
                </p>
            </div>
            <div className='home-main-button'>
                <div className='w-[274px] h-[274px] flex items-center justify-center'>
                    <span className='uppercase text-very-dark-blue text-subhead-1 tracking-subhead-2'>
                        Explore
                    </span>
                </div>
            </div>
        </main>
    )
}

export default Home