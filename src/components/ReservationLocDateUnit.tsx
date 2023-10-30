interface Props {
  image: string;
  label: string;
  date?: string;
  type?: string;
  location?: string;
}

const ReservationLocDateUnit = ({
  image,
  label,
  date,
  type,
  location,
}: Props) => {
  return (
    <div className="flex flex-col items-center gap-3 md:flex-row lg:flex-col">
      <div className="flex gap-3">
        <img src={image} alt="icon" className="w-6 h-6" />
        <h6 className="font-semibold">{label}</h6>
      </div>
      <div className="flex items-center gap-2">
        {date ? (
          <>
            <p>{date} /</p>
            <input className="border" type={type} />
          </>
        ) : (
          <p>{location}</p>
        )}
      </div>
    </div>
  );
};

export default ReservationLocDateUnit;
