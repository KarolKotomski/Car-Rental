interface Props {
  image: string;
  brand: string;
  model: string;
  price: string;
  door: string;
  transmission: string;
  fuel: string;
  line: string;
}

const VehiclesModel = ({
  image,
  brand,
  model,
  price,
  door,
  transmission,
  fuel,
  line,
}: Props) => {
  return (
    <div className="flex flex-col border border-[#d5d5d5]">
      <div className="h-1/2">
        <img className="object-cover h-full w-full" src={image} alt="car" />
      </div>
      <div className="flex flex-col gap-6 px-7 py-5">
        <div className="flex justify-between">
          <div className="flex flex-col justify-between">
            <p className="text-2xl font-medium">
              {brand} {model}
            </p>
            <div className="flex pb-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z"></path>
              </svg>
            </div>
          </div>

          <div>
            <p className="text-2xl font-medium">{price}</p>
            <p>per day</p>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-3">
          <div>
            Line: <span className="font-medium">"{line}"</span>
          </div>
          <div>
            Doors: <span className="font-medium">"{door}"</span>
          </div>
          <div>
            Transmission: <span className="font-medium">"{transmission}"</span>
          </div>
          <div>
            Fuel: <span className="font-medium">"{fuel}"</span>
          </div>
        </div>

        <div className="mx-auto w-full border-t border-t-[#d5d5d5] pt-5">
          <button className="w-full rounded bg-orange px-7 py-4 font-medium text-white transition-all hover:opacity-80 shadow-lg shadow-orangeShadow">
            Book Ride
          </button>
        </div>
      </div>
    </div>
  );
};

export default VehiclesModel;
