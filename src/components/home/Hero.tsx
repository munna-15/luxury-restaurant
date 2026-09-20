"use client";

import { motion } from "motion/react";

const forkImage =
  "https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2018/09/fork-free-img.png";

const knifeImage =
  "https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2018/09/knife-free-imge.png";

const frillImage =
  "https://websitedemos.net/italian-restaurant-02/wp-content/uploads/sites/283/2018/09/frill-free-img.png";

const heroBackground =
  "https://plus.unsplash.com/premium_photo-1733306588881-0411931d4fed?q=80&w=1169&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

export default function Hero() {
  return (
    <section className="relative z-10 flex h-[85vh] min-h-[560px] w-full items-center justify-center overflow-hidden text-white md:h-screen md:min-h-screen">
      {/* Hero Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url("${heroBackground}")`,
          backgroundPosition: "center 48%",
          backgroundAttachment: "fixed",
        }}
      />

      {/* Hero Overlay */}
      <div className="absolute inset-0 bg-[#120d09]/42" />

      <div className="absolute inset-0 " />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,7,5,0.5)_0%,rgba(10,7,5,0.08)_35%,rgba(10,7,5,0.62)_100%)]" />

      {/* Decorative Frill */}
      <div
        className="pointer-events-none absolute left-1/2 top-[33%] z-0 -translate-x-1/2"
        aria-hidden="true"
      >
        <img
          src={frillImage}
          alt=""
          className="h-auto w-[260px] opacity-80 sm:w-[225px] md:w-[240px] lg:w-[260px]"
        />
      </div>

      {/* Left Knife */}
      <div
        className="pointer-events-none absolute left-[2%] top-[60%] z-0 -translate-y-1/2 sm:left-[12%] md:left-[14%] lg:left-[16%]"
        aria-hidden="true"
      >
        <img
          src={knifeImage}
          alt=""
          className="h-[290px] w-auto opacity-85 sm:h-[290px] md:h-[355px] lg:h-[415px]"
        />
      </div>

      {/* Right Fork */}
      <div
        className="pointer-events-none absolute right-[2%] top-[60%] z-0 -translate-y-1/2 sm:right-[12%] md:right-[14%] lg:right-[16%]"
        aria-hidden="true"
      >
        <img
          src={forkImage}
          alt=""
          className="h-[290px] w-auto opacity-85 sm:h-[290px] md:h-[355px] lg:h-[415px]"
        />
      </div>

      {/* Center Content */}
      <div className="absolute inset-0 z-10 flex items-center justify-center px-6 pt-[20vh] sm:px-10 md:pt-[24vh]">
        <div className="flex max-w-[950px] flex-col items-center justify-center text-center">
          <motion.h1
            initial={{
              opacity: 0,
              y: -220,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 2.2,
              ease: [0.16, 1, 0.3, 1],
            }}
            className="font-display text-[clamp(4.8rem,11.5vw,10rem)] font-bold leading-[0.82] tracking-[-0.06em] text-white drop-shadow-[0_10px_35px_rgba(0,0,0,0.3)]"
          >
            Maison.
          </motion.h1>

          <div className="mt-10 flex flex-col items-center sm:mt-12 md:mt-14">
            <p className="text-[15px] font-bold uppercase tracking-[0.28em] text-white/95 sm:text-[18px] md:text-[21px]">
              Italian Specialities
            </p>

            <div className="mt-7 flex items-center justify-center gap-5 sm:mt-8 sm:gap-7">
              <span className="h-px w-8 bg-white/55 sm:w-12 md:w-16" />

              <p className="whitespace-nowrap text-[12px] font-bold uppercase tracking-[0.2em] text-white/90 sm:text-[14px] md:text-[16px]">
                Good Food
                <span className="mx-4 text-[#d6ad73] sm:mx-5">|</span>
                Good Wine
              </p>

              <span className="h-px w-8 bg-white/55 sm:w-12 md:w-16" />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Detail */}
      <div className="absolute bottom-6 left-1/2 z-20 -translate-x-1/2 sm:bottom-8">
        <p className="whitespace-nowrap text-[8px] font-semibold uppercase tracking-[0.35em] text-white/45 sm:text-[9px]">
          Crafted with tradition
        </p>
      </div>
    </section>
  );
}
