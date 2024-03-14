import { useState } from 'react';
import BookBtn from '../BookBtn';

export default function GifContainer() {
	const [image, setImage] = useState('/cynohub-tech/imgpsh_fullsize_anim.gif');
	const handleClick = (role) => {
		if (role === 'react') {
			setImage('/cynohub-tech/imgpsh_fullsize_anim-2.gif');
		}
		if (role === 'mongo') {
			setImage('/cynohub-tech/imgpsh_fullsize_anim-4-1.gif');
		}
		if (role === 'javascript') {
			setImage('/cynohub-tech/imgpsh_fullsize_anim-5.gif');
		}
		if (role === 'express') {
			setImage('/cynohub-tech/imgpsh_fullsize_anim-5-1.gif');
		}
		if (role === 'dsa') {
			setImage('/cynohub-tech/imgpsh_fullsize_anim-1.gif');
		}
		if (role === 'html') {
			setImage('/cynohub-tech/imgpsh_fullsize_anim.gif');
		}
	};
	return (
		<>
			<h2 className="text-3xl font-semibold leading-relaxed text-left text-gray-800 sm:text-4xl ">
				Learn the <span className="text-cyno-yellow">highest paid skills</span>{' '}
				in the market :
			</h2>
			<div className="flex justify-between max-sm:flex-col-reverse">
				<ul className="flex flex-col w-full gap-2 mt-6 text-lg font-semibold sm:mt-10 sm:w-2/3">
					<li
						className="pb-2 border-b-2 border-b-teal-300 "
						onClick={() => handleClick('html')}>
						HTML & CSS
					</li>
					<li
						className="pb-2 border-b-2 border-b-teal-300 "
						onClick={() => handleClick('javascript')}>
						JavaScript
					</li>
					<li
						className="pb-2 border-b-2 border-b-teal-300 "
						onClick={() => handleClick('dsa')}>
						Data Structures & Algorithms
					</li>
					<li
						className="pb-2 border-b-2 border-b-teal-300 "
						onClick={() => handleClick('react')}>
						React JS
					</li>
					<li
						className="pb-2 border-b-2 border-b-teal-300 "
						onClick={() => handleClick('mongo')}>
						Mongo DB, MySQL
					</li>
					<li
						className="pb-2 border-b-2 border-b-teal-300 "
						onClick={() => handleClick('express')}>
						Express JS, Node JS
					</li>
					<li className="pt-3">
						<BookBtn />
					</li>
				</ul>
				<div className="flex items-center justify-center w-full h-full sm:m-3 sm:w-2/4 ">
					<img
						src={image}
						alt="google-img"
					/>
				</div>
			</div>
		</>
	);
}
