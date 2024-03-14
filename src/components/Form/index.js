import { useState } from 'react';
import { validateEmail, validateNumber } from '../../utils';
import { VscError } from 'react-icons/vsc';

export default function Form() {
	const [error, setError] = useState('');
	const [num, setNum] = useState('');
	const [otp, setOtp] = useState('');
	const [verifyNum, setVerifyNum] = useState(false);
	const [sendOtp, setSendOtp] = useState(false);
	const [otpVerified, setOtpVerified] = useState(false);
	const [bookingConfirmed, setBookingConfirmed] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		setError('');
		if (!verifyNum) {
			setError('Please verify OTP first.');
			return;
		}
		// Other form validation logic
		// ...

		const name = e.target[0].value.trim();
		const email = e.target[1].value.trim();
		const number = e.target[2].value.trim();
		const occupation = e.target[3].value.trim();

		if (name.length < 3) {
			setError('Name must be at least 3 characters long.');
			return;
		}

		if (!validateEmail(email)) {
			setError('Invalid Email address.');
			return;
		}

		if (!validateNumber(number)) {
			setError('Invalid Mobile number.');
			return;
		}

		if (!otpVerified) {
			setError('Invalid OTP.');
			return;
		}

		setError('');

		console.log(name, email, number, occupation);

		setBookingConfirmed(true);
		setTimeout(() => {
			setBookingConfirmed(false);
		}, 3000);
	};

	const verifyNumber = () => {
		setSendOtp(true);
		setTimeout(() => {
			setVerifyNum(true);
			setSendOtp(true);
		}, 1000);
	};

	const handleOtpChange = (e) => {
		const enteredOtp = e.target.value;
		setOtp(enteredOtp);
		if (enteredOtp.length > 3 && enteredOtp === '1234') {
			// Simulate OTP verification
			setOtpVerified(true);
		} else {
			setOtpVerified(false);
		}
	};

	return (
		<>
			<section className="bg-gray-50">
				<div className="flex flex-col items-center justify-center px-0 py-0 mx-auto md:h-screen lg:py-0">
					<div className="w-full bg-white rounded-lg shadow md:mt-0 sm:max-w-full xl:p-0">
						<div className="p-6 shadow-lg space-y-4 md:space-y-6 sm:p-8">
							<h1 className="text-xl font-bold text-gray-900 md:text-2xl">
								Book a{' '}
								<span className="text-cyno-yellow">Free Guidance Session</span>{' '}
								With Our Experts
							</h1>
							<form
								className="space-y-4 md:space-y-6"
								onSubmit={handleSubmit}>
								{/* Form fields */}
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
										className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg   block w-full p-2.5"
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
										className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg   block w-full p-2.5"
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
									<div className="flex gap-8">
										<input
											type="number"
											name="number"
											id="number"
											value={num}
											onChange={(e) => setNum(e.target.value)}
											placeholder="Your Whatsapp Number"
											className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-2/3 p-2.5"
											required
										/>
										<div className="w-2/6">
											{verifyNum ? (
												<div className="flex gap-4">
													<img
														src="/cynohub-comp/verified.png"
														alt="verified"
														width={30}
														height={30}
														className="object-contain"
													/>
													<p className="text-lg">OTP SENT</p>
												</div>
											) : (
												<button
													type="button"
													disabled={validateNumber(num) ? false : true}
													className={` bg-blue-700 w-full hover:bg-blue-600	text-white border font-bold border-gray-300 sm:text-sm rounded-lg block  p-2.5 ${
														validateNumber(num)
															? 'hover:cursor-pointer'
															: 'hover:cursor-not-allowed'
													} `}
													onClick={verifyNumber}>
													Verify OTP
												</button>
											)}
										</div>
									</div>
								</div>

								<div className={`flex gap-8 ${sendOtp ? '' : 'hidden'}`}>
									{/* OTP input field */}
									<input
										type="number"
										name="otp"
										id="otp"
										placeholder="Enter OTP"
										value={otp}
										onChange={handleOtpChange}
										className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-2/3 p-2.5"
										required
									/>
									{/* OTP verification status */}
									<div className="w-2/6">
										{otp && otp.length > 3 ? (
											otpVerified ? (
												<div className="flex gap-4">
													<img
														src="/cynohub-comp/verified.png"
														alt="verified"
														width={30}
														height={30}
														className="object-contain"
													/>
													<p className="text-lg">OTP Verified</p>
												</div>
											) : (
												<div className="flex gap-4">
													<VscError className="text-3xl text-red-500 font-bold" />
													<p className="text-lg">Invalid OTP</p>
												</div>
											)
										) : null}
									</div>
								</div>
								<div>
									<label
										htmlFor="occupation"
										className="block mb-2 text-sm font-medium text-gray-900 ">
										Occupation
									</label>
									<select
										name="occupation"
										id="occupation"
										className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg block w-full p-2.5"
										required>
										<option value="student">Student</option>
										<option value="unemployed">Looking for a job</option>
										<option value="employed">Working Professional</option>
									</select>
								</div>
								{/* Error message */}
								<div>
									<span className="text-red-500">{error}</span>
								</div>
								{/* Submit button */}
								<button
									type="submit"
									className=" w-full border text-white font-bold bg-blue-700 hover:bg-blue-600 focus:ring-4 focus:outline-none shadow-2xl rounded-lg text-sm px-5 py-2.5 text-center">
									Book a Free Session
								</button>
							</form>
							{/* Confirmation message */}
							{bookingConfirmed && (
								<>
									<div className=" bg-green-100 text-green-700 rounded-lg p-4 text-center text-xl font-bold">
										Booked a Session !
									</div>
								</>
							)}
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
