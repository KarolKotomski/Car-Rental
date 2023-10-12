import icon1 from "../images/plan/icon1.png";
import icon2 from "../images/plan/icon2.png";
import icon3 from "../images/plan/icon3.png";
import PlanUnit from "./PlanUnit";

const Plan = () => {
  return (
    <div className="flex flex-col items-center bg-gray4 py-20">
      <div className="container">
        <div className="text-center font-semibold">
          <h3 className="text-2xl">Plan your trip now</h3>
          <h2 className="py-5 text-5xl">Quick & easy car rental</h2>
        </div>
        <div className="grid grid-cols-1 gap-5 px-5 py-5 sm:grid-cols-2 md:grid-cols-3">
          <PlanUnit
            picture={icon1}
            header="Select Car"
            paragraph="We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs"
          />
          <PlanUnit
            picture={icon2}
            header="Contact Operator"
            paragraph="Our knowledgeable and friendly operators are always ready to help with any questions or concerns"
          />
          <PlanUnit
            picture={icon3}
            header="Let's drive"
            paragraph="Whether you're hitting the open road, we've got you covered with our wide range of cars"
          />
        </div>
      </div>
    </div>
  );
};

export default Plan;
