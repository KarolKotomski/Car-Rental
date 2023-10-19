import { useState } from "react";
import { faq } from "../data/AllData";

const Faq = () => {
  const [activeButtonId, setActiveButtonId] = useState(0);

  const handleButtonClick = (id: number) => {
    const selected = faq.find((item) => item.id === id);
    if (selected) {
      setActiveButtonId(id);
    }
  };

  return (
    <div className="mb-20 bg-faq bg-left-bottom bg-no-repeat">
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
          {faq.map((item, id) => (
            <div
              className="flex flex-col p-5"
              key={id}
              onClick={() => handleButtonClick(item.id)}
            >
              <div
                className={`flex cursor-pointer items-center justify-between gap-5 p-5 ${
                  activeButtonId === item.id ? "bg-orange text-white" : "bg-white"
                }`}
              >
                <div className="text-lg font-medium">
                  {item.id}. {item.question}
                </div>
                <div className="w-6">
                  <svg
                    className={`${
                      activeButtonId === item.id ? "text-white" : "text-black"
                    }`}
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
                {item.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
