import connect from "@/lib/db";
import Product from "@/lib/modals/product";
import { NextResponse } from "next/server";

export const GET = async () => {
    try {
        await connect();
        const products = await Product.find();
        return new NextResponse(JSON.stringify(products), {status: 200});
    } catch (error: any) {
        return new NextResponse('Something went wrong trying to fetch products' + error.message, {status: 500})
    }
    
}

export const POST = async (request: Request) => {
try {
    const body = await request.json();
    await connect();

    const newProduct = new Product(body);
    await newProduct.save();
    return new NextResponse(JSON.stringify({message: "Product was created", product: newProduct}), {status: 200})


} catch (error: any) {
  return new NextResponse("Error in creating new product" + error.message, {
    status: 500, 
  });
}
}
