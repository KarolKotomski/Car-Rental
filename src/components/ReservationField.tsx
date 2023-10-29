interface Props {
  label: string;
  type: 'text' | 'number' | 'email';
  placeholder: string;
  minLength?: number;
  maxLength?: number;
}

const ReservationField = ({ label, type, placeholder, minLength, maxLength }: Props) => {
  return (
    <div>
      <h6 className="mb-1 font-medium">{label}</h6>
      <input
        type={type}
        className="w-full bg-gray3 p-2 text-sm text-gray2"
        placeholder={placeholder}
        minLength={minLength}
        maxLength={maxLength}
      />
    </div>
  );
};

export default ReservationField;
