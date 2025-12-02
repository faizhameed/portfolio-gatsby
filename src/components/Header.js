"use client";

import { useTheme } from "./ThemeProvider";
import Link from "next/link";

import { TbSunglassesFilled } from "react-icons/tb";

import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi2";

export default function Header() {
  const { theme, toggleTheme, mounted } = useTheme();

  return (
    <header className="py-6 flex justify-between items-center">
      <Link href="/" className="flex items-center gap-2 group cursor-pointer">
        <div className="flex flex-col items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:opacity-80">
          <svg
            className="text-2xl leading-none w-10 h-10 bg-background-light dark:bg-background-dark z-10 rounded-full"
            viewBox="110 -250 400 748"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M490 296.9C480.51 239.51 450.51 64 392.3 64c-14 0-26.49 5.93-37 14a58.21 58.21 0 0 1-70.58 0c-10.51-8-23-14-37-14-58.2 0-88.2 175.47-97.71 232.88C188.81 309.47 243.73 320 320 320s131.23-10.51 170-23.1zm142.9-37.18a16 16 0 0 0-19.75 1.5c-1 .9-101.27 90.78-293.16 90.78-190.82 0-292.22-89.94-293.24-90.84A16 16 0 0 0 1 278.53C1.73 280.55 78.32 480 320 480s318.27-199.45 319-201.47a16 16 0 0 0-6.09-18.81z"></path>
          </svg>
          <TbSunglassesFilled className="text-3xl leading-none relative bottom-4" />
        </div>
        <span className="font-bold text-lg transition-opacity group-hover:opacity-80">
          Faiz Hameed
        </span>
      </Link>
      <nav className="hidden md:flex items-center gap-8 text-sm font-medium text-subtle-light dark:text-subtle-dark">
        <a
          className="hover:text-heading-light dark:hover:text-heading-dark transition-colors"
          href="/#about"
        >
          About
        </a>
        <a
          className="hover:text-heading-light dark:hover:text-heading-dark transition-colors"
          href="/#work"
        >
          Work
        </a>
        <a
          className="hover:text-heading-light dark:hover:text-heading-dark transition-colors"
          href="/#youtube"
        >
          YouTube
        </a>
        <a
          className="hover:text-heading-light dark:hover:text-heading-dark transition-colors"
          href="/blog"
        >
          Blog
        </a>
        <a
          className="hover:text-heading-light dark:hover:text-heading-dark transition-colors"
          href="https://faizhameed.medium.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Medium
        </a>
      </nav>
      <button
        onClick={toggleTheme}
        className="w-10 h-10 flex items-center justify-center rounded-full border border-border-light dark:border-border-dark hover:opacity-80 transition-opacity"
        aria-label="Toggle theme"
        disabled={!mounted}
      >
        {mounted && theme === "dark" ? (
          <HiOutlineSun className="text-xl" />
        ) : (
          <HiOutlineMoon className="text-xl" />
        )}
      </button>
    </header>
  );
}
