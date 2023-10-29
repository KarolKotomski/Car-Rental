import car from "../images/cars-big/audia1.jpg";
import calendarIcon from "../icons/calendar.png";
import locationIcon from "../icons/location.png";
import ReservationLocDateUnit from "./ReservationLocDateUnit";

const ReservationComplete = () => {
  return (
    <div className="fixed top-0 z-50 flex h-full w-full items-center justify-center bg-[rgba(0,0,0,0.3)]">
      <div className="h-full w-full max-w-screen-lg overflow-y-scroll bg-white">
        <div className="flex justify-between bg-orange p-3">
          <h3 className="text-2xl font-medium text-white">
            Complete Reservation
          </h3>
          <svg
            className="w-6 text-white"
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
              Upon completing this reservation enquiry you will receive:
            </h4>
          </div>

          <p className="text-lg text-gray2">
            Your rental voucher to produce on arrival at the rental desk and a
            toll-free customer support number.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-10 border-b bg-white p-8">
          <div className="flex flex-col items-center gap-8">
            <h5 className="text-lg font-medium text-orange">Location & Date</h5>

            <ReservationLocDateUnit
              image={calendarIcon}
              label="Pick-up:"
              date="data"
              type="time"
            />
            <ReservationLocDateUnit
              image={calendarIcon}
              label="Drop-off:"
              date="data"
              type="time"
            />
            <ReservationLocDateUnit
              image={locationIcon}
              label="Pick-up:"
              location="aaaa"
            />
            <ReservationLocDateUnit
              image={locationIcon}
              label="Drop-off:"
              location="wwww"
            />
          </div>
          <div className="flex flex-col gap-5">
            <div className="text-lg font-medium">
              <h5>
                Car- <span className="text-orange">BMW 320 ModernLine</span>
              </h5>
            </div>
            <div>
              <img src={car} alt="selected car" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-10 bg-white p-8">
          <h5 className="text-lg font-medium text-orange">
            Personal Information
          </h5>
          <div>
            <h6>First name</h6>
            <input type="text" />
          </div>
          <div>
            <h6>First name</h6>
            <input type="text" />
          </div>
          <div>
            <h6>First name</h6>
            <input type="text" />
          </div>
          <div>
            <h6>First name</h6>
            <input type="text" />
          </div>
          <div>
            <h6>First name</h6>
            <input type="text" />
          </div>
          <div>
            <h6>First name</h6>
            <input type="text" />
          </div>
          <div>
            <h6>First name</h6>
            <input type="text" />
          </div>
          <div>
            <h6>First name</h6>
            <input type="text" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReservationComplete;
