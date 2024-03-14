import { useState } from 'react';
import Accordion from '../Accordion';

export default function QuestionsContainer() {
	const [accordions, setAccordion] = useState([
		{
			key: 1,
			title:
				'What Are The Job Opportunities For Full Stack Developers In 2022?',
			data: `One of the most in-demand roles in the industry is full-stack developer. Because they contribute the most to software projects, companies reward them heftily. As a result, whether you are a new developer or an experienced one, you will always be in demand in the software industry, with many opportunities awaiting you.`,
			isOpen: false,
		},
		{
			key: 2,
			title: ' Will I Get A Full Stack Developer Certification?',
			data: `You will receive a course completion certificate once you have completed all of the assignments at the end of the course.`,
			isOpen: false,
		},
		{
			key: 3,
			title:
				' What Kind Of Jobs Can I Get After The Full Stack Developer Program?',
			data: `Mock interviews, resume reviews, and other forms of preparation assistance
			We are confident that with the right teaching, curriculum, and guidance, you will achieve your objectives.
			You will also be able to apply for hundreds of Jobs Posted by our Recruitment team to get placed as soon as you complete the course.`,
			isOpen: false,
		},
		{
			key: 4,
			title: 'How Will I Get Placement Assistance?',
			data: `This Full Stack Java Developer Program can lead to jobs such as Full Stack Developer, Front-end Engineer, Full Stack Engineer, and Software Engineer.`,
			isOpen: false,
		},
		{
			key: 5,
			title:
				' How Much Salary Can I Expect After The Full Stack Developer Program?',
			data: `Full Stack Developers are paid well around the world, and their demand is increasing year after year. A Full Stack Developer certification boosts such professionals’ earning potential even further. In India, the salary of a Full Stack Engineer ranges from 12LPA to 40LPA.`,
			isOpen: false,
		},
		{
			key: 6,
			title: 'Will I Get Help If I’m Stuck?',
			data: `Absolutely, our trainers and experts work around the clock to ensure that all of your questions are answered.`,
			isOpen: false,
		},
	]);

	const toggleAccordion = (accordionkey) => {
		const updatedAccordions = accordions.map((accord) => {
			if (accord.key === accordionkey) {
				return { ...accord, isOpen: !accord.isOpen };
			} else {
				return { ...accord, isOpen: false };
			}
		});

		setAccordion(updatedAccordions);
	};

	return (
		<div className="flex flex-col w-full">
			<h2 className="my-6 text-3xl font-semibold leading-relaxed text-center text-gray-800 sm:text-4xl">
				Frequently Asked Questions
			</h2>
			<div className="flex items-center justify-center w-full px-8">
				<div className="flex flex-col flex-wrap items-center justify-around w-3/4 ">
					{accordions.map((accordion) => (
						<Accordion
							key={accordion.key}
							title={accordion.title}
							data={accordion.data}
							isOpen={accordion.isOpen}
							toggleAccordion={() => toggleAccordion(accordion.key)}
						/>
					))}
				</div>
			</div>
		</div>
	);
}
