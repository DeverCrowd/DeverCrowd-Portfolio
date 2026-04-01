"use client";

import { motion } from "motion/react";
import H1 from "@/components/ui/H1";
import TestCard from "./TestCard";
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import { useRef } from "react";

import testimonials from "@/data/dynamic/testimonials";

import { vmc, whoweare } from "@/data/static/about";
import { FaArrowAltCircleRight } from "react-icons/fa";
import Link from "next/link";
import FlyingDots from "@/components/ui/FlyingDots";
import { useLenis } from "@/hooks/useLenis";

export default function AboutPage() {
  const swiperRef = useRef(null);
  useLenis();

  return (
    <>
      <motion.section
        className="z-20 flex min-h-screen w-full flex-col items-center justify-center overflow-hidden py-10"
        id="about"
      >
        <FlyingDots />

        <div className="flex min-h-screen w-full flex-col items-center justify-center bg-gradient-to-b from-background via-card/30 to-background px-4 py-10 [mask-image:linear-gradient(to_top,transparent,white_20%,white_100%,transparent)]">
          <div className="relative mb-8">
            <div className="absolute -top-4 left-1/2 h-1 w-24 -translate-x-1/2 rounded-full bg-primary blur-sm" />

            <h1 className="text-center text-4xl font-extrabold text-primary drop-shadow-[0_0_20px_color-mix(in_srgb,var(--primary)_50%,transparent)] sm:text-5xl md:text-6xl">
              {whoweare.title}
            </h1>
          </div>

          <div className="max-w-3xl rounded-xl border border-border bg-card/90 px-6 py-6 text-center text-lg leading-relaxed text-foreground shadow-lg md:text-xl">
            <p>{whoweare.description}</p>
          </div>
        </div>

        <motion.div className="grid w-full max-w-7xl grid-cols-1 items-stretch gap-8 px-4 sm:px-6 md:grid-cols-3">
          {vmc.map((item, i) => (
            <div
              key={i}
              className="group relative flex flex-col items-center overflow-hidden rounded-3xl border border-border bg-gradient-to-b from-card to-transparent p-6 text-center backdrop-blur-md transition duration-500 hover:border-primary/30 hover:shadow-[0_0_30px_color-mix(in_srgb,var(--primary)_20%,transparent)]"
            >
              <div className="absolute -top-10 left-1/2 h-[120px] w-[120px] -translate-x-1/2 rounded-full bg-primary/10 blur-2xl transition group-hover:scale-110" />

              <div className="relative z-10 mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-border bg-muted/50 text-2xl text-primary shadow-lg backdrop-blur-sm transition group-hover:scale-105">
                {item.icon}
              </div>

              <h3 className="relative z-10 mb-2 text-xl font-semibold tracking-wide text-foreground md:text-2xl">
                {item.title}
              </h3>

              <p className="relative z-10 text-sm font-light leading-relaxed tracking-wide text-muted-foreground md:text-base">
                {item.desc}
              </p>

              <span className="absolute bottom-0 left-0 h-[2px] w-full origin-center scale-x-0 bg-gradient-to-r from-transparent via-primary/40 to-transparent transition-transform duration-500 group-hover:scale-x-100" />
            </div>
          ))}
        </motion.div>
        <Link
          href="/services"
          className="my-9 flex w-[190px] items-center justify-center gap-4 rounded-full border border-border bg-card/50 px-4 py-3 text-sm shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-primary/50 hover:shadow-[0_0_24px_color-mix(in_srgb,var(--primary)_25%,transparent)] sm:w-[230px] sm:text-lg"
        >
          <span className="transition group-hover:text-primary">What We Offer?</span>
          <FaArrowAltCircleRight className="text-2xl text-primary" />
        </Link>
        <div id="swiper" className="relative w-full border-border">
          <H1 title="what clients said" />
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            loop
            spaceBetween={0}
            pagination={{ dynamicBullets: true }}
            effect="coverflow"
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            freeMode
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            slidesPerView={1}
            className="rounded-3xl p-9"
            onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
            onMouseLeave={() => swiperRef.current?.autoplay?.start()}
          >
            {testimonials.map((testimonial, i) => (
              <SwiperSlide key={i} className="p-5">
                <TestCard {...testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </motion.section>
    </>
  );
}
