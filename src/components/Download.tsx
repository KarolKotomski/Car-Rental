const Download = () => {
	return (
		<div className='lg:bg-download bg-top bg-no-repeat bg-gray4 '>
			<div className='container py-20'>
				<div className='text-center lg:text-left lg:max-w-[43rem]'>
					<h2 className='text-5xl py-5 font-semibold'>
						Download our <span className="text-orange">App</span> to get most out of it
					</h2>
					<p className='py-3 text-gray2'>
						Have you ever dreamed of spontaneous trips, exploring new places,
						and enjoying complete independence? Now you can have it all at your
						fingertips with our new car rental app!
					</p>
				</div>
				<div className='flex flex-col justify-center items-center gap-3 p-5 lg:justify-start lg:pl-0 xs:flex-row'>
					<div className='w-52 cursor-pointer'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							xmlnsXlink='http://www.w3.org/1999/xlink'
							viewBox='0 0 227 69'>
							<image
								id='google-app-download'
								xlinkHref='data:image/png;base64,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'></image>
						</svg>
					</div>
					<div className='w-52 cursor-pointer'>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							xmlnsXlink='http://www.w3.org/1999/xlink'
							viewBox='0 0 231 69'>
							<image
								id='ios-app-btn'
								xlinkHref='data:image/png;base64,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'></image>
						</svg>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Download;
