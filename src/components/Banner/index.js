import { FaStar } from 'react-icons/fa';
export default function Banner() {
	return (
		<div className="flex flex-col gap-8">
			<p className="font-bold text-base m-2 tracking-wider">
				<span className="text-cyno-yellow">100%</span> Job Assistance Program
			</p>
			<h1 className="font-semibold text-[2.6rem] leading-tight text-gray-700">
				Learn <span className="text-cyno-yellow">Full Stack</span>
				<br />
				Development
			</h1>
			<h3 className="font-light text-gray-700 whitespace-normal text-3xl">
				Land a Job as a software developer in 5 Months
			</h3>
			<div className="flex gap-2 text-[24px] text-cyno-yellow">
				<FaStar />
				<FaStar />
				<FaStar />
				<FaStar />
				<FaStar className="text-cyno-yellow/65" />
			</div>
			<div className="flex flex-col gap-4 font-bold">
				<div className="flex items-center gap-2">
					<img
						src="/cynohub-tech/Bitmap-2.png"
						alt="icon"
						width={30}
						height={30}
						className="object-contain"
					/>
					1:1 Mentor Support
				</div>
				<div className="flex items-center gap-2">
					<img
						src="/cynohub-tech/Bitmap-5.png"
						alt="icon"
						width={30}
						height={30}
						className="object-contain"
					/>
					Join 1000+ Community of Learners
				</div>
				<div className="flex items-center gap-2">
					<img
						src="/cynohub-tech/Bitmap-4.png"
						alt="icon"
						width={30}
						height={30}
						className="object-contain"
					/>
					Doubt Clarification Sessions
				</div>
				<div className="flex items-center gap-2">
					<img
						src="/cynohub-tech/Bitmap.png"
						alt="icon"
						width={30}
						height={30}
						className="object-contain"
					/>
					Placement Support
				</div>
				<div className="flex items-center gap-2">
					<img
						src="/cynohub-tech/Bitmap-3.png"
						alt="icon"
						width={30}
						height={30}
						className="object-contain"
					/>
					150+ Hiring Partners
				</div>
				<div className="flex items-center gap-2">
					<img
						src="/cynohub-tech/Bitmap-3.png"
						alt="icon"
						width={30}
						height={30}
						className="object-contain"
					/>
					No Cost EMI
				</div>
			</div>
		</div>
	);
}
