import carPicture from "../images/cars-big/audia1.jpg";

const Pick = () => {
	return (
		<div>
			<div className='container py-20'>
				<div className='text-center'>
					<h3 className='text-2xl font-semibold'>Vehicle models</h3>
					<h2 className='text-5xl py-5 font-semibold'>Our rental fleet</h2>
					<p className='py-3 text-gray2'>
						Choose from a variety of our amazing vehicles to rent for your next
						adventure or business trip.
					</p>
				</div>

				<div className="pt-10 lg:grid lg:grid-cols-4">
					<div className='flex flex-col gap-3'>
						<button className='bg-gray3 px-6 py-4 text-xl font-medium text-left'>
							Audi A1 S-Line
						</button>
						<button className='bg-gray3 px-6 py-4 text-xl font-medium text-left'>
							Audi A1 S-Line
						</button>
						<button className='bg-gray3 px-6 py-4 text-xl font-medium text-left'>
							Audi A1 S-Line
						</button>
						<button className='bg-gray3 px-6 py-4 text-xl font-medium text-left'>
							Audi A1 S-Line
						</button>
						<button className='bg-gray3 px-6 py-4 text-xl font-medium text-left'>
							Audi A1 S-Line
						</button>
						<button className='bg-gray3 px-6 py-4 text-xl font-medium text-left'>
							Audi A1 S-Line
						</button>
					</div>

					<div className="flex flex-col py-10 gap-5 md:flex-row items-center lg:justify-end lg:col-span-3 lg:gap-0">
						<div className='px-5 flex justify-center lg:w-full xl:h-full'>
							<img src={carPicture} alt='selected car' />
						</div>

						<div className='flex flex-col min-w-[250px]'>
							<div className='bg-orange text-white text-lg text-center py-1 px-4'>
								<span className='text-2xl font-medium'>$45</span> / day
							</div>
							<div className='flex text-center border-x-2 border-b-2 border-gray2 py-2 px-1'>
								<div className='w-1/2 border-r-2 border-gray2'>Brand:</div>
								<div className='w-1/2'>Audi</div>
							</div>
							<div className='flex text-center border-x-2 border-b-2 border-gray2 py-2 px-1'>
								<div className='w-1/2 border-r-2 border-gray2'>Brand:</div>
								<div className='w-1/2'>Audi</div>
							</div>
							<div className='flex text-center border-x-2 border-b-2 border-gray2 py-2 px-1'>
								<div className='w-1/2 border-r-2 border-gray2'>Brand:</div>
								<div className='w-1/2'>Audi</div>
							</div>
							<div className='flex text-center border-x-2 border-b-2 border-gray2 py-2 px-1'>
								<div className='w-1/2 border-r-2 border-gray2'>Brand:</div>
								<div className='w-1/2'>Audi</div>
							</div>
							<div className='flex text-center border-x-2 border-b-2 border-gray2 py-2 px-1'>
								<div className='w-1/2 border-r-2 border-gray2'>Brand:</div>
								<div className='w-1/2'>Audi</div>
							</div>
							<div className='flex text-center border-x-2 border-b-2 border-gray2 py-2 px-1'>
								<div className='w-1/2 border-r-2 border-gray2'>Brand:</div>
								<div className='w-1/2'>Audi</div>
							</div>
							<div className='flex text-center border-x-2 border-b-2 border-gray2 py-2 px-1'>
								<div className='w-1/2 border-r-2 border-gray2'>Brand:</div>
								<div className='w-1/2'>Audi</div>
                            </div>
                            <button className="bg-orange text-white py-2 px-4 text-xl rounded mt-5">Reserve now</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Pick;
