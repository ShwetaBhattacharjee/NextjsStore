"use client";

import { useEffect, useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { UserButton, useUser, useClerk } from "@clerk/nextjs";
import {
  Search,
  ShoppingCart,
  Heart,
  CircleUserRound,
  Menu,
  X,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";
import "../app/globals.css";
import useCart from "@/lib/hooks/useCart";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();
  const { user } = useUser();
  const clerk = useClerk(); // Use useClerk hook inside the functional component

  const handleLogout = () => {
    clerk.signOut(); // Use the signOut method from Clerk to log out the user
  };
  const cart = useCart();

  const [dropdownMenu, setDropdownMenu] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [timeLeft, setTimeLeft] = useState("");

  // Countdown timer logic
  useEffect(() => {
    const targetDate = new Date("2024-12-30T23:59:59").getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance <= 0) {
        setTimeLeft("00:00:00:00");
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      setTimeLeft(
        `${days}:${hours.toString().padStart(2, "0")}:${minutes
          .toString()
          .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`
      );
    };

    const timer = setInterval(updateTimer, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleSearch = () => {
    if (query !== "") {
      router.push(`/search/${query}`);
    }
  };

  return (
    <>
      <Head>
        <title>Your Website Title | HD Partz</title>
      </Head>

      <header>
        {/* Top Strip */}
        <div
          className="top-strip bg-gradient-to-r from-red-600 via-red-400 to-orange-400 text-white py-2"
          role="banner"
        >
          <div className="container text-center">
            <p className="mb-0 mt-0">
              May Edition Black Friday! <strong>35% Off Spare Parts</strong> |
              Free carbon neutral shipping on orders AED 400+ | End of Time:{" "}
              <span>{timeLeft}</span>
            </p>
          </div>
        </div>

        {/* Topbar */}
        <nav
          className="topbar bg-gray-200 text-sm py-2 px-4 flex justify-between items-center"
          role="navigation"
        >
          <div className="hidden md:flex gap-4">
            <Link rel="nofollow" href="/about-us" aria-label="About Us">
              About Us
            </Link>
            <Link rel="nofollow" href="/my-account" aria-label="My Account">
              My Account
            </Link>
            <Link rel="nofollow" href="/orders" aria-label="Order Tracking">
              Order Tracking
            </Link>
            <Link
              rel="nofollow"
              href={user ? "/wishlist" : "/sign-in"}
              className={`hover:text-red-1 ${
                pathname === "/wishlist" ? "text-red-1" : ""
              }`}
              aria-label="Wishlist"
            >
              Wishlist
            </Link>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden md:block">
              Need help? Call us: +971 502 487 319 or info@hdpartz.com
            </span>
            <div className="flex items-center gap-4">
              {/* AED Dropdown */}
              <select
                className="border rounded-md px-2 py-1"
                aria-label="Currency Selector"
              >
                <option>AED</option>
                <option>USD</option>
                <option>EUR</option>
              </select>

              {/* Mobile Search Bar */}
              <div className="md:hidden flex items-center border rounded-lg pl-3 py-1 w-70">
                <input
                  className="outline-none w-full"
                  placeholder="Search..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  aria-label="Search"
                />
              </div>
            </div>
          </div>
        </nav>
      </header>

      <main>
        {/* Navbar */}
        <div className="sticky top-0 z-10 py-2 px-4 flex justify-between items-center bg-white">
          {/* Logo */}
          <Link rel="nofollow" href="/" aria-label="Home">
            <Image
              src="/logo.png"
              alt="HD PartzLogo - Quality Automotive Parts"
              width={130}
              height={100}
            />
          </Link>

          {/* Navbar Links */}
          <nav
            className="hidden md:flex gap-6 text-sm font-semibold"
            aria-label="Main Navigation"
          >
            <Link
              rel="nofollow"
              href="/"
              className="hover:text-red-500"
              aria-label="Home"
            >
              Home
            </Link>
            <Link
              rel="nofollow"
              href="/electricals"
              className="hover:text-red-500"
              aria-label="Electricals"
            >
              Electricals
            </Link>
            <Link
              rel="nofollow"
              href="/tires-wheels"
              className="hover:text-red-500"
              aria-label="Tires & Wheels"
            >
              Tires & Wheels
            </Link>
            <Link
              rel="nofollow"
              href="/interior-accessories"
              className="hover:text-red-500"
              aria-label="Interior Accessories"
            >
              Interior Accessories
            </Link>
            <Link
              rel="nofollow"
              href="/contact"
              className="hover:text-red-500"
              aria-label="Contact"
            >
              Contact
            </Link>
          </nav>

          {/* Mobile Menu Icon */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? (
                <X className="h-6 w-6 cursor-pointer" />
              ) : (
                <Menu className="h-6 w-6 cursor-pointer" />
              )}
            </button>
          </div>

          {/* Icons */}
          <div className="hidden md:flex items-center gap-4">
            {user ? (
              <UserButton afterSignOutUrl="/sign-in" />
            ) : (
              <Link rel="nofollow" href="/sign-in" aria-label="Sign In">
                <CircleUserRound className="h-6 w-6" />
              </Link>
            )}
            <Link
              rel="nofollow"
              href={user ? "/wishlist" : "/sign-in"}
              aria-label="Wishlist"
            >
              <Heart className="h-6 w-6" />
            </Link>
            <Link
              rel="nofollow"
              href="/cart"
              className="flex items-center"
              aria-label="View Cart"
            >
              <ShoppingCart className="h-6 w-6" />
              <span>({cart.cartItems.length})</span>
            </Link>
          </div>
        </div>
      </main>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className="flex flex-col md:hidden bg-white shadow-lg"
          role="navigation"
        >
          <Link
            rel="nofollow"
            href="/"
            className={`px-8 py-2 hover:bg-gray-100 ${
              pathname === "/" ? "text-red-500 font-medium" : ""
            }`}
            aria-label="Home"
          >
            Home
          </Link>
          <Link
            rel="nofollow"
            href="/electricals"
            className={`px-8 py-2 hover:bg-gray-80 ${
              pathname === "/electricals" ? "text-red-500 font-medium" : ""
            }`}
            aria-label="Electricals"
          >
            Electricals
          </Link>
          <Link
            rel="nofollow"
            href="/tires-wheels"
            className={`px-8 py-2 hover:bg-gray-80 ${
              pathname === "/tires-wheels" ? "text-red-500 font-medium" : ""
            }`}
            aria-label="Tires & Wheels"
          >
            Tires & Wheels
          </Link>
          <Link
            rel="nofollow"
            href="/interior-accessories"
            className={`px-8 py-2 hover:bg-gray-80 ${
              pathname === "/interior-accessories"
                ? "text-red-500 font-medium"
                : ""
            }`}
            aria-label="Interior Accessories"
          >
            Interior Accessories
          </Link>
          <Link
            rel="nofollow"
            href="/contact"
            className={`px-8 py-2 hover:bg-gray-80 ${
              pathname === "/contact" ? "text-red-500 font-medium" : ""
            }`}
            aria-label="Contact"
          >
            Contact
          </Link>
          <Link
            rel="nofollow"
            href="/about-us"
            className={`px-8 py-2 hover:bg-gray-80 ${
              pathname === "/about-us" ? "text-red-500 font-medium" : ""
            }`}
            aria-label="About Us"
          >
            About Us
          </Link>
          <Link
            rel="nofollow"
            href="/my-account"
            className={`px-8 py-2 hover:bg-gray-80 ${
              pathname === "/my-account" ? "text-red-500 font-medium" : ""
            }`}
            aria-label="My Account"
          >
            My Account
          </Link>
          <Link
            rel="nofollow"
            href="/orders"
            className={`px-8 py-2 hover:bg-gray-80 ${
              pathname === "/orders" ? "text-red-500 font-medium" : ""
            }`}
            aria-label="Order Tracking"
          >
            Order Tracking
          </Link>
          <Link
            rel="nofollow"
            href={user ? "/wishlist" : "/sign-in"}
            className={`px-8 py-2 hover:bg-gray-100 ${
              pathname === "/wishlist" ? "text-red-500 font-medium" : ""
            }`}
            aria-label="Wishlist"
          >
            Wishlist
          </Link>
          {user ? (
            <div>
              <button
                onClick={handleLogout} // Trigger handleLogout when the button is clicked
                className="ml-4 px-4 py-2 text-red-500 hover:bg-gray-100"
                aria-label="Logout"
              >
                Logout
              </button>
            </div>
          ) : (
            <Link
              rel="nofollow"
              href="/sign-in"
              aria-label="Sign In"
              className="ml-4 px-4 py-2 text-red-500 hover:bg-gray-100"
            >
              Sign In
            </Link>
          )}
        </div>
      )}
    </>
  );
};

export default Navbar;
