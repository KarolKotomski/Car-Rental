import PickTechTableField from "./PickTechTableField";

interface Props {
  cost: string;
  brand: string;
  model: string;
  year: string;
  doors: string;
  ac: string;
  transmission: string;
  fuel: string;
}

const PickTechTable = ({
  cost,
  brand,
  model,
  year,
  doors,
  ac,
  transmission,
  fuel,
}: Props) => {
  return (
    <div className="flex min-w-[250px] flex-col">
      <div className="bg-orange px-4 py-1 text-center text-lg text-white">
        <span className="text-2xl font-medium">{cost}</span>/ day
      </div>
      <PickTechTableField label="Brand" value={brand} />
      <PickTechTableField label="Model" value={model} />
      <PickTechTableField label="Year" value={year} />
      <PickTechTableField label="Doors" value={doors} />
      <PickTechTableField label="AC" value={ac} />
      <PickTechTableField label="Transmission" value={transmission} />
      <PickTechTableField label="Fuel" value={fuel} />

      <a href="#booking-section">
        <button className="mt-5 w-full rounded bg-orange px-4 py-2 text-xl text-white shadow-lg shadow-orangeShadow transition-all duration-300 hover:opacity-80">
          Book now
        </button>
      </a>
    </div>
  );
};

export default PickTechTable;
