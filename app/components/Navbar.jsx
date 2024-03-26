import Link from 'next/link';
import React from 'react';

function Navbar() {
	return (
		<nav className="flex w-full h-24 py-2 px-10 sticky top-0 bg-white">
			<img
				src="/images/bialetti.png"
				alt="Bialetti"
				className="mr-auto"
			/>
			<section className="flex w-full gap-24 text-lg place-content-center place-items-center pt-6 ">
				<Link href="/" className="">
					MOKA EXPRESS
				</Link>
				<Link href="/shop" className="">
					SHOP
				</Link>
				<Link href="/news" className="">
					NEWS & BLOGS
				</Link>
				<Link href="/about" className="">
					ABOUT
				</Link>
			</section>
			<section className="flex gap-6 place-content-center place-items-center ml-auto pt-6 mr-4">
				<Link href="/favourite">
					<img
						src="/images/favourite.png"
						alt="Favourite"
						className="h-6 w-8"
					/>
				</Link>
				<Link href="/profile">
					<img
						src="/images/user.png"
						alt="Profile"
						className="h-6 w-8"
					/>
				</Link>
				<Link href="/cart">
					<img
						src="/images/shopping-bag.png"
						alt="Cart"
						className="h-6 w-8"
					/>
				</Link>
			</section>
		</nav>
	);
}

export default Navbar;
