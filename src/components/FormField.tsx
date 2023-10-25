interface Props {
  icon: string;
  label: string;
  register: object;
  options?: JSX.Element[];
  errors: string | undefined;
  date?: boolean | undefined;
}

const FormField = ({
  icon,
  label,
  register,
  options,
  errors,
  date = false,
}: Props) => {
  return (
    <div className="rounded-md">
      <div className="flex flex-col">
        <div className="flex items-center gap-2">
          <div>
            <img alt="icon" src={icon} className="w-6"></img>
          </div>
          <div>
            <label className="flex whitespace-nowrap py-3 text-lg font-medium">
              {label}
              <span className="text-orange">*</span>
            </label>
          </div>
        </div>
        <div>
          {date === false ? (
            <select
              className="w-full rounded-md border border-[#ccd7e6] p-2"
              {...register}
            >
              <option value="">---</option>
              {options}
            </select>
          ) : (
            <input
              type="date"
              className="w-full rounded-md border border-[#ccd7e6] px-2 py-[5.5px]"
              {...register}
            ></input>
          )}
        </div>
        <p className="mt-2 text-red-500">{errors}</p>
      </div>
    </div>
  );
};

export default FormField;
