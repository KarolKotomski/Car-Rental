import React from "react";

const Hero = () => {
	return (
		<div className='container flex'>
			<div className='flex-col max-w-lg py-4'>
				<div>
					<h4 className='text-2xl font-bold'>Plan your trip now</h4>
					<h1 className='text-[3.25rem] leading-tight font-extrabold pb-6 pt-2'>
						Save <span className='text-orange'>big</span> with our car rental
					</h1>
					<p className='pb-10 text-gray2'>
						Rent the car of your dreams. Unbeatable prices, unlimited miles,
						flexible pick-up options and much more.
					</p>
				</div>
				<div className='font-medium'>
					<button className='bg-orange py-4 px-7 rounded text-white mr-4'>
						Book Ride <img className='inline' src='' alt='' />
					</button>
					<button className='bg-black text-white py-4 px-7 rounded'>
						Learn More <img className='inline' src='' alt='' />
					</button>
				</div>
			</div>
			<div className=''></div>
		</div>
	);
};

export default Hero;
