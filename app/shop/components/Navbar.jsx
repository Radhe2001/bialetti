import Link from 'next/link';
import React from 'react';

function Navbar() {
	return (
		<section className="flex gap-12 my-6 ml-8">
			<Link
				className="px-5 py-1 hover:bg-[#673e2f] hover:text-xl hover:text-white rounded-xl tracking-wider hover:font-semibold"
				href="/shop"
			>
				ALL
			</Link>
			<Link
				className="px-5 py-1 hover:bg-[#673e2f] hover:text-xl hover:text-white rounded-xl tracking-wider hover:font-semibold"
				href="/shop/coffee"
			>
				COFFEE MACHINE
			</Link>
			<Link
				className="px-5 py-1 hover:bg-[#673e2f] hover:text-xl hover:text-white rounded-xl tracking-wider hover:font-semibold"
				href="/shop/capsules"
			>
				BIALETTI CAPSULES
			</Link>
			<Link
				className="px-5 py-1 hover:bg-[#673e2f] hover:text-xl hover:text-white rounded-xl tracking-wider hover:font-semibold"
				href="/shop/ground"
			>
				GROUND COFFEE
			</Link>
			<Link
				className="px-5 py-1 hover:bg-[#673e2f] hover:text-xl hover:text-white rounded-xl tracking-wider hover:font-semibold"
				href="/shop/machines"
			>
				ESPRESSO MACHINES
			</Link>
			<Link
				className="px-5 py-1 hover:bg-[#673e2f] hover:text-xl hover:text-white rounded-xl tracking-wider hover:font-semibold"
				href="/shop/accessory"
			>
				COFFEE ACCESSORIES
			</Link>
		</section>
	);
}

export default Navbar;
