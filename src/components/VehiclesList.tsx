import VehiclesModel from "./VehiclesModel";
import audi from "../images/cars-big/audi-box.png";

const VehiclesList = () => {
  return (
    <div className="container py-20">
      <div className="grid grid-cols-1 gap-10 p-5 sm:grid-cols-2 xl:grid-cols-3">
        <VehiclesModel
          image={audi}
          brand="Audi"
          model="A1"
          price="$45"
          door="2/3"
          transmission="manual"
          fuel="diesel"
          line="S-Line"
        />
        <VehiclesModel
          image={audi}
          brand="Audi"
          model="A1"
          price="$45"
          door="2/3"
          transmission="manual"
          fuel="diesel"
          line="S-Line"
        />
        <VehiclesModel
          image={audi}
          brand="Audi"
          model="A1"
          price="$45"
          door="2/3"
          transmission="manual"
          fuel="diesel"
          line="S-Line"
        />
        <VehiclesModel
          image={audi}
          brand="Audi"
          model="A1"
          price="$45"
          door="2/3"
          transmission="manual"
          fuel="diesel"
          line="S-Line"
        />
        <VehiclesModel
          image={audi}
          brand="Audi"
          model="A1"
          price="$45"
          door="2/3"
          transmission="manual"
          fuel="diesel"
          line="S-Line"
        />
        <VehiclesModel
          image={audi}
          brand="Audi"
          model="A1"
          price="$45"
          door="2/3"
          transmission="manual"
          fuel="diesel"
          line="S-Line"
        />
      </div>
    </div>
  );
};

export default VehiclesList;
