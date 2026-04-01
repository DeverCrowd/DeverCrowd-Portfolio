"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useEffect, useRef, useState } from "react";
import Card from "./Card";
import Cube from "../../components/ui/Cube";
import H1 from "../../components/ui/H1";

import { services } from "@/data/static/services";
import FlyingDots from "@/components/ui/FlyingDots";
import { Spotlight } from "@/components/ui/spotlight-new";
import Link from "next/link";
import { FaArrowAltCircleRight } from "react-icons/fa";
import { useLenis } from "@/hooks/useLenis";

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

  useLenis();

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
      <div className="flex h-screen flex-col items-center justify-center px-10">
        <Spotlight />
        <FlyingDots />
        <H1 title="Your Growth Toolkit" />
        <p className="mb-6 max-w-3xl text-center text-lg text-muted-foreground sm:text-xl lg:text-start">
          Discover the tools and services designed to accelerate your digital journey — crafted for
          impact, built for growth.
        </p>
      </div>
      <motion.section
        ref={section}
        className="z-30 flex w-full flex-col items-center justify-center backdrop-brightness-100 lg:h-[700vh]"
        id="services"
      >
        <div className="flex h-full w-full flex-col items-center justify-start">
          <div className="absolute z-50 mt-50 hidden h-[95%] w-[100%] flex-col items-center justify-start pb-25 lg:flex">
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

          <div className="relative flex h-[100%] w-[100%] flex-col items-center justify-start lg:absolute lg:mt-0 lg:pb-50 lg:items-start">
            {services.map((service, i) => (
              <Card key={service.title ?? i} i={i} progress={scrollYProgress} {...service} />
            ))}
          </div>
        </div>
        <Link
          href="/works"
          className="mb-9 flex w-[min(100%,320px)] items-center justify-center gap-4 rounded-full border border-border bg-card/40 px-4 py-3 shadow-lg backdrop-blur-sm transition-all duration-300 hover:border-primary/40 hover:shadow-[0_0_24px_color-mix(in_srgb,var(--primary)_25%,transparent)]"
        >
          <span className="text-sm transition group-hover:text-primary sm:text-base">
            Checkout some of our work
          </span>
          <FaArrowAltCircleRight className="text-2xl text-primary" />
        </Link>
      </motion.section>
    </>
  );
};

export default ServicesPage;
