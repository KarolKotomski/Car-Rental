interface Props {
  name: string;
}

const Header = ({ name }: Props) => {
  return (
    <div className="flex h-96 items-center bg-[hsla(0,0%,100%,.92)] bg-header bg-cover bg-right-top bg-blend-overlay">
      <div className="container">
        <h3 className="text-4xl font-bold pb-3">{name}</h3>
        <p className="font-semibold">Home / {name}</p>
      </div>
    </div>
  );
};

export default Header;
