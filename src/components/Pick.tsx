import carPicture from "../images/cars-big/audia1.jpg";

const Pick = () => {
  return (
    <div>
      <div className="container py-20">
        <div className="text-center">
          <h3 className="text-2xl font-semibold">Vehicle models</h3>
          <h2 className="py-5 text-5xl font-semibold">Our rental fleet</h2>
          <p className="py-3 text-gray2">
            Choose from a variety of our amazing vehicles to rent for your next
            adventure or business trip.
          </p>
        </div>

        <div className="pt-10 lg:grid lg:grid-cols-4">
          <div className="flex flex-col gap-3">
            <button className="bg-gray3 px-6 py-4 text-left text-xl font-medium">
              Audi A1 S-Line
            </button>
            <button className="bg-gray3 px-6 py-4 text-left text-xl font-medium">
              Audi A1 S-Line
            </button>
            <button className="bg-gray3 px-6 py-4 text-left text-xl font-medium">
              Audi A1 S-Line
            </button>
            <button className="bg-gray3 px-6 py-4 text-left text-xl font-medium">
              Audi A1 S-Line
            </button>
            <button className="bg-gray3 px-6 py-4 text-left text-xl font-medium">
              Audi A1 S-Line
            </button>
            <button className="bg-gray3 px-6 py-4 text-left text-xl font-medium">
              Audi A1 S-Line
            </button>
          </div>

          <div className="flex flex-col items-center gap-5 py-10 md:flex-row lg:col-span-3 lg:justify-end lg:gap-0">
            <div className="flex justify-center px-5 lg:w-full xl:h-full">
              <img src={carPicture} alt="selected car" />
            </div>

            <div className="flex min-w-[250px] flex-col">
              <div className="bg-orange px-4 py-1 text-center text-lg text-white">
                <span className="text-2xl font-medium">$45</span> / day
              </div>
              <div className="flex border-x-2 border-b-2 border-gray2 px-1 py-2 text-center">
                <div className="w-1/2 border-r-2 border-gray2">Brand:</div>
                <div className="w-1/2">Audi</div>
              </div>
              <div className="flex border-x-2 border-b-2 border-gray2 px-1 py-2 text-center">
                <div className="w-1/2 border-r-2 border-gray2">Brand:</div>
                <div className="w-1/2">Audi</div>
              </div>
              <div className="flex border-x-2 border-b-2 border-gray2 px-1 py-2 text-center">
                <div className="w-1/2 border-r-2 border-gray2">Brand:</div>
                <div className="w-1/2">Audi</div>
              </div>
              <div className="flex border-x-2 border-b-2 border-gray2 px-1 py-2 text-center">
                <div className="w-1/2 border-r-2 border-gray2">Brand:</div>
                <div className="w-1/2">Audi</div>
              </div>
              <div className="flex border-x-2 border-b-2 border-gray2 px-1 py-2 text-center">
                <div className="w-1/2 border-r-2 border-gray2">Brand:</div>
                <div className="w-1/2">Audi</div>
              </div>
              <div className="flex border-x-2 border-b-2 border-gray2 px-1 py-2 text-center">
                <div className="w-1/2 border-r-2 border-gray2">Brand:</div>
                <div className="w-1/2">Audi</div>
              </div>
              <div className="flex border-x-2 border-b-2 border-gray2 px-1 py-2 text-center">
                <div className="w-1/2 border-r-2 border-gray2">Brand:</div>
                <div className="w-1/2">Audi</div>
              </div>
              <button className="mt-5 rounded bg-orange px-4 py-2 text-xl text-white transition-all hover:opacity-80">
                Book now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pick;
