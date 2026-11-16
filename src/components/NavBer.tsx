
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { authClient } from "@/lib/auth-client";
import toast from "react-hot-toast";

import {
  FaArrowRight,
  FaBars,
  FaTimes,
  FaSearch,
  FaHeart,
  FaShoppingBag,
  FaChevronDown,
  FaUser,
  FaBoxOpen,
  FaMapMarkerAlt,
  FaTachometerAlt,
  FaSignOutAlt,
  FaTag,
} from "react-icons/fa";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "Shop", href: "/shop" },
  { name: "Men", href: "/shop?gender=men" },
  { name: "Women", href: "/shop?gender=women" },
  { name: "Kids", href: "/shop?gender=kids" },
  { name: "New Arrivals", href: "/shop?sort=newest" },
  { name: "Deals", href: "/shop?collection=deals" },
];

const customerLinks = [
  { name: "My Orders", href: "/my-orders", icon: FaBoxOpen },
  { name: "My Wishlist", href: "/wishlist", icon: FaHeart },
  { name: "My Profile", href: "/my-profile", icon: FaUser },
  { name: "My Addresses", href: "/addresses", icon: FaMapMarkerAlt },
];

const adminLinks = [
  { name: "Admin Dashboard", href: "/admin", icon: FaTachometerAlt },
  { name: "Manage Products", href: "/admin/products", icon: FaShoppingBag },
  { name: "Manage Orders", href: "/admin/orders", icon: FaBoxOpen },
  { name: "Customers", href: "/admin/customers", icon: FaUser },
  { name: "Coupons & Deals", href: "/admin/coupons", icon: FaTag },
];

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { data: session } = authClient.useSession();
  const user = session?.user;

  const role = (user as (typeof user & { role?: string }) | undefined)?.role;
  const isAdmin = role === "admin";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  const handleLogout = async () => {
    const { error } = await authClient.signOut();

    if (error) {
      toast.error(error.message || "Logout failed!");
      return;
    }

    toast.success("Logged out successfully!");
    closeMenu();
    window.location.replace("/login");
  };

  return (
    <>
      {/* Main Navbar */}
      <header
        className={`sticky top-10 z-50 w-full transition-all duration-300 ${isScrolled
            ? "bg-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.07)] backdrop-blur-xl"
            : "bg-white border-b border-gray-100"
          }`}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-10">

          <div
            className={`flex items-center justify-between gap-4 transition-all duration-300 ${isScrolled ? "h-[68px]" : "h-[82px]"
              }`}
          >
            {/* Logo */}
            <Link
              href="/"
              onClick={closeMenu}
              className="group flex shrink-0 items-center gap-2.5 no-underline">
              <div className="flex flex-col items-center">
                <Image
                  src="/Logo.png"
                  alt="StepVibe Logo"
                  width={180}
                  height={180}
                  className="h-auto w-[104px] sm:w-[150px] lg:w-[180px]"
                  priority
                />
                <span className="-mt-1 whitespace-nowrap text-center text-[7px] font-bold uppercase tracking-[1.5px] text-gray-400 sm:text-[8px] sm:tracking-[2px] lg:text-[9px] lg:tracking-[3px]">
                  Walk Your Style
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden xl:block">
              <ul className="flex list-none items-center gap-1 p-0">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="group relative block whitespace-nowrap px-3 py-3 text-[13px] font-semibold text-gray-600 no-underline transition-colors duration-200 hover:text-[#f97316]"
                    >
                      {link.name}
                      <span className="absolute bottom-1 left-3 right-3 h-[2px] origin-left scale-x-0 rounded-full bg-[#f97316] transition-transform duration-300 group-hover:scale-x-100" />
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Right Actions */}
            <div className="hidden items-center gap-2 md:flex">

              {/* Search */}
              <Link
                href="/shop"
                aria-label="Search products"
                className="flex h-10 w-10 items-center justify-center rounded-full text-gray-700 no-underline transition-all hover:bg-orange-50 hover:text-[#f97316]"
              >
                <FaSearch className="text-[16px]" />
              </Link>

              {/* Wishlist */}
              <Link
                href="/wishlist"
                aria-label="Wishlist"
                className="flex h-10 w-10 items-center justify-center rounded-full text-gray-700 no-underline transition-all hover:bg-orange-50 hover:text-[#f97316]"
              >
                <FaHeart className="text-[17px]" />
              </Link>

              {/* Cart */}
              <Link
                href="/cart"
                aria-label="Shopping cart"
                className="relative flex h-10 w-10 items-center justify-center rounded-full text-gray-700 no-underline transition-all hover:bg-orange-50 hover:text-[#f97316]"
              >
                <FaShoppingBag className="text-[17px]" />
              </Link>

              <div className="mx-2 h-8 w-px bg-gray-200" />

              {/* Authenticated User */}
              {user ? (
                <div className="group relative py-3">
                  <button
                    type="button"
                    className="flex cursor-pointer items-center gap-2.5 rounded-full border border-gray-200 bg-white py-1.5 pl-1.5 pr-3 transition-all hover:border-orange-200 hover:shadow-md"
                  >
                    {user.image ? (
                      <Image
                        src={user.image}
                        alt={user.name || "User"}
                        width={36}
                        height={36}
                        className="h-9 w-9 rounded-full object-cover"
                      />
                    ) : (
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#171717] text-sm font-bold text-white">
                        {user.name?.charAt(0).toUpperCase() || "U"}
                      </div>
                    )}

                    <span className="max-w-[95px] truncate text-sm font-bold text-gray-800">
                      {user.name?.split(" ")[0]}
                    </span>

                    <FaChevronDown className="text-[10px] text-gray-400 transition-transform group-hover:rotate-180" />
                  </button>

                  {/* Profile Dropdown */}
                  <div className="invisible absolute right-0 top-full z-50 w-64 translate-y-2 rounded-2xl border border-gray-100 bg-white p-2 opacity-0 shadow-[0_15px_50px_rgba(0,0,0,0.12)] transition-all duration-200 group-hover:visible group-hover:translate-y-0 group-hover:opacity-100 group-focus-within:visible group-focus-within:translate-y-0 group-focus-within:opacity-100">

                    <div className="rounded-xl bg-gray-50 p-3">
                      <p className="text-[10px] font-bold uppercase tracking-widest text-[#f97316]">
                        {isAdmin ? "Administrator" : "My Account"}
                      </p>
                      <p className="mt-1 truncate text-sm font-bold text-gray-900">
                        {user.name}
                      </p>
                      <p className="truncate text-xs text-gray-500">
                        {user.email}
                      </p>
                    </div>

                    <div className="my-2 space-y-1">
                      {(isAdmin ? adminLinks : customerLinks).map((item) => {
                        const Icon = item.icon;

                        return (
                          <Link
                            key={item.name}
                            href={item.href}
                            className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-gray-600 no-underline transition-all hover:bg-orange-50 hover:text-[#f97316]"
                          >
                            <Icon className="text-sm" />
                            {item.name}
                          </Link>
                        );
                      })}
                    </div>

                    <div className="border-t border-gray-100 pt-2">
                      <button
                        onClick={handleLogout}
                        className="flex w-full cursor-pointer items-center gap-3 rounded-xl border-none bg-transparent px-3 py-2.5 text-sm font-semibold text-red-500 transition-colors hover:bg-red-50"
                      >
                        <FaSignOutAlt />
                        Log Out
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  <Link
                    href="/login"
                    className="rounded-full px-4 py-2.5 text-sm font-bold text-gray-700 no-underline transition-colors hover:text-[#f97316]"
                  >
                    Log In
                  </Link>

                  <Link
                    href="/signUp"
                    className="group flex items-center gap-2 rounded-full bg-[#171717] px-5 py-3 text-sm font-bold text-white no-underline shadow-lg shadow-gray-200 transition-all duration-300 hover:bg-[#f97316] hover:shadow-orange-200"
                  >
                    Get Started
                    <FaArrowRight className="text-xs transition-transform group-hover:translate-x-1" />
                  </Link>
                </>
              )}
            </div>

            {/* Mobile Actions */}
            <div className="flex items-center gap-2 md:hidden">
              <Link
                href="/cart"
                aria-label="Shopping cart"
                className="flex h-10 w-10 items-center justify-center rounded-full text-gray-700 no-underline hover:bg-orange-50 hover:text-[#f97316]"
              >
                <FaShoppingBag className="text-lg" />
              </Link>

              <button
                type="button"
                onClick={() => setIsMenuOpen(true)}
                aria-label="Open menu"
                className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-xl border border-gray-200 bg-white text-gray-800 transition-colors hover:border-orange-200 hover:text-[#f97316]"
              >
                <FaBars className="text-lg" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-[100] md:hidden ${isMenuOpen ? "visible" : "invisible pointer-events-none"
          }`}
      >
        {/* Backdrop */}
        <div
          onClick={closeMenu}
          className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${isMenuOpen ? "opacity-100" : "opacity-0"
            }`}
        />

        {/* Drawer */}
        <aside
          className={`absolute right-0 top-0 flex h-full w-[88%] max-w-[390px] flex-col bg-white shadow-2xl transition-transform duration-300 ${isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
        >
          {/* Drawer Header */}
          <div className="flex items-center justify-between border-b border-gray-100 px-5 py-5">
            <Link
              href="/"
              onClick={closeMenu}
              className="text-2xl font-black text-[#171717] no-underline"
            >
              Stride<span className="text-[#f97316]">Hub</span>
            </Link>

            <button
              onClick={closeMenu}
              aria-label="Close menu"
              className="flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-gray-100 text-gray-700 transition-colors hover:bg-orange-50 hover:text-[#f97316]"
            >
              <FaTimes />
            </button>
          </div>

          {/* User Information */}
          {user && (
            <div className="mx-5 mt-5 flex items-center gap-3 rounded-2xl bg-gray-50 p-4">
              {user.image ? (
                <Image
                  src={user.image}
                  alt={user.name || "User"}
                  width={44}
                  height={44}
                  className="h-11 w-11 rounded-full object-cover"
                />
              ) : (
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#171717] font-bold text-white">
                  {user.name?.charAt(0).toUpperCase() || "U"}
                </div>
              )}

              <div className="min-w-0">
                <p className="truncate text-sm font-bold text-gray-900">
                  {user.name}
                </p>
                <p className="truncate text-xs text-gray-500">
                  {user.email}
                </p>
              </div>
            </div>
          )}

          {/* Mobile Navigation */}
          <nav className="flex-1 overflow-y-auto px-5 py-5">
            <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[2px] text-gray-400">
              Explore StrideHub
            </p>

            <div className="space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  className="flex items-center justify-between rounded-xl px-3 py-3.5 text-sm font-semibold text-gray-700 no-underline transition-all hover:bg-orange-50 hover:text-[#f97316]"
                >
                  {link.name}
                  <FaArrowRight className="text-[10px] text-gray-300" />
                </Link>
              ))}
            </div>

            <div className="my-5 border-t border-gray-100" />

            <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[2px] text-gray-400">
              Shopping
            </p>

            <div className="space-y-1">
              <Link
                href="/shop"
                onClick={closeMenu}
                className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold text-gray-700 no-underline hover:bg-orange-50 hover:text-[#f97316]"
              >
                <FaSearch /> Search Products
              </Link>

              <Link
                href="/wishlist"
                onClick={closeMenu}
                className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold text-gray-700 no-underline hover:bg-orange-50 hover:text-[#f97316]"
              >
                <FaHeart /> Wishlist
              </Link>

              <Link
                href="/cart"
                onClick={closeMenu}
                className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold text-gray-700 no-underline hover:bg-orange-50 hover:text-[#f97316]"
              >
                <FaShoppingBag /> Shopping Cart
              </Link>
            </div>

            {user && (
              <>
                <div className="my-5 border-t border-gray-100" />

                <p className="mb-3 px-3 text-[10px] font-bold uppercase tracking-[2px] text-gray-400">
                  {isAdmin ? "Administration" : "My Account"}
                </p>

                <div className="space-y-1">
                  {(isAdmin ? adminLinks : customerLinks).map((item) => {
                    const Icon = item.icon;

                    return (
                      <Link
                        key={item.name}
                        href={item.href}
                        onClick={closeMenu}
                        className="flex items-center gap-3 rounded-xl px-3 py-3 text-sm font-semibold text-gray-700 no-underline hover:bg-orange-50 hover:text-[#f97316]"
                      >
                        <Icon />
                        {item.name}
                      </Link>
                    );
                  })}
                </div>
              </>
            )}
          </nav>

          {/* Drawer Footer */}
          <div className="border-t border-gray-100 p-5">
            {user ? (
              <button
                onClick={handleLogout}
                className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-red-50 px-4 py-3.5 text-sm font-bold text-red-500 transition-colors hover:bg-red-100"
              >
                <FaSignOutAlt />
                Log Out
              </button>
            ) : (
              <div className="grid grid-cols-2 gap-3">
                <Link
                  href="/login"
                  onClick={closeMenu}
                  className="rounded-xl border border-gray-200 px-4 py-3 text-center text-sm font-bold text-gray-800 no-underline transition-colors hover:bg-gray-50"
                >
                  Log In
                </Link>

                <Link
                  href="/signUp"
                  onClick={closeMenu}
                  className="flex items-center justify-center gap-2 rounded-xl bg-[#171717] px-3 py-3 text-sm font-bold text-white no-underline transition-colors hover:bg-[#f97316]"
                >
                  Sign Up <FaArrowRight className="text-xs" />
                </Link>
              </div>
            )}
          </div>
        </aside>
      </div>
    </>
  );
};

export default NavBar;
