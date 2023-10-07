import logo from "../images/logo/logo.png";

const Navbar = () => {
	return (
		<nav>
			<div className='container h-28 absolute flex justify-between items-center left-0 right-0 font-medium'>
				<div className='w-36'>
					<img src={logo} alt='logo' />
				</div>
				<ul className='hidden lg:flex gap-6 '>
					<li>Home</li>
					<li>About</li>
					<li>Vehicles</li>
					<li>Testimonials</li>
					<li>Our Team</li>
					<li>Contact</li>
				</ul>
				<div className='flex gap-5'>
					<button className='hidden lg:block py-3 px-6 rounded'>Sign In</button>
					<button className='hidden lg:block bg-orange py-3 px-6 text-white rounded'>
						Register
					</button>
					<div className='cursor-pointer w-6 my-auto lg:hidden text-black transition-all ease-in-out duration-350 hover:text-orange'>
						<svg className='fill-current' viewBox='0 0 24 24'>
							<path d='M24 6h-24v-4h24v4zm0 4h-24v4h24v-4zm0 8h-24v4h24v-4z' />
						</svg>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
