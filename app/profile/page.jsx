'use client';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
function Profile() {
	let router = useRouter();
	const [billingFirstName, setBillingFirstName] = useState('');
	const [billingLastName, setBillingLastName] = useState('');
	const [billingPhone, setBillingPhone] = useState('');
	const [billingStreet, setBillingStreet] = useState('');
	const [billingCity, setBillingCity] = useState('');
	const [billingState, setBillingState] = useState('');
	const [billingzip, setBillingZip] = useState('');
	const [billingCountry, setBillingCountry] = useState('');
	const [shippingFirstName, setShippingFirstName] = useState('');
	const [shippingLastName, setShippingLastName] = useState('');
	const [shippingPhone, setShippingPhone] = useState('');
	const [shippingStreet, setShippingStreet] = useState('');
	const [shippingCity, setShippingCity] = useState('');
	const [shippingState, setShippingState] = useState('');
	const [shippingzip, setShippingZip] = useState('');
	const [shippingCountry, setShippingCountry] = useState('');
	const [billingAddressData, setBillingAddressData] = useState(null);
	const [shippingAddressData, setShippingAddressData] = useState(null);
	const [displayBillingAddress, setDisplayBillingAddress] = useState(false);
	const [displayShippingAddress, setDisplayShippingAddress] = useState(false);
	const [userData, setUserData] = useState(null);
	useEffect(() => {
		let result = localStorage.getItem('jwt');
		if (result) {
			result = JSON.parse(result);
			axios
				.post(
					'https://bialetti-backend-kfua.onrender.com/api/profile',
					{
						token: result.token,
					}
				)
				.then((data) => {
					if (data.data.success) {
						setUserData(data.data.data);
					}
				})
				.catch((err) => console.log(err));
		} else {
			alert('Please login first');
			router.push('/login');
		}
	}, []);
	useEffect(() => {
		let result = localStorage.getItem('billingAddress');
		if (result) {
			result = JSON.parse(result);
			setBillingAddressData(result);
		}
		result = localStorage.getItem('shippingAddress');
		if (result) {
			result = JSON.parse(result);
			setShippingAddressData(result);
		}
	}, [displayBillingAddress, displayShippingAddress]);
	function billingAddressSubmit(e) {
		e.preventDefault();
		let obj = {
			billingFirstName,
			billingLastName,
			billingPhone,
			billingStreet,
			billingCity,
			billingState,
			billingzip,
			billingCountry,
		};
		localStorage.setItem('billingAddress', JSON.stringify(obj));
		alert('Billing address added successfully');
		setDisplayBillingAddress(!displayBillingAddress);
	}
	function shippingAddressSubmit(e) {
		e.preventDefault();
		let obj = {
			shippingFirstName,
			shippingLastName,
			shippingPhone,
			shippingStreet,
			shippingCity,
			shippingState,
			shippingzip,
			shippingCountry,
		};
		localStorage.setItem('shippingAddress', JSON.stringify(obj));
		alert('Shipping address added successfully');
		setDisplayShippingAddress(!displayShippingAddress);
	}
	return (
		<>
			<section className="bg-[#E0D5C5]">
				<center>
					<h1 className="text-5xl font-semibold py-14">My Account</h1>
				</center>
				<div className="flex place-content-center ">
					<div className="w-[60vw]">
						<div className="flex gap-2 place-items-center mb-4 text-xl">
							<img src="/images/user.png" />
							<h3 className="font-semibold">
								Account Information
							</h3>
						</div>
						<div className="flex gap-[2vw] place-content-center">
							<div className="w-[29vw] border-2 border-black p-6">
								<h2 className="text-2xl font-bold tracking-wider pb-4">
									Contact Information
								</h2>
								<h4 className="text-[#666666]">
									{userData
										? userData.first_name +
										  ' ' +
										  userData.middle_name +
										  ' ' +
										  userData.last_name
										: 'User Name'}
								</h4>
								<h4 className="text-[#666666]">
									{userData ? userData.email : 'User Email'}
								</h4>
								<div className="flex pt-4 gap-3">
									<button
										className="px-3 py-1 bg-sky-400 text-[#00224D] rounded-lg hover:bg-sky-500"
										onClick={(e) => {
											localStorage.removeItem('jwt');
											setUserData(null);
											router.push('/login');
										}}
									>
										Logout
									</button>
								</div>
							</div>
							<div
								className="w-[29vw]  bg-cover bg-black text-white p-6 "
								style={{
									backgroundImage:
										'url(/images/omino-bg-r.png)',
								}}
							>
								<h2 className="text-2xl font-bold tracking-wider pb-4">
									Newsletters
								</h2>
								<h4 className="">
									You are subscribed to &ldquo;General
									Subscription&rdquo;.
								</h4>
								<button
									className="mt-4 px-3 py-1 bg-sky-400 text-[#00224D] rounded-lg hover:bg-sky-500"
									onClick={(e) => router.push('/login')}
								>
									Edit
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className="flex place-content-center mt-14 pb-12">
					<div className="w-[60vw]">
						<div className="flex gap-2 place-items-center mb-4 text-xl">
							<img
								src="/images/location.png"
								className="h-8 w-8"
							/>
							<h3 className="font-semibold">Address Book</h3>
						</div>
						<div className="flex gap-[2vw] place-content-center">
							<div className="w-[29vw] border-2 border-black p-6">
								<h2 className="text-2xl font-bold tracking-wider pb-4">
									Default Billing Address
								</h2>
								{billingAddressData !== null ? (
									<div className="">
										<h4 className="text-[#666666] pb-2">
											{billingAddressData.billingFirstName +
												' ' +
												billingAddressData.billingLastName}
										</h4>
										<h4 className="text-[#666666] pb-2">
											{billingAddressData.billingPhone}
										</h4>
										<h4 className="text-[#666666] pb-2">
											{billingAddressData.billingStreet +
												' , ' +
												billingAddressData.billingCity +
												' , ' +
												billingAddressData.billingState +
												' , ' +
												billingAddressData.billingCountry}
										</h4>
										<h4 className="text-[#666666] pb-2">
											{billingAddressData.billingzip}
										</h4>
										<button
											className="px-3 py-1 bg-sky-400 text-[#00224D] rounded-lg hover:bg-sky-500"
											onClick={(e) => {
												setBillingAddressData(null);
												localStorage.removeItem(
													'billingAddress'
												);
											}}
										>
											Delete
										</button>
									</div>
								) : (
									<div className="">
										<h4 className="text-[#666666]">
											No address is added
										</h4>
										<div className="flex pt-4 gap-3">
											<button
												className="px-3 py-1 bg-sky-400 text-[#00224D] rounded-lg hover:bg-sky-500"
												onClick={() =>
													setDisplayBillingAddress(
														!displayBillingAddress
													)
												}
											>
												Add
											</button>
										</div>
									</div>
								)}
							</div>
							<div className="w-[29vw]  p-6 border-2 border-black">
								<h2 className="text-2xl font-bold tracking-wider pb-4">
									Default Shipping Address
								</h2>
								{shippingAddressData !== null ? (
									<div className="">
										<h4 className="text-[#666666] pb-2">
											{shippingAddressData.shippingFirstName +
												' ' +
												shippingAddressData.shippingLastName}
										</h4>
										<h4 className="text-[#666666] pb-2">
											{shippingAddressData.shippingPhone}
										</h4>
										<h4 className="text-[#666666] pb-2">
											{shippingAddressData.shippingStreet +
												' , ' +
												shippingAddressData.shippingCity +
												' , ' +
												shippingAddressData.shippingState +
												' , ' +
												shippingAddressData.shippingCountry}
										</h4>
										<h4 className="text-[#666666] pb-2">
											{shippingAddressData.shippingzip}
										</h4>
										<button
											className="px-3 py-1 bg-sky-400 text-[#00224D] rounded-lg hover:bg-sky-500"
											onClick={(e) => {
												setShippingAddressData(null);
												localStorage.removeItem(
													'shippingAddress'
												);
											}}
										>
											Delete
										</button>
									</div>
								) : (
									<div className="">
										<h4 className="text-[#666666]">
											No address is added
										</h4>
										<div className="flex pt-4 gap-3">
											<button
												className="px-3 py-1 bg-sky-400 text-[#00224D] rounded-lg hover:bg-sky-500"
												onClick={() =>
													setDisplayShippingAddress(
														!displayShippingAddress
													)
												}
											>
												Add
											</button>
										</div>
									</div>
								)}
							</div>
						</div>
					</div>
				</div>
				<div className="flex place-content-center">
					<fieldset
						className={`w-[60vw] border-2 border-black rounded-xl px-16 py-6 mb-10 ${
							displayBillingAddress ? 'visible' : 'hidden'
						}`}
					>
						<legend className="text-xl font-semibold">
							Add Default Billing Address
						</legend>
						<form className="">
							<h2 className="font-semibold text-lg mb-3">
								Contact Information
							</h2>
							<div className="grid">
								<div className="flex gap-5 mb-2">
									<input
										className="w-[40%] px-3 py-1 placeholder:text-lg bg-transparent border-2 border-blue-950 rounded-lg"
										type="text"
										name="firstName"
										placeholder="First Name"
										onChange={(e) =>
											setBillingFirstName(e.target.value)
										}
									/>
									<input
										className="w-[40%] px-3 py-1 placeholder:text-lg bg-transparent border-2 border-blue-950 rounded-lg"
										type="text"
										name="lastName"
										placeholder="Last Name"
										onChange={(e) =>
											setBillingLastName(e.target.value)
										}
									/>
								</div>
								<input
									className="w-[40%] px-3 py-1 placeholder:text-lg bg-transparent border-2 border-blue-950 rounded-lg"
									type="phone"
									name="phone"
									placeholder="Phone Number"
									onChange={(e) =>
										setBillingPhone(e.target.value)
									}
								/>
							</div>
							<h2 className="font-semibold text-lg mb-3 mt-8">
								Address Information
							</h2>
							<div className="grid">
								<input
									className="w-[82%] px-3 py-1 placeholder:text-lg bg-transparent border-2 border-blue-950 rounded-lg mb-2"
									type="text"
									name="street"
									placeholder="Street Address"
									onChange={(e) =>
										setBillingStreet(e.target.value)
									}
								/>
								<div className="flex gap-4 mb-2">
									<input
										className="w-[40%] px-3 py-1 placeholder:text-lg bg-transparent border-2 border-blue-950 rounded-lg"
										type="text"
										name="city"
										placeholder="City"
										onChange={(e) =>
											setBillingCity(e.target.value)
										}
									/>
									<input
										className="w-[40%] px-3 py-1 placeholder:text-lg bg-transparent border-2 border-blue-950 rounded-lg"
										type="text"
										name="state"
										placeholder="State/Province"
										onChange={(e) =>
											setBillingState(e.target.value)
										}
									/>
								</div>
								<div className="flex gap-4">
									<input
										className="w-[40%] px-3 py-1 placeholder:text-lg bg-transparent border-2 border-blue-950 rounded-lg"
										type="number"
										name="zip"
										placeholder="Zip code"
										onChange={(e) =>
											setBillingZip(e.target.value)
										}
									/>
									<input
										className="w-[40%] px-3 py-1 placeholder:text-lg bg-transparent border-2 border-blue-950 rounded-lg"
										type="text"
										name="country"
										placeholder="Country"
										onChange={(e) =>
											setBillingCountry(e.target.value)
										}
									/>
								</div>
							</div>
							<input
								type="button"
								className="mt-6 px-3 py-1 border-2 border-black rounded-lg bg-blue-700 text-white font-semibold text-xl hover:bg-sky-900"
								value="Save Address"
								onClick={billingAddressSubmit}
							/>
						</form>
					</fieldset>
				</div>{' '}
				<div className="flex place-content-center">
					<fieldset
						className={`w-[60vw] border-2 border-black rounded-xl px-16 py-6 mb-10 ${
							displayShippingAddress ? 'visible' : 'hidden'
						}`}
					>
						<legend className="text-xl font-semibold">
							Add Default Shipping Address
						</legend>
						<form className="">
							<h2 className="font-semibold text-lg mb-3">
								Contact Information
							</h2>
							<div className="grid">
								<div className="flex gap-5 mb-2">
									<input
										className="w-[40%] px-3 py-1 placeholder:text-lg bg-transparent border-2 border-blue-950 rounded-lg"
										type="text"
										name="firstName"
										placeholder="First Name"
										onChange={(e) =>
											setShippingFirstName(e.target.value)
										}
									/>
									<input
										className="w-[40%] px-3 py-1 placeholder:text-lg bg-transparent border-2 border-blue-950 rounded-lg"
										type="text"
										name="lastName"
										placeholder="Last Name"
										onChange={(e) =>
											setShippingLastName(e.target.value)
										}
									/>
								</div>
								<input
									className="w-[40%] px-3 py-1 placeholder:text-lg bg-transparent border-2 border-blue-950 rounded-lg"
									type="phone"
									name="phone"
									placeholder="Phone Number"
									onChange={(e) =>
										setShippingPhone(e.target.value)
									}
								/>
							</div>
							<h2 className="font-semibold text-lg mb-3 mt-8">
								Address Information
							</h2>
							<div className="grid">
								<input
									className="w-[82%] px-3 py-1 placeholder:text-lg bg-transparent border-2 border-blue-950 rounded-lg mb-2"
									type="text"
									name="street"
									placeholder="Street Address"
									onChange={(e) =>
										setShippingStreet(e.target.value)
									}
								/>
								<div className="flex gap-4 mb-2">
									<input
										className="w-[40%] px-3 py-1 placeholder:text-lg bg-transparent border-2 border-blue-950 rounded-lg"
										type="text"
										name="city"
										placeholder="City"
										onChange={(e) =>
											setShippingCity(e.target.value)
										}
									/>
									<input
										className="w-[40%] px-3 py-1 placeholder:text-lg bg-transparent border-2 border-blue-950 rounded-lg"
										type="text"
										name="state"
										placeholder="State/Province"
										onChange={(e) =>
											setShippingState(e.target.value)
										}
									/>
								</div>
								<div className="flex gap-4">
									<input
										className="w-[40%] px-3 py-1 placeholder:text-lg bg-transparent border-2 border-blue-950 rounded-lg"
										type="number"
										name="zip"
										placeholder="Zip code"
										onChange={(e) =>
											setShippingZip(e.target.value)
										}
									/>
									<input
										className="w-[40%] px-3 py-1 placeholder:text-lg bg-transparent border-2 border-blue-950 rounded-lg"
										type="text"
										name="country"
										placeholder="Country"
										onChange={(e) =>
											setShippingCountry(e.target.value)
										}
									/>
								</div>
							</div>
							<input
								type="button"
								className="mt-6 px-3 py-1 border-2 border-black rounded-lg bg-blue-700 text-white font-semibold text-xl hover:bg-sky-900"
								value="Save Address"
								onClick={shippingAddressSubmit}
							/>
						</form>
					</fieldset>
				</div>
			</section>
		</>
	);
}

export default Profile;
