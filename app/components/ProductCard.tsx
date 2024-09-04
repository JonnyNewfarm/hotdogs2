"use client";

import Link from "next/link";

export interface ProductProps {
  _id: string;
  title: string;
  description: string;
  ingredients: string;
  image: string;
}

interface Props {
  products: ProductProps[];
}
const ProductCard = ({ products }: Props) => {
  return (
    <>
      <h1 className="text-center font-bold text-2xl pb-10">Products</h1>
      <div className="max-w-screen-xl mx-auto grid sm:grid-cols-1 md:grid-cols-2  xl:grid-cols-3 gap-10 py-10">
        {products.map((item) => (
          <Link
            href={{ pathname: "/productdetails", query: { _id: item._id } }}
            key={item._id}
          >
            <div
              className="card card-compact bg-indigo-50 w-80 shadow-xl"
              style={{ height: "500px" }}
            >
              <figure>
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    height: "300px",
                    width: "370px",
                    objectFit: "cover",
                    borderRadius: "20px",
                  }}
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item.title}</h2>
                <p>{item.description}</p>
                <div className="card-actions justify-end">
                  <button className=" btn bg-indigo-950 text-white ">
                    Read more
                  </button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default ProductCard;
