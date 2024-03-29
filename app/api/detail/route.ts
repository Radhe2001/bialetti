import { NextRequest, NextResponse } from 'next/server';
import Product from '../../../db/models/product';

export async function POST(req: NextRequest, res: NextResponse) {
	let body = await req.json();
	try {
		let products = await Product.findById({ _id: body.id });
		return NextResponse.json({
			success: true,
			message: products,
		});
	} catch (err) {
		return NextResponse.json({
			success: false,
			message: err,
		});
	}
}
