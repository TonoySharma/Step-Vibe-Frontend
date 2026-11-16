
"use client";

import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import {
  FiArrowUpRight,
  FiChevronRight,
  FiActivity,
  FiUser,
  FiZap,
  FiTarget,
  FiGrid,
} from "react-icons/fi";

// Category Type
interface Category {
  _id: string;
  name: string;
  slug: string;
  description?: string;
  image: string;
  productCount?: number;
  isActive: boolean;
}

export default function ShopByCategory() {
  const shouldReduceMotion = useReducedMotion();

  const [categories, setCategories] = useState<Category[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  // Fetch Categories From Backend
  useEffect(() => {
    const controller = new AbortController();

    const fetchCategories = async () => {
      try {
        setLoading(true);
        setError("");

        const API_URL = process.env.NEXT_PUBLIC_API_URL || "";

        const response = await fetch(`${API_URL}/api/categories`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          cache: "no-store",
          signal: controller.signal,
        });

        if (!response.ok) {
          throw new Error("Failed to fetch categories");
        }

        const result = await response.json();

        if (!result.success) {
          throw new Error(result.message || "Something went wrong");
        }

        const activeCategories: Category[] = (result.data || []).filter(
          (category: Category) => category.isActive
        );

        setCategories(activeCategories);
      } catch (err) {
        if (err instanceof Error && err.name === "AbortError") return;

        console.error("Category Fetch Error:", err);
        setError("Unable to load categories. Please try again later.");
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    };

    fetchCategories();

    return () => controller.abort();
  }, []);

  // Dynamic Category Icon
  const getCategoryIcon = (slug: string) => {
    const value = slug.toLowerCase();

    if (value.includes("men")) return FiUser;
    if (value.includes("women")) return FiActivity;
    if (value.includes("running")) return FiZap;
    if (value.includes("sport")) return FiTarget;

    return FiGrid;
  };

  return (
    <section className="relative overflow-hidden bg-[#080812] px-4 py-20 sm:px-6 lg:px-10 lg:py-28">

      {/* Background Effects */}
      <div className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full bg-purple-600/10 blur-[120px]" />
      <div className="pointer-events-none absolute -right-40 bottom-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Section Heading */}
        <motion.div
          initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-12 flex flex-col justify-between gap-6 md:mb-16 md:flex-row md:items-end"
        >
          <div>
            <div className="mb-4 flex items-center gap-2">
              <span className="h-px w-8 bg-cyan-400" />
              <span className="text-xs font-bold uppercase tracking-[0.3em] text-cyan-400">
                Find Your Perfect Fit
              </span>
            </div>

            <h2 className="text-3xl font-black tracking-tight text-white sm:text-4xl md:text-5xl">
              Shop By{" "}
              <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                Category
              </span>
            </h2>

            <p className="mt-4 max-w-xl text-sm leading-7 text-gray-400 sm:text-base">
              Discover your next favorite pair. Explore premium collections
              designed for every style, mood, and movement.
            </p>
          </div>

          <Link
            href="/products"
            className="group inline-flex w-fit items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white transition-all duration-300 hover:border-cyan-400/50 hover:bg-cyan-400/10"
          >
            Explore All
            <FiArrowUpRight className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* Loading State */}
        {loading && (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="h-[340px] animate-pulse rounded-3xl border border-white/10 bg-white/[0.04] sm:h-[390px]"
              />
            ))}
          </div>
        )}

        {/* Error State */}
        {!loading && error && (
          <div className="rounded-3xl border border-red-500/20 bg-red-500/5 px-6 py-12 text-center">
            <p className="text-sm text-red-300">{error}</p>
          </div>
        )}

        {/* Empty State */}
        {!loading && !error && categories.length === 0 && (
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] px-6 py-12 text-center">
            <FiGrid className="mx-auto mb-4 text-3xl text-cyan-400" />
            <h3 className="text-xl font-bold text-white">
              No Categories Available
            </h3>
            <p className="mt-2 text-sm text-gray-400">
              Categories will appear here once they are added.
            </p>
          </div>
        )}

        {/* Dynamic Category Grid */}
        {!loading && !error && categories.length > 0 && (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category, index) => {
              const Icon = getCategoryIcon(category.slug);

              return (
                <motion.div
                  key={category._id}
                  initial={
                    shouldReduceMotion
                      ? false
                      : { opacity: 0, y: 45, scale: 0.96 }
                  }
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{
                    duration: 0.65,
                    delay: index * 0.12,
                  }}
                  className="group"
                >
                  <Link
                    href={`/products?category=${encodeURIComponent(category.slug)}`}
                    className="relative block h-[340px] overflow-hidden rounded-3xl border border-white/10 bg-[#11111d] sm:h-[390px]"
                  >
                    {/* Category Image */}
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                      style={{
                        backgroundImage: `url('${category.image}')`,
                      }}
                    />

                    {/* Image Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080812] via-[#080812]/35 to-transparent" />

                    <div className="absolute inset-0 bg-purple-700/0 transition-colors duration-500 group-hover:bg-purple-700/20" />

                    {/* Glow Border */}
                    <div className="absolute inset-0 rounded-3xl border border-transparent transition-all duration-500 group-hover:border-cyan-400/40 group-hover:shadow-[inset_0_0_35px_rgba(34,211,238,0.12)]" />

                    {/* Product Count */}
                    <div className="absolute left-5 top-5 flex items-center gap-2 rounded-full border border-white/15 bg-black/30 px-3 py-2 text-[10px] font-bold uppercase tracking-wider text-white backdrop-blur-xl">
                      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400" />
                      {category.productCount ?? 0}+ Products
                    </div>

                    {/* Icon */}
                    <div className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-white backdrop-blur-xl transition-all duration-500 group-hover:rotate-12 group-hover:border-cyan-400/50 group-hover:bg-cyan-400/20 group-hover:text-cyan-300">
                      <Icon size={19} />
                    </div>

                    {/* Content */}
                    <div className="absolute inset-x-0 bottom-0 p-6 sm:p-7">
                      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                        {category.description || "Discover Your Style"}
                      </p>

                      <h3 className="text-2xl font-black text-white sm:text-3xl">
                        {category.name}
                      </h3>

                      <div className="mt-5 flex items-center justify-between border-t border-white/20 pt-4">
                        <span className="text-sm font-medium text-gray-300 transition-colors group-hover:text-white">
                          Explore Collection
                        </span>

                        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-md transition-all duration-300 group-hover:bg-cyan-400 group-hover:text-[#080812]">
                          <FiChevronRight size={20} />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}
