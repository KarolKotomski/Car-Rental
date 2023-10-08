import Hero from "../components/Hero";
import Booking from "../components/Booking";
import { Plan } from "../components/Plan";

const Home = () => {
	return (
		<>
			<section>
				<Hero />
			</section>
			<section>
				<Booking />
			</section>
			<section>
				<Plan />
			</section>
			<section>Pick</section>
			<section>Plan</section>
			<section>Banner</section>
			<section>Choose</section>
			<section>Testimonials</section>
			<section>Faq</section>
			<section>Download</section>
		</>
	);
};

export default Home;
