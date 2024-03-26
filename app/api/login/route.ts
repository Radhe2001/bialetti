import { NextRequest, NextResponse } from 'next/server';
import User from '../../../db/models/user';
import bcrypt from 'bcrypt';
import generateAccessToken from '../../../auth/jwtGenerator';
export async function POST(req: NextRequest, res: NextResponse) {
	try {
		let body = await req.json();
		try {
			let user = await User.findOne({ email: body.email });
			if (!user)
				return NextResponse.json({
					success: false,
					message: 'unable to find user',
				});
			let result = await bcrypt.compare(body.password, user.password);
			if (!result)
				return NextResponse.json({
					success: false,
					message: 'ubnable to match the password',
				});
			let token = generateAccessToken(user);
			return NextResponse.json({
				success: true,
				message: token,
			});
		} catch (err) {
			return NextResponse.json({
				success: false,
				message: err,
			});
		}
	} catch (err) {
		return NextResponse.json({
			success: false,
			message: 'failed to parse the body',
		});
	}
}
