import { useState } from 'react';
import BookBtn from '../BookBtn';

export default function IndustryContainer() {
	const [image, setImage] = useState('/cynohub-tech/1-2.png');
	const handleClick = (role) => {
		if (role === 'communication') {
			setImage('/cynohub-tech/1-2.png');
		}
		if (role === 'job') {
			setImage('/cynohub-tech/1234.jpg');
		}
		if (role === 'interview') {
			setImage('/cynohub-tech/859.jpg');
		}
		if (role === 'mock') {
			setImage('/cynohub-tech/4.png');
		}
	};
	return (
		<>
			<h2 className="text-3xl font-semibold leading-relaxed text-right text-gray-800 sm:text-4xl ">
				Be Industry-Ready From Day-One
			</h2>
			<div className="flex justify-between max-sm:flex-col">
				<div className="flex items-center justify-center w-full h-4/5 sm:m-3 sm:w-2/4 ">
					<img
						src={image}
						alt="google-img"
					/>
				</div>
				<ul className="flex flex-col w-full gap-2 mt-6 text-lg font-semibold sm:mt-36 sm:w-2/6">
					<li
						className="pb-2 border-b-2 border-b-teal-300 "
						onClick={() => handleClick('communication')}>
						Learn Professional Communication
					</li>
					<li
						className="pb-2 border-b-2 border-b-teal-300 "
						onClick={() => handleClick('job')}>
						Job Training
					</li>
					<li
						className="pb-2 border-b-2 border-b-teal-300 "
						onClick={() => handleClick('interview')}>
						Interview Preparation
					</li>
					<li
						className="pb-2 border-b-2 border-b-teal-300 "
						onClick={() => handleClick('mock')}>
						Mock Interviews
					</li>
					<li className="pt-3">
						<BookBtn />
					</li>
				</ul>
			</div>
		</>
	);
}
