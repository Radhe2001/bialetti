'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
function Login() {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [checked, setChecked] = useState(false);
	const router = useRouter();
	const handleSubmit = (event) => {
		event.preventDefault();
		axios
			.post('https://bialetti-backend-kfua.onrender.com/api/login', {
				email: email,
				password: password,
			})
			.then((data) => {
				if (data.data.success) {
					let value = { token: data.data.message };
					localStorage.setItem('jwt', JSON.stringify(value));
					router.push('/');
				} else alert("password didn't match");
			})
			.catch((err) => console.log(err));
	};
	return (
		<section className="flex bg-[#C6C4C4] w-full place-content-center gap-20">
			<section className="w-[30vw] mb-16">
				<h1 className="text-[#1A202C] font-bold text-4xl mt-16 mb-14">
					Registered Customers
				</h1>
				<form onSubmit={handleSubmit} className="grid">
					<label className="text-xl pb-2">Email</label>
					<input
						className="bg-transparent border-[2px] border-black hover:border-[#b43c8e] py-2 px-3 text-xl font-semibold rounded-lg mb-6"
						type="email"
						name="email"
						onChange={(e) => setEmail(e.target.value)}
					></input>
					<label className="text-xl pb-2">Password</label>
					<input
						className="bg-transparent border-[2px] border-black  hover:border-[#b43c8e]  py-2 px-3 text-xl font-semibold rounded-lg mb-2"
						type={checked ? 'text' : 'password'}
						name="password"
						onChange={(e) => setPassword(e.target.value)}
					></input>
					<div className="flex place-items-center gap-2 mb-8">
						<input
							className="h-5 w-5 "
							type="checkbox"
							name="showPassword"
							onChange={(e) => setChecked(!checked)}
						></input>
						<h3 className="text-lg font-semibold">Show Password</h3>
						<h1
							href="/"
							className="px-1 py-2 text-lg cursor-pointer  ml-auto text-[#27183a] hover:text-[#274558]"
							// onClick=""
						>
							Forgot Your Password?
						</h1>
					</div>

					<div className="flex place-content-center">
						<input
							className="cursor-pointer border-2 border-black px-10 py-1 text-xl font-bold tracking-wide bg-black text-white rounded-2xl"
							type="submit"
							value="SIGN IN"
						></input>
					</div>
				</form>
			</section>
			<section className=" w-[35vw] pl-10">
				<h1 className="text-[#1A202C] font-bold text-4xl mt-16 mb-14">
					New Customers
				</h1>
				<h4 className="mt-4 text-light mb-8">
					Creating an account has many benefits. Check out faster,
					keep more than one address, track order and more
				</h4>
				<Link
					className="text-xl px-6 py-2 font-bold tracking-wider rounded-2xl bg-black text-white"
					href="/register"
				>
					CREATE AN ACCOUNT
				</Link>
			</section>
		</section>
	);
}

export default Login;
