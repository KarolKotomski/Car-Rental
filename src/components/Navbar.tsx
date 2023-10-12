import { Link } from "react-router-dom";
import logo from "../images/logo/logo.png";

const Navbar = () => {
  return (
    <nav>
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
          <button className="hidden rounded bg-orange px-6 py-3 text-white transition-all duration-300 ease-in-out hover:opacity-80 lg:block">
            Register
          </button>
          <div className="my-auto w-10 cursor-pointer text-black transition-all duration-300 ease-in-out hover:text-orange lg:hidden">
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
