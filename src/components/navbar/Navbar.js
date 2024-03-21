import logo from '../../assets/shared/logo.svg'
import { NavLink } from 'react-router-dom'
import '../../index.css'
import { useSelector, useDispatch } from 'react-redux'
import { toggleHamburger } from '../../features/hamburgerSlice'
import hamburger from '../../assets/shared/icon-hamburger.svg'
import close from '../../assets/shared/icon-close.svg'

const Navbar = () => {
  const dispatch = useDispatch()
  const { isOpen } = useSelector((state) => state.hamburger)
  const navUnderlineActive = 'before:bg-white before:h-1 nav-link'
  const navUnderlineDeactive =
    'hover:before:bg-white hover:before:h-1 hover:before:bg-opacity-25 font-light nav-link'
  const handleIsActive = (isActive) =>
    isActive ? navUnderlineActive : navUnderlineDeactive

  return (
    <nav
      className="absolute left-0 right-0 top-0 z-10 flex items-center 
      justify-between uppercase t:mx-0 d:mt-8"
    >
      <img
        src={logo}
        alt="logo"
        className="ml-10 mt-8 self-start t:ml-14 t:self-center d:mt-0"
      />
      <div className="navbar-links hidden t:flex">
        <NavLink to="/" className={({ isActive }) => handleIsActive(isActive)}>
          <span className="hidden font-bold d:mr-1 d:inline-block">00 </span>
          Home
        </NavLink>
        <NavLink
          to="/destinations"
          className={({ isActive }) => handleIsActive(isActive)}
        >
          <span className="hidden font-bold d:mr-1 d:inline-block">01 </span>
          Destinations
        </NavLink>
        <NavLink
          to="/crew"
          className={({ isActive }) => handleIsActive(isActive)}
        >
          <span className="hidden font-bold d:mr-1 d:inline-block">02 </span>
          Crew
        </NavLink>
        <NavLink
          to="/technology"
          className={({ isActive }) => handleIsActive(isActive)}
        >
          <span className="hidden font-bold d:mr-1 d:inline-block">03 </span>
          Technology
        </NavLink>
      </div>

      {isOpen ? (
        <div
          className="relative z-40 flex h-screen w-3/4 flex-col gap-16 
          bg-white bg-opacity-5 px-12 pt-5 text-white backdrop-blur-[82px] t:hidden"
        >
          <img
            src={close}
            alt="close button"
            className="mt-7 flex h-5 w-5 cursor-pointer self-end"
            onClick={() => dispatch(toggleHamburger())}
          />
          <NavLink to="/">
            <span className="mr-1 font-bold">00 </span>
            Home
          </NavLink>
          <NavLink to="/destinations">
            <span className="mr-1 font-bold">01 </span>
            Destinations
          </NavLink>
          <NavLink to="/crew">
            <span className="mr-1 font-bold">02 </span>
            Crew
          </NavLink>
          <NavLink to="/technology">
            <span className="mr-1 font-bold">03 </span>
            Technology
          </NavLink>
        </div>
      ) : (
        <img
          src={hamburger}
          alt="logo"
          className="mr-10 mt-8 block cursor-pointer t:hidden"
          onClick={() => dispatch(toggleHamburger())}
        />
      )}
    </nav>
  )
}

export default Navbar
