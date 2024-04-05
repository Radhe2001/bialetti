'use client';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';

function Shop() {
	const [productData, setProductData] = useState([]);
	let arr = [1, 2, 3];
	let router = useRouter();
	useEffect(() => {
		axios
			.post(
				'https://bialetti-backend-kfua.onrender.com/api/product/all',
				{ category: 'all' }
			)
			.then((data) => {
				if (data.data.success) setProductData(data.data.message);
				else alert('some problem occured while fetching the data');
			})
			.catch((err) =>
				alert(
					'some error occured occured while performing the operation'
				)
			);
	}, []);
	return (
		<div className="px-[6vw] py-[3vw] grid grid-cols-3 gap-10 bg-[#E0D5C5]">
			{productData[0]
				? productData.map((ele, ind) => {
						return (
							<div className="" key={ind}>
								<div className="h-[25vw] w-[25vw] cursor-pointer bg-white flex place-content-center place-items-center rounded-tr-3xl rounded-bl-3xl">
									<div
										className="h-[22vw] w-[22vw] bg-cover  hover:scale-125 hover:transition-all hover:duration-100"
										style={{
											backgroundImage: `url(${ele.image})`,
										}}
										onClick={(e) => {
											router.push(`/detail/${ele._id}`);
										}}
									></div>
								</div>
								<h3 className="text-2xl text-[#1A202C] font-bold mt-3 ml-4">
									{ele.title}
								</h3>
								<div className="flex w-[25vw] mt-2 place-items-center">
									<h3 className="text-xl text-[#1A202C] font-normal mt-3 ml-4">
										&#x24; {ele.price}
									</h3>
									<button
										className="py-2 px-4 ml-auto text-xl bg-[#6a7e9c] text-white font-semibold tracking-wider rounded-xl hover:bg-red-300 hover:text-slate-800"
										onClick={(e) => {
											router.push(`/detail/${ele._id}`);
										}}
									>
										View Product
									</button>
								</div>
							</div>
						);
				  })
				: arr.map((element, index) => {
						return (
							<img
								src="https://media1.tenor.com/m/guhB4PpjrmUAAAAC/loading-loading-gif.gif"
								alt=""
								key={index}
								className="bg-transparent"
							/>
						);
				  })}
		</div>
	);
}

export default Shop;
