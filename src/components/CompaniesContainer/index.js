import { companies } from '../../constants';
import BookBtn from '../BookBtn';

export default function CompaniesContainer() {
	return (
		<div className="flex flex-col items-center justify-center w-full">
			<h2 className="text-3xl font-semibold leading-relaxed text-center text-gray-800 sm:text-4xl">
				Get Placed with more than 150+ Hiring Partners
			</h2>
			<div className="flex items-center justify-center mt-4">
				<div className="flex flex-row flex-wrap items-center w-full gap-4 p-3 md:w-3/4 justify-evenly">
					{companies.map((company) => (
						<div className="flex items-center justify-center w-1/5 overflow-hidden h-1/5">
							<img
								src={company}
								alt="company"
								className="object-contain"
							/>
						</div>
					))}
				</div>
			</div>
			<div className="flex items-center justify-center w-full text-center my-7">
				<BookBtn />
			</div>
		</div>
	);
}
