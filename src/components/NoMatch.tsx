import { Link } from "react-router-dom";
import heroBackground from "../images/hero/hero-bg.png";

const NoMatch = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-10 pb-24 pt-40">
      <div className="absolute right-0 top-0 -z-10">
        <img src={heroBackground} alt="city skyscrapers" />
      </div>
      <div className="text-center">
        <div className="pb-5 text-3xl md:text-4xl">Page Not Found</div>
        <p className="text-xl md:text-2xl">error code: 404</p>
      </div>
      <div>
        <Link to="/">
          <button className="rounded bg-orange px-7 py-4 font-medium text-white transition-all hover:opacity-80">
            Back to Home
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NoMatch;
