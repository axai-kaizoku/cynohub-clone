import { careerTransitions } from '../../constants';
import BookBtn from '../BookBtn';
import CareerCard from '../CareerCard';

export default function CareerContainer() {
	return (
		<div className="flex flex-col w-full">
			<h2 className="p-4 text-3xl font-semibold leading-relaxed text-center text-gray-800 sm:text-4xl">
				Career Transitions
			</h2>{' '}
			<div className="flex flex-col flex-wrap items-center justify-center gap-4 p-8 sm:flex-row">
				{careerTransitions.map((item) => (
					<CareerCard
						candidate={item.candidate}
						candidateName={item.candidateName}
						company={item.company}
						lpa={item.lpa}
						message={item.message}
						key={item.id}
					/>
				))}
			</div>
			<div className="flex items-center justify-center w-full text-center my-7">
				<BookBtn />
			</div>
		</div>
	);
}
