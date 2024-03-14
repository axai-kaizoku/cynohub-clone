import { learnerCompanies, learnerImages } from '../../constants';

export default function LearnersBanner() {
	return (
		<div className="bg-cyno-yellow ">
			<h2 className="flex flex-col items-center justify-around px-10 py-20 text-3xl font-bold text-white sm:flex-row sm:text-4xl">
				Cynohub <span className="text-6xl">|</span>{' '}
				<span className="text-violet-900">
					Join Community of 1000+ Learners
				</span>
			</h2>
			<div className="flex flex-col items-center justify-center w-full h-full">
				<div className="flex flex-row flex-wrap items-center justify-center w-4/5 mt-12 mb-2 gap-7">
					{learnerImages.map((image) => (
						<div className="flex w-[100px] h-[100px] rounded-[50%] border-2 border-white items-center justify-center overflow-hidden">
							<img
								src={image}
								alt="learner"
								className="object-cover"
							/>
						</div>
					))}
				</div>
				<div className="flex flex-wrap items-center justify-center w-4/5 max-sm:gap-8 gap-14 my-14 ">
					{learnerCompanies.map((image) => (
						<div className="w-1/5 h-12 max-sm:w-2/5">
							<img
								src={image}
								alt="company"
								className="object-contain"
							/>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}
