'use client';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

function Detail({ params: { id } }) {
	const [productData, setProductData] = useState({});
	const [count, setCount] = useState(1);
	const [cart, setCart] = useState(false);
	const [favourite, setFavourite] = useState(false);
	useEffect(() => {
		axios
			.post('https://bialetti-backend-kfua.onrender.com/api/detail', {
				id: id,
			})
			.then((data) => {
				if (data.data.success) setProductData(data.data.message);
				else alert('unable to fetch the data');
			})
			.catch((err) => alert('some unexpected error occured'));
	}, []);
	function addToWishlist() {
		let obj = {
			title: productData.title,
			image: productData.image,
			price: productData.price,
			quantity: count,
		};
		let item = localStorage.getItem('favourite');
		if (!item) {
			let arr = [obj];
			localStorage.setItem('favourite', JSON.stringify(arr));
		} else {
			let arr = JSON.parse(item);
			arr.push(obj);
			localStorage.setItem('favourite', JSON.stringify(arr));
		}
		setFavourite(true);
		setInterval(() => {
			setFavourite(false);
		}, 2000);
	}
	function addToCart() {
		let obj = {
			title: productData.title,
			image: productData.image,
			price: productData.price,
			quantity: count,
		};
		let item = localStorage.getItem('cart');
		if (!item) {
			let arr = [obj];
			localStorage.setItem('cart', JSON.stringify(arr));
		} else {
			let arr = JSON.parse(item);
			arr.push(obj);
			localStorage.setItem('cart', JSON.stringify(arr));
		}
		setCart(true);
		setInterval(() => {
			setCart(false);
		}, 2000);
	}
	return (
		<div className="">
			{productData._id ? (
				<div className=" bg-[#F1ECED] py-24 flex place-content-center">
					<div className="w-[70vw] ">
						<div className=" fixed right-20 top-40">
							<div
								className={`ml-auto bg-cyan-500 text-black p-2 text-lg font-semibold rounded-lg ${
									cart ? '' : 'hidden'
								}`}
							>
								Item has been added to cart
							</div>
							<div
								className={`ml-auto bg-cyan-500 text-black p-2 text-lg font-semibold rounded-lg ${
									favourite ? '' : 'hidden'
								}`}
							>
								Item has been added to favourite
							</div>
						</div>

						<section className="flex gap-20 place-items-center">
							<img
								src={productData.image}
								alt=""
								className="w-[40%]"
							/>
							<div className="">
								<h1 className="text-3xl font-semibold">
									{productData.title}
								</h1>
								<h5 className="text-lg font-normal mt-8">
									{productData.about_desc}
								</h5>
								<h5 className="text-lg font-normal mt-4">
									{productData.detail_desc}
								</h5>
								<h5 className="text-lg font-bold mt-8">
									&#x24;{' :  ' + productData.price}
								</h5>
							</div>
						</section>
						<h1 className=" mt-10 mb-2 text-xl font-semibold">
							Quantity
						</h1>
						<div className="grid grid-cols-3">
							<div className="flex gap-6 place-items-center">
								<button
									className=" py-1 px-3 rounded-full border-2 border-black text-lg font-bold"
									onClick={() => {
										if (count > 1) setCount(count - 1);
									}}
								>
									-
								</button>
								<h2 className="text-xl font-bold">{count}</h2>
								<button
									className=" py-1 px-3 rounded-full border-2 border-black text-lg font-bold"
									onClick={() => setCount(count + 1)}
								>
									+
								</button>
							</div>
							<button
								className="py-2 px-4 ml-auto text-xl bg-[#6a7e9c] text-white font-semibold tracking-wider rounded-xl hover:bg-red-300 hover:text-slate-800"
								onClick={addToCart}
							>
								Add to Cart
							</button>
							<button
								className="py-2 px-4 ml-auto text-xl bg-[#6a7e9c] text-white font-semibold tracking-wider rounded-xl hover:bg-red-300 hover:text-slate-800"
								onClick={addToWishlist}
							>
								Add to Wishlist
							</button>
						</div>
					</div>
				</div>
			) : (
				<div className=" bg-[#F1ECED] py-24 flex place-content-center">
					<div className="w-[70vw] ">
						<section className="flex gap-20 place-items-center">
							<div className="flex place-content-center place-items-center w-[40%] h-[40%] text-2xl font-bold">
								Loading ...
							</div>
							<div className="">
								<div className="flex place-content-center place-items-center  text-2xl font-bold">
									Loading ...
								</div>
							</div>
						</section>
						<h1 className=" mt-10 mb-2 text-xl font-semibold">
							Quantity
						</h1>
						<div className="grid grid-cols-3">
							<div className="flex gap-6 place-items-center">
								<button
									className=" py-1 px-3 rounded-full border-2 border-black text-lg font-bold"
									onClick={() => {
										if (count > 1) setCount(count - 1);
									}}
								>
									-
								</button>
								<h2 className="text-xl font-bold">{count}</h2>
								<button
									className=" py-1 px-3 rounded-full border-2 border-black text-lg font-bold"
									onClick={() => setCount(count + 1)}
								>
									+
								</button>
							</div>
							<button className="py-2 px-4 ml-auto text-xl bg-[#6a7e9c] text-white font-semibold tracking-wider rounded-xl hover:bg-red-300 hover:text-slate-800">
								Add to Cart
							</button>
							<button className="py-2 px-4 ml-auto text-xl bg-[#6a7e9c] text-white font-semibold tracking-wider rounded-xl hover:bg-red-300 hover:text-slate-800">
								Add to Wishlist
							</button>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default Detail;
