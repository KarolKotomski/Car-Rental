import aboutPicture from "../images/about/about-main.jpg";
import icon1 from "../images/about/icon1.png";
import icon2 from "../images/about/icon2.png";
import icon3 from "../images/about/icon3.png";

const AboutCompany = () => {
  return (
    <div className="container flex flex-col gap-8 py-20 lg:flex-row max-w-[70rem]">
      <div className="flex justify-center flex-shrink-0 items-center">
        <img src={aboutPicture} alt="man showing a catalogue" />
      </div>
      <div className="flex flex-col text-center lg:text-start">
        <h4 className=" text-2xl font-semibold">About Company</h4>
        <h2 className="py-5 text-5xl font-semibold">
          You start the engine and your adventure begins
        </h2>
        <p className="py-3 text-gray2">
          Looking for the best low rate car finance? Forget searching for the
          best loan rate. Let our smart finance technology match you with the
          perfect lender and best personal rate in minutes.
        </p>
        <div className="flex flex-col justify-center gap-12 pt-6 xs:flex-row lg:justify-start">
          <div className="flex flex-col items-center gap-2">
            <img src={icon1} alt="car icon" />
            <p className="text-5xl font-bold">20</p>
            <p className="text-gray2">Car types</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <img src={icon2} alt="car garage icon" />
            <p className="text-5xl font-bold">85</p>
            <p className="text-gray2">Rental Outlets</p>
          </div>

          <div className="flex flex-col items-center gap-2">
            <img src={icon3} alt="car service icon" />
            <p className="text-5xl font-bold">75</p>
            <p className="text-gray2">Repair Shops</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;
