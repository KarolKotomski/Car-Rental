import carIcon from "../icons/car_icon.png";
import location from "../icons/location.png";
import calendar from "../icons/calendar.png";
import BookingUnit from "./BookingUnit";

const Booking = () => {
	return (
		<div className='bg-gray4 py-20'>
			<div className='container bg-booking bg-white bg-cover bg-no-repeat relative z-10 rounded-lg'>
				<div className='text-2xl font-bold pt-10 px-10'>
					<h2>Book a car</h2>
				</div>
				<div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'>
					<BookingUnit
						icon={carIcon}
						label='Select your car'
						options='Audi A1'
					/>
					<BookingUnit icon={location} label='Pick-up location' options='Audi A1' />
					<BookingUnit
						icon={location}
						label='Drop-off location'
						options='Audi A1'
					/>
					<BookingUnit
						icon={calendar}
						label='Pick-up date'
						options='Audi A1'
					/>
					<BookingUnit
						icon={calendar}
						label='Drop-off date'
						options='Audi A1'
					/>
					<div className='flex justify-center items-end m-5'>
						<button className='bg-orange text-white font-medium w-full h-10 rounded'>
							SEARCH
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Booking;
