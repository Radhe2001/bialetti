import { NextRequest, NextResponse } from 'next/server';
import Product from '../../../db/models/product';
require('dotenv').config();

export async function POST(req: NextRequest, res: NextResponse) {
	try {
		let body = await req.json();
		let product = await Product.create(body);
		return NextResponse.json({
			status: 200,
			success: true,
			product: product,
		});
	} catch (err) {
		return NextResponse.json({ status: 402, success: false, message: err });
	}
}
