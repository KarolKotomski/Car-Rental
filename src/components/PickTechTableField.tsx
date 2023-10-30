interface Props {
  label: string;
  value: string;
}

const PickTechTableField = ({ label, value }: Props) => {
  return (
    <div className="flex border-x-2 border-b-2 border-gray2 px-1 py-2 text-center">
      <div className="w-1/2 border-r-2 border-gray2">{label}:</div>
      <div className="w-1/2">{value}</div>
    </div>
  );
};

export default PickTechTableField;
