import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './styles.css';

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

export default function Carousel() {
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
		<div className="slider-container m-4 w-full">
			<Slider {...settings}>
				<div className="w-[200px] h-[150px] max-sm:h-[80px] bg-white  text-center sm:py-3.5 sm:px-16 border-8 border-slate-50 m-4">
					<img
						src="/cynohub-comp/19.png"
						alt="19"
						width={150}
						height={150}
						className="object-contain sm:transform scale-125"
					/>
				</div>
				<div className="w-[200px] h-[150px] max-sm:h-[80px] bg-white  text-center sm:py-6 sm:px-16 border-8  border-slate-50 m-4">
					<img
						src="/cynohub-comp/12.png"
						alt="19"
						width={150}
						height={150}
						className="object-contain"
					/>{' '}
				</div>
				<div className="w-[200px] h-[150px] max-sm:h-[80px] bg-white py-4 text-center sm:py-14 sm:px-16 border-8 border-slate-50 m-4">
					<img
						src="/cynohub-comp/20.png"
						alt="19"
						width={150}
						height={150}
						className="object-contain sm:transform scale-125"
					/>{' '}
				</div>
				<div className="w-[200px] h-[150px] max-sm:h-[80px] bg-white  text-center py-4 sm:py-12 sm:px-16 border-8 border-slate-50 m-4">
					<img
						src="/cynohub-comp/15.png"
						alt="19"
						width={150}
						height={150}
						className="object-contain "
					/>{' '}
				</div>
				<div className="w-[200px] h-[150px] max-sm:h-[80px] bg-white  text-center sm:py-6 sm:px-16 border-8 border-slate-50 m-4">
					<img
						src="/cynohub-comp/16.png"
						alt="19"
						width={150}
						height={150}
						className="object-contain sm:transfrom scale-150"
					/>{' '}
				</div>
			</Slider>
		</div>
	);
}
