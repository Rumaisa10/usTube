"use client";

import Link from "next/link";
import SearchBar from "./SearchBar";
import SignOut from "./SignOut";
import ProfileButton from "./Profile";

export default function Navbar() {
  return (
    <nav className="w-full h-15 bg-cyan-800 text-white border-b border-white/10">
      <div className="max-w-350 mx-auto px-4 py-3 flex items-center justify-between gap-4">
        <Link href="/" className="text-xl font-bold tracking-wide">
          CoderFlix
        </Link>
        <SearchBar></SearchBar>
        <SignOut></SignOut>
        <ProfileButton></ProfileButton>
      </div>
    </nav>
  );
}
