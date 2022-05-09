import logo from "../../assets/shared/logo.svg";
import { NavLink } from "react-router-dom";
import "../../index.css";

const Navbar = () => {
  const navUnderlineActive = "before:bg-white  before:h-1 nav-link";
  const navUnderlineDeactive =
    "hover:before:bg-white hover:before:h-1 hover:before:bg-opacity-25 nav-link";
  const handleIsActive = (isActive) =>
    isActive ? navUnderlineActive : navUnderlineDeactive;

  return (
    <nav
      className="flex uppercase items-center justify-between z-10 
        top-0 left-0 right-0 mt-8 fixed"
    >
      <img src={logo} alt="logo" className="ml-14" />
      <div className="navbar-links font-main">
        <NavLink to="/" className={({ isActive }) => handleIsActive(isActive)}>
          <span className="font-extrabold ">00 </span>
          Home
        </NavLink>
        <NavLink
          to="/destinations"
          className={({ isActive }) => handleIsActive(isActive)}
        >
          <span className="font-extrabold ">01 </span>
          Destinations
        </NavLink>
        <NavLink
          to="/crew"
          className={({ isActive }) => handleIsActive(isActive)}
        >
          <span className="font-extrabold ">02 </span>
          Crew
        </NavLink>
        <NavLink
          to="/technology"
          className={({ isActive }) => handleIsActive(isActive)}
        >
          <span className="font-extrabold ">03 </span>
          Technology
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
