"use client";

import Link from "next/link";
import SearchBar from "./SearchBar";
import Image from "next/image";
import { fetchRecipe } from "@/api/FetchRecipe";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 h-16 w-full bg-black px-6">
      <div className="mx-auto flex h-full  items-center gap-6 min-w-0 justify-between">
        <Link
          className="text-xl font-bold text-white whitespace-nowrap"
          href="/"
        >
          Recipe Finder App
          <span className="ml-2 text-sm font-light italic text-yellow-400">
            - by Raka Bayu
          </span>
        </Link>

        <div className="border flex-1 min-w-0">
          <SearchBar />
        </div>

        <div className="flex gap-5 text-sm font-bold text-white min-w-0">
          <button className="flex items-center gap-2 hover:underline">
            {" "}
            <Image
              src="/icons/category.png"
              alt="Category"
              width={20}
              height={20}
            />
            CATEGORY
          </button>
          <button className="flex items-center gap-2 hover:underline">
            {" "}
            <Image
              src="/icons/bookmarks.png"
              alt="Bookmarks"
              width={20}
              height={20}
            />
            BOOKMARKS
          </button>
        </div>
      </div>
    </header>
  );
}
