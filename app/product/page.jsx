'use client';
import React, { useState } from 'react';
import axios from 'axios';
function Product() {
	const [title, setTitle] = useState('');
	const [category, setCategory] = useState('coffee_machine');
	const [image, setImage] = useState('');
	const [aboutDesc, setAboutDesc] = useState('');
	const [detailDesc, setDetailDesc] = useState('');
	const [price, setPrice] = useState('');
	function handleSubmit(event) {
		event.preventDefault();
		axios
			.post('http://localhost:3000/api/products', {
				title: title,
				category: category,
				image: image,
				about_desc: aboutDesc,
				detail_desc: detailDesc,
				price: price,
			})
			.then((data) => {
				if (data.status === 200)
					alert('product has been added successfully');
				else alert('product has not been added');
			})
			.catch((err) => {
				alert('some error ' + err.message());
			});
	}
	return (
		<div className="flex place-content-center py-24 bg-[#E0D5C5]">
			<fieldset className="border-2 border-black rounded-2xl px-12 py-10">
				<legend className="text-2xl font-bold">Add Product</legend>
				<form className="w-[35vw] grid gap-2" onSubmit={handleSubmit}>
					<input
						type="text"
						className="w-[95%] font-normal placeholder:font-semibold placeholder:text-slate-600 placeholder:text-xl text-xl px-3 py-1 bg-transparent border-2 border-slate-800 rounded-lg"
						name="title"
						placeholder="Title"
						onChange={(e) => setTitle(e.target.value)}
					/>
					<input
						type="text"
						className="w-[95%] font-normal placeholder:font-semibold placeholder:text-slate-600 placeholder:text-xl text-xl px-3 py-1 bg-transparent border-2 border-slate-800 rounded-lg"
						name="image"
						placeholder="Image link"
						onChange={(e) => setImage(e.target.value)}
					/>
					<select
						className="w-[95%] font-normal placeholder:font-semibold placeholder:text-slate-600  placeholder:text-xl text-xl px-3 py-1 bg-transparent border-2 border-slate-800 rounded-lg"
						id="category"
						onChange={(e) => {
							setCategory(e.target.value);
						}}
					>
						<option value="coffee_machine">Coffee Machine</option>
						<option value="bialetti_capsule">
							Bialetti Capsules
						</option>
						<option value="ground_coffee">Ground Coffee</option>
						<option value="espresso_machines">
							Espresso Machines
						</option>
						<option value="coffee_accessories">
							Coffee Accessories
						</option>
					</select>
					<textarea
						type="text"
						className="w-[95%] font-normal placeholder:font-semibold placeholder:text-slate-600 placeholder:text-xl text-xl px-3 py-1 bg-transparent border-2 border-slate-800 rounded-lg h-28"
						name="about_desc"
						placeholder="Main description"
						onChange={(e) => setAboutDesc(e.target.value)}
					/>
					<textarea
						type="text"
						className="w-[95%] font-normal placeholder:font-semibold placeholder:text-slate-600 placeholder:text-xl text-xl px-3 py-1 bg-transparent border-2 border-slate-800 rounded-lg h-28"
						name="detail_desc"
						placeholder="Sub description"
						onChange={(e) => setDetailDesc(e.target.value)}
					/>
					<input
						type="number"
						className="w-[95%] font-normal placeholder:font-semibold placeholder:text-slate-600 placeholder:text-xl text-xl px-3 py-1 bg-transparent border-2 border-slate-800 rounded-lg"
						name="price"
						placeholder="Price in Dollar($)"
						onChange={(e) => setPrice(e.target.value)}
					/>
					<div className="flex place-content-center mt-10">
						<input
							type="submit"
							value="Add Product"
							className=" py-1 px-3 font-semibold border-2 hover:border-slate-600 hover:border-x-transparent hover:text-slate-600 border-y-black border-x-transparent hover:px-4"
						/>
					</div>
				</form>
			</fieldset>
		</div>
	);
}
export default Product;
