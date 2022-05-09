import { NavLink } from "react-router-dom";
import hamburger from '../../assets/shared/icon-hamburger.svg';
import close from '../../assets/shared/icon-close.svg';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggleHamburger } from "../../features/hamburgerSlice";

export default function MobileNavbar(){
    const { isOpen } = useSelector((state) => state.hamburger);
    const dispatch = useDispatch();

    return (
        <>
            {!isOpen &&
                <img   
                    src={hamburger} 
                    alt='logo' 
                    className="mr-10 mt-8 cursor-pointer"
                    onClick={() => dispatch(toggleHamburger())}
                    />
            }
            {isOpen &&
                <div className="flex flex-col gap-20 bg-very-dark-blue text-white 
                bg-opacity-100 z-40 px-12 relative h-screen w-[65%] pt-5 text-nav">
                    <img 
                        src={close} 
                        alt="close button" 
                        className='w-5 h-5 flex self-end cursor-pointer mt-8'
                        onClick={() => dispatch(toggleHamburger())}
                    />
                    <NavLink to="/space-tourism/" >
                        <span className="font-bold">00 </span>
                        Home
                    </NavLink>
                    <NavLink
                        to="/space-tourism/destinations"
                    >
                        <span className="font-bold">01 </span>
                        Destinations
                    </NavLink>
                    <NavLink
                        to="/space-tourism/crew"
                    >
                        <span className="font-bold">02 </span>
                        Crew
                    </NavLink>
                    <NavLink
                        to="/space-tourism/technology"
                    >
                        <span className="font-bold">03 </span>
                        Technology
                    </NavLink>     
                </div>
            }
        </>
    )
}