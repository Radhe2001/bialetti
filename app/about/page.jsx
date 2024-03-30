import React from 'react';
import Image from 'next/image';
function About() {
	return (
		<section className="">
			<div className="bg-[#E0D5C5] pt-32">
				<div className="flex place-content-center">
					<div className="flex w-[75vw] place-content-center gap-12">
						<Image
							src="/images/moka-express-section-01.png"
							className="h-[40vw] w-[40vw]"
						/>
						<div className="flex place-items-center">
							<div className="">
								<h2 className="text-4xl font-bold pb-8">
									Years of change
								</h2>
								<h4 className="text-2xl">
									The beginning of the 20th century is a time
									of great transformations: these are the
									years of Futurism, of technological
									progress, and of social revolutions. From
									the plane to the radio, people&apos;s daily
									lives are about to change radically.
								</h4>
							</div>
						</div>
					</div>
				</div>
				<div className="flex place-content-center">
					<div className="flex w-[75vw] place-content-center gap-12">
						<div className="flex place-items-center">
							<div className="">
								<h2 className="text-4xl font-bold pb-8">
									At home and in the café
								</h2>
								<h4 className="text-2xl">
									It is then that Alfonso Bialetti decides to
									revolutionize a daily act and bring coffee
									-as good as the coffee you would get in a
									bar- into the homes of Italians, creating a
									simple, easy-to-use object. To make it, he
									chooses aluminum: a light, resistant
									material synonymous with modernity.
								</h4>
							</div>
						</div>
						<Image
							src="/images/moka-express-section-02.png"
							className="h-[40vw] w-[40vw]"
						/>
					</div>
				</div>
				<div className="flex place-content-center">
					<div className="flex w-[75vw] place-content-center gap-12">
						<Image
							src="/images/moka-express-section-03.png"
							className="h-[40vw] w-[40vw]"
						/>
						<div className="flex place-items-center">
							<div className="">
								<h2 className="text-4xl font-bold pb-8">
									Inspired by everyday traditions
								</h2>
								<h4 className="text-2xl">
									Observing women doing their laundry, he
									discovers the lisciveuse: a container with a
									central steel tube that is filled with
									clothes and placed over the fire. Once the
									water started boiling, it went up through
									the tube, distributing the soap evenly ...
								</h4>
							</div>
						</div>
					</div>
				</div>
				<div className="flex place-content-center">
					<div className="flex w-[75vw] place-content-center gap-12">
						<div className="flex place-items-center">
							<div className="">
								<h2 className="text-4xl font-bold pb-8">
									The birth of an icon
								</h2>
								<h4 className="text-2xl pb-4">
									The original Moka Express debuted in 1933,
									and has remained virtually unchanged ever
									since. It was Alfonso&apos;s wife who
									inspired the iconic 8- sided shape of the
									Moka with her silhouette: the head, the
									broad shoulders, the narrow waist, the arm
									on the hip and a pleated skirt ...
								</h4>
								<h4 className="text-2xl">
									And its name is in honor of the city of
									Mokha in Yemen, famous for a wildly popular
									coffee.
								</h4>
							</div>
						</div>
						<Image
							src="/images/moka-express-section-04.png"
							className="h-[40vw] w-[40vw]"
						/>
					</div>
				</div>
				<div className="flex place-content-center">
					<div className="flex w-[75vw] place-content-center gap-12">
						<Image
							src="/images/moka-express-section-05.png"
							className="h-[40vw] w-[40vw]"
						/>
						<div className="flex place-items-center">
							<div className="">
								<h2 className="text-4xl font-bold pb-8">
									Renato Bialetti
								</h2>
								<h4 className="text-2xl">
									Brought up within the family company founded
									by his father Alfonso, Renato Bialetti took
									over in 1946. Paul Campani, his friend and
									cartoonist, came up with the idea of the Man
									with the moustache, inspired by Renato
									himself, thus creating an advertising icon
									that has remained in the hearts and homes of
									all Italians.
								</h4>
							</div>
						</div>
					</div>
				</div>
				<div className="flex place-content-center">
					<div className="flex w-[75vw] place-content-center gap-12">
						<div className="flex place-items-center">
							<div className="">
								<h2 className="text-4xl font-bold pb-8">
									The Man with the moustache
								</h2>
								<h4 className="text-2xl pb-4">
									Our famous Man with the moustache, initially
									appearing in cartoon version, was made
									famous by TV show Carosello. Becoming iconic
									thanks also to the advertising slogan
									&ldquo;Sembra facile&rqudo; (&ldquo;It seems
									easy&rqudo;), he is always portrayed with a
									raised finger as if ordering an espresso.
								</h4>
							</div>
						</div>
						<Image
							src="/images/moka-express-section-04.png"
							className="h-[40vw] w-[40vw]"
						/>
					</div>
				</div>
			</div>
		</section>
	);
}

export default About;
