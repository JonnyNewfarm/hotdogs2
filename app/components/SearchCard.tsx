"use client";
import Link from "next/link";
import React from "react";

export interface SearchProductProps {
  _id: string;
  title: string;
  description: string;
  ingredients: string;
  image: string;
}

interface Props {
  products: SearchProductProps[];
}

export const SearchCard = ({ products }: Props) => {
  return (
    <>
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
              <div className="card-actions justify-end"></div>
            </div>
          </div>
        </Link>
      ))}
    </>
  );
};
