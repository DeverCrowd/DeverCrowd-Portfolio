"use client";
import Link from "next/link";
import { FaEnvelope, FaQuestionCircle } from "react-icons/fa";
import { motion } from "motion/react";
import dynamic from "next/dynamic";
import { ClipLoader } from "react-spinners";

const Antigravity = dynamic(() => import("@/components/Antigravity"), {
  ssr: false,
  loading: () => (
    <div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,color-mix(in_srgb,var(--primary)_12%,transparent),transparent_70%)]" />
  ),
});

const CountUp = dynamic(() => import("@/components/ui/CountUp"), {
  loading: () => (
    <div className="flex justify-center items-center h-10">
      <ClipLoader color="var(--primary)" size={24} />
    </div>
  ),
  ssr: false,
});

const stats = [
  { to: 11, label: "Projects" },
  { to: 9, label: "Customers" },
  { to: 5, label: "Yrs Exp." },
  { to: 3, label: "Industries" },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const HomePage = () => {
  return (
    <motion.section
      id="home"
      className="relative flex justify-center items-center w-full min-h-screen py-24 overflow-hidden"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Glow bg */}
      {/* <div
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full -z-10 blur-3xl"
        style={{ background: "color-mix(in srgb, var(--primary) 15%, transparent)" }}
      /> */}
      <div style={{ width: "100%", height: "100%", position: "absolute", top: 0, left: 0 , zIndex: -1}}>
        <Antigravity
          count={300}
          magnetRadius={6}
          ringRadius={7}
          waveSpeed={0.4}
          waveAmplitude={1}
          particleSize={1.5}
          lerpSpeed={0.05}
          color="#5227FF"
          autoAnimate
          particleVariance={1}
          rotationSpeed={0}
          depthFactor={1}
          pulseSpeed={3}
          particleShape="capsule"
          fieldStrength={10}
        />
      </div>

      <div className="flex flex-col items-center justify-center w-full gap-8 px-4 sm:px-16 z-10">
        {/* Badge */}
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-2 px-4 py-1.5 rounded-full text-xs"
          style={{
            border: "1px solid var(--border)",
            background: "var(--card)",
            color: "var(--muted-foreground)",
          }}
        >
          <span
            className="w-2 h-2 rounded-full"
            style={{
              background: "var(--primary)",
              boxShadow: "0 0 8px var(--primary)",
            }}
          />
          Digital Products Studio
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={itemVariants}
          className="font-extrabold text-center leading-tight"
          style={{
            fontSize: "clamp(28px, 5vw, 52px)",
            color: "var(--foreground)",
          }}
        >
          Grow{" "}
          <span
            style={{
              background:
                "linear-gradient(135deg, var(--primary), var(--accent))",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            Faster
          </span>{" "}
          With Smarter Digital Products
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="text-center text-sm md:text-base max-w-md leading-relaxed"
          style={{ color: "var(--muted-foreground)" }}
        >
          We build high-performing websites and mobile apps that solve real
          problems, engage users, and grow your business.
        </motion.p>

        {/* Divider */}
        <motion.div
          variants={itemVariants}
          className="w-full max-w-lg h-px"
          style={{
            background:
              "linear-gradient(90deg, transparent, var(--primary), var(--accent), transparent)",
          }}
        />

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 w-full max-w-lg"
        >
          {stats.map(({ to, label }) => (
            <div
              key={label}
              className="flex flex-col items-center justify-center gap-1 p-4 rounded-2xl transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "var(--card)",
                border: "1px solid var(--border)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor =
                  "color-mix(in srgb, var(--primary) 50%, transparent)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "var(--border)";
              }}
            >
              <div className="flex items-end gap-0.5 leading-none">
                <CountUp
                  from={0}
                  to={to}
                  duration={1.5}
                  separator=","
                  className="text-2xl sm:text-3xl font-bold"
                  style={{ color: "var(--primary)" }}
                />
                <span
                  className="text-xs font-semibold mb-1"
                  style={{ color: "var(--secondary)" }}
                >
                  +
                </span>
              </div>
              <span
                className="text-[10px] uppercase tracking-widest"
                style={{ color: "var(--muted-foreground)" }}
              >
                {label}
              </span>
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-4 flex-wrap justify-center"
        >
          <Link
            href="/contact"
            className="flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5"
            style={{
              background: "var(--primary)",
              color: "var(--primary-foreground)",
              boxShadow:
                "0 0 20px color-mix(in srgb, var(--primary) 35%, transparent)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--secondary)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--primary)";
            }}
          >
            <FaEnvelope />
            Book A Call
          </Link>

          <Link
            href="/about"
            className="flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-200"
            style={{
              border: "1px solid var(--border)",
              color: "var(--foreground)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor =
                "color-mix(in srgb, var(--accent) 60%, transparent)";
              e.currentTarget.style.color = "var(--accent)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "var(--border)";
              e.currentTarget.style.color = "var(--foreground)";
            }}
          >
            <FaQuestionCircle />
            Who We Are?
          </Link>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HomePage;
