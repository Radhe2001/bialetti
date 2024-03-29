import { Inter } from 'next/font/google';
// import '../globals.css';
import Navbar from './components/Navbar';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({ children }) {
	return (
		<section className={inter.className}>
			<div
				className="w-full h-[30vw] bg-cover flex place-items-center pl-[60vw] pr-[15vw] pt-[10vw]"
				style={{
					backgroundImage:
						'url(/images/immersive-banner-ita-complete.png)',
				}}
			>
				<h1 className="text-white text-3xl font-bold tracking-wider">
					The essence of Italian coffee culture
				</h1>
			</div>
			<Navbar />
			<h1 className="text-4xl font-bold tracking-wider ml-[6vw] mt-4 mb-2">
				COFFEE
			</h1>
			<h5 className="font-light ml-[6vw] mb-6 text-sm">A PERFECT COMBINATION OF FLAVORS AND AROMAS</h5>
			{children}
		</section>
	);
}
