import { startUps } from '../../constants';
import MediaSlider from '../MediaSlider';

export default function MediaContainer() {
	return (
		<div className="flex flex-col">
			<div className="flex flex-col">
				<h2 className="text-3xl font-semibold leading-relaxed text-center text-gray-800 sm:text-4xl">
					Recognized & Supported by
				</h2>
				<div className="flex flex-row flex-wrap items-center justify-center gap-4">
					{startUps.map((item, i) => (
						<div
							className="w-40 h-36"
							key={i}>
							<img
								src={item}
								alt="startup"
								className="object-contain"
							/>
						</div>
					))}
				</div>
			</div>

			<div className="flex items-center justify-center w-full">
				<div className="flex flex-col w-3/4">
					<h2 className="text-3xl font-semibold text-center text-gray-800 sm:text-4xl">
						In the Media
					</h2>
					<div className="w-full mb-20 text-center h-36">
						<MediaSlider />
					</div>
				</div>
			</div>
		</div>
	);
}
