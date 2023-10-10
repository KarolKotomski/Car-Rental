import car from "../images/chooseUs/main.png";
import icon1 from "../images/chooseUs/icon1.png";
import icon2 from "../images/chooseUs/icon2.png";
import icon3 from "../images/chooseUs/icon3.png";
import arrowRight from "../icons/arrow-right.png";
import ChooseUnit from "./ChooseUnit";

const Choose = () => {
	return (
		<div className="bg-choose bg-no-repeat bg-left-bottom">
			<div className='container'>
				<div className='py-20 flex justify-center'>
					<img className='w-full lg:w-[80%]' src={car} alt='three cars' />
				</div>
				<div className='flex flex-col lg:flex-row'>
					<div className='flex flex-col items-center justify-center lg:w-fit'>
						<h3 className='text-2xl font-semibold text-center'>
							Why choose Us?
						</h3>
						<h2 className='text-5xl font-semibold text-center py-5'>
							Best valued deals you will ever find
						</h2>
						<p className='py-3 text-gray2'>
							Discover the best deals you'll ever find with our unbeatable
							offers. We're dedicated to providing you with the best value for
							your money, so you can enjoy top-quality services and products
							without breaking the bank. Our deals are designed to give you the
							ultimate renting experience, so don't miss out on your chance to
							save big.
						</p>
						<button className='bg-orange text-white font-medium py-4 px-7 rounded flex gap-1 items-center min-w-[163px] my-5'>
							Find details
							<img
								className='inline-block w-4'
								src={arrowRight}
								alt='arrow right'
							/>
						</button>
					</div>
					<div className='py-10 flex flex-col gap-10'>
						<ChooseUnit
							picture={icon1}
							header='Cross Country Drive'
							paragraph='Take your driving experience to the next level with our top-notch vehicles for your cross-country adventures.'
						/>
						<ChooseUnit
							picture={icon2}
							header='All Inclusive Pricing'
							paragraph='Get everything you need in one convenient, transparent price with our all-inclusive pricing policy.'
						/>
						<ChooseUnit
							picture={icon3}
							header='No Hidden Charges'
							paragraph='Enjoy peace of mind with our no hidden charges policy. We believe in transparent and honest pricing.'
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Choose;
