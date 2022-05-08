import logo from '../../assets/shared/logo.svg';
import { NavLink } from 'react-router-dom'
import '../../index.css'

const Navbar = () => {
    const navUnderline = 'before:absolute before:-bottom-[2.3rem] before:w-auto before:bg-white before:right-0 before:left-0 before:h-1 relative before:rounded-md'
    const handleIsActive = ( isActive ) => isActive ? navUnderline : `before:absolute before:-bottom-[2.3rem] before:w-auto hover:before:bg-white before:right-0 before:left-0 hover:before:h-1 relative before:rounded-md hover:before:bg-opacity-25` 

    return (
        <nav className='flex font-text uppercase items-center justify-between z-10 
        top-0 left-0 right-0 mt-8 fixed '>
            <img src={logo} alt='logo' className='ml-14' />
            <div className='navbar-links '>
                <NavLink to="/" className={({isActive}) => handleIsActive(isActive)}>
                    <span className='font-extrabold'>00 </span>
                    Home
                </NavLink>
                <NavLink to="/destinations" className={({ isActive }) => handleIsActive(isActive)}>
                    <span className='font-extrabold'>01 </span>
                    Destinations
                </NavLink>
                <NavLink to="/crew" className={({isActive}) => handleIsActive(isActive)}>
                    <span className='font-extrabold'>02 </span>
                    Crew  
                </NavLink>
                <NavLink to="/technology" className={({isActive}) => handleIsActive(isActive)}>
                    <span className='font-extrabold'>03 </span>
                    Technology
                </NavLink>
            </div>
        </nav>
    )
}

export default Navbar;