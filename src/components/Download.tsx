import google from "../images/download/google.png";
import appstore from "../images/download/appstore.png";

const Download = () => {
  return (
    <div className="bg-gray4 bg-top bg-no-repeat lg:bg-download ">
      <div className="container py-20">
        <div className="text-center lg:max-w-[43rem] lg:text-left">
          <h2 className="py-5 text-5xl font-semibold">
            Download our <span className="text-orange">App</span> to get most
            out of it
          </h2>
          <p className="py-3 text-gray2">
            Have you ever dreamed of spontaneous trips, exploring new places,
            and enjoying complete independence? Now you can have it all at your
            fingertips with our new car rental app!
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-3 p-5 xs:flex-row lg:justify-start lg:pl-0">
          <div className="w-52 cursor-pointer shadow-xl transition-all hover:opacity-80">
            <img src={google} alt="google play" />
          </div>
          <div className="w-52 cursor-pointer shadow-xl transition-all hover:opacity-80">
            <img src={appstore} alt="app store" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Download;
