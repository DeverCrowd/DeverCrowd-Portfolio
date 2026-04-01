"use client";

import Image from "next/image";
import Form from "./Form";
import Info from "./Info";
import { useLenis } from "@/hooks/useLenis";

export default function ContactPage() {
  useLenis();

  return (
    <section
      className="relative flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center px-5 py-12"
      id="contact"
    >
      <div className="pointer-events-none absolute inset-0 -z-10">
        <Image
          src="/bgs/bg4.webp"
          fill
          sizes="100vw"
          quality={85}
          alt=""
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/90" />
      </div>

      <div className="relative z-10 w-full px-4 text-center">
        <h2 className="text-3xl font-bold text-foreground sm:text-4xl">
          Let’s build something amazing together
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-base text-muted-foreground sm:text-lg">
          Have a project in mind or just want to say hello? Fill out the form or reach out directly —
          we&apos;re always excited to hear from you.
        </p>
      </div>

      <div className="relative z-10 m-9 flex w-full max-w-7xl flex-col justify-center gap-8 lg:flex-row lg:gap-12">
        <div className="w-full rounded-3xl border border-border bg-card/40 p-4 shadow-lg backdrop-blur-md lg:w-1/3">
          <Info />
        </div>
        <div className="w-full rounded-3xl border border-border bg-card/40 p-4 shadow-lg backdrop-blur-md lg:w-1/2">
          <Form />
        </div>
      </div>
    </section>
  );
}
