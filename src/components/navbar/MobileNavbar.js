import { NavLink } from "react-router-dom";
import hamburger from "../../assets/shared/icon-hamburger.svg";
import close from "../../assets/shared/icon-close.svg";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { toggleHamburger } from "../../features/hamburgerSlice";

export default function MobileNavbar() {
  const { isOpen } = useSelector((state) => state.hamburger);
  const dispatch = useDispatch();

  const navUnderlineActive = "before:bg-white before:w-1 nav-link-mobile";
  const navUnderlineDeactive =
    "hover:before:bg-white before:w-1 before:bg-white before:bg-opacity-25 hover:before:bg-opacity-75 nav-link-mobile";
  const handleIsActive = (isActive) =>
    isActive ? navUnderlineActive : navUnderlineDeactive;
  return (
    <>
      {!isOpen && (
        <img
          src={hamburger}
          alt="logo"
          className="mr-10 mt-8 cursor-pointer"
          onClick={() => dispatch(toggleHamburger())}
        />
      )}
      {isOpen && (
        <div
          className="flex flex-col gap-20 bg-very-dark-blue text-white 
                bg-opacity-100 z-40 px-12 relative h-screen w-[65%] pt-5 text-nav"
        >
          <img
            src={close}
            alt="close button"
            className="w-5 h-5 flex self-end cursor-pointer mt-8"
            onClick={() => dispatch(toggleHamburger())}
          />
          <NavLink 
            to="/"
            className={({ isActive }) => handleIsActive(isActive)}
            >
            <span className="font-bold">00 </span>
            Home
          </NavLink>
          <NavLink 
            to="/destinations"
            className={({ isActive }) => handleIsActive(isActive)}
            >
            <span className="font-bold">01 </span>
            Destinations
          </NavLink>
          <NavLink 
            to="/crew"
            className={({ isActive }) => handleIsActive(isActive)}
            >
            <span className="font-bold">02 </span>
            Crew
          </NavLink>
          <NavLink 
            to="/technology"
            className={({ isActive }) => handleIsActive(isActive)}
            >
            <span className="font-bold">03 </span>
            Technology
          </NavLink>
        </div>
      )}
    </>
  );
}
