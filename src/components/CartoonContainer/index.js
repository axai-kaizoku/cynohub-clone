import { cartoonContent } from '../../constants';

export default function CartoonContainer() {
	return (
		<div className="flex w-full px-8 py-10">
			<div className="flex flex-col items-center justify-center w-full sm:flex-row ">
				{cartoonContent.map((item) => (
					<div
						className="flex flex-col items-center justify-center w-full p-4 m-4 bg-white shadow-lg sm:w-1/6 min-h-[200px] rounded-2xl"
						key={item.id}>
						<div className="flex items-center justify-center p-4 overflow-hidden sm:w-3/5 sm:h-3/5">
							<img
								src={item.image}
								alt="cartoon"
								width={100}
								height={100}
								className="object-contain"
							/>
						</div>
						<p className="font-medium text-center">{item.text}</p>
					</div>
				))}
			</div>
		</div>
	);
}
