const Faq = () => {
  return (
    <div className="bg-faq bg-left-bottom bg-no-repeat mb-20">
      <div className="container py-20">
        <div className="z-10 text-center">
          <h3 className="text-2xl font-semibold">FAQ</h3>
          <h2 className="py-5 text-5xl font-semibold">
            Frequently Asked Questions
          </h2>
          <p className="py-3 text-gray2">
            Frequently Asked Questions about the car rental booking process on
            our website: Answers to common concerns and inquiries.
          </p>
        </div>
        <div className="mx-auto w-full lg:max-w-[50rem]">
          <div className="flex flex-col p-5">
            <div className="flex cursor-pointer items-center justify-between gap-5 bg-white p-5">
              <div className="text-lg font-medium text-black">
                1. What is special about comparing rental car deals?
              </div>
              <div className="w-6">
                <svg
                  className="text-black"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M6 9l6 6l6 -6"></path>
                </svg>
              </div>
            </div>

            <div className="cursor-pointer bg-white p-5 text-gray2">
              Comparing rental car deals is important as it helps find the best
              deal that fits your budget and requirements, ensuring you get the
              most value for your money. By comparing various options, you can
              find deals that offer lower prices, additional services, or better
              car models. You can find car rental deals by researching online
              and comparing prices from different rental companies.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
