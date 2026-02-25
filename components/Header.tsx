"use client";

import Link from "next/link";
import SearchBar from "./SearchBar";
import Image from "next/image";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 h-auto md:h-16 w-full bg-black px-4 md:px-6 py-2 md:py-0">
      <div className="mx-auto flex h-full items-center gap-3 md:gap-6 min-w-0">
        <Link
          className="flex flex-col md:flex-row md:items-center text-base md:text-xl font-bold text-white shrink-0 leading-tight"
          href="/"
        >
          Recipe Finder App
          <span className="text-sm font-light italic text-yellow-400 md:ml-2">
            - by Raka Bayu
          </span>
        </Link>

        <div className="flex-1 min-w-0 mt-2 md:mt-0">
          <SearchBar />
        </div>

        <div className="flex gap-3 md:gap-5 text-xs md:text-sm font-bold text-white shrink-0">
          <button className="flex items-center gap-2 hover:underline">
            {" "}
            <Image
              src="/icons/category.png"
              alt="Category"
              width={20}
              height={20}
            />
            <span className="hidden md:inline">CATEGORY</span>
          </button>
          <button className="flex items-center gap-2 hover:underline">
            {" "}
            <Image
              src="/icons/bookmarks.png"
              alt="Bookmarks"
              width={20}
              height={20}
            />
            <span className="hidden md:inline">BOOKMARKS</span>
          </button>
        </div>
      </div>
    </header>
  );
}
