import { Vehicle } from "./Booking";

interface Props {
  icon: string;
  label: string;
  options?: string[] | Vehicle[];
}

const BookingUnit = ({ icon, label, options }: Props) => {
  return (
    <div className="rounded-md p-3">
      <form className="flex flex-col">
        <div className="flex items-center gap-2">
          <div className="w-6">
            <img alt="icon" src={icon}></img>
          </div>
          <div>
            <label className="flex whitespace-nowrap py-3 text-lg font-medium">
              {label}
              <span className="text-orange">*</span>
            </label>
          </div>
        </div>
        <div>
          <select
            className="w-full rounded-md border border-[#ccd7e6] p-2"
            name="car_model"
            id="car_model"
          >
            {Array.isArray(options) &&
              options.map((option, index) => {
                if (typeof option === "string") {
                  return (
                    <option key={index} value={option}>
                      {option}
                    </option>
                  );
                } else {
                  return (
                    <option
                      key={index}
                      value={`${option.brand} ${option.model}`}
                    >
                      {option.brand} {option.model}
                    </option>
                  );
                }
              })}
          </select>
        </div>
      </form>
    </div>
  );
};

export default BookingUnit;
