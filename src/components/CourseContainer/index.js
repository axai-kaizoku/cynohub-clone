import { FaDiagramProject } from 'react-icons/fa6';
import { FaChalkboardUser } from 'react-icons/fa6';
import { FaRocket } from 'react-icons/fa6';
import { FaRegClock } from 'react-icons/fa';

export default function CourseContainer() {
	return (
		<div className="flex flex-col w-full">
			<h2 className="my-6 text-3xl font-semibold leading-relaxed text-center text-gray-800 sm:text-4xl">
				This Course Includes
			</h2>
			<div className="flex items-center justify-center w-full px-8">
				<div className="flex flex-col flex-wrap items-center justify-around w-full sm:flex-row">
					<div className="w-2/5 p-5 mx-3 my-4 bg-white rounded-xl h-1/4 max-sm:w-full ">
						<div className="flex flex-col items-start justify-start">
							<FaDiagramProject className="my-3 text-4xl font-bold text-cyno-yellow" />
							<h4 className="text-2xl font-semibold text-gray-800 ">
								Real-world projects from industry experts
							</h4>
							<p className="my-3">
								With Real World Projects And Immersive Content Built In
								Partnership With Top Tier Companies, You’ll Master The Tech
								Skills Companies Want.
							</p>
						</div>
					</div>
					<div className="w-2/5 p-5 mx-3 my-4 bg-white rounded-xl h-1/4 max-sm:w-full ">
						<div className="flex flex-col items-start justify-start">
							<FaChalkboardUser className="my-3 text-4xl font-bold text-cyno-yellow" />
							<h4 className="text-2xl font-semibold leading-relaxed text-center text-gray-800 ">
								Technical mentor support
							</h4>
							<p className="my-3">
								Our Knowledgeable Mentors Guide Your Learning And Are Focused On
								Answering Your Questions, Motivating You And Keeping You On
								Track
							</p>
						</div>
					</div>
					<div className="w-2/5 p-5 mx-3 my-4 bg-white rounded-xl h-1/4 max-sm:w-full ">
						<div className="flex flex-col items-start justify-start">
							<FaRocket className="my-3 text-4xl font-bold text-cyno-yellow" />
							<h4 className="text-2xl font-semibold leading-relaxed text-center text-gray-800 ">
								Career services
							</h4>
							<p className="my-3">
								You’ll Have Access To Github Portfolio Review And LinkedIn
								Profile Optimization To Help You Advance Your Career And Land A
								High-Paying Role.
							</p>
						</div>
					</div>
					<div className="w-2/5 p-5 mx-3 my-4 bg-white rounded-xl h-1/4 max-sm:w-full ">
						<div className="flex flex-col items-start justify-start">
							<FaRegClock className="my-3 text-4xl font-bold text-cyno-yellow" />
							<h4 className="text-2xl font-semibold leading-relaxed text-center text-gray-800 ">
								Flexible learning program
							</h4>
							<p className="my-3">
								Tailor A Learning Plan That Fits Your Busy Life. Learn At Your
								Own Pace And Reach Your Personal Goals On The Schedule That
								Works Best For You.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
