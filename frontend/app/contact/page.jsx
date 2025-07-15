'use client'
import Image from "next/image";
import Form from "./Form";
import Info from "./Info";
import { useEffect } from "react";
import Lenis from "lenis";

const ContactPage = () => {
   useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  });
  return (
    <section
      className="relative flex flex-col items-center justify-center w-full min-h-[100vh] py-10 px-5 mt-9"
      id="contact"
    >
      <Image
        src="/bgs/bg4.webp"
        fill
        quality={100}
        alt="bg"
        className="object-cover sticky top-0 z-0"
      />

      {/* المقدمة */}
      <div className="  w-full px-5 z-10 text-center">
        <h2 className="text-white text-3xl sm:text-4xl font-bold">
          Let’s build something amazing together
        </h2>
        <p className="text-white/80 max-w-2xl mx-auto mt-4 text-base sm:text-lg">
          Have a project in mind or just want to say hello? Fill out the form or
          reach out directly — we're always excited to hear from you.
        </p>
      </div>

      {/* الفورم والمعلومات */}
      <div className="flex lg:flex-row flex-col justify-center w-full xl:w-[90% gap-2 z-1 m-9">
        <div className="w-full lg:w-1/3 bg- rounded-4xl border-t border-l border-primary shadow-[-9px_-9px_15px_#3B82F6]">
          <Info />
        </div>
        <div className="w-full lg:w-1/2 rounded-4xl border-b border-r border-primary shadow-[9px_9px_15px_#3B82F6]">
          <Form />
        </div>
      </div>
    </section>
  );
};

export default ContactPage;
