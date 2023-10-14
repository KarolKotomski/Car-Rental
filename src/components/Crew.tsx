import CrewMember from "./CrewMember";
import photography from "../images/team/2.png";

const Crew = () => {
  return (
    <div className="container grid w-fit grid-cols-1 py-20 md:grid-cols-2 xl:grid-cols-3">
      <CrewMember
        photo={photography}
        name="Michael Diaz"
        position="Business Owner"
      />
      <CrewMember
        photo={photography}
        name="Michael Diaz"
        position="Business Owner"
      />
      <CrewMember
        photo={photography}
        name="Michael Diaz"
        position="Business Owner"
      />
      <CrewMember
        photo={photography}
        name="Michael Diaz"
        position="Business Owner"
      />
      <CrewMember
        photo={photography}
        name="Michael Diaz"
        position="Business Owner"
      />
      <CrewMember
        photo={photography}
        name="Michael Diaz"
        position="Business Owner"
      />
    </div>
  );
};

export default Crew;
