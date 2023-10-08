import icon1 from "../images/plan/icon1.png";
import icon2 from "../images/plan/icon2.png";
import icon3 from "../images/plan/icon3.png";
import PlanSection from "./PlanSection";

export const Plan = () => {
	return (
		<div className='bg-gray4 py-10 flex flex-col items-center'>
			<div className="container">
			<div className='text-center font-bold'>
				<h3 className='text-2xl'>Plan your trip now</h3>
				<h2 className='text-5xl pt-5 pb-10'>Quick & easy car rental</h2>
			</div>
			<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 px-5 py-5'>
				<PlanSection picture={icon1} header="Select Car" paragraph="We offers a big range of vehicles for all your driving needs. We have the perfect car to meet your needs"/>
				<PlanSection picture={icon2} header="Contact Operator" paragraph="Our knowledgeable and friendly operators are always ready to help with any questions or concerns"/>
				<PlanSection picture={icon3} header="Let's drive" paragraph="Whether you're hitting the open road, we've got you covered with our wide range of cars"/>
			</div>
			</div>
			
		</div>
	);
};
