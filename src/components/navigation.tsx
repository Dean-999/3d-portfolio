"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white/80 dark:bg-black/80 backdrop-blur-md shadow-lg"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold hover:text-blue-500 transition-colors">
            Dean Shen
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Internal Navigation - Scroll to sections */}
            <Link
              href="#hero"
              className="text-sm font-medium hover:text-blue-500 transition-colors"
            >
              Home
            </Link>
            <Link
              href="#skills"
              className="text-sm font-medium hover:text-blue-500 transition-colors"
            >
              Skills
            </Link>
            <Link
              href="#projects"
              className="text-sm font-medium hover:text-blue-500 transition-colors"
            >
              Projects
            </Link>
            <Link
              href="#contact"
              className="text-sm font-medium hover:text-blue-500 transition-colors"
            >
              Contact
            </Link>

            {/* Separator */}
            <div className="h-6 w-px bg-gray-300 dark:bg-gray-700"></div>

            {/* External HTML Pages - Open in new tab */}
            <a
              href="/pages/academic/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium hover:text-blue-500 transition-colors"
            >
              Academic
            </a>
            <a
              href="/pages/sport/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium hover:text-blue-500 transition-colors"
            >
              Sports
            </a>
            <a
              href="/pages/activities/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium hover:text-blue-500 transition-colors"
            >
              Activities
            </a>
            <a
              href="/pages/personal/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium hover:text-blue-500 transition-colors"
            >
              Personal
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
            onClick={() => {
              const menu = document.getElementById("mobile-menu");
              menu?.classList.toggle("hidden");
            }}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div id="mobile-menu" className="hidden md:hidden bg-white/95 dark:bg-black/95 backdrop-blur-md">
        <div className="px-4 pt-2 pb-3 space-y-1">
          <Link
            href="#hero"
            className="block px-3 py-2 text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
          >
            Home
          </Link>
          <Link
            href="#skills"
            className="block px-3 py-2 text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
          >
            Skills
          </Link>
          <Link
            href="#projects"
            className="block px-3 py-2 text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
          >
            Projects
          </Link>
          <Link
            href="#contact"
            className="block px-3 py-2 text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
          >
            Contact
          </Link>
          
          <div className="border-t border-gray-200 dark:border-gray-700 my-2"></div>
          
          <a
            href="/pages/academic/"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-3 py-2 text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
          >
            Academic →
          </a>
          <a
            href="/pages/sport/"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-3 py-2 text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
          >
            Sports →
          </a>
          <a
            href="/pages/activities/"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-3 py-2 text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
          >
            Activities →
          </a>
          <a
            href="/pages/personal/"
            target="_blank"
            rel="noopener noreferrer"
            className="block px-3 py-2 text-base font-medium hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md"
          >
            Personal →
          </a>
        </div>
      </div>
    </nav>
  );
}

