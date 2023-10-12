import { Link } from "react-router-dom";
import logo from "../images/logo/logo.png";

const Navbar = () => {
	return (
		<nav>
			<div className='container h-28 absolute flex justify-between items-center left-0 right-0 font-medium z-20'>
				<div className='w-36'>
					<img src={logo} alt='logo' />
				</div>
				<ul className='hidden lg:flex gap-6 px-5'>
					<Link to={"/"}>
						<li>Home</li>
					</Link>
					<Link to={"about"}>
						<li>About</li>
					</Link>
					<Link to={"vehicles"}>
						<li>Vehicles</li>
					</Link>
					<Link to={"testimonials"}>
						<li>Testimonials</li>
					</Link>
					<Link to={"team"}>
						<li>Our Team</li>
					</Link>
					<Link to={"contact"}>
						<li>Contact</li>
					</Link>
				</ul>
				<div className='flex gap-3'>
					<button className='hidden lg:block py-3 px-6 rounded'>Sign In</button>
					<button className='hidden lg:block bg-orange py-3 px-6 text-white rounded'>
						Register
					</button>
					<div className='cursor-pointer w-10 my-auto lg:hidden text-black transition-all ease-in-out duration-350 hover:text-orange'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth={1.5}
							stroke='currentColor'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
							/>
						</svg>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
