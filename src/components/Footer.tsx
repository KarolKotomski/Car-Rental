const Footer = () => {
	return (
		<footer>
			<div className='container py-20'>
				<div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4'>
					<div className='flex flex-col items-center'>
						<div className='flex flex-col justify-center items-center'>
							<h5 className='text-2xl font-medium'>
								CAR <span className='font-normal'>Rental</span>
							</h5>
							<p className='text-center py-3 text-gray2'>
								We offers a big range of vehicles for all your driving needs. We
								have the perfect car to meet your requirements.
							</p>
						</div>
						<a href='tel:123-456-789'>
							<div className='flex gap-3 justify-center py-2 w-fit'>
								<div className='w-6'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 24 24'
										fill='none'
										stroke='currentColor'
										stroke-width='2'
										stroke-linecap='round'
										stroke-linejoin='round'>
										<path d='M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2'></path>
										<path d='M15 7a2 2 0 0 1 2 2'></path>
										<path d='M15 3a6 6 0 0 1 6 6'></path>
									</svg>
								</div>

								<div>
									<p className='font-medium'>(123)-456-789</p>
								</div>
							</div>
						</a>
						<div className='flex gap-3 justify-center p-2'>
							<div className='w-6'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									viewBox='0 0 24 24'
									fill='none'
									stroke='currentColor'
									stroke-width='2'
									stroke-linecap='round'
									stroke-linejoin='round'>
									<path d='M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z'></path>
									<path d='M3 7l9 6l9 -6'></path>
								</svg>
							</div>
							<div>
								<a href='mailto:your@email.com'>
									<p className='font-medium'>your@email.com</p>
								</a>
							</div>
						</div>
						<div className='text-center p-2'>
							<p>Design by XpeedStudio</p>
						</div>
					</div>

					<div className='flex flex-col'>
						<div className='flex flex-col justify-center items-center'>
							<h5 className='text-2xl font-medium pb-2 text-center'>COMPANY</h5>
							<ul className='text-center p-2'>
								<li className='pb-2'>How we work</li>
								<li className='pb-2'>New York</li>
								<li className='pb-2'>Careers</li>
								<li className='pb-2'>Mobile</li>
								<li className='pb-2'>Blog</li>
							</ul>
						</div>
					</div>

					<div className='flex flex-col'>
						<div className='flex flex-col justify-center items-center'>
							<h5 className='text-2xl font-medium pb-2 text-center'>
								WORKING HOURS
							</h5>
							<ul className='text-center p-2'>
								<li className='pb-2'>Mon - Fri: 9:00AM - 9:00PM</li>
								<li className='pb-2'>Sat: 9:00AM - 7:00PM</li>
								<li className='pb-2'>Sun: Closed</li>
							</ul>
						</div>
					</div>

					<div className='flex flex-col'>
						<div className='flex flex-col justify-center items-center'>
							<h5 className='text-2xl font-medium text-center pb-2'>
								SUBSCRIPTION
							</h5>
							<p className='text-center p-2'>
								Subscribe for latest news & updates
							</p>
						</div>
						<div className='flex flex-col gap-3 py-5'>
							<input
								type='e-mail'
								minLength={5}
								maxLength={40}
								placeholder='your email'
								className='bg-gray3 py-4 px-7 text-center placeholder-gray2'
							/>
							<button className='bg-orange text-white font-medium py-4 px-7 rounded'>
								Submit
							</button>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
