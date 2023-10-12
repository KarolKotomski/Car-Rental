import johnDoe from "../images/team/5.png";
import janeDoe from "../images/team/6.png";
import TestimonialsPost from "./TestimonialsPost";

const Testimonials = () => {
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
        <div className="flex flex-col items-center justify-center gap-10 lg:flex-row lg:p-10">
          <TestimonialsPost
            opinion='"We rented a car from this website and had an amazing experience!
							The booking was easy and the rental rates were very affordable."'
            picture={johnDoe}
            name="John Doe"
            city="Warsaw, Poland"
          />
          <TestimonialsPost
            opinion='"The car was in great condition and made our trip even better. Highly recommend for this car rental website!"'
            picture={janeDoe}
            name="Jane Doe"
            city="Cracow, Poland"
          />
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
