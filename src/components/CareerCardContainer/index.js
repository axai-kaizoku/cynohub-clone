import { FaMoneyBillWave } from 'react-icons/fa';
import { FaChartLine } from 'react-icons/fa6';
import { FaIndianRupeeSign } from 'react-icons/fa6';

export default function CareerCardContainer() {
	return (
		<div className="flex flex-col w-full">
			<h2 className="my-6 text-3xl font-semibold leading-relaxed text-center text-gray-800 sm:text-4xl">
				Career As a Full Stack Developer
			</h2>

			<div className="flex items-center justify-center w-full px-8">
				<div className="flex flex-col items-center justify-around w-full sm:flex-row">
					<div className="w-2/6 p-5 mx-3 my-4 bg-white shadow-2xl rounded-3xl h-1/4 max-sm:w-full ">
						<div className="flex flex-col items-center justify-center">
							<FaMoneyBillWave className="my-3 text-4xl font-bold text-cyno-yellow" />
							<h4 className="my-3 text-3xl font-semibold leading-relaxed text-center text-gray-800">
								Salary Trend
							</h4>
							<p className="my-3 text-center">
								A Full Stack Developer earns an average of 12 lakhs a year, but
								with the sufficient skills and experience, the prospects of
								earning much more are quite strong.
							</p>
						</div>
					</div>
					<div className="w-2/6 p-5 mx-3 my-4 bg-white shadow-2xl rounded-3xl h-1/4 max-sm:w-full ">
						<div className="flex flex-col items-center justify-center">
							<FaChartLine className="my-3 text-4xl font-bold text-cyno-yellow" />
							<h4 className="my-3 text-3xl font-semibold leading-relaxed text-center text-gray-800">
								Annual Growth
							</h4>
							<p className="my-3 text-center">
								The global demand for full stack developers is now growing at a
								rate of 28% In then next years, it is expected to be
								substantially greater, with even more prospects for developers.
							</p>
						</div>
					</div>
					<div className="w-2/6 p-5 mx-3 my-4 bg-white shadow-2xl rounded-3xl h-1/4 max-sm:w-full ">
						<div className="flex flex-col items-center justify-center">
							<FaIndianRupeeSign className="my-3 text-4xl font-bold text-cyno-yellow" />
							<h4 className="my-3 text-3xl font-semibold leading-relaxed text-center text-gray-800">
								58% Average Salary hike
							</h4>
							<p className="my-3 text-center">
								With full stack development, you may expect a minimum of a 58
								percent compensation increase on your current wage if you are
								moving jobs or want to rise through the ranks.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
