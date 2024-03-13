import { IoLogoGooglePlaystore } from 'react-icons/io5';
import { IoLogoInstagram } from 'react-icons/io5';
import { IoLogoWhatsapp } from 'react-icons/io5';
import { IoLogoYoutube } from 'react-icons/io5';
import { FaLocationDot } from 'react-icons/fa6';
import { FaPhone } from 'react-icons/fa6';
import { FaMailBulk } from 'react-icons/fa';

export default function Footer() {
	return (
		<footer className="bg-footer min-h-[90vh] mt-10 w-full text-white flex flex-col justify-around items-center">
			<div className="flex flex-col w-4/5 mt-28 mb-20 mx-16">
				<div className="flex flex-col sm:flex-row justify-between">
					<div className="flex flex-col max-sm:pb-14 gap-4">
						<h3 className="font-bold text-xl">Address</h3>
						<div className="flex flex-row gap-6 items-center">
							<FaLocationDot className="text-white text-2xl" />
							<p className="lg:w-[350px] ">
								Road no - 9, Kakatiya Hills, Jubilee Hills, Kavuri Hills,
								Hyderabad, Telangana, Madhapur: 500081
							</p>
						</div>
						<div className="flex flex-row  gap-4 items-center">
							<FaPhone className="text-white " />
							<div className="flex flex-col">
								<p>+91 9703712609 (9am - 6pm , Monday - Saturday)</p>
								<p>+91 8069068538 (9am - 6pm , Monday - Saturday)</p>
							</div>
						</div>
						<div className="flex flex-row gap-4 pb-2 items-center">
							<FaMailBulk className="text-lg" />
							<p>hello@cynohub.com</p>
						</div>
						<div className="flex flex-row gap-16">
							<IoLogoInstagram className="text-2xl text-yellow-400" />
							<IoLogoGooglePlaystore className="text-2xl text-yellow-400" />
							<IoLogoWhatsapp className="text-2xl text-yellow-400" />
							<IoLogoYoutube className="text-2xl text-yellow-400" />
						</div>
					</div>

					<div className="flex flex-col gap-4  max-sm:pb-14">
						<h3 className="font-bold text-xl">Explore</h3>

						<p>Academics</p>

						<p>Full Stack Development Master Class</p>

						<p>Robotics & Electronics Masterclass</p>
					</div>
					<div className="flex flex-col gap-4 max-sm:pb-14">
						<h3 className="font-bold text-xl">About Us</h3>

						<p>Contact Us</p>

						<p>Privacy Policy</p>

						<p>Terms of service</p>
					</div>
				</div>
				<p className="text-center my-10 sm:my-20">
					&copy; 2023 True Comet Edutech Private Limited
				</p>
			</div>
		</footer>
	);
}
