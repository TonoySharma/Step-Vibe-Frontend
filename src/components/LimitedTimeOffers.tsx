
"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import {
  FiArrowRight,
  FiArrowUpRight,
  FiClock,
  FiZap,
  FiShoppingBag,
  FiTag,
  FiTrendingDown,
  FiShield,
} from "react-icons/fi";

const offerProducts = [
  {
    id: 1,
    name: "Nike Air Max 270",
    category: "Lifestyle Sneakers",
    price: 89,
    oldPrice: 150,
    discount: 40,
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85",
    stock: 18,
    totalStock: 50,
    slug: "nike-air-max-270",
    badge: "BEST DEAL",
  },
  {
    id: 2,
    name: "Nike Air Force 1",
    category: "Classic Collection",
    price: 99,
    oldPrice: 165,
    discount: 40,
    image:
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=900&q=85",
    stock: 12,
    totalStock: 50,
    slug: "nike-air-force-1",
    badge: "HOT OFFER",
  },
  {
    id: 3,
    name: "New Balance 9060",
    category: "Premium Sneakers",
    price: 119,
    oldPrice: 180,
    discount: 34,
    image:
      "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=900&q=85",
    stock: 25,
    totalStock: 50,
    slug: "new-balance-9060",
    badge: "LIMITED DEAL",
  },
];

const OFFER_DURATION = 24 * 60 * 60;

function CountdownTimer() {
  const [remaining, setRemaining] = useState(OFFER_DURATION);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setRemaining((prev) => (prev <= 0 ? OFFER_DURATION : prev - 1));
    }, 1000);

    return () => window.clearInterval(timer);
  }, []);

  const hours = Math.floor(remaining / 3600);
  const minutes = Math.floor((remaining % 3600) / 60);
  const seconds = remaining % 60;

  const units = [
    { label: "HOURS", value: hours },
    { label: "MINUTES", value: minutes },
    { label: "SECONDS", value: seconds },
  ];

  return (
    <div className="flex items-center gap-2 sm:gap-3">
      {units.map((unit, index) => (
        <div key={unit.label} className="flex items-center gap-2 sm:gap-3">
          <div className="flex min-w-[62px] flex-col items-center rounded-xl border border-white/10 bg-white/[0.07] px-3 py-3 backdrop-blur-xl sm:min-w-[75px]">
            <span className="font-mono text-2xl font-black tabular-nums text-white sm:text-3xl">
              {String(unit.value).padStart(2, "0")}
            </span>
            <span className="mt-1 text-[8px] font-bold tracking-widest text-gray-400 sm:text-[9px]">
              {unit.label}
            </span>
          </div>

          {index !== units.length - 1 && (
            <span className="text-xl font-black text-cyan-400">:</span>
          )}
        </div>
      ))}
    </div>
  );
}

export default function LimitedTimeOffers() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-[#080812] px-4 py-20 sm:px-6 lg:px-10 lg:py-28">
      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-96 w-96 rounded-full bg-purple-600/15 blur-[140px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-cyan-500/10 blur-[140px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Section Heading */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-10"
        >
          <div className="mb-4 flex items-center gap-2">
            <FiZap className="text-fuchsia-400" />
            <span className="text-xs font-bold uppercase tracking-[0.3em] text-fuchsia-400">
              Exclusive Deals
            </span>
          </div>

          <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl">
            Limited Time{" "}
            <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              Offers
            </span>
          </h2>

          <p className="mt-4 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
            Your favorite sneakers, now at irresistible prices.
            Grab your perfect pair before the deals disappear.
          </p>
        </motion.div>

        {/* Main Offer Banner */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative mb-12 overflow-hidden rounded-[28px] border border-purple-400/20 bg-gradient-to-br from-[#21113b] via-[#171329] to-[#081d2b] p-6 shadow-[0_20px_80px_rgba(139,92,246,0.12)] sm:p-10 lg:p-14"
        >
          {/* Decorative Effects */}
          <div className="pointer-events-none absolute -right-20 -top-32 h-80 w-80 rounded-full border border-purple-400/20" />
          <div className="pointer-events-none absolute -right-10 -top-20 h-60 w-60 rounded-full border border-cyan-400/20" />
          <div className="pointer-events-none absolute bottom-0 right-1/4 h-60 w-60 rounded-full bg-purple-500/20 blur-[100px]" />

          <div className="relative z-10 grid items-center gap-10 lg:grid-cols-2">

            {/* Banner Content */}
            <div>
              <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-fuchsia-400/30 bg-fuchsia-400/10 px-4 py-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-fuchsia-400 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-fuchsia-400" />
                </span>

                <span className="text-[10px] font-black tracking-[0.2em] text-fuchsia-300">
                  FLASH SALE IS LIVE
                </span>
              </div>

              <h3 className="max-w-xl text-4xl font-black leading-[1.12] text-white sm:text-5xl lg:text-6xl">
                Step Up Your Game.
                <span className="mt-2 block bg-gradient-to-r from-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                  Save Up To 50%
                </span>
              </h3>

              <p className="mt-5 max-w-md text-sm leading-7 text-gray-300">
                Don&apos;t miss your chance to own premium sneakers at
                exclusive prices. Limited stock. Limited time.
              </p>

              <div className="mt-8">
                <p className="mb-4 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
                  <FiClock />
                  Offer Ends In
                </p>

                <CountdownTimer />
              </div>

              <Link
                href="/products"
                className="group mt-9 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 px-7 py-4 text-sm font-black text-white shadow-lg shadow-purple-500/20 transition-all duration-300 hover:scale-105 hover:shadow-cyan-400/30"
              >
                Shop The Sale
                <FiArrowRight className="transition-transform group-hover:translate-x-1" />
              </Link>

              <p className="mt-5 text-[10px] tracking-wide text-gray-400">
                * Demo promotion for UI preview. Actual offers may vary.
              </p>
            </div>

            {/* Banner Product Image */}
            <div className="relative mx-auto w-full max-w-lg">
              <motion.div
                animate={
                  shouldReduceMotion
                    ? {}
                    : { y: [0, -12, 0], rotate: [0, -2, 0] }
                }
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative"
              >
                <div className="absolute inset-10 rounded-full bg-cyan-400/20 blur-[80px]" />

                <img
                  src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=90"
                  alt="Featured sneaker sale"
                  className="relative z-10 mx-auto w-full rounded-3xl object-cover drop-shadow-[0_25px_35px_rgba(0,0,0,0.5)]"
                />

                <div className="absolute right-2 top-3 z-20 flex h-24 w-24 rotate-12 flex-col items-center justify-center rounded-full border border-white/30 bg-gradient-to-br from-fuchsia-500 to-purple-700 shadow-xl sm:right-6 sm:top-6 sm:h-28 sm:w-28">
                  <span className="text-3xl font-black text-white">50%</span>
                  <span className="text-[9px] font-black tracking-widest text-white">
                    OFF
                  </span>
                </div>
              </motion.div>

              <div className="absolute -bottom-4 left-1/2 z-20 -translate-x-1/2 whitespace-nowrap rounded-full border border-white/15 bg-black/40 px-5 py-3 text-xs font-bold text-white backdrop-blur-xl">
                <span className="mr-2 text-cyan-400">✦</span>
                PREMIUM SNEAKERS. EXCLUSIVE PRICES.
              </div>
            </div>
          </div>
        </motion.div>

        {/* Offer Products Heading */}
        <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-cyan-400">
              Don&apos;t Miss Out
            </p>
            <h3 className="text-2xl font-black text-white sm:text-3xl">
              Deals You Can&apos;t Ignore
            </h3>
          </div>

          <Link
            href="/products"
            className="group flex w-fit items-center gap-2 text-sm font-semibold text-gray-300 transition-colors hover:text-cyan-400"
          >
            View All Deals
            <FiArrowUpRight className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Offer Product Cards */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {offerProducts.map((product, index) => {
            const stockPercentage =
              (product.stock / product.totalStock) * 100;

            return (
              <motion.div
                key={product.id}
                initial={shouldReduceMotion ? false : { opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.6, delay: index * 0.12 }}
                className="group overflow-hidden rounded-3xl border border-white/10 bg-[#11111d] transition-all duration-500 hover:-translate-y-2 hover:border-purple-400/40 hover:shadow-[0_15px_45px_rgba(139,92,246,0.12)]"
              >
                {/* Product Image */}
                <div className="relative h-[270px] overflow-hidden bg-white/[0.03]">
                  <Link
                    href={`/products/${product.slug}`}
                    className="block h-full"
                  >
                    <img
                      src={product.image}
                      alt={product.name}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </Link>

                  <div className="absolute left-4 top-4 rounded-full border border-fuchsia-400/30 bg-fuchsia-500/90 px-3 py-1.5 text-[10px] font-black tracking-wider text-white shadow-lg">
                    {product.badge}
                  </div>

                  <div className="absolute right-4 top-4 flex h-12 w-12 rotate-6 flex-col items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-fuchsia-500 shadow-lg">
                    <span className="text-lg font-black text-white">
                      {product.discount}%
                    </span>
                    <span className="text-[8px] font-black text-white">
                      OFF
                    </span>
                  </div>
                </div>

                {/* Product Details */}
                <div className="p-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-400">
                    {product.category}
                  </p>

                  <Link href={`/products/${product.slug}`}>
                    <h4 className="mt-2 text-xl font-bold text-white transition-colors hover:text-cyan-300">
                      {product.name}
                    </h4>
                  </Link>

                  {/* Price */}
                  <div className="mt-4 flex items-center gap-3">
                    <span className="text-2xl font-black text-white">
                      ${product.price}
                    </span>

                    <span className="text-sm text-gray-500 line-through">
                      ${product.oldPrice}
                    </span>

                    <span className="ml-auto rounded-lg bg-green-400/10 px-2 py-1 text-[10px] font-bold text-green-400">
                      Save ${product.oldPrice - product.price}
                    </span>
                  </div>

                  {/* Stock Progress */}
                  <div className="mt-6">
                    <div className="mb-2 flex items-center justify-between text-xs">
                      <span className="flex items-center gap-2 font-medium text-gray-400">
                        <FiTrendingDown className="text-orange-400" />
                        Limited Stock
                      </span>
                      <span className="font-bold text-orange-300">
                        {product.stock} left
                      </span>
                    </div>

                    <div className="h-1.5 overflow-hidden rounded-full bg-white/10">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${stockPercentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="h-full rounded-full bg-gradient-to-r from-purple-500 to-cyan-400"
                      />
                    </div>
                  </div>

                  {/* CTA */}
                  <Link
                    href={`/products/${product.slug}`}
                    className="mt-6 flex w-full items-center justify-center gap-3 rounded-xl border border-purple-400/30 bg-purple-500/10 py-3.5 text-sm font-bold text-white transition-all duration-300 hover:border-cyan-400/50 hover:bg-gradient-to-r hover:from-purple-500 hover:to-cyan-500"
                  >
                    <FiShoppingBag size={17} />
                    Grab This Deal
                    <FiArrowUpRight className="ml-auto" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Trust Footer */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-5 border-t border-white/10 pt-8">
          <div className="flex items-center gap-2 text-xs font-medium text-gray-400">
            <FiShield className="text-cyan-400" />
            Secure Shopping
          </div>

          <div className="flex items-center gap-2 text-xs font-medium text-gray-400">
            <FiTag className="text-cyan-400" />
            Exclusive Offers
          </div>

          <div className="flex items-center gap-2 text-xs font-medium text-gray-400">
            <FiZap className="text-cyan-400" />
            Limited Time Deals
          </div>
        </div>
      </div>
    </section>
  );
}
