import carIcon from "../icons/car_icon.png";
import location from "../icons/location.png";
import calendar from "../icons/calendar.png";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { DevTool } from "@hookform/devtools";

const MIN_DATE = new Date();

const schema = yup.object({
  carType: yup.string().required("Car is required"),
  pickLocation: yup.string().required("Pick-up location is required"),
  dropLocation: yup.string().required("Drop-off location is required"),
  pickDate: yup
    .date()
    .min(
      MIN_DATE,
      `Pick-up date cannot be ${MIN_DATE?.toLocaleDateString()} or earlier`,
    )
    .typeError("Pick-up date is required")
    .required("Pick-up date is required"),
  dropDate: yup
    .date()
    .min(
      MIN_DATE,
      `Drop-off date cannot be ${MIN_DATE?.toLocaleDateString()} or earlier`,
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
    .typeError("Drop-off date is required")
    .required("Drop-off date is required"),
});

type FormValues = {
  carType: string;
  pickLocation: string;
  dropLocation: string;
  pickDate: Date;
  dropDate: Date;
};

const Form = () => {
  const form = useForm<FormValues>({
    resolver: yupResolver(schema),
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
                <option value="">Audi A1</option>
                <option value="">BMW 320</option>
                <option value="">Mercedes-Benz GLK</option>
                <option value="">Toyota Camry</option>
                <option value="">Volkswagen Golf</option>
                <option value="">Volkswagen Passat CC</option>
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
