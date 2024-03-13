import { useState } from 'react';

export default function Form() {
	const [error, setError] = useState('');
	const handleSubmit = () => {};
	return (
		<>
			<section className="bg-gray-50 ">
				<div className="flex flex-col items-center justify-center px-6 py-0 mx-auto md:h-screen lg:py-0">
					<div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 ">
						<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
							<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl ">
								Book a{' '}
								<span className="text-cyno-yellow">Free Guidance Session</span>{' '}
								With Our Experts
							</h1>
							<form
								className="space-y-4 md:space-y-6"
								onSubmit={handleSubmit}>
								<div>
									<label
										htmlFor="name"
										className="block mb-2 text-sm font-medium text-gray-900 ">
										Full Name
									</label>
									<input
										type="name"
										name="name"
										id="name"
										className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
										placeholder="Your Full Name"
										required
									/>
								</div>
								<div>
									<label
										htmlFor="signinEmail"
										className="block mb-2 text-sm font-medium text-gray-900 ">
										Email
									</label>
									<input
										type="email"
										name="email"
										id="signinEmail"
										className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
										placeholder="Your Email Address"
										required
									/>
								</div>
								<div>
									<label
										htmlFor="number"
										className="block mb-2 text-sm font-medium text-gray-900 ">
										Number
									</label>
									<input
										type="number"
										name="number"
										id="number"
										placeholder="Your Whatsapp Number"
										className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
										required
									/>
								</div>
								<div>
									<label
										htmlFor="occupation"
										className="block mb-2 text-sm font-medium text-gray-900 ">
										Occupation
									</label>
									<input
										type="text"
										name="occupation"
										id="occupation"
										placeholder="Occupation"
										className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
										required
									/>
								</div>
								<div>
									<span className="text-red-500">{error}</span>
								</div>
								<button
									type="submit"
									className="w-full border  text-black bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
									Sign in
								</button>
							</form>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
