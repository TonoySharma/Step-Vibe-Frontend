
"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import {
  FiArrowUpRight,
  FiHeart,
  FiShoppingBag,
  FiStar,
  FiZap,
  FiEye,
} from "react-icons/fi";

const products = [
  {
    id: 1,
    name: "Nike Air Max Pulse",
    category: "Lifestyle Sneakers",
    price: 129,
    oldPrice: 159,
    rating: 4.9,
    reviews: 128,
    badge: "BEST SELLER",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85",
    color: "Red / White",
    slug: "nike-air-max-pulse",
  },
  {
    id: 2,
    name: "Adidas Ultraboost",
    category: "Running Shoes",
    price: 145,
    oldPrice: 180,
    rating: 4.8,
    reviews: 96,
    badge: "TRENDING",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=85",
    color: "Sport Edition",
    slug: "adidas-ultraboost",
  },
  {
    id: 3,
    name: "Puma RS-X Premium",
    category: "Streetwear Sneakers",
    price: 110,
    oldPrice: 140,
    rating: 4.7,
    reviews: 84,
    badge: "POPULAR",
    image:
      "https://images.unsplash.com/photo-1552346154-21d32810aba3?auto=format&fit=crop&w=900&q=85",
    color: "White / Grey",
    slug: "puma-rs-x-premium",
  },
  {
    id: 4,
    name: "New Balance 9060",
    category: "Premium Sneakers",
    price: 165,
    oldPrice: 199,
    rating: 5.0,
    reviews: 152,
    badge: "HOT PICK",
    image:
      "https://images.unsplash.com/photo-1539185441755-769473a23570?auto=format&fit=crop&w=900&q=85",
    color: "Grey / White",
    slug: "new-balance-9060",
  },
];

export default function TrendingProducts() {
  const shouldReduceMotion = useReducedMotion();

  const [wishlist, setWishlist] = useState<number[]>([]);

  const toggleWishlist = (id: number) => {
    setWishlist((prev) =>
      prev.includes(id)
        ? prev.filter((item) => item !== id)
        : [...prev, id]
    );
  };

  return (
    <section className="relative overflow-hidden bg-[#080812] px-4 py-20 sm:px-6 lg:px-10 lg:py-28">

      {/* Background Glow */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-purple-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 flex flex-col justify-between gap-6 md:mb-16 md:flex-row md:items-end"
        >
          <div>
            <div className="mb-4 flex items-center gap-2">
              <FiZap className="text-cyan-400" />
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
                Trending Right Now
              </span>
            </div>

            <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl">
              Trending{" "}
              <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                Products
              </span>
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
              Discover the sneakers everyone is talking about.
              Premium comfort, iconic style, and unbeatable performance.
            </p>
          </div>

          <Link
            href="/products"
            className="group inline-flex w-fit items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-cyan-400/50 hover:bg-cyan-400/10"
          >
            View All Products
            <FiArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product, index) => {
            const isFavorite = wishlist.includes(product.id);
            const discount = Math.round(
              ((product.oldPrice - product.price) / product.oldPrice) * 100
            );

            return (
              <motion.div
                key={product.id}
                initial={
                  shouldReduceMotion
                    ? false
                    : { opacity: 0, y: 45 }
                }
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.12,
                }}
                className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[#11111d] transition-all duration-500 hover:-translate-y-2 hover:border-purple-400/40 hover:shadow-[0_15px_50px_rgba(139,92,246,0.12)]"
              >
                {/* Product Image */}
                <div className="relative h-[270px] overflow-hidden bg-white/[0.03]">
                  <Link
                    href={`/products/${product.slug}`}
                    className="block h-full w-full"
                  >
                    <div
                      className="h-full w-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                      style={{
                        backgroundImage: `url('${product.image}')`,
                      }}
                    />
                  </Link>

                  {/* Image Overlay */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#080812]/50 to-transparent opacity-70" />

                  {/* Badge */}
                  <span className="absolute left-4 top-4 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1.5 text-[10px] font-black tracking-wider text-cyan-300 backdrop-blur-xl">
                    {product.badge}
                  </span>

                  {/* Discount */}
                  <span className="absolute bottom-4 left-4 rounded-full bg-purple-500 px-3 py-1.5 text-xs font-bold text-white shadow-lg">
                    -{discount}% OFF
                  </span>

                  {/* Wishlist */}
                  <button
                    type="button"
                    onClick={() => toggleWishlist(product.id)}
                    aria-label={
                      isFavorite ? "Remove from wishlist" : "Add to wishlist"
                    }
                    className={`absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full border backdrop-blur-xl transition-all duration-300 ${
                      isFavorite
                        ? "border-pink-400 bg-pink-500 text-white"
                        : "border-white/20 bg-black/30 text-white hover:border-pink-400 hover:text-pink-400"
                    }`}
                  >
                    <FiHeart
                      size={17}
                      className={isFavorite ? "fill-current" : ""}
                    />
                  </button>

                  {/* Quick View */}
                  <Link
                    href={`/products/${product.slug}`}
                    aria-label={`View ${product.name}`}
                    className="absolute bottom-4 right-4 flex h-10 w-10 translate-y-3 items-center justify-center rounded-full bg-white/10 text-white opacity-0 backdrop-blur-xl transition-all duration-300 hover:bg-cyan-400 hover:text-[#080812] group-hover:translate-y-0 group-hover:opacity-100"
                  >
                    <FiEye size={17} />
                  </Link>
                </div>

                {/* Product Details */}
                <div className="p-5">
                  <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-400">
                    {product.category}
                  </p>

                  <Link href={`/products/${product.slug}`}>
                    <h3 className="truncate text-lg font-bold text-white transition-colors hover:text-cyan-300">
                      {product.name}
                    </h3>
                  </Link>

                  {/* Rating */}
                  <div className="mt-3 flex items-center gap-2">
                    <div className="flex items-center gap-1 text-amber-400">
                      <FiStar className="fill-current" size={14} />
                      <span className="text-xs font-bold text-white">
                        {product.rating.toFixed(1)}
                      </span>
                    </div>

                    <span className="text-xs text-gray-500">
                      ({product.reviews} reviews)
                    </span>
                  </div>

                  {/* Price */}
                  <div className="mt-5 flex items-center justify-between gap-2 border-t border-white/10 pt-4">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xl font-black text-white">
                          ${product.price}
                        </span>
                        <span className="text-sm text-gray-500 line-through">
                          ${product.oldPrice}
                        </span>
                      </div>
                      <p className="mt-1 text-[10px] text-gray-500">
                        {product.color}
                      </p>
                    </div>

                    <Link
                      href={`/products/${product.slug}`}
                      aria-label={`Shop ${product.name}`}
                      className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-cyan-500 text-white transition-all duration-300 hover:scale-110 hover:shadow-[0_0_25px_rgba(34,211,238,0.35)]"
                    >
                      <FiShoppingBag size={18} />
                    </Link>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 flex justify-center"
        >
          <Link
            href="/products"
            className="group inline-flex items-center gap-3 rounded-full border border-purple-400/30 bg-purple-500/10 px-8 py-4 text-sm font-bold text-white transition-all duration-300 hover:border-cyan-400/50 hover:bg-cyan-400/10"
          >
            Discover More Sneakers
            <FiArrowUpRight className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
