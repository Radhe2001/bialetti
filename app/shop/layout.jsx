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
			{children}
		</section>
	);
}
