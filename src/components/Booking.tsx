import carIcon from "../icons/car_icon.png";
import location from "../icons/location.png";
import calendar from "../icons/calendar.png";
import BookingUnit from "./BookingUnit";
import { vehicles } from "../data/AllData";

export interface Vehicle {
  id: number;
  brand: string;
  model: string;
  line: string;
  doors: string;
  transmission: string;
  fuel: string;
  cost: string;
  image1: string;
  image2: string;
  ac: string;
  year: string;
}

const Booking = () => {
  return (
    <div className="bg-gray4 pt-20">
      <div className="container">
        <div className="relative z-10 rounded-lg bg-white bg-booking bg-cover bg-no-repeat p-10 shadow-xl">
          <div className="pl-3 text-2xl font-bold">
            <h2>Book a car</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            <BookingUnit
              icon={carIcon}
              label="Select your car"
              options={vehicles as Vehicle[]}
            />
            <BookingUnit
              icon={location}
              label="Pick-up location"
              options=""
            />
            <BookingUnit
              icon={location}
              label="Drop-off location"
              options=""
            />
            <BookingUnit
              icon={calendar}
              label="Pick-up date"
              options=""
            />
            <BookingUnit
              icon={calendar}
              label="Drop-off date"
              options=""
            />
            <div className="m-3 flex items-end justify-center">
              <button className="h-10 w-full rounded bg-orange font-medium text-white transition-all duration-300 ease-in-out hover:opacity-80 shadow-lg shadow-orangeShadow">
                Search
              </button>
            </div>
            <p className="p-3"><span className="text-orange font-medium text-lg">*</span> - field required</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
