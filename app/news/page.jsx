import React from 'react';
import Image from 'next/image';
function News() {
	return (
		<>
			<div className="bg-[#F0EFEE]">
				<section className="flex place-content-center py-16 ">
					<div className="flex w-[90vw] gap-[6vw]">
						<div
							className="h-[35vw] flex place-items-end w-[62vw] bg-cover"
							style={{
								backgroundImage:
									'url(/images/news-image-1.jpeg)',
							}}
						>
							<div className="pl-12 pb-8">
								<h1 className="text-7xl font-bold text-white tracking-wider mb-2">
									INSPIRATION
								</h1>
								<h4 className="text-xl text-white tracking-wider">
									LIVE THE COFFEE EXPERIECNCE AT 360 DEGREE
								</h4>
							</div>
						</div>
						<div className="w-[20vw]">
							<Image
								src="/images/news-image-2.jpeg"
								className="h-[13vw] w-[21vw]"
							/>
							<h3 className="font-light mb-8">
								A Moka pot on induction hob when tradition is
								renewed
							</h3>
							<Image
								src="/images/news-image-3.jpg"
								className="h-[13vw] w-[21vw]"
							/>
							<h3 className="font-light">
								Welcome the party. The new Deco Glamour
								Collection
							</h3>
						</div>
					</div>
				</section>
				<center className="mb-16">
					<h1 className="text-4xl font-bold tracking-wider w-[65vw]">
						STARTING THE DAY WITH A COFFEE AN ITALIAN RITUAL UNIQUE
						IN FLAVOR
					</h1>
				</center>
				<div className="flex place-content-center gap-10 pb-16">
					<div
						className="h-[28vw] w-[28vw] bg-cover bg-white rounded-bl-3xl rounded-tr-3xl"
						style={{
							backgroundImage: 'url(/images/news-image-5.png)',
						}}
					>
						<center>
							<h1 className="w-[18vw]">
								New Moka&apos;s Here is what to do to get off to
								a good start
							</h1>
						</center>
					</div>
					<div
						className="h-[28vw] w-[28vw] bg-cover bg-white  rounded-tl-3xl rounded-br-3xl"
						style={{
							backgroundImage: 'url(/images/news-image-6.png)',
						}}
					>
						<center>
							<h1 className="w-[18vw]">
								How to remove limescale from a Moka for state of
								the art coffee
							</h1>
						</center>
					</div>
					<div
						className="h-[28vw] w-[28vw] bg-cover bg-white  rounded-bl-3xl rounded-tr-3xl"
						style={{
							backgroundImage: 'url(/images/news-image-7.png)',
						}}
					>
						<center>
							<h1 className="w-[20vw]">
								The Giola of an authentic Bialetti espresso
								Discover the Bialetti espresso system
							</h1>
						</center>
					</div>
				</div>
				<div className="flex gap-20 place-content-center pb-20">
					<div className=" w-[20vw]">
						<Image
							className="h-[20vw] w-[20vw] mb-4"
							src="/images/news-image-4.jpg"
						/>
						<h3 className="">
							A tasty custom and a bonefide ritual Starting the
							day with a coffee, as part of a healthy and balanced
							breakfast is good (on multiple levels)
						</h3>
					</div>
					<div className="flex place-items-center gap-10">
						<Image
							className="h-[25vw] w-[40vw]"
							src="/images/news-image-8.jpeg"
						/>
						<div className="w-[22vw]">
							<h3 className=" text-2xl font-bold tracking-wide pb-4">
								HOW THE MOKA WORKS LIFT THE LID AND DISCOVER ALL
								ITS SECRETS
							</h3>
							<h3 className="">
								Understand how the moka works in a jouney of
								discovery for a unique object But also of an
								Italian ritual, that of coffee that has no time
								or borders
							</h3>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

export default News;
