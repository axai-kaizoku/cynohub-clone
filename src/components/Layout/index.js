import Footer from '../Footer';
// import Header from '../Header';
import HeaderSec from '../Header2';

export default function Layout({ children }) {
	return (
		<>
			<HeaderSec />
			<main className="w-full min-h-screen bg-slate-50">{children}</main>
			<Footer />
		</>
	);
}
