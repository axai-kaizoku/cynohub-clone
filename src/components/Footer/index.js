export default function Footer() {
	return (
		<footer className="bg-footer min-h-[90vh]  w-full text-white flex flex-col justify-around items-center">
			<div className="flex flex-col w-4/5 my-32">
				<div className="flex flex-col sm:flex-row justify-between">
					<div className="flex flex-col gap-4">
						<h3 className="font-bold text-xl">Address</h3>
						<div className="flex flex-row w-[400px]  gap-4">
							<img
								src="//picsum.photos/50/50"
								width={14}
								height={14}
								alt="picsum"
								className="object-contain"
							/>
							<p>
								Road no - 9, Kakatiya Hills, Jubilee Hills, Kavuri Hills,
								Hyderabad, Telangana, Madhapur: 500081
							</p>
						</div>
						<div className="flex flex-row  gap-4">
							<img
								src="//picsum.photos/50/50"
								width={14}
								height={14}
								alt="picsum"
								className="object-contain"
							/>
							<div className="flex flex-col">
								<p>+91 9703712609 (9am - 6pm , Monday - Saturday)</p>
								<p>+91 8069068538 (9am - 6pm , Monday - Saturday)</p>
							</div>
						</div>
						<div className="flex flex-row gap-4">
							<img
								src="//picsum.photos/50/50"
								width={14}
								height={14}
								alt="picsum"
								className="object-contain"
							/>
							<p>hello@cynohub.com</p>
						</div>
						<div className="flex flex-row gap-12">
							<img
								src="//picsum.photos/50/50"
								width={18}
								height={18}
								alt="picsum"
								className="object-contain"
							/>
							<img
								src="//picsum.photos/50/50"
								width={18}
								height={18}
								alt="picsum"
								className="object-contain"
							/>
							<img
								src="//picsum.photos/50/50"
								width={18}
								height={18}
								alt="picsum"
								className="object-contain"
							/>
							<img
								src="//picsum.photos/50/50"
								width={18}
								height={18}
								alt="picsum"
								className="object-contain"
							/>
						</div>
					</div>

					<div className="flex flex-col gap-4">
						<h3 className="font-bold text-xl">Explore</h3>

						<p>Academics</p>

						<p>Full Stack Development Master Class</p>

						<p>Robotics & Electronics Masterclass</p>
					</div>
					<div className="flex flex-col gap-4">
						<h3 className="font-bold text-xl">About Us</h3>

						<p>Contact Us</p>

						<p>Privacy Policy</p>

						<p>Terms of service</p>
					</div>
				</div>
				<p className="text-center my-20">
					&copy; 2023 True Comet Edutech Private Limited
				</p>
			</div>
		</footer>
	);
}
