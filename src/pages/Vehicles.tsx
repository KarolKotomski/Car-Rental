import Banner2 from "../components/Banner2";
import Header from "../components/Header";
import VehiclesList from "../components/VehiclesList";

const Vehicles = () => {
  return (
    <section>
      <Header name="About" />
      <VehiclesList />
      <Banner2 />
    </section>
  );
};

export default Vehicles;
