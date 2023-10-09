interface Props {
	opinion: string;
	picture: string;
	name: string;
	city: string;
}

const TestimonialsProfile = ({ opinion, picture, name, city }: Props) => {
	return (
		<div className='flex flex-col p-10 bg-white w-full min-h-[22rem] justify-center'>
			<p className='font-medium text-xl pb-5'>{opinion}</p>

			<div className='flex justify-between'>
				<div className='flex items-center'>
					<div className='w-20 mr-5'>
						<img src={picture} alt='Customer' />
					</div>
					<div>
						<p className='text-lg font-semibold'>{name}</p>
						<p>{city}</p>
					</div>
				</div>

				<svg
					className='w-14 fill-none stroke-orange'
					xmlns='http://www.w3.org/2000/svg'
					viewBox='0 0 24 24'
					stroke='currentColor'
					stroke-width='2'
					stroke-linecap='round'
					stroke-linejoin='round'>
					<path d='M10 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5'></path>
					<path d='M19 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5'></path>
				</svg>
			</div>
		</div>
	);
};

export default TestimonialsProfile;
