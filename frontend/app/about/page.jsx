"use client";
import { motion } from "motion/react";
import { Spotlight } from "../../components/ui/spotlight-new";
import { LampContainer } from "../../components/ui/lamp";
import H1 from "../../components/ui/H1";
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
import { useEffect, useRef } from "react";

import testimonials from "@/data/dynamic/testimonials";

import { vmc, whoweare } from "@/data/static/about";
import Footer from "@/components/Footer";
import { FaArrowAltCircleRight, FaEnvelope } from "react-icons/fa";
import Link from "next/link";
import Lenis from "lenis";
import FlyingDots from "@/components/ui/FlyingDots";

const page = () => {
  const swiperRef = useRef(null);
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  });

  return (
    <>
      <motion.section
        className="flex flex-col justify-center items-center w-full overflow-hidden min-h-screen select-none z-20 "
        id="about"
      >
        <FlyingDots />
        <Spotlight />

        <div className="[mask-image:linear-gradient(to_top,transparent,white_20%,white_100%,transparent)] min-h-screen bg-[#0a0f1c] flex flex-col items-center justify-center px-4 py-10 w-full">
          {/* العنوان مع اللمبة العلوية */}
          <div className="relative mb-8">
            {/* الخط الأزرق فوق العنوان */}
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-blue-600 rounded-full blur-sm"></div>

            <h1 className="text-center text-4xl sm:text-5xl md:text-6xl font-extrabold text-blue-500 drop-shadow-[0_0_20px_rgba(59,130,246,0.7)]">
              {whoweare.title}
            </h1>
          </div>

          {/* النص الوصفي داخل صندوق */}
          <div className="bg-[#0d111c] border border-blue-500/20 rounded-xl px-6 py-6 max-w-3xl text-center text-white text-lg md:text-xl leading-relaxed shadow-[0_0_30px_rgba(59,130,246,0.4)]">
            <p>{whoweare.description}</p>
          </div>
        </div>

        {/* Vision / Mission / core value */}
        <motion.div className="w-full max-w-7xl px-4 sm:px-6 grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {vmc.map((item, i) => (
            <div
              key={i}
              className="group relative flex flex-col items-center text-center rounded-3xl p-6 bg-gradient-to-b from-white/5 to-white/0 border border-blue-500/20 backdrop-blur-md overflow-hidden transition duration-500 hover:shadow-[0_0_30px_rgba(59,130,246,0.2)]"
            >
              {/* Glow circle background */}
              <div className="absolute -top-10 left-1/2 -translate-x-1/2 w-[120px] h-[120px] bg-blue-500/10 rounded-full blur-2xl group-hover:scale-110 transition" />

              {/* Icon */}
              <div className="relative z-10 w-14 h-14 mb-4 flex items-center justify-center rounded-full border border-blue-500/30 bg-white/10 text-blue-400 text-2xl shadow-lg backdrop-blur-sm group-hover:scale-105 transition">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="relative z-10 text-xl md:text-2xl font-semibold text-blue-300 tracking-wide mb-2">
                {item.title}
              </h3>

              {/* Description */}
              <p className="relative z-10 text-sm md:text-base text-white/90 leading-relaxed font-light tracking-wide">
                {item.desc}
              </p>

              {/* Glow border bottom on hover */}
              <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-blue-500/40 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-center" />
            </div>
          ))}
        </motion.div>

        <div
          id="swiper"
          className="w-full relative border-primary [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)] mt-20 "
        >
          <H1 title="what client said" />
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            loop={true}
            spaceBetween={0}
            pagination={{ dynamicBullets: true }}
            effect="coverflow"
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            freeMode={true}
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
            className="h-[300px] rounded-3xl p-9"
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
      <Footer />
    </>
  );
};

export default page;
