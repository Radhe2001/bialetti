import Link from 'next/link';
import React from 'react';

function Footer() {
	return (
		<>
			<section className="bg-[#C6C4C4]">
				<section className="flex pt-20 place-content-center  border-t-2 border-[#afaca8]">
					<div className="w-[95vw] border-b-2 border-[#afaca8] pb-10">
						<section className="grid grid-cols-3 mx-24">
							<div className="grid px-16">
								<div className="flex gap-4 mb-6 place-items-center">
									<img
										src="/images/logo.webp"
										alt="Logo"
										className=" h-24 w-12"
									/>
									<div className="gap-2 text-xl font-bold">
										<h1>The essence of</h1>
										<h1>Italian coffee culture.</h1>
									</div>
								</div>
								<h1 className="font-bold text-lg">
									Registered Office
								</h1>
								<h3 className="">Via Fagoliano, I</h3>
								<h3 className="">25030 Coccaglio BS</h3>
								<h3 className="">Italia</h3>
							</div>
							<div className="grid mt-6 pl-32">
								<h1 className="text-xl font-bold mb-4">
									Support
								</h1>
								<h3 className="">Faq</h3>
								<h3 className="">Dispute resolution</h3>
								<h3 className="">Payment methods</h3>
								<h3 className="">Delivery times</h3>
								<h3 className="">Guest returns</h3>
							</div>
							<div className="grid mt-6 pl-10">
								<h1 className="text-xl font-bold mb-4">
									Legal
								</h1>
								<h3 className="">Cookies</h3>
								<h3 className="">Privacy Policy</h3>
								<h3 className="">Terms and conditions</h3>
								<h3 className="">Selling conditions</h3>
								<h3 className="">Regulations</h3>
								<h3 className="">B2B</h3>
								<h3 className="">Coffee card</h3>
								<h3 className="">Quality</h3>
							</div>
						</section>
					</div>
				</section>
				<div className="flex w-[95vw]  py-4">
					<div className="flex gap-4 mr-auto ml-10">
						<Link
							href="/about"
							className="px-8 py-3 rounded-3xl bg-black hover:bg-slate-800 text-white font-bold text-lg tracking-wider"
						>
							About us
						</Link>
						<Link
							href="/login"
							className="px-8 py-3 rounded-3xl bg-black hover:bg-slate-800 text-white font-bold text-lg tracking-wider"
						>
							Login
						</Link>
					</div>
					<div className="ml-auto flex gap-2">
						<Link href="https://www.facebook.com/Bialetti/">
							<div className=" border-2 rounded-[50%] border-[#7a7676] hover:bg-[#6d4848]">
								<img
									src="/images/facebook.png"
									alt="Favourite"
									className="h-6 w-8"
								/>
							</div>
						</Link>
						<Link href="https://www.instagram.com/bialetti/">
							<div className="border-2 rounded-[50%] border-[#7a7676] hover:bg-[#6d4848]">
								<img
									src="/images/instagram.png"
									alt="Favourite"
									className="h-6 w-8"
								/>
							</div>
						</Link>
					</div>
				</div>{' '}
				<div className="flex ml-10 w-[95vw] pb-6">
					<h3 className="text-sm font-light text-cyan-800">
						2021 &copy; Bialetti Industrie S.p.A. / Cap. Soc. i.v.
						Euro 1.041.628,00 / Cod.Fisc., P.IVA e numero
						discrizione al Registro delle Imprese di Brescia
						03032320248
					</h3>
				</div>
			</section>
		</>
	);
}

export default Footer;
