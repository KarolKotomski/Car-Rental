import VehiclesModel from "./VehiclesModel";
import audi from "../images/cars-big/audi-box.png";
import { vehicles } from "../data/AllData";

const VehiclesList = () => {
  return (
    <div className="container py-20">
      <div className="grid grid-cols-1 gap-10 p-5 sm:grid-cols-2 xl:grid-cols-3">
        {vehicles.map((car) => (
          <VehiclesModel
            image={car.image1}
            brand={car.brand}
            model={car.model}
            price={car.cost}
            door={car.doors}
            transmission={car.transmission}
            fuel={car.fuel}
            line={car.fuel}
          />
        ))}
      </div>
    </div>
  );
};

export default VehiclesList;
