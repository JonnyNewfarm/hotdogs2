import connect from "@/lib/db";
import Product from "@/lib/modals/product";
import { Types } from "mongoose";
import { NextApiRequest, NextApiResponse } from "next";

import { NextResponse } from "next/server";




export const GET = async (request: Request) => {
    
    
      try {

        const {searchParams} = new URL(request.url);
        
        const q = searchParams.get("keyword") as string
        
     
       
          await connect();

          const filter: any ={}
          if(q) {
            filter.$or = [
               { title: {$regex: q, $options: 'i'}}
            ]
          }
          
  
          const products = await Product.find(filter);
          return new NextResponse(JSON.stringify({products}), {status: 200});
      } catch (error: any) {
          return new NextResponse('Something went wrong trying to fetch products' + error.message, {status: 500})
      }
      
  }