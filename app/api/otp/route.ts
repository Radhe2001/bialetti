import { NextRequest, NextResponse } from 'next/server';
const nodemailer = require('nodemailer');
require('dotenv').config();

export async function POST(req: NextRequest, res: NextResponse) {
	let otp = 255847 + Math.floor(Math.random() * 100000);
	let data = await req.json();
	let transporter = nodemailer.createTransport({
		service: 'Gmail',
		auth: {
			user: process.env.SENDER,
			pass: process.env.EMAILPASSWORD,
		},
	});

	let mailOptions = {
		from: process.env.SENDER,
		to: data.email,
		subject: `OTP From Belatti Application`,
		text: `Greetings of the day this is the varification otp from the Belatti application \n\n Your OTP is ${otp}`,
	};

	transporter.sendMail(mailOptions);
	return NextResponse.json({ success: true, otp: otp });
}
