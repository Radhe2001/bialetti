import { NextRequest, NextResponse } from 'next/server';
import User from '../../../db/models/user';
import decode from '../../../auth/jwtDecode';
export async function POST(req: NextRequest, res: NextResponse) {
	const body = await req.json();
	let data = decode(body.token);
	if (data.success) {
		try {
			let user = await User.findById(data.data.id);
			return NextResponse.json({ success: true, data: user });
		} catch (err) {
			return NextResponse.json({ success: false });
		}
	} else {
		return NextResponse.json({ success: false });
	}
}
