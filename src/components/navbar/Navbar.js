import logo from '../../assets/shared/logo.svg';
import { NavLink } from 'react-router-dom'
import '../../index.css'

const Navbar = () => {
    return (
        <nav className='flex font-text uppercase items-center justify-between z-10 
        top-0 left-0 right-0 mt-8 fixed'>
            <img src={logo} alt='logo' className='ml-14' />
            <div className='navbar-links blurry'>
                <NavLink to="/" className="">
                    <span className='font-extrabold'>00 </span>
                    Home
                </NavLink>
                <NavLink to="/" className=''>
                    <span className='font-extrabold'>01 </span>
                    Destinations
                </NavLink>
                <NavLink to="/" className=''>
                    <span className='font-extrabold'>02 </span>
                    Crew  
                </NavLink>
                <NavLink to="/" className=''>
                    <span className='font-extrabold'>03 </span>
                    Technology
                </NavLink>
            </div>
        </nav>
    )
}

export default Navbar;