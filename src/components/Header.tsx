"use client"
import React from 'react'
import Link from "next/link";

export default function Header() {
  return (
    <div className="bg-orange-200 h-16 flex justify-between items-center px-4 sm:px-6 md:px-8 py-2 text-xs md:text-sm font-medium text-gray-500">
      <div>
        <div className="text-black font-serif text-base sm:text-lg md:text-xl"> Food Blog </div>
      </div>
      <ul className="flex gap-4 text-sm font-serif">
        <Link href="/hero" className="hover:text-gray-800"> Home</Link>
        <Link href="/contact" className="hover:text-gray-800"> Contact</Link>
        <Link href="/blog" className="hover:text-gray-800"> Blog </Link>
      </ul>
    </div>
  );
}
