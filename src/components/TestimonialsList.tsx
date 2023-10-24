import TestimonialsPost from "./TestimonialsPost";
import { testimonials } from "../data/AllData";

const TestimonialsList = () => {
  return (
    <div className="bg-gray4">
      <div className="container py-20">
        <div className="text-center">
          <h3 className="text-2xl font-semibold">Reviewed by People</h3>
          <h2 className="py-5 text-5xl font-semibold">Client's Testimonials</h2>
          <p className="py-3 text-gray2">
            Discover the positive impact we've made on the our clients by
            reading through their testimonials. Our clients have experienced our
            service and results, and they're eager to share their positive
            experiences with you.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center gap-10 py-10 lg:flex-row">
          {testimonials.map((testimonial) => (
            <TestimonialsPost
              author={testimonial.author}
              opinion={testimonial.opinion}
              picture={testimonial.picture}
              place={testimonial.place}
              key={testimonial.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TestimonialsList;
