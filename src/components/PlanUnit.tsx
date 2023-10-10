interface Props {
	picture: string;
	header: string;
	paragraph: string;
}

const PlanUnit = ({ picture, header, paragraph }: Props) => {
	return (
		<>
			<div className='flex flex-col items-center justify-start px-6'>
				<div className="w-40 h-40 flex items-center">
					<img className="w-full h-full" src={picture} alt='service icon' />
				</div>
				<h3 className='text-2xl font-bold pb-2 text-center'>{header}</h3>
				<p className='text-center'>{paragraph}</p>
			</div>
		</>
	);
};

export default PlanUnit;
