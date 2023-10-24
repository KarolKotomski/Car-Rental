import carIcon from "../icons/car_icon.png";
import location from "../icons/location.png";
import calendar from "../icons/calendar.png";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { DevTool } from "@hookform/devtools";
import { locationOptions, vehicles } from "../data/AllData";

const today = new Date();

const schema = yup.object({
  carType: yup.string().required("field is required"),
  pickLocation: yup.string().required("field is required"),
  dropLocation: yup.string().required("field is required"),
  pickDate: yup
    .date()
    .min(
      today,
      `Pick-up date cannot be ${today?.toLocaleDateString()} or earlier`,
    )
    .required("field is required"),
  dropDate: yup
    .date()
    .min(
      today,
      `Drop-off date cannot be ${today?.toLocaleDateString()} or earlier`,
    )
    .when("pickDate", (pickDate, schema) => {
      return (
        pickDate &&
        schema.min(
          pickDate,
          "Drop-off date cannot be earlier than pick-up date",
        )
      );
    })
    .required("field is required"),
});

interface FormValues {
  carType: string;
  pickLocation: string;
  dropLocation: string;
  pickDate: Date;
  dropDate: Date;
}

const Form = () => {
  const form = useForm<FormValues>({
    resolver: yupResolver(schema),
    defaultValues: {
      carType: "",
      pickLocation: "",
      dropLocation: "",
      pickDate: today,
      dropDate: today,
    },
  });
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (data: FormValues) => {
    console.log("Form submitted", data);
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3"
      >
        {/* Car type */}
        <div className="rounded-md">
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <div>
                <img alt="icon" src={carIcon} className="w-6"></img>
              </div>
              <div>
                <label className="flex whitespace-nowrap py-3 text-lg font-medium">
                  Select your car<span className="text-orange">*</span>
                </label>
              </div>
            </div>
            <div>
              <select
                className="w-full rounded-md border border-[#ccd7e6] p-2"
                {...register("carType")}
              >
                <option value="">---</option>
                {vehicles.map((vehicle) => (
                  <option
                    key={vehicle.id}
                    value={`${vehicle.brand} ${vehicle.model}`}
                  >
                    {vehicle.brand} {vehicle.model}
                  </option>
                ))}
              </select>
            </div>
            <p className="mt-2 text-red-500">{errors.carType?.message}</p>
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
                <label className="flex whitespace-nowrap py-3 text-lg font-medium">
                  Pick-up location<span className="text-orange">*</span>
                </label>
              </div>
            </div>
            <div>
              <select
                className="w-full rounded-md border border-[#ccd7e6] p-2"
                {...register("pickLocation")}
              >
                <option value="">---</option>
                {locationOptions.map((location, index) => (
                  <option value={location} key={index}>
                    {location}
                  </option>
                ))}
              </select>
            </div>
            <p className="mt-2 text-red-500">{errors.pickLocation?.message}</p>
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
                <label className="flex whitespace-nowrap py-3 text-lg font-medium">
                  Drop-off location<span className="text-orange">*</span>
                </label>
              </div>
            </div>
            <div>
              <select
                className="w-full rounded-md border border-[#ccd7e6] p-2"
                {...register("dropLocation")}
              >
                <option value="">---</option>
                {locationOptions.map((location, index) => (
                  <option value={location} key={index}>
                    {location}
                  </option>
                ))}
              </select>
            </div>
            <p className="mt-2 text-red-500">{errors.dropLocation?.message}</p>
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
                <label className="flex whitespace-nowrap py-3 text-lg font-medium">
                  Pick-up date<span className="text-orange">*</span>
                </label>
              </div>
            </div>
            <div>
              <input
                type="date"
                className="w-full rounded-md border border-[#ccd7e6] px-2 py-[5.5px]"
                {...register("pickDate")}
              ></input>
            </div>
            <p className="mt-2 text-red-500">{errors.pickDate?.message}</p>
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
                <label className="flex whitespace-nowrap py-3 text-lg font-medium">
                  Drop-off date<span className="text-orange">*</span>
                </label>
              </div>
            </div>
            <div>
              <input
                type="date"
                className="w-full rounded-md border border-[#ccd7e6] px-2 py-[5.5px]"
                {...register("dropDate")}
              ></input>
            </div>
            <p className="mt-2 text-red-500">{errors.dropDate?.message}</p>
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
      <DevTool control={control} />
    </>
  );
};

export default Form;
