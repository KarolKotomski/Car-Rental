import carIcon from "../icons/car_icon.png";
import BookingUnit from "./BookingUnit";

const Booking = () => {

	return (
		<div className='bg-gray4 py-20'>
			<div className='container'>
				<div className='p-10 bg-booking bg-white relative z-10 rounded-md'>
					<h2 className='text-2xl font-bold pb-6'>Book a car</h2>
					<div className='grid grid-cols-3 gap-8'>
						<BookingUnit icon={carIcon} label="Select your car" option="Audi A1"/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Booking;
