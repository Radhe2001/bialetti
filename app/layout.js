import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import '../db/config';
import './components/NullComponent';
import NullComponent from './components/NullComponent';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Moka Express',
	description: 'Bialetti - A coffee E-commerce website',
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<div className="flex place-content-center place-items-center gap-3 w-full bg-black text-white  ">
					<img
						src="/images/ship.png"
						alt="Shipping"
						className="h-8 w-8"
					/>
					<h3 className="">
						FREE SHIPPING <span>over</span> &euro;69.90
					</h3>
				</div>
				<NullComponent />
				<Navbar />
				{children}
				<Footer />
			</body>
		</html>
	);
}
