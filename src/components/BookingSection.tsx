interface Props {
	icon: string;
	label: string;
	option: string;
}

const BookingSection = ({ icon, label, option }: Props) => {
	return (
		<form className='flex flex-col'>
			<div className='flex items-center gap-2'>
				<div>
					<img className='w-6' alt='car icon' src={icon}></img>
				</div>
				<div>
					<label className='flex font-medium py-3 whitespace-nowrap'>
						{label}
						<span className='text-orange'>*</span>
					</label>
				</div>
			</div>
			<div>
				<select
					className='w-full border border-[#ccd7e6] p-2'
					name='car_model'
					id='car_model'>
					{option}
				</select>
			</div>
		</form>
	);
};

export default BookingSection;
