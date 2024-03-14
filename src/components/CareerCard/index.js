export default function CareerCard({
	candidate,
	candidateName,
	lpa,
	company,
	message,
}) {
	return (
		<div className="w-full m-4 bg-white sm:w-2/5 min-h-[300px] rounded-2xl ">
			<div className="flex justify-between p-4">
				<div className="flex flex-col items-center justify-center">
					<div className="w-4/5 h-4/5 rounded-[50%] overflow-hidden flex justify-center items-center">
						<img
							src={candidate}
							alt={candidateName}
							width={100}
							height={100}
							className="object-contain"
						/>
					</div>
					<p>{candidateName}</p>
				</div>

				<div className="flex flex-col items-center justify-center">
					<div className="w-4/5 h-4/5 rounded-[50%] overflow-hidden flex justify-center items-center">
						<img
							src="/cynohub-tech/arrow-1.png"
							alt="picsum"
							width={150}
							height={150}
							className="object-contain"
						/>
					</div>
					<p>{lpa} LPA</p>
				</div>

				<div className="flex flex-col items-center justify-center">
					<div className="w-4/5 h-4/5 rounded-[50%] overflow-hidden flex justify-center items-center">
						<img
							src={company}
							alt="company"
							width={100}
							height={100}
							className="object-contain"
						/>
					</div>
					<p>6 Months</p>
				</div>
			</div>
			<div className="w-full h-0 border-2 border-gray-900 rounded "></div>
			<div className="flex items-center justify-center">
				<p className="px-8 py-8 text-lg font-bold text-center">{message}</p>
			</div>
		</div>
	);
}
