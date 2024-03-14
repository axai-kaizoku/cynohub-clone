import { useState } from 'react';
import BookBtn from '../BookBtn';

export default function GoogleSection() {
	const [image, setImage] = useState('/cynohub-tech/html-css.png');
	const handleClick = (role) => {
		if (role === 'html') {
			setImage('/cynohub-tech/html-css.png');
		}
		if (role === 'frontend') {
			setImage('/cynohub-tech/frontend.png');
		}
		if (role === 'backend') {
			setImage('/cynohub-tech/backend.png');
		}
		if (role === 'fullstack') {
			setImage('/cynohub-tech/full-stack.png');
		}
	};
	return (
		<>
			<h2 className="text-3xl font-semibold leading-relaxed text-left text-gray-800 sm:text-4xl ">
				What does <span>Google</span> Say About Full Stack
			</h2>
			<div className="flex justify-between max-sm:flex-col-reverse">
				<ul className="flex flex-col w-full gap-2 mt-6 text-lg font-semibold sm:mt-10 sm:w-2/6">
					<li
						className="pb-2 border-b-2 cursor-pointer border-b-teal-300 w-fit"
						onClick={() => handleClick('html')}>
						HTML & CSS Developer Salary
					</li>
					<li
						className="pb-2 border-b-2 cursor-pointer border-b-teal-300 w-fit"
						onClick={() => handleClick('frontend')}>
						Front End Developer Salary
					</li>
					<li
						className="pb-2 border-b-2 cursor-pointer border-b-teal-300 w-fit"
						onClick={() => handleClick('backend')}>
						Backend Developer Salary
					</li>
					<li
						className="pb-2 border-b-2 cursor-pointer border-b-teal-300 w-fit"
						onClick={() => handleClick('fullstack')}>
						Full Stack Developer Salary
					</li>
					<li className="pt-3">
						<BookBtn />
					</li>
				</ul>
				<div className="flex items-center justify-center w-full h-[304px] sm:m-3 sm:w-2/4 md:mr-10">
					<img
						src={image}
						alt="google-img"
					/>
				</div>
			</div>
		</>
	);
}
