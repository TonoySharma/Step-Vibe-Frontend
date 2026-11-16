
"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  FiArrowUpRight,
  FiStar,
  FiZap,
  FiShield,
} from "react-icons/fi";

const items = [
  {
    text: "PREMIUM SNEAKERS",
    icon: FiStar,
  },
  {
    text: "AUTHENTIC QUALITY",
    icon: FiShield,
  },
  {
    text: "STEP INTO YOUR STYLE",
    icon: FiZap,
  },
  {
    text: "EVERY STEP MATTERS",
    icon: FiStar,
  },
  {
    text: "ELEVATE YOUR LOOK",
    icon: FiArrowUpRight,
  },
];

export default function Marquee() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden border-y border-purple-500/20 bg-[#080812] py-7">

      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-purple-900/10 via-cyan-900/10 to-purple-900/10" />

      {/* Top Glow */}
      <div className="absolute left-1/2 top-0 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-purple-400/70 to-transparent" />

      {/* Heading */}
      <div className="relative mb-5 flex items-center justify-center gap-2">
        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-cyan-400" />

        <p className="text-[10px] font-bold uppercase tracking-[0.4em] text-purple-300 sm:text-xs">
          The StrideHub Experience
        </p>

        <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-purple-400" />
      </div>

      {/* Scrolling Track */}
      <div className="relative flex overflow-hidden">

        <motion.div
          className="flex shrink-0 items-center gap-10 pr-10 sm:gap-16 sm:pr-16"
          animate={
            shouldReduceMotion
              ? {}
              : { x: ["0%", "-50%"] }
          }
          transition={{
            duration: 28,
            ease: "linear",
            repeat: Infinity,
          }}
        >
          {[...items, ...items, ...items, ...items].map(
            (item, index) => {
              const Icon = item.icon;

              return (
                <div
                  key={index}
                  className="group flex shrink-0 items-center gap-4"
                >
                  <Icon className="text-xl text-purple-400 transition-all duration-300 group-hover:scale-125 group-hover:text-cyan-400" />

                  <span className="whitespace-nowrap text-sm font-black tracking-[0.16em] text-white/80 transition-colors duration-300 group-hover:text-cyan-300 sm:text-base">
                    {item.text}
                  </span>

                  <span className="h-2 w-2 rotate-45 rounded-sm bg-gradient-to-r from-purple-500 to-cyan-400 shadow-lg shadow-purple-500/30" />
                </div>
              );
            }
          )}
        </motion.div>

      </div>

      {/* Bottom Glow */}
      <div className="absolute bottom-0 left-1/2 h-px w-1/2 -translate-x-1/2 bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />

    </section>
  );
}
