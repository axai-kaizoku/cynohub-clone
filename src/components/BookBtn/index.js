import { FaPhone } from 'react-icons/fa6';

export default function BookBtn() {
	return (
		<a href="#book-session">
			<button
				type="button"
				className="flex items-center h-10 px-5 py-6 text-base font-semibold leading-tight tracking-tight text-center text-white bg-blue-500 border rounded-lg shadow-2xl w-72 hover:bg-blue-600 focus:ring-4 focus:outline-none">
				<FaPhone />
				&nbsp;Book Free Guidance Session
			</button>
		</a>
	);
}
