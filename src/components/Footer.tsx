
"use client";

import Link from "next/link";
import {
  FiShoppingBag,
  FiArrowUpRight,
  FiArrowRight,
  FiInstagram,
  FiFacebook,
  FiTwitter,
  FiYoutube,
  FiMail,
  FiPhone,
  FiMapPin,
  FiShield,
  FiTruck,
  FiRefreshCw,
  FiCreditCard,
  FiHeart,
} from "react-icons/fi";

const footerLinks = {
  shopping: [
    { name: "All Products", href: "/products" },
    { name: "New Arrivals", href: "/products?sort=newest" },
    { name: "Trending Sneakers", href: "/products?sort=trending" },
    { name: "Men's Collection", href: "/products?category=men" },
    { name: "Women's Collection", href: "/products?category=women" },
  ],
  support: [
    { name: "Contact Us", href: "/contact" },
    { name: "FAQs", href: "/faq" },
    { name: "Shipping & Delivery", href: "/shipping" },
    { name: "Returns & Exchanges", href: "/returns" },
    { name: "Track Your Order", href: "/track-order" },
  ],
  company: [
    { name: "About StrideHub", href: "/about" },
    { name: "Our Story", href: "/about" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms & Conditions", href: "/terms" },
  ],
};

const socialLinks = [
  {
    icon: FiInstagram,
    href: "https://instagram.com/",
    label: "Instagram",
  },
  {
    icon: FiFacebook,
    href: "https://facebook.com/",
    label: "Facebook",
  },
  {
    icon: FiTwitter,
    href: "https://twitter.com/",
    label: "Twitter",
  },
  {
    icon: FiYoutube,
    href: "https://youtube.com/",
    label: "YouTube",
  },
];

const features = [
  {
    icon: FiTruck,
    title: "Free Shipping",
    description: "On selected orders",
  },
  {
    icon: FiShield,
    title: "Authentic Products",
    description: "Quality you can trust",
  },
  {
    icon: FiRefreshCw,
    title: "Easy Returns",
    description: "Hassle-free experience",
  },
  {
    icon: FiCreditCard,
    title: "Secure Payment",
    description: "Safe checkout process",
  },
];

export default function Footer() {
  return (
    <footer className="relative isolate overflow-hidden border-t border-pink-500/20 bg-[#0b0710] text-white">

      {/* Background Effects */}
      <div className="pointer-events-none absolute -left-40 top-10 -z-10 h-96 w-96 rounded-full bg-pink-600/15 blur-[140px]" />

      <div className="pointer-events-none absolute -right-40 top-1/3 -z-10 h-96 w-96 rounded-full bg-fuchsia-600/15 blur-[140px]" />

      <div className="pointer-events-none absolute bottom-0 left-1/2 -z-10 h-64 w-96 -translate-x-1/2 rounded-full bg-rose-500/10 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">

        {/* Main Footer */}
        <div className="grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-5">

          {/* Brand Information */}
          <div className="lg:col-span-2">
            <Link href="/" className="group inline-flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 via-fuchsia-500 to-rose-400 shadow-lg shadow-pink-500/25 transition-transform duration-300 group-hover:scale-105">
                <FiShoppingBag size={23} className="text-white" />
              </div>

              <span className="text-2xl font-black tracking-tight">
                STRIDE
                <span className="bg-gradient-to-r from-pink-400 to-rose-400 bg-clip-text text-transparent">
                  HUB
                </span>
                <span className="text-pink-400">.</span>
              </span>
            </Link>

            <p className="mt-6 max-w-sm text-sm leading-7 text-gray-400">
              Step into your style. Discover premium sneakers that combine
              comfort, performance, and streetwear culture. Find your perfect
              pair and make every step count.
            </p>

            {/* Social Media */}
            <div className="mt-7">
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-gray-500">
                Follow Our Journey
              </p>

              <div className="flex gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="flex h-10 w-10 items-center justify-center rounded-xl border border-pink-500/15 bg-white/[0.03] text-gray-400 transition-all duration-300 hover:-translate-y-1 hover:border-pink-400/50 hover:bg-pink-500/10 hover:text-pink-300 hover:shadow-lg hover:shadow-pink-500/10"
                    >
                      <Icon size={17} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Shopping Links */}
          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-[0.18em] text-white">
              Shopping
              <span className="ml-2 inline-block h-1 w-5 rounded-full bg-pink-500" />
            </h3>

            <ul className="space-y-4">
              {footerLinks.shopping.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="group flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-pink-300"
                  >
                    <span>{link.name}</span>

                    <FiArrowUpRight className="opacity-0 transition-all group-hover:translate-x-1 group-hover:opacity-100" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Support */}
          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-[0.18em] text-white">
              Customer Care
              <span className="ml-2 inline-block h-1 w-5 rounded-full bg-pink-500" />
            </h3>

            <ul className="space-y-4">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-pink-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="mb-6 text-sm font-bold uppercase tracking-[0.18em] text-white">
              Company
              <span className="ml-2 inline-block h-1 w-5 rounded-full bg-pink-500" />
            </h3>

            <ul className="space-y-4">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 transition-colors hover:text-pink-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Information */}
        <div className="grid gap-5 rounded-2xl border border-pink-500/15 bg-gradient-to-r from-pink-500/[0.06] via-fuchsia-500/[0.04] to-rose-500/[0.06] p-6 sm:grid-cols-3">

          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-pink-500/10 text-pink-400">
              <FiMail size={19} />
            </div>

            <div>
              <p className="text-xs text-gray-500">Email Us</p>
              <p className="mt-1 text-sm text-gray-300">
                hello@stridehub.com
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-pink-500/10 text-pink-400">
              <FiPhone size={19} />
            </div>

            <div>
              <p className="text-xs text-gray-500">Call Us</p>
              <p className="mt-1 text-sm text-gray-300">
                +880 1XXX-XXXXXX
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-pink-500/10 text-pink-400">
              <FiMapPin size={19} />
            </div>

            <div>
              <p className="text-xs text-gray-500">Our Location</p>
              <p className="mt-1 text-sm text-gray-300">
                Bangladesh
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="mt-10 flex flex-col items-center justify-between gap-5 border-t border-pink-500/15 py-7 text-center sm:flex-row sm:text-left">

          <p className="text-xs text-gray-500">
            © StrideHub. All rights reserved.
          </p>

          <p className="flex items-center gap-1.5 text-xs text-gray-500">
            Made with
            <FiHeart
              className="fill-pink-500 text-pink-500"
              size={13}
            />
            for sneaker lovers.
          </p>

          <Link
            href="/products"
            className="group flex items-center gap-2 text-xs font-semibold text-pink-400 transition-colors hover:text-rose-300"
          >
            Explore Collection

            <FiArrowRight className="transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </footer>
  );
}
