import calendarIcon from "../icons/calendar.png";
import locationIcon from "../icons/location.png";
import ReservationLocDateUnit from "./ReservationLocDateUnit";
import ReservationField from "./ReservationField";
import { FormValues } from "./Form";
import arrow from "../icons/arrow-right.png";
import { vehicles } from "../data/AllData";

interface Props {
  formData: FormValues;
  onCloseReservation: () => void;
  onFinalSubmit: () => void;
}

const ReservationComplete = ({
  formData,
  onCloseReservation,
  onFinalSubmit,
}: Props) => {
  /* Car image finding */

  const selectedCar = formData.carType;
  const selectedVehicle = vehicles.find((vehicle) => {
    return `${vehicle.brand} ${vehicle.model}` === selectedCar;
  });

  return (
    <div className="fixed top-0 z-50 flex h-full w-full items-center justify-center bg-[rgba(0,0,0,0.3)]">
      <div className="h-full w-full max-w-screen-md overflow-y-scroll bg-white md:relative md:top-10 md:p-1 ">
        <div className="flex items-center justify-between bg-orange p-3">
          <h3 className="text-xl font-medium text-white xs:text-2xl">
            Complete Reservation
          </h3>
          <div
            className="h-fit w-6 cursor-pointer text-white"
            onClick={onCloseReservation}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M18 6l-12 12"></path>
              <path d="M6 6l12 12"></path>
            </svg>
          </div>
        </div>
        <div className="bg-orangeLight p-5">
          <div className="mb-3 flex items-center gap-2 text-orange">
            <svg
              className="w-6 min-w-[1.5rem]"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path
                d="M12 2c5.523 0 10 4.477 10 10a10 10 0 0 1 -19.995 .324l-.005 -.324l.004 -.28c.148 -5.393 4.566 -9.72 9.996 -9.72zm0 9h-1l-.117 .007a1 1 0 0 0 0 1.986l.117 .007v3l.007 .117a1 1 0 0 0 .876 .876l.117 .007h1l.117 -.007a1 1 0 0 0 .876 -.876l.007 -.117l-.007 -.117a1 1 0 0 0 -.764 -.857l-.112 -.02l-.117 -.006v-3l-.007 -.117a1 1 0 0 0 -.876 -.876l-.117 -.007zm.01 -3l-.127 .007a1 1 0 0 0 0 1.986l.117 .007l.127 -.007a1 1 0 0 0 0 -1.986l-.117 -.007z"
                fill="currentColor"
                strokeWidth="0"
              ></path>
            </svg>
            <h4 className="text-xl font-medium">
              Upon completing this reservation inquiry, you will receive:
            </h4>
          </div>

          <ul className="list-inside list-disc text-lg text-gray2">
            <li>
              Your rental voucher to present upon arrival at the rental desk
            </li>
            <li>A toll-free customer support number</li>
          </ul>
        </div>
        <div className="grid grid-cols-1 gap-14 border-b p-8">
          <div className="flex flex-col gap-10">
            <h5 className="text-center text-lg font-medium text-orange">
              Location & Date
            </h5>
            <div className="grid grid-cols-1 items-center gap-8 xs:grid-cols-2 sm:grid-cols-4 md:gap-0">
              <ReservationLocDateUnit
                image={calendarIcon}
                label="Pick-up:"
                date={formData.pickDate}
              />
              <ReservationLocDateUnit
                image={calendarIcon}
                label="Drop-off:"
                date={formData.dropDate}
              />
              <ReservationLocDateUnit
                image={locationIcon}
                label="Pick-up:"
                location={formData.pickLocation}
              />
              <ReservationLocDateUnit
                image={locationIcon}
                label="Drop-off:"
                location={formData.dropLocation}
              />
            </div>
          </div>

          <div className="flex flex-col items-center gap-10">
            <div className="text-lg font-medium">
              <h5>
                Your car:
                <span className="text-orange"> {formData.carType}</span>
              </h5>
            </div>
            <div>
              <img
                src={selectedVehicle?.image2}
                alt="selected car"
                className="max-h-[210px]"
              />
            </div>
          </div>
        </div>
        <div className="p-8">
          <h5 className="mb-8 text-center text-lg font-medium text-orange">
            Personal Information
          </h5>
          <form
            className="grid grid-cols-1 gap-8 xs:grid-cols-2"
            onSubmit={onFinalSubmit}
          >
            <ReservationField
              label="First name"
              type="text"
              placeholder="your first name"
              minLength={3}
              maxLength={30}
            />
            <ReservationField
              label="Last name"
              type="text"
              placeholder="enter your last name"
              minLength={3}
              maxLength={30}
            />
            <ReservationField
              label="Phone number"
              type="number"
              placeholder="enter your phone number"
            />
            <ReservationField
              label="Your age"
              type="number"
              placeholder="enter your age"
            />
            <ReservationField
              label="Email"
              type="email"
              placeholder="enter your email address"
              minLength={3}
              maxLength={30}
            />
            <ReservationField
              label="Address"
              type="text"
              placeholder="enter your address"
              minLength={3}
              maxLength={30}
            />
            <ReservationField
              label="City"
              type="text"
              placeholder="enter your city"
              minLength={3}
              maxLength={30}
            />
            <ReservationField
              label="Zip Code"
              type="text"
              placeholder="enter your zip code"
              minLength={3}
              maxLength={30}
            />
            <div className="flex flex-col xs:col-span-2">
              <div className="flex items-center gap-2">
                <input type="checkbox" className="h-4 w-4" />
                <p>Please send me latest news and updates</p>
              </div>
              <div className="flex flex-col items-center justify-center gap-5 p-10 xs:flex-row">
                <button
                  className="flex min-w-[172px] items-center gap-2 whitespace-nowrap rounded bg-black px-7 py-4 text-white shadow-lg shadow-gray2 transition-all duration-300 hover:opacity-80"
                  onClick={onCloseReservation}
                  type="button"
                >
                  <img src={arrow} alt="arrow" className="w-3 rotate-180" />
                  Change data
                </button>
                <button
                  className="min-w-[172px] whitespace-nowrap rounded bg-orange px-7 py-4 font-medium text-white shadow-lg shadow-orangeShadow transition-all duration-300 hover:bg-green-600 hover:shadow-none"
                  type="submit"
                >
                  RESERVE NOW
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ReservationComplete;
