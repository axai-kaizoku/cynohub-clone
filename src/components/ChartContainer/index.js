export default function ChartContainer() {
	return (
		<div className="flex flex-col w-full">
			<h2 className="my-6 text-3xl font-semibold leading-relaxed text-center text-gray-800 sm:text-4xl">
				Next Steps
			</h2>
			<div className="flex items-center justify-center w-full">
				<div className="flex flex-col justify-center w-full sm:flex-row">
					<div className="w-1/6 max-sm:w-full max-sm:px-8 sm:ml-8">
						<div className="flex max-sm:hidden">
							<div className="font-bold text-lg border-2 border-gray-500 rounded-[50%] w-10 h-10 flex justify-center items-center">
								1
							</div>
							<div className="flex items-center justify-center w-full ">
								<hr className="w-full h-1 bg-gray-600" />
							</div>
						</div>
						<div className="w-4/5 mt-5 ">
							<h3 className="text-xl font-semibold">Step #1 Enroll</h3>
							<p className="mt-2 mb-4 leading-6">
								Enroll into this course and take your first step towards Full
								Stack Development.
							</p>
						</div>
					</div>
					<div className="w-1/6 max-sm:w-full max-sm:px-8">
						<div className="flex max-sm:hidden">
							<div className="font-bold text-lg border-2 border-gray-500 rounded-[50%] w-10 h-10 flex justify-center items-center">
								2
							</div>
							<div className="flex items-center justify-center w-full ">
								<hr className="w-full h-1 bg-gray-600" />
							</div>
						</div>
						<div className="w-4/5 mt-5 ">
							<h3 className="text-xl font-semibold">Step #2 Projects</h3>
							<p className="mt-2 mb-4 leading-6">
								Practice and master your skillset with over 10+ Industry Level
								Projects.
							</p>
						</div>
					</div>
					<div className="w-1/6 max-sm:w-full max-sm:px-8">
						<div className="flex max-sm:hidden">
							<div className="font-bold text-lg border-2 border-gray-500 rounded-[50%] w-10 h-10 flex justify-center items-center">
								3
							</div>
							<div className="flex items-center justify-center w-full ">
								<hr className="w-full h-1 bg-gray-600" />
							</div>
						</div>
						<div className="w-4/5 mt-5 ">
							<h3 className="text-xl font-semibold">Step #3 Job Training</h3>
							<p className="mt-2 mb-4 leading-6">
								Get Trained with interview etiquette, most commonly asked
								programming questions and salary negotiations.
							</p>
						</div>
					</div>
					<div className="w-1/6 max-sm:w-full max-sm:px-8">
						<div className="flex max-sm:hidden">
							<div className="font-bold text-lg border-2 border-gray-500 rounded-[50%] w-10 h-10 flex justify-center items-center">
								4
							</div>
							<div className="flex items-center justify-center w-full ">
								<hr className="w-full h-1 bg-gray-600" />
							</div>
						</div>
						<div className="w-4/5 mt-5 ">
							<h3 className="text-xl font-semibold">Step #4 Certificate</h3>
							<p className="mt-2 mb-4 leading-6">
								Complete the assignments and get certified as a full stack
								developer.
							</p>
						</div>
					</div>
					<div className="w-1/6 max-sm:w-full max-sm:px-8">
						<div className="flex max-sm:hidden ">
							<div className="font-bold text-lg border-2 border-gray-500 rounded-[50%] w-10 h-10 flex justify-center items-center">
								5
							</div>
						</div>
						<div className="w-4/5 mt-5 ">
							<h3 className="text-xl font-semibold">Step #5 Get Placed</h3>
							<p className="mt-2 mb-4 leading-6">
								Get placed in a company as a full stack developer earn an
								average of 12 Lakhs per annum.
							</p>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
