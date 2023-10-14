const Banner2 = () => {
  return (
    <div className=" bg-gray bg-banner bg-cover bg-bottom bg-no-repeat bg-blend-overlay">
      <div className="container py-[4rem] text-center text-white">
        <div className="flex flex-col gap-5">
          <div>
            <h2 className="text-5xl font-bold">
              Book a car by getting in touch with us
            </h2>
          </div>

          <div className="flex items-center justify-center gap-3 whitespace-nowrap text-3xl font-medium text-orange">
            <div className="w-10">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
              </svg>
            </div>
            <div>(123)-456-789</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner2;
