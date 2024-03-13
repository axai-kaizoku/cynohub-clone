import Banner from './components/Banner';
import Form from './components/Form';
import Layout from './components/Layout';

export default function App() {
	return (
		<Layout>
			<div className="p-4">
				<div className="flex flex-col sm:flex-row gap-4">
					<div className="w-full sm:w-2/4">
						<Banner />
					</div>
					<div className="w-full sm:w-2/4">
						<Form />
					</div>
				</div>
			</div>
		</Layout>
	);
}
