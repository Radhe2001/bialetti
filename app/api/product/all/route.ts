import { NextRequest, NextResponse } from 'next/server';
import Product from '../../../../db/models/product';

export async function POST(req: NextRequest, res: NextResponse) {
	try {
		let products = await Product.aggregate([{ $sample: { size: 12 } }]);
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
