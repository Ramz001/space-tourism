import data from './technologyData'
import backgroundTechnologyDesktop from '../../assets/technology/background-technology-desktop.jpg'
import backgroundTechnologyTablet from '../../assets/technology/background-technology-tablet.jpg'
import backgroundTechnologyMobile from '../../assets/technology/background-technology-mobile.jpg'
import { useSelector } from 'react-redux'
import '../../index.css'

function Technology(){
    const { display } = useSelector(state => state.findWidth)
    const { currentTechnology } = useSelector(state => state.currentTechnology)
    const imageType = display === 'desktop' ? 'portrait' : 'landscape'
    
    const { title, description, image } = data[currentTechnology]

    const fittingImg = () => {
        switch(display){
            case 'desktop':
                return backgroundTechnologyDesktop
            case 'tablet':
                return backgroundTechnologyTablet
            case 'mobile':
                return backgroundTechnologyMobile
            default:
                return backgroundTechnologyDesktop
        }
    }

    const imgStyle = {
        backgroundImage: `url(${fittingImg()})`,    
        backgroundSize: 'cover',
        position: 'absolute',
        right: '0',
        left: '0',
    }

    return(
        <article 
            className='h-full lg:pt-[10rem] 2xl:pt-[14rem] lg:pb-[8rem] desktop:pb-[10rem] 2xl:pb-[11rem] pl-32' 
            style={imgStyle}
            >
            <h2 className='page-intro-header'>
                <span className='page-intro-header-number'>03 </span> 
                Space Launch 101
            </h2>

        </article>
    )
}

export default Technology;