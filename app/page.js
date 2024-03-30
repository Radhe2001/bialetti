import Image from 'next/image';

export default function Home() {
	return (
		<main>
			<div
				className="w-[100%] h-[45vw] bg-cover flex place-content-center place-items-center"
				style={{ backgroundImage: 'url(/images/home-main-image.webp)' }}
			>
				<section className="text-white text-6xl font-bold ">
					<div className="flex place-content-center">
						<h1>Moka Express: </h1>
					</div>
					<div className="flex place-content-center">
						<h1>the original Italian coffeemaker, since 1933</h1>
					</div>
				</section>
			</div>
			<div className="bg-[#439045] w-full h-[25vw] flex place-content-center">
				<div className="flex w-[80vw] place-items-center gap-12">
					<Image
						className="h-[25vw] w-[25vw] bg-cover"
						src="/images/logo2.png"
					/>
					<div className="text-white text-2xl font-semibold text-justify ">
						<h3 className="pb-4">
							Moka Express is the real Italian coffee experience.
							So much more than an object, the iconic Moka pot
							represents our country joy, audacity, creativity,
							and, of course, its convivial way of living.
						</h3>
						<h3 className="">
							A blend of friendship, love, warmth, and
							conversation. A secret that Bialetti has been
							bringing to the table since 1933.
						</h3>
					</div>
				</div>
			</div>
			<div className="bg-[#E0D5C5] flex place-content-center">
				<div className="w-[55vw] py-20">
					<center>
						<h1 className="text-5xl text-[#222222] pb-28">
							Becoming a <b>#MokaLover</b> is easy
						</h1>
					</center>
					<div className="flex gap-28 place-items-center">
						<Image
							className="h-[20vw] w-[20vw]"
							src="/images/moka-1-def.png"
						/>
						<h3 className="text-2xl ">
							Start by pouring room-temperature water into the
							Moka boiler until it reaches the safety valve.
						</h3>
					</div>
					<div className="flex gap-28 place-items-center">
						<h3 className="text-2xl ">
							Do not exceed this level or your coffee will be too
							watery. 👍
						</h3>
						<Image
							className="h-[20vw] w-[20vw]"
							src="/images/moka-3-def.png"
						/>
					</div>
					<div className="flex gap-28 place-items-center">
						<Image
							className="h-[20vw] w-[20vw]"
							src="/images/moka-2-def.png"
						/>
						<h3 className="text-2xl ">
							For the best experience, use Perfetto Moka. ❤️ Fill
							the Moka funnel generously, without pressing down on
							the coffee.
						</h3>
					</div>
					<div className="flex gap-28 place-items-center">
						<h3 className="text-2xl ">
							Put the Moka on the stove. A little secret? Set the
							flame to low and take your time—great coffee is
							worth the wait.
						</h3>
						<Image
							className="h-[20vw] w-[20vw]"
							src="/images/moka-4-def.png"
						/>
					</div>
					<div className="flex gap-28 place-items-center">
						<Image
							className="h-[20vw] w-[20vw]"
							src="/images/moka-5-def.png"
						/>
						<h3 className="text-2xl ">
							When you hear the gurgle, it means your coffee is
							ready. Take it off the burner ... and enjoy.
						</h3>
					</div>
				</div>
			</div>
			<div className="">
				<div className="flex bg-[#076342] place-content-center">
					<div className="flex w-[65vw] py-14 place-items-center gap-16 text-white">
						<div className="grid">
							<Image
								src="/images/user-1.png"
								className="h-[17vw] w-[17vw] pb-4"
							/>
							<center>
								<h4>
									<b>Luca</b> Chef
								</h4>
							</center>
						</div>
						<div className="flex w-[50vw] gap-2">
							<h2 className="text-7xl font-bold">&ldquo;</h2>
							<h4 className="text-2xl mt-4">
								The flavors of home are sacred for us Italians,
								and I can say that no Italian kitchen is
								complete without a Moka. Good food, taking time
								to share moments with others, cooking as a
								gesture of love ... this is what it means to be
								Italian ... And the Moka is precisely that: a
								little thing that reminds us how wonderful it is
								to simply enjoy life.
							</h4>
						</div>
					</div>
				</div>
				<div className="flex bg-[#E0D5C5] place-content-center">
					<div className="flex w-[65vw] py-14 place-items-center gap-16 text-black">
						<div className="flex w-[50vw] gap-2">
							<h2 className="text-7xl font-bold">&ldquo;</h2>
							<h4 className="text-2xl mt-4">
								Moka is a true Italian Icon. Its special for two
								reasons: not only does it make really good
								coffee, but it is a true work of art in its own
								right. And its important that things are
								appealing to the eye in Italy. Moka has always
								been an important part of our kitchens, for both
								taste and sight.
							</h4>
						</div>
						<div className="grid">
							<Image
								src="/images/user-2.png"
								className="h-[17vw] w-[17vw] pb-4"
							/>
							<center>
								<h4>
									<b>Annamaria,</b> Designer
								</h4>
							</center>
						</div>
					</div>
				</div>
				<div className="flex bg-[#B23D3D] place-content-center">
					<div className="flex w-[65vw] py-14 place-items-center gap-16 text-white">
						<div className="grid">
							<Image
								src="/images/user-3.png"
								className="h-[17vw] w-[17vw] pb-4"
							/>
							<center>
								<h4>
									<b>Carla</b> Grandmother
								</h4>
							</center>
						</div>
						<div className="flex w-[50vw] gap-2">
							<h2 className="text-7xl font-bold">&ldquo;</h2>
							<h4 className="text-2xl mt-4">
								The Moka is a true icon of Italy. It is part of
								our history, of our identity. Personally, I have
								been using Moka every morning for more than 50
								years. The count is up to you! And the Moka, its
								slow living, is one of the great legacies we
								leave in this age of speed and stress.
							</h4>
						</div>
					</div>
				</div>
			</div>
			<div
				className="w-full bg-cover h-[50vw] flex place-content-center place-items-center"
				style={{
					backgroundImage: 'url(/images/banner-storia-def.jpg)',
				}}
			>
				<h1 className="text-6xl font-bold text-white">
					Do you know Moka history?
				</h1>
			</div>
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
									&ldquo;Sembra facile &rdquo; (&ldquo;It
									seems easy &rdquo;), he is always portrayed
									with a raised finger as if ordering an
									espresso.
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
		</main>
	);
}
