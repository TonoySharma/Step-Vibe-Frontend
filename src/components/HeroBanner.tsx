
"use client";

import { useEffect, createElement } from "react";
import { Button } from "@heroui/react";
import { motion, useReducedMotion } from "framer-motion";
import {
  FiArrowUpRight,
  FiShield,
  FiTruck,
  FiRefreshCw,
  FiPlay,
} from "react-icons/fi";

type ModelViewerElement = HTMLElement & {
  src: string;
  alt: string;
  cameraControls: boolean;
  autoRotate: boolean;
};

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.16,
    },
  },
};

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 35,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut" as const,
    },
  },
};

const shoeVariants = {
  hidden: {
    opacity: 0,
    x: 100,
    scale: 0.8,
    rotateY: -25,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
    rotateY: 0,
    transition: {
      duration: 1.3,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

export default function Banner() {
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    import("@google/model-viewer").catch(console.error);
  }, []);

  const shoeModel = createElement(
    "model-viewer",
    {
      src: "/models/premium-sneaker.glb",
      poster: "/images/shoe-poster.webp",
      alt: "Premium 3D sneaker",
      "camera-controls": true,
      "auto-rotate": true,
      "auto-rotate-delay": "0",
      "rotation-per-second": "18deg",
      "interaction-prompt": "none",
      "shadow-intensity": "1.3",
      exposure: "1.1",
      "environment-image": "neutral",
      "camera-orbit": "0deg 75deg 0.65m",
      "min-camera-orbit": "auto auto 0.35m",
      "max-camera-orbit": "auto auto 3m",
      "field-of-view": "35deg",
      "touch-action": "pan-y",
      style: {
        width: "100%",
        height: "100%",
        background: "transparent",
        outline: "none",
      },
    } as React.HTMLAttributes<ModelViewerElement>
  );

  return (
    <section className="relative min-h-[700px] overflow-hidden bg-[#080812] text-white">

      {/* BACKGROUND EFFECTS */}

      <div className="pointer-events-none absolute inset-0 overflow-hidden">

        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  scale: [1, 1.2, 1],
                  opacity: [0.15, 0.3, 0.15],
                }
          }
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute left-[-150px] top-[-100px] h-[400px] w-[400px] rounded-full bg-purple-700/25 blur-[140px]"
        />

        <motion.div
          animate={
            shouldReduceMotion
              ? {}
              : {
                  scale: [1, 1.3, 1],
                  opacity: [0.1, 0.25, 0.1],
                }
          }
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute right-[-100px] top-[100px] h-[450px] w-[450px] rounded-full bg-cyan-500/20 blur-[150px]"
        />

        {/* GRID BACKGROUND */}

        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.3) 1px, transparent 1px)",
            backgroundSize: "55px 55px",
          }}
        />

      </div>

      {/* MAIN CONTENT */}

      <div className="relative mx-auto grid min-h-[700px] max-w-[1400px] items-center gap-8 px-6 py-20 md:grid-cols-2 lg:px-12">

        {/* LEFT CONTENT */}

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="relative z-10 order-2 space-y-7 md:order-1"
        >

          {/* BADGE */}

          <motion.div variants={fadeUp}>
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-400/30 bg-purple-500/10 px-4 py-2 text-sm text-purple-200 backdrop-blur-xl">

              <span className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />

              Premium Footwear Collection 2026

            </div>
          </motion.div>

          {/* HEADING */}

          <motion.div variants={fadeUp} className="space-y-4">

            <h1 className="text-5xl font-black leading-[1.12] tracking-tight sm:text-6xl lg:text-7xl">

              Step Into

              <br />

              <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-cyan-400 bg-clip-text text-transparent">
                Your Style.
              </span>

              <br />

              Own Every Step.

            </h1>

            <p className="max-w-lg text-base leading-8 text-gray-400 sm:text-lg">

              Discover premium sneakers, timeless classics and everyday
              comfort. Find your perfect fit and make every step count
              with StrideHub.

            </p>

          </motion.div>

          {/* BUTTONS */}

          <motion.div
            variants={fadeUp}
            className="flex flex-wrap items-center gap-4"
          >

            <motion.div
              whileHover={shouldReduceMotion ? {} : {
                scale: 1.06,
                y: -4,
              }}
              whileTap={{ scale: 0.95 }}
            >

              <Button
                variant="primary"
                onPress={() => (window.location.href = "/products")}
                className="h-13 rounded-xl bg-gradient-to-r from-purple-600 to-indigo-600 px-7 font-semibold text-white shadow-lg shadow-purple-900/30 transition-shadow hover:shadow-purple-500/40"
              >
                Shop Collection
                <FiArrowUpRight className="text-lg" />
              </Button>

            </motion.div>

            <motion.div
              whileHover={shouldReduceMotion ? {} : {
                scale: 1.06,
                y: -4,
              }}
              whileTap={{ scale: 0.95 }}
            >

              <Button
                variant="outline"
                onPress={() => (window.location.href = "/categories")}
                className="h-13 rounded-xl border border-white/20 bg-white/5 px-7 text-white transition-all hover:bg-white/10"
              >
                <FiPlay />
                Explore More
              </Button>

            </motion.div>

          </motion.div>

          {/* FEATURES */}

          <motion.div
            variants={fadeUp}
            className="flex flex-wrap gap-x-7 gap-y-4 border-t border-white/10 pt-7"
          >

            <div className="flex items-center gap-2 text-sm text-gray-300">
              <FiShield className="text-lg text-purple-400" />
              Authentic Products
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-300">
              <FiTruck className="text-lg text-cyan-400" />
              Fast Delivery
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-300">
              <FiRefreshCw className="text-lg text-purple-400" />
              Easy Returns
            </div>

          </motion.div>

          <motion.p
            variants={fadeUp}
            className="text-xs tracking-wide text-gray-500"
          >
            PREMIUM QUALITY · PERFECT FIT · EVERYDAY COMFORT
          </motion.p>

        </motion.div>

        {/* RIGHT 3D SNEAKER SECTION */}

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={shoeVariants}
          className="relative order-1 flex flex-col items-center md:order-2"
        >

          <div className="relative flex h-[350px] w-full items-center justify-center sm:h-[500px]">

            {/* OUTER GLOW */}

            <motion.div
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      scale: [1, 1.15, 1],
                      opacity: [0.2, 0.4, 0.2],
                    }
              }
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute h-[280px] w-[280px] rounded-full bg-purple-600/25 blur-[90px] sm:h-[400px] sm:w-[400px]"
            />

            {/* OUTER ROTATING RING */}

            <motion.div
              animate={shouldReduceMotion ? {} : {
                rotate: 360,
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-[340px] w-[340px] rounded-full border border-purple-400/30 border-dashed sm:h-[490px] sm:w-[490px]"
            />

            {/* INNER ROTATING RING */}

            <motion.div
              animate={shouldReduceMotion ? {} : {
                rotate: -360,
              }}
              transition={{
                duration: 18,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute h-[290px] w-[290px] rounded-full border border-cyan-400/20 sm:h-[420px] sm:w-[420px]"
            />

            {/* 3D SHOE */}

            <motion.div
              animate={
                shouldReduceMotion
                  ? {}
                  : {
                      y: [0, -18, 0],
                      rotateZ: [-2, 2, -2],
                    }
              }
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10 h-[340px] w-full max-w-[570px] sm:h-[480px]"
            >
              {shoeModel}
            </motion.div>

          </div>

          {/* FEATURE CARDS */}

          <motion.div
            variants={containerVariants}
            className="z-20 grid w-full max-w-[570px] grid-cols-3 gap-2 sm:gap-3"
          >

            {[
              {
                number: "01",
                title: "Everyday Comfort",
                description: "Comfort-focused for daily wear",
                color: "text-purple-300",
              },
              {
                number: "02",
                title: "Sporty Design",
                description: "A clean athletic look",
                color: "text-cyan-300",
              },
              {
                number: "03",
                title: "Easy to Style",
                description: "Made for everyday outfits",
                color: "text-fuchsia-300",
              },
            ].map((feature) => (

              <motion.div
                key={feature.number}
                variants={fadeUp}
                whileHover={shouldReduceMotion ? {} : {
                  y: -7,
                  scale: 1.04,
                  borderColor: "rgba(168,85,247,0.5)",
                }}
                className="rounded-xl border border-white/10 bg-white/[0.06] px-2 py-3 text-center backdrop-blur-xl transition-colors sm:px-3"
              >

                <span className={`text-[10px] font-bold sm:text-xs ${feature.color}`}>
                  {feature.number}
                </span>

                <p className="mt-1 text-[11px] font-semibold text-white sm:text-sm">
                  {feature.title}
                </p>

                <p className="mt-1 text-[9px] leading-4 text-gray-400 sm:text-xs">
                  {feature.description}
                </p>

              </motion.div>

            ))}

          </motion.div>

          {/* ROTATION HINT */}

          <motion.p
            animate={shouldReduceMotion ? {} : {
              opacity: [0.4, 1, 0.4],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="z-20 mt-3 text-center text-xs text-gray-500"
          >
            ↔ Drag to rotate · Scroll to zoom
          </motion.p>

        </motion.div>

      </div>

      {/* BOTTOM GLOW LINE */}

      <div className="absolute bottom-0 left-0 h-px w-full bg-gradient-to-r from-transparent via-purple-500/60 to-transparent" />

    </section>
  );
}
