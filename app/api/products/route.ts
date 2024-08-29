import connect from "@/lib/db";
import Product from "@/lib/modals/product";
import { Types } from "mongoose";

import { NextResponse } from "next/server";
const ObjectId = require("mongoose").Types.ObjectId;

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

export const PATCH = async (request: Request) => {
  try{
    const body = await request.json();
   const {productId, newTitle} = body;

   await connect(); 
   if (!productId || !newTitle) {
    return new NextResponse(
      JSON.stringify({message: "Product ID or new title not found"}),
      {status: 400}
    
    );


   }

if (!Types.ObjectId.isValid(productId)) {
  return new NextResponse(
    JSON.stringify({message: "Invalid product ID"}),
    {status: 400}
  
  );
}

const updatedProduct = await Product.findOneAndUpdate(
  {_id: new ObjectId(productId) },
  { title: newTitle},
  {new: true},
 );
if (!updatedProduct) {
 return new NextResponse(
  JSON.stringify({message: "Product was not found in the database"}),
  {status: 400}

);
}

 return new NextResponse(
  JSON.stringify({message: "Product is updated", product: updatedProduct}),
  {status: 200}

);

  } catch(error: any)  {
    return new NextResponse(
      "Product is updated" + error.message, {
        status: 500,
      });
     }
};

export const DELETE = async (request: Request) => {

  try {
    const {searchParams} =new URL(request.url);
    const productId = searchParams.get('productId');
    if(!productId) {
      return new NextResponse(
        JSON.stringify({message: "ID not found"}),
        {status: 400}
      );
    }

    if(!Types.ObjectId.isValid(productId)) {
      return new NextResponse(JSON.stringify({message: "invalid product ID"}),{
        status: 400,
      });
    }

    await connect();

    const deletedProduct = await Product.findByIdAndDelete(
      new Types.ObjectId(productId)
    );

    if(!deletedProduct) {
      return new NextResponse(
        JSON.stringify({message:"product not found in the database"}),
        {status: 400}
      );
    }

    return new NextResponse(
      JSON.stringify({message:"product deleted successfully", product: deletedProduct}),
      {status: 200}
    );


  } catch( error: any) {
    return new NextResponse(
      "Error in deleting product" + error.message,
      {status: 200}
    );
  
  }
 
}