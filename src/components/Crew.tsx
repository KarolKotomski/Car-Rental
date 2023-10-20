import CrewMember from "./CrewMember";
import { people } from "../data/AllData";

const Crew = () => {
  return (
    <div className="container grid gap-10 w-fit grid-cols-1 py-20 md:grid-cols-2 xl:grid-cols-3">
      {people.map((person) => (
        <CrewMember
          image={person.image}
          name={person.name}
          position={person.position}
          key={person.id}
        />
      ))}
    </div>
  );
};

export default Crew;
