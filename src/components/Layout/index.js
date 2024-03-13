import Footer from '../Footer';
import Header from '../Header';

export default function Layout({ children }) {
	return (
		<>
			<Header />
			<main className="min-h-screen w-full bg-slate-50">{children}</main>
			<Footer />
		</>
	);
}
