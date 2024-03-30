'use client';
import React, { useState } from 'react';
import axios from 'axios';
import { redirect, useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
function Register() {
	const [firstName, setFirstName] = useState('');
	const [middleName, setMiddleName] = useState('');
	const [lastName, setLastName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [otp, setOtp] = useState('');
	const [serverOtp, setServerOtp] = useState('');
	const [agree, setAgree] = useState(false);
	const [varified, setVarified] = useState(false);
	const router = useRouter();
	const varifyOtp = (e) => {
		e.preventDefault();
		if (email.length > 0) {
			axios
				.post('http://localhost:3000/api/otp', { email: email })
				.then((res) => {
					setServerOtp(res.data.otp);
					setVarified(!varified);
				})
				.catch((err) => console.log(err));
		} else alert('Please fill the email field first');
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		if (password === confirmPassword) {
			if (otp == serverOtp) {
				axios
					.post('http://localhost:3000/api/register', {
						first_name: firstName,
						middle_name: middleName,
						last_name: lastName,
						email: email,
						password: password,
					})
					.then((data) => {
						alert('Registered successfully');
						router.push('/login');
					})
					.catch((err) => console.log(err));
			} else alert("OTP didn't matched", otp);
		} else alert('Password mismatched');
	};
	return (
		<form onSubmit={handleSubmit} className="py-16 bg-[#F0EDED]">
			<h1 className="ml-[17vw] text-4xl font-bold tracking-wide mb-16">
				Create New Customer Account
			</h1>
			<section className="flex place-content-center gap-[2vw] ">
				<section className="w-[32vw] border-2 border-black p-6 rounded-bl-3xl rounded-tr-3xl">
					<div className="flex place-items-center gap-3 mb-8">
						<Image className="h-8 w-8" src="/images/user.png" />
						<h3 className="text-3xl font-semibold">
							Personal Information
						</h3>
					</div>
					<div className="">
						<div className="grid">
							<input
								className="bg-transparent border-[2px] border-black  hover:border-[#b43c8e]  py-2 px-3 text-xl font-semibold rounded-lg mb-2 w-[90%]"
								type="text"
								name="first_name"
								placeholder="First Name"
								onChange={(e) => setFirstName(e.target.value)}
								required
							></input>
							<input
								className="bg-transparent border-[2px] border-black  hover:border-[#b43c8e]  py-2 px-3 text-xl font-semibold rounded-lg mb-2 w-[90%]"
								type="text"
								name="middle_name"
								placeholder="Middle Name"
								onChange={(e) => setMiddleName(e.target.value)}
							></input>
							<input
								className="bg-transparent border-[2px] border-black  hover:border-[#b43c8e]  py-2 px-3 text-xl font-semibold rounded-lg mb-2 w-[90%]"
								type="text"
								name="last_name"
								placeholder="Last Name"
								onChange={(e) => setLastName(e.target.value)}
								required
							></input>
						</div>
						<div className="">
							<input
								className="h-5 w-5"
								type="checkbox"
								name="agree"
								onChange={(e) => setAgree(!agree)}
								required
							></input>
							<h3 className="">
								Having read and understood the privacy policy, I
								hereby consent to the processing of my personal
								data for profiling purposes.
							</h3>
						</div>
					</div>
				</section>
				<section className="w-[32vw] border-2 border-black p-6 rounded-bl-3xl rounded-tr-3xl">
					<div className="flex place-items-center gap-3 mb-8">
						<Image className="h-8 w-8" src="/images/user.png" />
						<h3 className="text-3xl font-semibold">
							Sign-in Information
						</h3>
					</div>
					<div className="w-full">
						<div className="grid">
							<input
								className="bg-transparent border-[2px] border-black  hover:border-[#b43c8e]  py-2 px-3 text-xl font-semibold rounded-lg mb-2 w-[90%]"
								type="email"
								name="email"
								placeholder="Email"
								onChange={(e) => setEmail(e.target.value)}
								required
							></input>
							<input
								className="bg-transparent border-[2px] border-black  hover:border-[#b43c8e]  py-2 px-3 text-xl font-semibold rounded-lg mb-2 w-[90%]"
								type="text"
								name="password"
								placeholder="Password"
								onChange={(e) => setPassword(e.target.value)}
								required
							></input>
							<input
								className="bg-transparent border-[2px] border-black  hover:border-[#b43c8e]  py-2 px-3 text-xl font-semibold rounded-lg mb-2 w-[90%]"
								type="text"
								name="Confirm Password"
								placeholder="Confirm Password"
								onChange={(e) =>
									setConfirmPassword(e.target.value)
								}
								required
							></input>
							<input
								className={`bg-transparent border-[2px] border-black ${
									varified ? '' : 'hidden'
								}  hover:border-[#b43c8e]  py-2 px-3 text-xl font-semibold rounded-lg mb-2 w-[90%]`}
								type="text"
								name="otp"
								placeholder="Enter OTP"
								onChange={(e) => setOtp(e.target.value)}
							></input>
						</div>
					</div>
				</section>
			</section>
			<div className="w-full flex place-content-end mt-10">
				<div className="flex ml-auto mr-[17vw] gap-4">
					<Link
						href="/login"
						className="px-5 py-1 border-2 text-xl font-semibold rounded-xl hover:bg-[#704350] bg-[#1F2544] text-white border-black"
					>
						Back
					</Link>
					<button
						className="px-5 py-1 border-2 text-xl font-semibold rounded-xl hover:bg-[#704350] bg-[#1F2544] text-white border-black"
						style={{ display: varified ? 'none' : '' }}
						onClick={varifyOtp}
					>
						Send Otp
					</button>
					<input
						className="px-5 py-1 border-2 text-xl font-semibold rounded-xl hover:bg-[#704350] bg-[#1F2544] text-white border-black"
						style={{ display: varified ? '' : 'none' }}
						type="submit"
						value="Register"
					/>
				</div>
			</div>
		</form>
	);
}

export default Register;
