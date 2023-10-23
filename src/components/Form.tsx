import { useId } from "react";
import carIcon from "../icons/car_icon.png";
import location from "../icons/location.png";
import calendar from "../icons/calendar.png";

const Form = () => {
  const carTypeId = useId();
  const pickLocationId = useId();
  const dropLocationId = useId();
  const pickDateId = useId();
  const dropDateId = useId();

  return (
    <form className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3">
      {/* Car type */}
      <div className="rounded-md">
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <div>
              <img alt="icon" src={carIcon} className="w-6"></img>
            </div>
            <div>
              <label
                htmlFor={carTypeId}
                className="flex whitespace-nowrap py-3 text-lg font-medium"
              >
                Select your car<span className="text-orange">*</span>
              </label>
            </div>
          </div>
          <div>
            <select
              id={carTypeId}
              name="carType"
              className="w-full rounded-md border border-[#ccd7e6] p-2"
            >
              <option>---</option>
              <option value="">Audi A1</option>
              <option value="">BMW 320</option>
              <option value="">Mercedes-Benz GLK</option>
              <option value="">Toyota Camry</option>
              <option value="">Volkswagen Golf</option>
              <option value="">Volkswagen Passat CC</option>
            </select>
          </div>
        </div>
      </div>

      {/* Pick-up location */}
      <div className="rounded-md">
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <div>
              <img alt="icon" src={location} className="w-6"></img>
            </div>
            <div>
              <label
                htmlFor={pickLocationId}
                className="flex whitespace-nowrap py-3 text-lg font-medium"
              >
                Pick-up location<span className="text-orange">*</span>
              </label>
            </div>
          </div>
          <div>
            <select
              id={pickLocationId}
              name="pickLocation"
              className="w-full rounded-md border border-[#ccd7e6] p-2"
            >
              <option value="">Audi A1</option>
            </select>
          </div>
        </div>
      </div>

      {/* Drop-off location */}
      <div className="rounded-md">
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <div>
              <img alt="icon" src={location} className="w-6"></img>
            </div>
            <div>
              <label
                htmlFor={dropLocationId}
                className="flex whitespace-nowrap py-3 text-lg font-medium"
              >
                Drop-off location<span className="text-orange">*</span>
              </label>
            </div>
          </div>
          <div>
            <select
              id={dropLocationId}
              name="dropLocation"
              className="w-full rounded-md border border-[#ccd7e6] p-2"
            >
              <option value="">Audi A1</option>
            </select>
          </div>
        </div>
      </div>
      {/* Pick-up date */}
      <div className="rounded-md">
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <div>
              <img alt="icon" src={calendar} className="w-6"></img>
            </div>
            <div>
              <label
                htmlFor={pickDateId}
                className="flex whitespace-nowrap py-3 text-lg font-medium"
              >
                Pick-up date<span className="text-orange">*</span>
              </label>
            </div>
          </div>
          <div>
            <input
              id={pickDateId}
              type="date"
              name="pickDate"
              className="w-full rounded-md border border-[#ccd7e6] px-2 py-[5.5px]"
            ></input>
          </div>
        </div>
      </div>

      {/* Drop-off date */}
      <div className="rounded-md">
        <div className="flex flex-col">
          <div className="flex items-center gap-2">
            <div>
              <img alt="icon" src={calendar} className="w-6"></img>
            </div>
            <div>
              <label
                htmlFor={dropDateId}
                className="flex whitespace-nowrap py-3 text-lg font-medium"
              >
                Drop-off date<span className="text-orange">*</span>
              </label>
            </div>
          </div>
          <div>
            <input
              id={dropDateId}
              type="date"
              name="dropDate"
              className="w-full rounded-md border border-[#ccd7e6] px-2 py-[5.5px]"
            ></input>
          </div>
        </div>
      </div>
      {/* Submit button */}
      <div className="mt-5 flex items-end">
        <button
          type="submit"
          className="h-10 w-full rounded bg-orange font-medium text-white shadow-lg shadow-orangeShadow transition-all duration-300 ease-in-out hover:opacity-80"
        >
          Search
        </button>
      </div>
    </form>
  );
};

export default Form;
