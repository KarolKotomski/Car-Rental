const Faq = () => {
	return (
		<div className='container py-10'>
			<div className='text-center'>
				<h3 className='text-2xl font-semibold'>FAQ</h3>
				<h2 className='text-5xl py-5 font-semibold'>
					Frequently Asked Questions
				</h2>
				<p className='py-3 text-gray2'>
					Frequently Asked Questions about the car rental booking process on our
					website: Answers to common concerns and inquiries.
				</p>
			</div>
			<div className='w-full lg:max-w-[70%] mx-auto'>
				<div className='p-5 flex flex-col'>
					<div className='flex items-center justify-between gap-5 p-5 bg-orange'>
						<div className='text-lg text-white'>
							1. What is special about comparing rental car deals?
						</div>
						<div className='w-6'>
							<svg
								className='text-white'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								fill='none'
								stroke='currentColor'
								stroke-width='2'
								stroke-linecap='round'
								stroke-linejoin='round'>
								<path d='M6 9l6 6l6 -6'></path>
							</svg>
						</div>
					</div>

					<div className='p-5 text-gray2'>
						Comparing rental car deals is important as it helps find the best
						deal that fits your budget and requirements, ensuring you get the
						most value for your money. By comparing various options, you can
						find deals that offer lower prices, additional services, or better
						car models. You can find car rental deals by researching online and
						comparing prices from different rental companies.
					</div>
				</div>
			</div>
		</div>
	);
};

export default Faq;
