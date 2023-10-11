import heroBackground from "../images/hero/hero-bg.png";

const NoMatch = () => {
	return (
		<div className="flex flex-col items-center justify-center pt-40 pb-24 gap-10">
			<div className='absolute right-0 top-0 -z-10'>
				<img src={heroBackground} alt='city skyscrapers' />
			</div>
			<div className='text-center'>
				<div className="pb-5 text-3xl md:text-4xl">Page Not Found</div>
				<p className="text-xl md:text-2xl">error code: 404</p>
			</div>
			<div>
				<button className='bg-orange text-white px-7 py-4 rounded font-medium'>
					Back to Home
				</button>
			</div>
        </div>


	);
};

export default NoMatch;
