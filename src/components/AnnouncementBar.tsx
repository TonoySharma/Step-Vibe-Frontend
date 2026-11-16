
"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import {
  FiTag,
  FiTruck,
  FiArrowRight,
  FiZap,
  FiGift,
} from "react-icons/fi";

const offers = [
  {
    icon: FiTag,
    text: "SPECIAL OFFER",
  },
  {
    icon: FiZap,
    text: "UP TO 50% OFF",
    highlight: true,
  },
  {
    icon: FiTruck,
    text: "FREE SHIPPING ON SELECTED ORDERS",
  },
  {
    icon: FiGift,
    text: "EXCLUSIVE DEALS",
  },
  {
    icon: FiTag,
    text: "LIMITED TIME OFFER",
  },
];

export default function AnnouncementBar() {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="sticky top-0 z-[60] overflow-hidden border-b border-purple-500/20 bg-[#090812] text-white">

      {/* Background Glow */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-purple-950/60 via-transparent to-cyan-950/40" />

      <div className="relative flex h-10 items-center">

        {/* LEFT FIXED LABEL */}
        <div className="relative z-20 flex h-full shrink-0 items-center gap-2 bg-gradient-to-r from-purple-700 to-indigo-700 px-3 sm:px-5">

          <FiZap className="animate-pulse text-yellow-300" />

          <span className="whitespace-nowrap text-[10px] font-black tracking-wider sm:text-xs">
            HOT DEALS
          </span>

          <div className="absolute right-[-10px] top-0 h-full w-5 skew-x-[-15deg] bg-indigo-700" />

        </div>

        {/* MARQUEE CONTENT */}
        <div className="relative flex min-w-0 flex-1 overflow-hidden">

          <motion.div
            className="flex w-max shrink-0 items-center"
            animate={
              shouldReduceMotion
                ? {}
                : { x: ["0%", "-50%"] }
            }
            transition={{
              duration: 30,
              ease: "linear",
              repeat: Infinity,
            }}
          >

            {[0, 1].map((group) => (
              <div
                key={group}
                className="flex shrink-0 items-center"
              >

                {offers.map((offer, index) => {
                  const Icon = offer.icon;

                  return (
                    <div
                      key={`${group}-${index}`}
                      className="flex shrink-0 items-center gap-2 px-5 sm:px-8"
                    >

                      <Icon className="text-xs text-purple-400 sm:text-sm" />

                      <span
                        className={`whitespace-nowrap text-[10px] font-bold tracking-wider sm:text-xs ${
                          offer.highlight
                            ? "bg-gradient-to-r from-purple-400 to-cyan-300 bg-clip-text text-transparent"
                            : "text-gray-300"
                        }`}
                      >
                        {offer.text}
                      </span>

                      <span className="ml-3 h-1 w-1 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />

                    </div>
                  );
                })}

                {/* SHOP NOW */}
                <Link
                  href="/products"
                  className="group flex shrink-0 items-center gap-1 px-5 text-[10px] font-black tracking-wider text-cyan-300 transition-colors hover:text-white sm:px-8 sm:text-xs"
                >
                  SHOP NOW

                  <FiArrowRight className="transition-transform group-hover:translate-x-1" />
                </Link>

              </div>
            ))}

          </motion.div>

        </div>

      </div>

      {/* Bottom Neon Line */}
      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-purple-500/40 via-cyan-400/60 to-purple-500/40" />

    </div>
  );
}
