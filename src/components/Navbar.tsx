import logo from "../images/logo/logo.png";
import hamburgerIcon from "../icons/hamburger.svg"

const Navbar = () => {
	return (
		<nav>
			<div className='container h-28 absolute flex justify-between items-center left-0 right-0'>
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
					<button className="hidden lg:block">Sign In</button>
					<button className='hidden lg:block bg-orange py-3 px-6 text-white rounded'>
						Register
					</button>
					<img className='lg:hidden w-6' src={hamburgerIcon} alt="hamburger menu" />
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
