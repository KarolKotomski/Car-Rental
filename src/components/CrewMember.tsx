interface Props {
  image: string;
  name: string;
  position: string;
}

const CrewMember = ({ image, name, position }: Props) => {
  return (
    <div className="flex flex-col items-center p-5 text-center">
      <div className="bg-gray3">
        <img src={image} alt="person photography" />
      </div>
      <div className="flex flex-col p-5">
        <div className="text-2xl font-semibold">{name}</div>
        <div className="text-gray2">{position}</div>
      </div>
    </div>
  );
};

export default CrewMember;
