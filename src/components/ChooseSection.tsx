interface Props {
	picture: string;
	header: string;
	paragraph: string;
}

const ChooseSection = ({ picture, header, paragraph }: Props) => {
	return (
		<>
			<div className='px-6 flex flex-col items-center sm:flex-row'>
				<div className='w-40 h-40 sm:h-auto'>
					<img className='w-full h-full' src={picture} alt='service icon' />
				</div>
				<div className="flex flex-col px-5">
					<h3 className='text-2xl font-bold pb-2 text-center lg:text-left'>{header}</h3>
					<p className='text-center lg:text-left'>{paragraph}</p>
				</div>
			</div>
		</>
	);
};

export default ChooseSection;
