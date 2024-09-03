"use client";

import React from "react";
import Search from "./components/Search";
import SearchPage from "./search/page";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className="ml-12 mr-12 mt-10">
      <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className="navbar">
            <div className="flex-none lg:hidden">
              <label
                htmlFor="my-drawer-3"
                aria-label="open sidebar"
                className="btn btn-square btn-ghost"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  className="inline-block h-6 w-6 stroke-current"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </label>
            </div>
            <div className="mx-2 flex-1 px-2 font-bold text-lg">Hotdog Co</div>
            <Link href="search" className="mt-1 mr-4">
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
            </Link>
            <div className="hidden flex-none lg:block">
              <ul className="menu menu-horizontal">
                {/* Navbar menu content here */}

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
          </div>
        </div>
        <div className="drawer-side z-20">
          <label
            htmlFor="my-drawer-3"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu bg-base-100 min-h-full w-80 p-4 z-30">
            {/* Sidebar content here */}
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
      </div>
    </div>
  );
};

export default NavBar;
