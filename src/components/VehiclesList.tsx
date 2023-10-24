import VehiclesModel from "./VehiclesModel";
import { vehicles } from "../data/AllData";

const VehiclesList = () => {
  return (
    <div className="container py-20">
      <div className="grid grid-cols-1 gap-10 p-5 md:grid-cols-2 xl:grid-cols-3">
        {vehicles.map((vehicle) => (
          <VehiclesModel
            image={vehicle.image1}
            brand={vehicle.brand}
            model={vehicle.model}
            price={vehicle.cost}
            door={vehicle.doors}
            transmission={vehicle.transmission}
            fuel={vehicle.fuel}
            line={vehicle.line}
            key={vehicle.id}
          />
        ))}
      </div>
    </div>
  );
};

export default VehiclesList;
