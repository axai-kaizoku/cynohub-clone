import BookBtn from '../BookBtn';
import CareerCard from '../CareerCard';

export default function CareerContainer() {
	return (
		<div className="flex flex-col w-full">
			<h2 className="p-4 text-3xl font-semibold leading-relaxed text-center text-gray-800 sm:text-4xl">
				Career Transitions
			</h2>{' '}
			<div className="">
				<CareerCard />
			</div>
			<div className="flex items-center justify-center w-full m-6 text-center">
				<BookBtn />
			</div>
		</div>
	);
}
