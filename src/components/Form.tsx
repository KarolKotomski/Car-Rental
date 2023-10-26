import carIcon from "../icons/car_icon.png";
import locationIcon from "../icons/location.png";
import calendarIcon from "../icons/calendar.png";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { DevTool } from "@hookform/devtools";
import { locations, vehicles } from "../data/AllData";
import { schema } from "../validations/FormValidation";
import FormField from "./FormField";

interface FormValues {
  carType: string;
  pickLocation: string;
  dropLocation: string;
  pickDate: string;
  dropDate: string;
}

interface FormProps {
  onFormSubmit: () => void;
}

const Form = ({onFormSubmit}: FormProps) => {
  
  /*Form management and resolving */

  const form = useForm<FormValues>({
    resolver: yupResolver(schema),
  });
  const { register, control, handleSubmit, formState } = form;
  const { errors } = formState;

  const onSubmit = (data: FormValues) => {
    console.log("Form submitted", data);
    onFormSubmit();
  };

  /* Car type */
  const vehiclesOptions = () =>
    vehicles.map((vehicle) => (
      <option key={vehicle.id} value={`${vehicle.brand} ${vehicle.model}`}>
        {vehicle.brand} {vehicle.model}
      </option>
    ));
  const carTypeErrorMessage = errors.carType?.message;

  /* Pick-up location */
  const locationOptions = () =>
    locations.map((location, index) => (
      <option value={location} key={index}>
        {location}
      </option>
    ));
  const pickLocationErrorMessage = errors.pickLocation?.message;

  /* Drop-off location */
  const dropLocationErrorMessage = errors.dropLocation?.message;

  /* Pick-up date */
  const pickDateErrorMessage = errors.pickDate?.message;

  /* Drop-off date */
  const dropDateErrorMessage = errors.dropDate?.message;

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3"
      >
        {/* Car type */}
        <FormField
          icon={carIcon}
          label="Your car"
          register={register("carType")}
          options={vehiclesOptions()}
          errors={carTypeErrorMessage}
        />

        {/* Pick-up location */}
        <FormField
          icon={locationIcon}
          label="Pick-up location"
          register={register("pickLocation")}
          options={locationOptions()}
          errors={pickLocationErrorMessage}
        />

        {/* Drop-off location */}
        <FormField
          icon={locationIcon}
          label="Drop-off location"
          register={register("dropLocation")}
          options={locationOptions()}
          errors={dropLocationErrorMessage}
        />
        {/* Pick-up date */}
        <FormField
          icon={calendarIcon}
          label="Pick-up date"
          register={register("pickDate")}
          errors={pickDateErrorMessage}
          date={true}
        />

        {/* Drop-off date */}
        <FormField
          icon={calendarIcon}
          label="Drop-off date"
          register={register("dropDate")}
          errors={dropDateErrorMessage}
          date={true}
        />

        {/* Submit button */}
        <div className="sm:mt-[52px]">
          <button
            type="submit"
            className="h-10 w-full rounded bg-orange font-medium text-white shadow-lg shadow-orangeShadow transition-all duration-300 ease-in-out hover:opacity-80"
          >
            Search
          </button>
        </div>
      </form>

      {/* Additional devtool for form state management */}
      <DevTool control={control} />
    </>
  );
};

export default Form;
