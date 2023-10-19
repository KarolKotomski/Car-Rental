import checkmark from "../icons/checkmark.png";
import arrowRight from "../icons/arrow-right.png";
import heroCar from "../images/hero/main-car.png";
import heroBackground from "../images/hero/hero-bg.png";

const Hero = () => {
  return (
    <div className="bg-gray4">
      <div className="absolute right-0 top-0 z-10">
        <img src={heroBackground} alt="city skyscrapers" />
      </div>
      <div className="container flex pb-12 pt-40">
        <div className="z-30 flex flex-col items-center py-4 md:max-w-md md:items-start">
          <div className="flex flex-col items-center md:items-start">
            <h4 className="text-2xl font-bold">Plan your trip now</h4>
            <h1 className="pb-6 pt-2 text-center text-[3.25rem] font-extrabold leading-tight md:text-left">
              Save <span className="text-orange">big</span> with our car rental
            </h1>
            <p className="pb-10 text-center text-gray2 md:text-left">
              Rent the car of your dreams. Unbeatable prices, unlimited miles,
              flexible pick-up options and much more.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 font-medium xs:flex-nowrap">
            <button className="flex min-w-[163px] items-center gap-1 rounded bg-orange px-7 py-4 text-white transition-all duration-300 ease-in-out hover:opacity-80 shadow-lg shadow-orangeShadow">
              Book Ride
              <img className="w-6" src={checkmark} alt="check mark sign" />
            </button>
            <button className="flex min-w-[163px] items-center gap-1 rounded bg-black px-7 py-4 text-white transition-all duration-300 ease-in-out hover:opacity-80">
              Learn More
              <img className="w-4" src={arrowRight} alt="arrow right" />
            </button>
          </div>
        </div>
        <div className="z-20 hidden md:flex md:items-end">
          <img src={heroCar} alt="volkswagen car" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
