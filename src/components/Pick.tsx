import { vehicles } from "../data/AllData";
import { useState } from "react";

const Pick = () => {
  const [selectedVehicle, setSelectedVehicle] = useState(vehicles[0]);
  const [activeButtonId, setActiveButtonId] = useState(vehicles[0].id);

  const handleButtonClick = (id: number) => {
    const selected = vehicles.find((vehicle) => vehicle.id === id);
    if (selected) {
      setSelectedVehicle(selected);
      setActiveButtonId(id);
    }
  };
  return (
    <div>
      <div className="container py-20">
        <div className="text-center">
          <h3 className="text-2xl font-semibold">Vehicle models</h3>
          <h2 className="py-5 text-5xl font-semibold">Our rental fleet</h2>
          <p className="py-3 text-gray2">
            Choose from a variety of our amazing vehicles to rent for your next
            adventure or business trip.
          </p>
        </div>

        <div className="pt-10 lg:flex">
          <div className="flex flex-col justify-between gap-3">
            {vehicles.map((vehicle, index) => (
              <button
                className={`whitespace-nowrap px-6 py-4 text-left text-xl font-medium hover:bg-orange hover:text-white ${
                  activeButtonId === vehicle.id
                    ? "bg-orange text-white"
                    : "bg-gray3"
                }`}
                key={index}
                onClick={() => handleButtonClick(vehicle.id)}
              >
                {vehicle.brand} {vehicle.model}{" "}
                {vehicle.line ? vehicle.line : ""}
              </button>
            ))}
          </div>

          <div className="flex flex-col items-center gap-5 py-10 md:w-full md:flex-row md:justify-between lg:justify-end lg:gap-0 lg:py-0">
            <div className="flex justify-center px-5 lg:w-full lg:px-10 2xl:px-16">
              <img src={selectedVehicle.image2} alt="selected car" />
            </div>

            <div className="flex min-w-[250px] flex-col">
              <div className="bg-orange px-4 py-1 text-center text-lg text-white">
                <span className="text-2xl font-medium">
                  {selectedVehicle.cost}
                </span>
                / day
              </div>
              <div className="flex border-x-2 border-b-2 border-gray2 px-1 py-2 text-center">
                <div className="w-1/2 border-r-2 border-gray2">Brand:</div>
                <div className="w-1/2">{selectedVehicle.brand}</div>
              </div>
              <div className="flex border-x-2 border-b-2 border-gray2 px-1 py-2 text-center">
                <div className="w-1/2 border-r-2 border-gray2">Model:</div>
                <div className="w-1/2">{selectedVehicle.model}</div>
              </div>
              <div className="flex border-x-2 border-b-2 border-gray2 px-1 py-2 text-center">
                <div className="w-1/2 border-r-2 border-gray2">Year:</div>
                <div className="w-1/2">{selectedVehicle.year}</div>
              </div>
              <div className="flex border-x-2 border-b-2 border-gray2 px-1 py-2 text-center">
                <div className="w-1/2 border-r-2 border-gray2">Doors:</div>
                <div className="w-1/2">{selectedVehicle.doors}</div>
              </div>
              <div className="flex border-x-2 border-b-2 border-gray2 px-1 py-2 text-center">
                <div className="w-1/2 border-r-2 border-gray2">AC:</div>
                <div className="w-1/2">{selectedVehicle.ac}</div>
              </div>
              <div className="flex border-x-2 border-b-2 border-gray2 px-1 py-2 text-center">
                <div className="w-1/2 border-r-2 border-gray2">
                  Transmission:
                </div>
                <div className="w-1/2">{selectedVehicle.transmission}</div>
              </div>
              <div className="flex border-x-2 border-b-2 border-gray2 px-1 py-2 text-center">
                <div className="w-1/2 border-r-2 border-gray2">Fuel:</div>
                <div className="w-1/2">{selectedVehicle.fuel}</div>
              </div>
              <button className="mt-5 rounded bg-orange px-4 py-2 text-xl text-white shadow-lg shadow-orangeShadow transition-all hover:opacity-80">
                Book now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pick;
