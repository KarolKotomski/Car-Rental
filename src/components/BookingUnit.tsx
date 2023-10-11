interface Props {
	icon: string;
	label: string;
	options: string;
}

const BookingUnit = ({ icon, label, options }: Props) => {
	return (
		<div className='p-5 rounded-md'>
			<form className='flex flex-col'>
				<div className='flex items-center gap-2'>
					<div className='w-6'>
						<img alt='icon' src={icon}></img>
					</div>
					<div>
						<label className='flex font-medium text-lg py-3 whitespace-nowrap'>
							{label}
							<span className='text-orange'>*</span>
						</label>
					</div>
				</div>
				<div>
					<select
						className='w-full border border-[#ccd7e6] p-2 rounded-md'
						name='car_model'
						id='car_model'>
						{options}
					</select>
				</div>
			</form>
		</div>
	);
};

export default BookingUnit;
