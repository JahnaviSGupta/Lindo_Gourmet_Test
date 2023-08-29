import React from 'react';
import Slider from 'react-slick';

function UnevenSetsInfinite() {
	const settings = {
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 4,
		slidesToScroll: 4,
		initialSlide: 0,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: true,
					dots: true,
				},
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					initialSlide: 2,
				},
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				},
			},
		],
	};

	return (
		<div className='mt-4'>
			<Slider {...settings}>
				<picture className='px-2'>
					<img
						className=''
						src={`${process.env.PUBLIC_URL}/assets/images/productsPage/Product1.png`}
						alt=''
					/>
				</picture>
				<picture className='px-2'>
					<img
						className=''
						src={`${process.env.PUBLIC_URL}/assets/images/productsPage/Product2.png`}
						alt=''
					/>
				</picture>
				<picture className='px-2'>
					<img
						className=''
						src={`${process.env.PUBLIC_URL}/assets/images/productsPage/Product3.png`}
						alt=''
					/>
				</picture>
				<picture className='px-2'>
					<img
						className=''
						src={`${process.env.PUBLIC_URL}/assets/images/productsPage/Product4.png`}
						alt=''
					/>
				</picture>
				<picture className='px-2'>
					<img
						className=''
						src={`${process.env.PUBLIC_URL}/assets/images/productsPage/Product5.png`}
						alt=''
					/>
				</picture>
				<picture className='px-2'>
					<img
						className=''
						src={`${process.env.PUBLIC_URL}/assets/images/productsPage/Product6.png`}
						alt=''
					/>
				</picture>
			</Slider>
		</div>
	);
}

export default UnevenSetsInfinite;
