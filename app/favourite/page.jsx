'use client';
import React, { useEffect, useState } from 'react';

function Favourite() {
	const [items, setItems] = useState([]);
	const [total, setTotal] = useState();
	const [notifier, setNotifier] = useState(0);
	function findTotal() {
		let sum = 0;
		for (let i = 0; i < items.length; i++)
			sum += parseInt(items[i].quantity) * parseInt(items[i].price);
		setTotal(sum);
	}
	useEffect(() => {
		let item = localStorage.getItem('favourite');
		item = JSON.parse(item);
		setItems(item);
		setNotifier(notifier + 1);
	}, []);
	useEffect(() => {
		if (notifier !== 0) findTotal();
	}, [notifier]);
	function deleteItem(i) {
		let arr = items.filter((item, index) => {
			if (index !== i) return item;
		});
		setItems(arr);
		localStorage.setItem('favourite', JSON.stringify(arr));
		setNotifier(notifier + 1);
	}
	return (
		<div>
			{items[0] ? (
				<div className="bg-[#F0ECEC] p-[3vw]">
					<h1 className="text-4xl font-bold tracking-wider">
						{' '}
						Your wishlist cart
					</h1>
					<div className="flex  place-content-center my-12 p-10">
						<div className="w-[80vw] shadow-xl shadow-[#222831] p-8 rounded-3xl">
							<div className="flex place-items-center font-bold text-lg gap-8 mb-4 border-b-2 border-[#D37676] pb-4">
								<h3 className="ml-[8vw] w-[20vw] flex place-content-center">
									Product Name
								</h3>
								<h3 className="w-[6vw] flex place-content-center">
									Price
								</h3>
								<h3 className="w-[6vw] flex place-content-center">
									Quantity
								</h3>
								<h3 className="w-[6vw] flex place-content-center">
									Sub-Total
								</h3>
							</div>
							{items.map((item, index) => {
								return (
									<div className="flex place-items-center gap-8 text-lg font-semibold border-b-2 border-[#D37676]">
										<img
											src={item.image}
											alt=""
											className="h-[8vw] w-[8vw]"
										/>
										<h3 className="w-[20vw] ">
											{item.title.slice(0, 30)}
										</h3>
										<h3 className="w-[6vw]">
											&#x24; {item.price}
										</h3>
										<h3 className="w-[6vw]">
											{item.quantity}
										</h3>
										<h3 className="w-[6vw]">
											&#x24;
											{parseInt(item.quantity) *
												parseInt(item.price)}
										</h3>
										<button
											className="py-2 px-4 ml-auto text-xl bg-[#6a7e9c] text-white font-semibold tracking-wider rounded-xl hover:bg-red-300 hover:text-slate-800"
											onClick={() => deleteItem(index)}
										>
											Delete
										</button>
									</div>
								);
							})}

							<div className="flex place-content-center place-items-center font-bold text-lg text-slate-800">
								<h1 className="">Total : </h1>
								<h1 className="">&#x24; {total}</h1>
							</div>
						</div>
					</div>
				</div>
			) : (
				<div className="flex h-[50vw] w-[100vw] place-content-center place-items-center font-bold tracking-wider text-5xl text-slate-900 bg-[#F0ECEC]">
					Nothing added yet
				</div>
			)}
		</div>
	);
}

export default Favourite;
