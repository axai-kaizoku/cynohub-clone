export default function Accordion(props) {
	return (
		<div className="w-full mb-1 border rounded-md">
			<button
				className="w-full p-4 text-left transition duration-300 bg-gray-200 hover:bg-gray-300"
				onClick={props.toggleAccordion}>
				{props.title}
				<span
					className={`float-right transform ${
						props.isOpen ? 'rotate-180' : 'rotate-0'
					} 
								transition-transform duration-300`}>
					&#9660;
				</span>
			</button>
			{props.isOpen && <div className="w-full p-4 bg-white">{props.data}</div>}
		</div>
	);
}
