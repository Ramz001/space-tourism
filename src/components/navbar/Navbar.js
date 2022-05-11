import logo from "../../assets/shared/logo.svg";
import { NavLink } from "react-router-dom";
import "../../index.css";
import { useSelector } from "react-redux";
import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  const { display } = useSelector((state) => state.findWidth);
  const { isOpen } = useSelector((state) => state.hamburger);
  const navUnderlineActive = "before:bg-white before:h-1 nav-link";
  const navUnderlineDeactive =
    "hover:before:bg-white hover:before:h-1 hover:before:bg-opacity-25 nav-link";
  const handleIsActive = (isActive) =>
    isActive ? navUnderlineActive : navUnderlineDeactive;

  return (
    <nav
      className={`flex uppercase ${
        isOpen ? "items-start" : "items-center"
      } justify-between z-10 
        top-0 left-0 right-0 xl:mt-8 fixed tablet:mx-0`}
    >
      <img src={logo} alt="logo" className="ml-10 mt-8 xl:mt-0 tablet:ml-14" />
      {(display === "tablet" || display === "desktop") && (
        <div className="navbar-links font-main">
          <NavLink
            to="/"
            className={({ isActive }) => handleIsActive(isActive)}
          >
            <span className="font-extrabold hidden xl:inline-block">00 </span>
            Home
          </NavLink>
          <NavLink
            to="/destinations"
            className={({ isActive }) => handleIsActive(isActive)}
          >
            <span className="font-extrabold hidden xl:inline-block">01 </span>
            Destinations
          </NavLink>
          <NavLink
            to="/crew"
            className={({ isActive }) => handleIsActive(isActive)}
          >
            <span className="font-extrabold hidden xl:inline-block">02 </span>
            Crew
          </NavLink>
          <NavLink
            to="/technology"
            className={({ isActive }) => handleIsActive(isActive)}
          >
            <span className="font-extrabold hidden xl:inline-block">03 </span>
            Technology
          </NavLink>
        </div>
      )}
      {display === "mobile" && <MobileNavbar />}
    </nav>
  );
};

export default Navbar;
