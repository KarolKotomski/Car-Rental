import Hero from "../components/Hero";
import Booking from "../components/Booking";
import Plan from "../components/Plan";
import Banner1 from "../components/Banner1";
import Choose from "../components/Choose";
import Testimonials from "../components/Testimonials";
import Faq from "../components/Faq";
import Download from "../components/Download";
import Pick from "../components/Pick";

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
			<section>
				<Pick />
			</section>
			<section>
				<Banner1 />
			</section>
			<section>
				<Choose />
			</section>
			<section>
				<Testimonials />
			</section>
			<section>
				<Faq />
			</section>
			<section>
				<Download />
			</section>
		</>
	);
};

export default Home;
