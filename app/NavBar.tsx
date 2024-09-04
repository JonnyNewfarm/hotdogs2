"use client";

import React, { useState } from "react";

import Link from "next/link";
import SearchInput from "./components/Search";

const NavBar = () => {
  const [showSearchInput, setShowSearchInput] = useState(false);
  return (
    <div className="navbar bg-base-100 mt-4 pl-7 pr-11">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link href="/products">Products</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <Link href="/" className="btn btn-ghost text-xl">
          Hotdogs co
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li>
            <Link href="/products" className="text-base">
              Products
            </Link>
          </li>
          <li>
            <Link href="/about" className="text-base">
              About
            </Link>
          </li>
          <li>
            <Link href="/contact" className="text-base">
              Contact
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {showSearchInput && <SearchInput />}

        <div
          className="mt-1 mr-4 cursor-pointer"
          onClick={() => setShowSearchInput(!showSearchInput)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 48 48"
            id="Search-Sharp--Streamline-Ionic-Sharp"
            height={20}
            width={20}
          >
            <desc>
              {"Search Sharp Streamline Icon: https://streamlinehq.com"}
            </desc>
            <path
              fill="#000000"
              d="M47.52 43.4492 33.4894 29.4163c2.2611 -3.1071 3.4774 -6.8519 3.4738 -10.6947C36.9632 8.6634 28.7798 0.48 18.7215 0.48 8.6633 0.48 0.48 8.6634 0.48 18.7216c0 10.0581 8.1833 18.2415 18.2415 18.2415 3.8428 0.0038 7.5876 -1.2126 10.6949 -3.4737L43.4492 47.52l4.0708 -4.0708ZM18.7215 31.2018c-2.4686 0.0003 -4.882 -0.7315 -6.9347 -2.1029 -2.0527 -1.3714 -3.6526 -3.3208 -4.5975 -5.6015 -0.9448 -2.2807 -1.1921 -4.7904 -0.7106 -7.2117 0.4816 -2.4212 1.6704 -4.6454 3.4161 -6.3909 1.7455 -1.7457 3.9697 -2.9345 6.3908 -3.4161 2.4214 -0.4815 4.9311 -0.2342 7.2117 0.7107 2.2808 0.9447 4.2301 2.5447 5.6015 4.5975 1.3714 2.0527 2.1033 4.466 2.1031 6.9347 -0.0039 3.3087 -1.3201 6.4808 -3.6598 8.8205 -2.3396 2.3397 -5.5118 3.656 -8.8205 3.6597Z"
              strokeWidth={1}
            />
          </svg>
        </div>

        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
              <span className="badge badge-sm indicator-item">0</span>
            </div>
          </div>
          <div
            tabIndex={0}
            className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow"
          >
            <div className="card-body">
              <span className="text-lg font-bold">8 Items</span>
              <span className="text-info">Subtotal: $999</span>
              <div className="card-actions">
                <button className="btn btn-primary btn-block">View cart</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
