import Banner from './components/Banner';
import BookBtn from './components/BookBtn';
import CareerContainer from './components/CareerContainer';
import Form from './components/Form';
import GifContainer from './components/GifContainer';
import GoogleSection from './components/GoogleSection';
import IndustryContainer from './components/IndustryContainer';
import Layout from './components/Layout';
import LearnersBanner from './components/LearnersBanner';
import MediaContainer from './components/MediaContainer';
import Carousel from './components/Slider';

export default function App() {
	return (
		<Layout>
			<div>
				<div className="flex flex-col gap-4 p-4 sm:flex-row">
					<div className="w-full sm:w-2/4">
						<Banner />
					</div>
					<div className="w-full sm:w-2/4">
						<Form />
					</div>
				</div>
				<div className="flex items-center justify-center w-full p-4">
					<div className="flex flex-col w-3/4">
						<h2 className="text-3xl font-semibold text-center text-gray-800 sm:text-4xl">
							Learn from the best in the industry
						</h2>
						<div className="w-full text-center h-36">
							<Carousel />
						</div>
					</div>
				</div>
				<div className="flex flex-col w-full p-4 pt-16">
					<div className="flex items-end justify-between w-full">
						<h2 className="text-3xl font-semibold leading-relaxed text-left text-gray-800 sm:text-4xl">
							Hear directly from the
							<br />
							students
						</h2>
						<div className="max-sm:hidden">
							<BookBtn />
						</div>
					</div>
					<div className="flex justify-center w-full h-full pt-14">
						<div className="flex flex-wrap gap-8 max-sm:flex-col">
							<div className="h-44 bg-cyno-yellow w-72"></div>
							<div className="h-44 bg-cyno-yellow w-72"></div>
							<div className="h-44 bg-cyno-yellow w-72"></div>
							<div className="h-44 bg-cyno-yellow w-72"></div>
						</div>
					</div>
				</div>
				<div className="flex-col w-full p-4 pt-16">
					<GoogleSection />
				</div>
				<div className="w-full pt-14">
					<LearnersBanner />
				</div>
				<div className="w-full p-4 pt-16 bg-white">
					<GifContainer />
				</div>
				<div className="w-full p-4 pt-16 bg-white">
					<IndustryContainer />
				</div>
				<div className="w-full p-4 pt-16 mb-10 bg-white">
					<MediaContainer />
				</div>
				<div className="w-full pt-12 bg-sky-200">
					<CareerContainer />
				</div>
			</div>
		</Layout>
	);
}
