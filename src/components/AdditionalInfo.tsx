const AdditionalInfo = () => {
  return (
    <div className="container py-20">
      <div className="bg-contact grid grid-cols-1 gap-16 bg-center bg-no-repeat sm:grid-cols-2">
        <div className="flex flex-col items-center gap-8 sm:items-start ">
          <div className="flex max-w-lg flex-col gap-8 text-center sm:text-start">
            <h2 className="text-4xl font-semibold sm:text-5xl">
              Need additional information?
            </h2>
            <p className="text-gray2">
              A multifaceted professional skilled in multiple fields of
              research, development as well as a learning specialist. Over 15
              years of experience.
            </p>
          </div>
          <div className="flex flex-col items-start gap-5">
            <a
              href="tel:123-456-789"
              className="transition-all hover:text-orange"
            >
              <div className="flex w-fit justify-center gap-2">
                <div className="w-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 4h4l2 5l-2.5 1.5a11 11 0 0 0 5 5l1.5 -2.5l5 2v4a2 2 0 0 1 -2 2a16 16 0 0 1 -15 -15a2 2 0 0 1 2 -2"></path>
                    <path d="M15 7a2 2 0 0 1 2 2"></path>
                    <path d="M15 3a6 6 0 0 1 6 6"></path>
                  </svg>
                </div>

                <div>
                  <p className="font-medium">(123)-456-789</p>
                </div>
              </div>
            </a>

            <a
              href="mailto:email@example.com"
              className="transition-all hover:text-orange"
            >
              <div className="flex justify-center gap-2">
                <div className="w-6">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z"></path>
                    <path d="M3 7l9 6l9 -6"></path>
                  </svg>
                </div>
                <div>
                  <p className="font-medium ">email@example.com</p>
                </div>
              </div>
            </a>

            <div className="flex cursor-pointer justify-center gap-2 transition-all hover:text-orange">
              <div className="w-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 3l-6.5 18a.55 .55 0 0 1 -1 0l-3.5 -7l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5"></path>
                </svg>
              </div>
              <div>
                <p className="font-medium ">Warsaw, Poland</p>
              </div>
            </div>
          </div>
        </div>
        <form className="flex flex-col gap-8 text-lg">
          <div className="flex flex-col gap-2">
            <label className="font-medium">
              Full Name<span className="text-orange">*</span>
            </label>
            <input
              type="text"
              className="w-full bg-gray3 px-5 py-2"
              placeholder="e.g: John Doe"
              minLength={3}
              maxLength={30}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-medium">
              Email<span className="text-orange">*</span>
            </label>
            <input
              type="text"
              className="w-full bg-gray3 px-5 py-2"
              placeholder="your@email.com"
              minLength={3}
              maxLength={40}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className="font-medium">
              Tell us about it<span className="text-orange">*</span>
            </label>
            <textarea
              className="h-36 w-full resize-none bg-gray3 px-5 py-2"
              placeholder="write here.."
              minLength={3}
              maxLength={250}
            ></textarea>
          </div>
          <button className="flex justify-center gap-2 rounded bg-orange px-7 py-4 font-medium text-white transition-all hover:opacity-80">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M3 9l9 6l9 -6l-9 -6l-9 6"></path>
              <path d="M21 9v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10"></path>
              <path d="M3 19l6 -6"></path>
              <path d="M15 13l6 6"></path>
            </svg>
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default AdditionalInfo;