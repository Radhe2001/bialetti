import { NextRequest, NextResponse } from 'next/server';
import User from '../../../db/models/user';
import encode from '../../../auth/bcript';

export async function POST(req: NextRequest, res: NextResponse) {
	const body = await req.json();
	let encPass = await encode(body.password);
	let new_user = new User({
		first_name: body.first_name,
		middle_name: body.middle_name,
		last_name: body.last_name,
		email: body.email,
		password: encPass,
	});
	let user = await new_user.save();
	if (!user)
		return NextResponse.json({
			success: true,
			message: 'unable to register the user',
		});
	return NextResponse.json({
		success: true,
		message: user,
	});
}
