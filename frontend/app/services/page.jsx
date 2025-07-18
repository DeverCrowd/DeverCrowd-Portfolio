"use client";
import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import Card from "./Card";
import Cube from "../../components/ui/Cube";
import H1 from "../../components/ui/H1";

import { services } from "@/data/static/services";
import Footer from "@/components/Footer";
import Lenis from "lenis";
import FlyingDots from "@/components/ui/FlyingDots";
import { Spotlight } from "@/components/ui/spotlight-new";
import Link from "next/link";
import { FaArrowAltCircleRight } from "react-icons/fa";

const ServicesPage = () => {
  const section = useRef(null);
  const { scrollYProgress } = useScroll({
    target: section,
  });

  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isLaptop, setIsLaptop] = useState(false);
  const [innerWidth, setInnerWidth] = useState(0);
  const [isUnder24, setIsUnder24] = useState(false);
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  });

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setInnerWidth(window.innerWidth);
      setIsMobile(width <= 480);
      setIsTablet(width > 480 && width <= 768);
      setIsLaptop(width > 768 && width <= 1640);
      setIsUnder24(width < 1024);
    };

    handleResize();

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const cubeSize = isMobile ? 150 : isTablet ? 250 : isLaptop ? 300 : 350;
  const xCube = useTransform(
    scrollYProgress,
    [0, 0.2],
    [0, isUnder24 ? 0 : -(innerWidth / 2 - cubeSize)]
  );
  const rotateYCube = useTransform(scrollYProgress, [0, 1], [0, 400]);
  const rotateXCube = useTransform(scrollYProgress, [0, 0.2], [-90, -25]);

  return (
    <>
      <div className="flex flex-col h-screen items-center justify-center px-10">
        <Spotlight />
        <FlyingDots />
        <H1 title="Your Growth Toolkit" />
        <p className="text-white/80 text-lg sm:text-xl max-w-3xl text-center lg:text-start mb-6">
          Discover the tools and services designed to accelerate your digital
          journey — crafted for impact, built for growth.
        </p>
      </div>
      <motion.section
        ref={section}
        className="flex flex-col justify-center items-center w-full lg:h-[700vh] z-30 backdrop-brightness-100  "
        id="services"
      >
        <div className="flex flex-col items-center justify-start w-full h-full">
          <div className="hidden lg:flex flex-col absolute items-center justify-start mt-50 h-[95%] w-[100%] pb-25 z-50 ">
            <Cube
              cubeSize={cubeSize}
              style={{
                position: "sticky",
                top: "30%",
                x: xCube,
                rotateY: rotateYCube,
                rotateX: rotateXCube,
              }}
            />
          </div>
 
          <div className="flex flex-col relative lg:absolute items-center lg:items-start justify-start h-[100%] lg:mt-0 w-[100%] lg:pb-50 ">
            {services.map((service, i) => {
              return (
                <Card key={i} i={i} progress={scrollYProgress} {...service} />
              );
            })}
          </div>
        </div>
        <Link
          href="/works"
          className=" group flex gap-4 border-t border-b rounded-full justify-center items-center  w-[300px] shadow-lg shadow-accent hover:shadow-red-500 hover:border-accent transition-all duration-300 hover:backdrop-blur-md backdrop-blur-sm mb-9"
        >
          <div className="text-sm  group-hover:text-red-500 transition-all duration-300">
            Chekout Some of Our Works
          </div>
          <div className="items-center justify-center rounded-full py-3 text-2xl  transition-all duration-300">
            <FaArrowAltCircleRight />
          </div>
        </Link>
      </motion.section>
      <Footer />
    </>
  );
};

export default ServicesPage;
