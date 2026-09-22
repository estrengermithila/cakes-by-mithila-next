"use client";

import Link from "next/link";
import React, { useState } from "react";
import {
  FiSearch,
  FiShoppingCart,
  FiChevronDown,
  FiMenu,
  FiX,
} from "react-icons/fi";

const Navbar = () => {
  const [mobileMenu, setMobileMenu] = useState(false);

  return (
    <header className="relative z-50 bg-white">
      {/* Top small black line */}
      <div className="absolute top-0 left-0 w-full h-[2px] bg-[#222]" />

      <nav className="relative h-[108px] bg-white">
        <div className="mx-auto flex h-full max-w-[1160px] items-center justify-between px-5 lg:px-0">

          {/* ================= LOGO ================= */}
          <div className="flex items-center">
            <Link
              href="/"
              className="font-serif text-[32px] leading-none text-[#583d3d]"
            >
              Cake
              <span className="ml-[1px] font-serif italic font-bold text-[#ed777b]">
                Art
              </span>
            </Link>
          </div>

          {/* ================= DESKTOP MENU ================= */}
          <div className="hidden items-center lg:flex">

            <ul className="flex items-center gap-[42px]">

              <li>
                <Link
                  href="/"
                  className="font-serif text-[14px] font-bold text-[#5a3434] transition hover:text-[#ed777b]"
                >
                  HOME
                </Link>
              </li>

              <li>
                <Link
                  href="/blog"
                  className="font-serif text-[14px] font-bold text-[#5a3434] transition hover:text-[#ed777b]"
                >
                  BLOG
                </Link>
              </li>

              <li>
                <Link
                  href="/recipes"
                  className="font-serif text-[14px] font-bold text-[#5a3434] transition hover:text-[#ed777b]"
                >
                  RECIPES
                </Link>
              </li>

              <li>
                <Link
                  href="/shop"
                  className="font-serif text-[14px] font-bold text-[#5a3434] transition hover:text-[#ed777b]"
                >
                  SHOP
                </Link>
              </li>

              {/* FEATURES */}
              <li className="group relative">
                <button className="flex items-center gap-1 font-serif text-[14px] font-bold text-[#5a3434] transition hover:text-[#ed777b]">
                  FEATURES
                  <FiChevronDown
                    size={13}
                    className="transition group-hover:rotate-180"
                  />
                </button>

                {/* Dropdown */}
                <div className="invisible absolute left-0 top-[30px] w-[180px] translate-y-2 bg-white py-3 opacity-0 shadow-lg transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
                  <Link
                    href="#"
                    className="block px-5 py-2 text-sm text-[#583d3d] hover:bg-[#fff4f4] hover:text-[#ed777b]"
                  >
                    About Us
                  </Link>

                  <Link
                    href="#"
                    className="block px-5 py-2 text-sm text-[#583d3d] hover:bg-[#fff4f4] hover:text-[#ed777b]"
                  >
                    Gallery
                  </Link>

                  <Link
                    href="#"
                    className="block px-5 py-2 text-sm text-[#583d3d] hover:bg-[#fff4f4] hover:text-[#ed777b]"
                  >
                    FAQ
                  </Link>
                </div>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="font-serif text-[14px] font-bold text-[#5a3434] transition hover:text-[#ed777b]"
                >
                  CONTACT
                </Link>
              </li>
            </ul>

            {/* ================= SEARCH ================= */}
            <div className="ml-8 flex items-center border-l border-[#ddd] pl-7">
              <button
                aria-label="Search"
                className="text-[#583d3d] transition hover:text-[#ed777b]"
              >
                <FiSearch size={20} strokeWidth={2} />
              </button>
            </div>

            {/* ================= CART ================= */}
            <div className="relative ml-6">
              <button
                aria-label="Shopping cart"
                className="relative text-[#583d3d] transition hover:text-[#ed777b]"
              >
                <FiShoppingCart size={21} strokeWidth={2} />

                {/* 0 Badge */}
                <span className="absolute -right-[13px] -top-[12px] flex h-[24px] min-w-[24px] items-center justify-center rounded-full bg-[#ed777b] px-1 text-[12px] font-bold text-white">
                  0
                </span>
              </button>
            </div>
          </div>

          {/* ================= MOBILE BUTTON ================= */}
          <button
            onClick={() => setMobileMenu(!mobileMenu)}
            className="block text-[#583d3d] lg:hidden"
            aria-label="Toggle menu"
          >
            {mobileMenu ? <FiX size={26} /> : <FiMenu size={26} />}
          </button>
        </div>

        {/* ================= MOBILE MENU ================= */}
        {mobileMenu && (
          <div className="absolute left-0 top-[108px] w-full border-t border-gray-100 bg-white shadow-lg lg:hidden">
            <div className="flex flex-col px-6 py-5">

              <Link
                href="/"
                className="border-b border-gray-100 py-3 font-serif text-sm font-bold text-[#583d3d]"
              >
                HOME
              </Link>

              <Link
                href="/blog"
                className="border-b border-gray-100 py-3 font-serif text-sm font-bold text-[#583d3d]"
              >
                BLOG
              </Link>

              <Link
                href="/recipes"
                className="border-b border-gray-100 py-3 font-serif text-sm font-bold text-[#583d3d]"
              >
                RECIPES
              </Link>

              <Link
                href="/shop"
                className="border-b border-gray-100 py-3 font-serif text-sm font-bold text-[#583d3d]"
              >
                SHOP
              </Link>

              <Link
                href="/features"
                className="border-b border-gray-100 py-3 font-serif text-sm font-bold text-[#583d3d]"
              >
                FEATURES
              </Link>

              <Link
                href="/contact"
                className="py-3 font-serif text-sm font-bold text-[#583d3d]"
              >
                CONTACT
              </Link>

              {/* Mobile icons */}
              <div className="mt-3 flex items-center gap-6 border-t border-gray-100 pt-5">

                <button className="text-[#583d3d]">
                  <FiSearch size={20} />
                </button>

                <button className="relative text-[#583d3d]">
                  <FiShoppingCart size={21} />

                  <span className="absolute -right-3 -top-3 flex h-5 min-w-5 items-center justify-center rounded-full bg-[#ed777b] px-1 text-[10px] font-bold text-white">
                    0
                  </span>
                </button>

              </div>
            </div>
          </div>
        )}

        {/* =================================================
            EXACT WAVE
            ================================================= */}
        <div className="pointer-events-none absolute -bottom-[10px] left-0 w-full overflow-hidden leading-[0]">

          <svg
            className="relative block h-[18px] w-full"
            viewBox="0 0 1440 18"
            preserveAspectRatio="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="
                M0 7
                C12 7 12 13 24 13
                C36 13 36 7 48 7
                C60 7 60 13 72 13
                C84 13 84 7 96 7
                C108 7 108 13 120 13
                C132 13 132 7 144 7
                C156 7 156 13 168 13
                C180 13 180 7 192 7
                C204 7 204 13 216 13
                C228 13 228 7 240 7
                C252 7 252 13 264 13
                C276 13 276 7 288 7
                C300 7 300 13 312 13
                C324 13 324 7 336 7
                C348 7 348 13 360 13
                C372 13 372 7 384 7
                C396 7 396 13 408 13
                C420 13 420 7 432 7
                C444 7 444 13 456 13
                C468 13 468 7 480 7
                C492 7 492 13 504 13
                C516 13 516 7 528 7
                C540 7 540 13 552 13
                C564 13 564 7 576 7
                C588 7 588 13 600 13
                C612 13 612 7 624 7
                C636 7 636 13 648 13
                C660 13 660 7 672 7
                C684 7 684 13 696 13
                C708 13 708 7 720 7
                C732 7 732 13 744 13
                C756 13 756 7 768 7
                C780 7 780 13 792 13
                C804 13 804 7 816 7
                C828 7 828 13 840 13
                C852 13 852 7 864 7
                C876 7 876 13 888 13
                C900 13 900 7 912 7
                C924 7 924 13 936 13
                C948 13 948 7 960 7
                C972 7 972 13 984 13
                C996 13 996 7 1008 7
                C1020 7 1020 13 1032 13
                C1044 13 1044 7 1056 7
                C1068 7 1068 13 1080 13
                C1092 13 1092 7 1104 7
                C1116 7 1116 13 1128 13
                C1140 13 1140 7 1152 7
                C1164 7 1164 13 1176 13
                C1188 13 1188 7 1200 7
                C1212 7 1212 13 1224 13
                C1236 13 1236 7 1248 7
                C1260 7 1260 13 1272 13
                C1284 13 1284 7 1296 7
                C1308 7 1308 13 1320 13
                C1332 13 1332 7 1344 7
                C1356 7 1356 13 1368 13
                C1380 13 1380 7 1392 7
                C1404 7 1404 13 1416 13
                C1428 13 1428 7 1440 7
                L1440 0
                L0 0
                Z
              "
              fill="white"
            />
          </svg>

        </div>
      </nav>
    </header>
  );
};

export default Navbar;