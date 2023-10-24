interface Props {
  author: string;
  opinion: string;
  picture: string;
  place: string;
}

const TestimonialsPost = ({ author, opinion, picture, place }: Props) => {
  return (
    <div className="flex min-h-[22rem] w-full flex-col bg-white p-4 shadow-lg sm:p-10">
      <div className="flex pb-5">
        <div className="flex items-end">
          <div className="mr-5 w-24">
            <img src={picture} alt="Customer" />
          </div>
          <div>
            <p className="text-lg font-semibold">{author}</p>
            <p>{place}</p>
          </div>
        </div>
        <div className="ml-auto pb-2">
          <svg
            className="w-14 fill-none stroke-orange"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M10 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"></path>
            <path d="M19 11h-4a1 1 0 0 1 -1 -1v-3a1 1 0 0 1 1 -1h3a1 1 0 0 1 1 1v6c0 2.667 -1.333 4.333 -4 5"></path>
          </svg>
        </div>
      </div>

      <div>
        <p className="pb-5 text-xl font-medium">{opinion}</p>
      </div>
    </div>
  );
};

export default TestimonialsPost;
