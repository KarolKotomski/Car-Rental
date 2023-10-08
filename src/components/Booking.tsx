import carIcon from "../icons/car_icon.png";

const Booking = () => {
	return (
		<div className='bg-gray4'>
			<div className='container bg-booking z-100'>
				<h2 className='text-2xl font-bold pt-16 pb-8'>Book a car</h2>
				<div className='grid grid-cols-2 gap-8'>
					<form>
						<div className='flex flex-col'>
							<label className='flex gap-2'>
								<img className='w-6' alt='car icon' src={carIcon}></img>
								Choose your car model<span>*</span>
							</label>
							<select className='outline' name='car_model' id='car_model'>
								<option value='Car model'>Car model</option>
								<option value='Audi A1 S-Line'>Audi A1 S-Line</option>
								<option value='BMW 320 ModernLine'>BMW 320 ModernLine</option>
								<option value='Mercedes-Benz GLK'>Mercedes-Benz GLK</option>
								<option value='Toyota Camry'>Toyota Camry</option>
								<option value='Volkswagen Golf 6'>Volkswagen Golf 6</option>
								<option value='Volkswagen Passat CC'>
									Volkswagen Passat CC
								</option>
							</select>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Booking;
