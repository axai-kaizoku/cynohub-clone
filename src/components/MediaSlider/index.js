import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function SampleNextArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{
				...style,
				display: 'block',
				background: 'black',
				borderRadius: '100%',
				color: 'black',
			}}
			onClick={onClick}
		/>
	);
}

function SamplePrevArrow(props) {
	const { className, style, onClick } = props;
	return (
		<div
			className={className}
			style={{
				...style,
				display: 'block',
				background: 'black',
				borderRadius: '100%',
				color: 'black',
			}}
			onClick={onClick}
		/>
	);
}

export default function MediaSlider() {
	const settings = {
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		initialSlide: 0,
		autoplay: true,
		autoplaySpeed: 2000,
		speed: 2000,
		nextArrow: <SampleNextArrow />,
		prevArrow: <SamplePrevArrow />,
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
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	};
	return (
		<div className="w-full m-4 slider-container">
			<Slider {...settings}>
				<div className="w-[200px] h-[200px] max-sm:h-[80px] bg-white  text-center sm:py-3.5 sm:px-16 border-8 border-slate-50 m-4">
					<img
						src="/cynohub-tech/download-1-1.png"
						alt="19"
						width={150}
						height={150}
						className="object-contain scale-95 sm:transform"
					/>
				</div>
				<div className="w-[200px] h-[200px] max-sm:h-[80px] bg-white  text-center sm:py-6 sm:px-16 border-8  border-slate-50 m-4">
					<img
						src="/cynohub-tech/images-1-1.png"
						alt="19"
						width={150}
						height={150}
						className="object-contain scale-125 sm:transform"
					/>{' '}
				</div>
				<div className="w-[200px] h-[200px] max-sm:h-[80px] bg-white py-0 flex justify-center items-center text-center sm:py-5 sm:px-20 border-8 border-slate-50 m-4">
					<img
						src="/cynohub-tech/download-2.png"
						alt="19"
						width={150}
						height={150}
						className="object-contain scale-125 sm:transform"
					/>{' '}
				</div>
				<div className="w-[200px] h-[200px] max-sm:h-[80px] bg-white  text-center py-0 sm:py-10 sm:px-20 border-8 border-slate-50 m-4">
					<img
						src="/cynohub-tech/images-1.png"
						alt="19"
						width={150}
						height={150}
						className="object-contain scale-150 sm:transform"
					/>{' '}
				</div>
				<div className="w-[200px] h-[200px] max-sm:h-[80px] bg-white  text-center py-0 sm:py-6 sm:px-16 border-8 border-slate-50 m-4">
					<img
						src="/cynohub-tech/download-1-2.png"
						alt="19"
						width={150}
						height={150}
						className="object-contain scale-105 sm:transfrom"
					/>{' '}
				</div>
				<div className="w-[200px] h-[200px] max-sm:h-[80px] bg-white  text-center sm:py-6 sm:px-20 border-8 border-slate-50 m-4">
					<img
						src="/cynohub-tech/download-1.jpg"
						alt="19"
						width={150}
						height={150}
						className="object-contain scale-110 sm:transfrom"
					/>{' '}
				</div>
			</Slider>
		</div>
	);
}
