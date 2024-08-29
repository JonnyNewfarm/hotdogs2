import connect from "@/lib/db";
import Product from "@/lib/modals/product";
import { NextResponse } from "next/server";


export const GET = async (request: Request, {params: {_id}}:any) => {
    try {
        await connect();
        const product = await Product.findOne({_id:_id});
        return new NextResponse(JSON.stringify(product), {status: 200});
    } catch (error: any) {
        return new NextResponse('Something went wrong trying to fetch products' + error.message, {status: 500})
    }
    
}