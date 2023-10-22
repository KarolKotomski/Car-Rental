import { Link } from "react-router-dom";
import logo from "../images/logo/logo.png";
import { useState } from "react";

const Navbar = () => {
  const [isMenuActive, setIsMenuActive] = useState(false);

  const handleClick = () => {
    setIsMenuActive(!isMenuActive);
    window.scrollTo(0, 0);
  };

  return (
    <nav>
      <div
        className={`fixed z-[99] flex h-screen flex-col items-center justify-center overflow-hidden bg-white transition-all duration-500 ${isMenuActive ? "w-full " : "w-0"
          }`}
      >
        <div
          className="absolute right-10 top-10 cursor-pointer transition-colors hover:text-orange"
          onClick={() => handleClick()}
        >
          <svg
            className="w-8"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 6l-12 12"></path>
            <path d="M6 6l12 12"></path>
          </svg>
        </div>
        <ul className="flex flex-col items-center gap-7 text-2xl">
          <Link to={"/"}>
            <li
              className="w-fit transition-colors hover:text-orange"
              onClick={() => handleClick()}
            >
              Home
            </li>
          </Link>
          <Link to={"about"}>
            <li
              className="w-fit transition-colors hover:text-orange"
              onClick={() => handleClick()}
            >
              About
            </li>
          </Link>
          <Link to={"vehicles"}>
            <li
              className="w-fit transition-colors hover:text-orange"
              onClick={() => handleClick()}
            >
              Vehicles
            </li>
          </Link>
          <Link to={"testimonials"}>
            <li
              className="w-fit transition-colors hover:text-orange"
              onClick={() => handleClick()}
            >
              Testimonials
            </li>
          </Link>
          <Link to={"team"}>
            <li
              className="w-fit transition-colors hover:text-orange"
              onClick={() => handleClick()}
            >
              Our Team
            </li>
          </Link>
          <Link to={"contact"}>
            <li
              className="w-fit transition-colors hover:text-orange"
              onClick={() => handleClick()}
            >
              Contact
            </li>
          </Link>
        </ul>
      </div>
      <div className="container absolute left-0 right-0 z-20 flex h-28 items-center justify-between font-medium">
        <Link to={"/"}>
          <div className="w-36">
            <img src={logo} alt="logo" />
          </div>
        </Link>
        <ul className="hidden gap-6 px-5 lg:flex">
          <Link to={"/"}>
            <li className="transition-colors hover:text-orange">Home</li>
          </Link>
          <Link to={"about"}>
            <li className="transition-colors hover:text-orange">About</li>
          </Link>
          <Link to={"vehicles"}>
            <li className="transition-colors hover:text-orange">Vehicles</li>
          </Link>
          <Link to={"testimonials"}>
            <li className="transition-colors hover:text-orange">
              Testimonials
            </li>
          </Link>
          <Link to={"team"}>
            <li className="transition-colors hover:text-orange">Our Team</li>
          </Link>
          <Link to={"contact"}>
            <li className="transition-colors hover:text-orange">Contact</li>
          </Link>
        </ul>
        <div className="flex gap-5">
          <button className="my-auto hidden h-fit rounded transition-colors hover:text-orange lg:block">
            Sign In
          </button>
          <button className="hidden rounded bg-orange px-6 py-3 text-white shadow-lg shadow-orangeShadow transition-all duration-300 hover:opacity-80 lg:block">
            Register
          </button>
          <div
            className="my-auto mr-5 w-10 cursor-pointer text-black transition-all duration-300 ease-in-out hover:text-orange lg:hidden"
            onClick={() => handleClick()}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
