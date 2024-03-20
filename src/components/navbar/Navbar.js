import logo from "../../assets/shared/logo.svg";
import { NavLink } from "react-router-dom";
import "../../index.css";
import { useSelector, useDispatch } from "react-redux";
import { toggleHamburger } from "../../features/hamburgerSlice";
import hamburger from "../../assets/shared/icon-hamburger.svg";
import close from "../../assets/shared/icon-close.svg";

const Navbar = () => {
  const dispatch = useDispatch();
  const { isOpen } = useSelector((state) => state.hamburger);
  const navUnderlineActive = "before:bg-white before:h-1 nav-link";
  const navUnderlineDeactive =
    "hover:before:bg-white hover:before:h-1 hover:before:bg-opacity-25 font-light nav-link";
  const handleIsActive = (isActive) =>
    isActive ? navUnderlineActive : navUnderlineDeactive;

  return (
    <nav
      className="flex uppercase justify-between z-10 top-0 left-0 right-0 
      d:mt-8 fixed t:mx-0 items-center"
    >
      <img
        src={logo}
        alt="logo"
        className="ml-10 mt-8 d:mt-0 t:ml-14 self-start t:self-center"
      />
      <div className="navbar-links hidden t:flex">
        <NavLink to="/" className={({ isActive }) => handleIsActive(isActive)}>
          <span className="font-bold d:mr-1 hidden d:inline-block">00 </span>
          Home
        </NavLink>
        <NavLink
          to="/destinations"
          className={({ isActive }) => handleIsActive(isActive)}
        >
          <span className="font-bold d:mr-1 hidden d:inline-block">01 </span>
          Destinations
        </NavLink>
        <NavLink
          to="/crew"
          className={({ isActive }) => handleIsActive(isActive)}
        >
          <span className="font-bold d:mr-1 hidden d:inline-block">02 </span>
          Crew
        </NavLink>
        <NavLink
          to="/technology"
          className={({ isActive }) => handleIsActive(isActive)}
        >
          <span className="font-bold d:mr-1 hidden d:inline-block">03 </span>
          Technology
        </NavLink>
      </div>

      {isOpen ? (
        <div
          className="flex t:hidden flex-col gap-16 bg-white bg-opacity-5 text-white 
          z-40 px-12 relative h-screen w-3/4 pt-5 backdrop-blur-[82px]"
        >
          <img
            src={close}
            alt="close button"
            className="w-5 h-5 flex self-end cursor-pointer mt-7"
            onClick={() => dispatch(toggleHamburger())}
          />
          <NavLink to="/">
            <span className="font-bold mr-1">00 </span>
            Home
          </NavLink>
          <NavLink to="/destinations">
            <span className="font-bold mr-1">01 </span>
            Destinations
          </NavLink>
          <NavLink to="/crew">
            <span className="font-bold mr-1">02 </span>
            Crew
          </NavLink>
          <NavLink to="/technology">
            <span className="font-bold mr-1">03 </span>
            Technology
          </NavLink>
        </div>
      ) : (
        <img
          src={hamburger}
          alt="logo"
          className="t:hidden mr-10 mt-8 cursor-pointer block"
          onClick={() => dispatch(toggleHamburger())}
        />
      )}
    </nav>
  );
};

export default Navbar;
