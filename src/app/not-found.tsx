
"use client";

import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import {
  FiHome,
  FiArrowLeft,
  FiShoppingBag,
  FiArrowUpRight,
  FiSearch,
  FiCompass,
} from "react-icons/fi";

export default function NotFound() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <main className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-[#080812] px-6 py-16 text-white">

      {/* BACKGROUND EFFECTS */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <motion.div
          animate={shouldReduceMotion ? {} : {
            scale: [1, 1.3, 1],
            opacity: [0.15, 0.3, 0.15],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-40 top-10 h-[450px] w-[450px] rounded-full bg-purple-700/20 blur-[140px]"
        />

        <motion.div
          animate={shouldReduceMotion ? {} : {
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.25, 0.1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-40 bottom-0 h-[450px] w-[450px] rounded-full bg-cyan-500/15 blur-[140px]"
        />

        {/* GRID */}

        <div
          className="absolute inset-0 opacity-[0.045]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)",
            backgroundSize: "55px 55px",
          }}
        />

      </div>

      {/* MAIN CONTENT */}

      <div className="relative z-10 mx-auto w-full max-w-3xl text-center">

        {/* BRAND BADGE */}

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mb-8 inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-500/10 px-4 py-2 backdrop-blur-xl"
        >
          <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />

          <span className="text-xs font-bold tracking-[0.2em] text-purple-200">
            STRIDEHUB EXCLUSIVE
          </span>
        </motion.div>

        {/* 404 ANIMATION */}

        <div className="relative mx-auto flex h-[220px] items-center justify-center sm:h-[280px]">

          {/* ROTATING RING */}

          <motion.div
            animate={shouldReduceMotion ? {} : {
              rotate: 360,
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute h-[210px] w-[210px] rounded-full border border-dashed border-purple-400/20 sm:h-[270px] sm:w-[270px]"
          />

          <motion.div
            animate={shouldReduceMotion ? {} : {
              rotate: -360,
            }}
            transition={{
              duration: 22,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute h-[170px] w-[170px] rounded-full border border-cyan-400/15 sm:h-[220px] sm:w-[220px]"
          />

          {/* GLOW */}

          <div className="absolute h-40 w-40 rounded-full bg-purple-600/20 blur-[70px]" />

          {/* 404 TEXT */}

          <motion.h1
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="relative bg-gradient-to-b from-white via-purple-200 to-purple-700 bg-clip-text text-[110px] font-black leading-none tracking-[-0.08em] text-transparent drop-shadow-[0_0_35px_rgba(168,85,247,0.25)] sm:text-[160px]"
          >
            404
          </motion.h1>

          {/* FLOATING ICON */}

          <motion.div
            animate={shouldReduceMotion ? {} : {
              y: [0, -12, 0],
              rotate: [-8, 8, -8],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute right-[5%] top-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-400/30 bg-cyan-500/10 text-cyan-300 shadow-[0_0_30px_rgba(34,211,238,0.12)] sm:right-[15%]"
          >
            <FiCompass size={23} />
          </motion.div>

          <motion.div
            animate={shouldReduceMotion ? {} : {
              y: [0, 10, 0],
              rotate: [8, -8, 8],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-5 left-[5%] flex h-11 w-11 items-center justify-center rounded-2xl border border-purple-400/30 bg-purple-500/10 text-purple-300 shadow-[0_0_30px_rgba(168,85,247,0.15)] sm:left-[15%]"
          >
            <FiShoppingBag size={21} />
          </motion.div>

        </div>

        {/* ERROR TEXT */}

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.25,
          }}
          className="mt-6 space-y-4"
        >

          <p className="text-xs font-bold uppercase tracking-[0.35em] text-cyan-400">
            Oops! Lost Your Way?
          </p>

          <h2 className="text-3xl font-black tracking-tight sm:text-5xl">
            This Page Is
            <span className="block mt-2 bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
              Out of Style.
            </span>
          </h2>

          <p className="mx-auto max-w-md text-sm leading-7 text-gray-400 sm:text-base">
            Looks like this page has taken a different route.
            Don&apos;t worry! Your next favorite sneakers are just
            a step away.
          </p>

        </motion.div>

        {/* ACTION BUTTONS */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.5,
          }}
          className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >

          {/* HOME BUTTON */}

          <motion.div
            whileHover={shouldReduceMotion ? {} : {
              scale: 1.05,
              y: -4,
            }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto"
          >
            <Link
              href="/"
              className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-purple-900/30 transition-shadow hover:shadow-purple-500/30 sm:w-auto"
            >
              <FiHome size={17} />
              Back to Home
              <FiArrowUpRight size={17} />
            </Link>
          </motion.div>

          {/* PRODUCTS BUTTON */}

          <motion.div
            whileHover={shouldReduceMotion ? {} : {
              scale: 1.05,
              y: -4,
            }}
            whileTap={{ scale: 0.95 }}
            className="w-full sm:w-auto"
          >
            <Link
              href="/products"
              className="flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.05] px-7 py-3.5 text-sm font-bold text-gray-200 backdrop-blur-xl transition-all hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-cyan-300 sm:w-auto"
            >
              <FiShoppingBag size={17} />
              Explore Collection
              <FiArrowUpRight size={17} />
            </Link>
          </motion.div>

        </motion.div>

        {/* GO BACK */}

        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          whileHover={{ x: -5 }}
          onClick={() => window.history.back()}
          className="mt-7 inline-flex cursor-pointer items-center gap-2 text-xs font-medium text-gray-500 transition-colors hover:text-purple-300"
        >
          <FiArrowLeft size={14} />
          Go back to previous page
        </motion.button>

      </div>

      {/* FOOTER */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-6 left-0 w-full px-5 text-center"
      >
        <div className="mx-auto mb-4 h-px max-w-xs bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

        <p className="text-[10px] font-semibold tracking-[0.25em] text-gray-600">
          STRIDEHUB
          <span className="mx-2 text-purple-500">✦</span>
          PREMIUM FOOTWEAR EXPERIENCE
        </p>

        <p className="mt-2 text-[10px] text-gray-700">
          © {new Date().getFullYear()} StrideHub. All rights reserved.
        </p>

      </motion.div>

    </main>
  );
}
