import React from "react";
import logo from "../images/logo/logo.png";

const Navbar = () => {
	return (
		<nav>
			<div className='container mx-auto h-28 flex justify-between items-center font-medium'>
				<div className='w-36'>
					<img src={logo} alt='logo' />
				</div>
				<ul className='flex gap-6'>
					<li>Home</li>
					<li>About</li>
					<li>Vehicles</li>
					<li>Testimonials</li>
					<li>Our Team</li>
					<li>Contact</li>
				</ul>
				<div className='flex gap-5'>
					<button>Sign In</button>
					<button className='bg-orange py-3 px-6 text-white rounded'>
						Register
					</button>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
