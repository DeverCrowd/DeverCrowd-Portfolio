"use client";
import Link from "next/link";
import { FaEnvelope, FaQuestionCircle } from "react-icons/fa";
import { motion } from "motion/react";
import dynamic from "next/dynamic";
import { ClipLoader } from "react-spinners";
import Image from "next/image";
import FlyingDots from "@/components/ui/FlyingDots";
const CountUp = dynamic(() => import("@/components/ui/CountUp"), {
  loading: () => (
    <div className="flex justify-center items-center h-40">
      <ClipLoader color="#3B82F6" />
    </div>
  ),
  ssr: false,
});

const HomePage = () => {
  return (
    <motion.section
      id="home"
      className="flex justify-center items-center w-full overflow-hidden min-h-screen select-none z-10 pt-10"
    >
      <Image
        alt="Background"
        src="/bgs/bg13.webp"
        fill
        priority
        quality={100}
        className="object-cover -z-10"
      />
      <FlyingDots />
      <div className="flex flex-col items-center justify-center w-full gap-9 sm:p-16 p-4 z-1">
        <h1 className="text-white lg:text-6xl text-4xl font-extrabold text-center xl:w-[60%] w-[100%]">
          Grow <span className="text-primary">Faster</span> With Smarter Digital
          Products
        </h1>
        <p className="text-white/60 text-center lg:text-lg text-sm xl:w-[40%] w-[100%]">
          We build high-performing websites and mobile apps that solve real
          problems, engage users, and grow your business.
        </p>
        <div className="border border-primary w-full xl:w-[50%]"></div>
        {/* Achievements */}
        <div className="xl:w-[50%] w-full flex items-center justify-center">
          <div className="flex flex-wrap items-center justify-between gap-6 text-sm sm:text-base w-full h-full">
            {[
              { to: 11, label: "Projects" },
              { to: 9, label: "Customer" },
              { to: 5, label: "Experience" },
              { to: 3, label: "Industry" },
            ].map(({ to, label }, i) => (
              <div
                key={i}
                className="flex flex-col items-center justify-center gap-2 sm:gap-3 w-[45%] sm:w-[20%] h-[100] bg-white/5 backdrop-blur-md border border-white/10 rounded-full p-4 sm:p-6 shadow-md hover:shadow-lg hover:scale-[1.03] transition-all duration-300"
              >
                <span className="text-white/70 text-sm sm:text-base tracking-wide">
                  {label}
                </span>
                <CountUp
                  from={0}
                  to={to}
                  duration={1.5}
                  separator=","
                  className="text-2xl sm:text-4xl font-bold text-[#0c9aff]"
                />
                {label == "Experience" && (
                  <p className="absolute bottom-5 right-5 text-white/50">Yrs</p>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col items-center gap-1">
          <Link
            href="/about"
            className=" group flex gap-4 border-t border-b rounded-full justify-center items-center w-[170px] sm:w-[200px] shadow-lg shadow-accent hover:shadow-red-500 hover:border-accent transition-all duration-300 hover:backdrop-blur-md backdrop-blur-sm"
          >
            <div className="items-center justify-center rounded-full py-3 text-2xl  transition-all duration-300">
              <FaQuestionCircle />
            </div>
            <div className="text-sm lg:text-lg group-hover:text-red-500 transition-all duration-300">
              Who We Are?
            </div>
          </Link>
          Or
          <Link
            href="/contact"
            className="group flex gap-4 border-t border-b rounded-full items-center w-[200px] sm:w-[250px] shadow-lg shadow-accent hover:shadow-primary hover:border-accent transition-all duration-300 hover:backdrop-blur-md backdrop-blur-sm"
          >
            <div className="items-center justify-center rounded-full py-3 text-2xl px-5 bg-primary group-hover:px-8 transition-all duration-300">
              <FaEnvelope />
            </div>
            <div className="text-sm lg:text-lg group-hover:text-primary transition-all duration-300">
              Book A Call
            </div>
          </Link>
        </div>
      </div>
    </motion.section>
  );
};

export default HomePage;
