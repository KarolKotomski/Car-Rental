import checkmark from "../icons/checkmark.png";
import arrowRight from "../icons/arrow-right.png";
import heroCar from "../images/hero/main-car.png";

const Hero = () => {
	return (
		<div className='md:bg-hero md:bg-no-repeat md:bg-right-top'>
			<div className='container pt-28 flex'>
				<div className='flex flex-col py-4 items-center md:max-w-md md:items-start'>
					<div className="flex flex-col items-center md:items-start">
						<h4 className='text-2xl font-bold'>Plan your trip now</h4>
						<h1 className='text-[3.25rem] leading-tight font-extrabold pb-6 pt-2 text-center md:text-left'>
							Save <span className='text-orange'>big</span> with our car rental
						</h1>
						<p className='pb-10 text-gray2 text-center md:text-left'>
							Rent the car of your dreams. Unbeatable prices, unlimited miles,
							flexible pick-up options and much more.
						</p>
					</div>
					<div className='font-medium flex gap-3 justify-center flex-wrap xs:flex-nowrap'>
						<button className='bg-orange py-4 px-7 rounded text-white flex gap-1 items-center w-fit'>
							Book Ride{" "}
							<img
								className='inline-block w-6'
								src={checkmark}
								alt='check mark sign'
							/>
						</button>
						<button className='bg-black text-white py-4 px-7 rounded flex gap-1 items-center w-fit'>
							Learn More{" "}
							<img
								className='inline-block w-4'
								src={arrowRight}
								alt='arrow right'
							/>
						</button>
					</div>
				</div>
				<div className='hidden md:flex md:items-end'>
					<img src={heroCar} alt='volkswagen car picture' />
				</div>
			</div>
		</div>
	);
};

export default Hero;
