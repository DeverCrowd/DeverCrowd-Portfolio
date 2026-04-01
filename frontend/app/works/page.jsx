"use client";

import { AnimatePresence, motion } from "motion/react";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import Link from "next/link";
import { useState } from "react";
import { Navigation, Pagination, Autoplay, EffectCube } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-cube";

import Image from "next/image";
import projects from "@/data/dynamic/projects";
import H1 from "@/components/ui/H1";

export default function WorksPage() {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <>
      <section className="min-h-screen bg-gradient-to-br from-[#0c45a0]/90 to-[#091d3a]/90 bg-[url('/bgs/bg15.webp')] bg-cover bg-center bg-no-repeat bg-blend-overlay px-4 py-20 text-foreground xl:px-20">
        <div className="mx-auto flex max-w-[1440px] flex-col items-start gap-12 xl:flex-row">
          <div className="relative w-full xl:w-[35%]">
            <Swiper
              modules={[Navigation, Pagination, Autoplay, EffectCube]}
              spaceBetween={30}
              slidesPerView={1}
              navigation
              pagination={{ clickable: true }}
              effect="cube"
              autoplay={{ delay: 10000 }}
              coverflowEffect={{
                rotate: -50,
                stretch: 0,
                depth: 200,
                modifier: 1,
                slideShadows: true,
              }}
              onSlideChange={handleSlideChange}
              className="rounded-3xl xl:h-[250px]"
            >
              {projects.map((proj, index) => (
                <SwiperSlide key={proj.name ?? index}>
                  <div className="relative h-[300px] overflow-hidden rounded-3xl shadow-lg xl:h-[280px]">
                    <Image
                      src={proj.pic}
                      alt={proj.title || proj.name}
                      fill
                      sizes="(max-width: 1280px) 100vw, 35vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      priority={index === 0}
                    />
                    {(proj.live || proj.github) && (
                      <div className="absolute bottom-4 left-0 right-0 z-10 flex flex-wrap justify-center gap-3 px-4">
                        {proj.live && (
                          <Link
                            href={proj.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex w-fit items-center gap-3 rounded-2xl bg-primary p-3 text-lg font-semibold text-primary-foreground shadow-lg transition-all hover:opacity-90"
                          >
                            <BsArrowUpRight className="text-2xl" />
                            Live
                          </Link>
                        )}
                        {proj.github && (
                          <Link
                            href={proj.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex w-fit items-center gap-3 rounded-2xl bg-primary p-3 text-lg font-semibold text-primary-foreground shadow-lg transition-all hover:opacity-90"
                          >
                            <BsGithub className="text-2xl" />
                            GitHub
                          </Link>
                        )}
                      </div>
                    )}
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={project.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="flex w-full flex-col gap-8 xl:w-[65%]"
            >
              <H1 title={project.name} />
              <p className="text-center leading-relaxed text-sky-100/95 xl:text-left">
                {project.description}
              </p>

              <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
                <div className="rounded-2xl border border-border bg-card/60 p-4 shadow backdrop-blur-sm">
                  <p className="mb-1 text-sm text-muted-foreground">Client</p>
                  <p className="font-medium text-foreground">{project.client}</p>
                </div>
                <div className="rounded-2xl border border-border bg-card/60 p-4 shadow backdrop-blur-sm">
                  <p className="mb-1 text-sm text-muted-foreground">Timeline</p>
                  <p className="font-medium text-foreground">{project.timeSpend}</p>
                </div>
                <div className="rounded-2xl border border-border bg-card/60 p-4 shadow backdrop-blur-sm">
                  <p className="mb-1 text-sm text-muted-foreground">Category</p>
                  <p className="font-medium text-foreground">{project.category}</p>
                </div>

                <div className="col-span-1 rounded-2xl border border-border bg-card/60 p-4 shadow backdrop-blur-sm md:col-span-3">
                  <p className="mb-2 text-sm text-muted-foreground">Stack</p>
                  <div className="flex flex-wrap gap-2">
                    {project.stack.map((item, index) => (
                      <span
                        key={index}
                        className="rounded-full bg-primary/15 px-3 py-1 text-sm text-primary"
                      >
                        {item.name}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="col-span-1 rounded-2xl border border-border bg-card/60 p-4 shadow backdrop-blur-sm md:col-span-3">
                  <p className="mb-2 text-sm text-muted-foreground">Industry</p>
                  <div className="flex flex-wrap gap-2">
                    {project.industry.map((item, index) => (
                      <span
                        key={index}
                        className="rounded-full bg-primary/15 px-3 py-1 text-sm text-primary"
                      >
                        {item.name}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="col-span-1 rounded-2xl border border-border bg-card/60 p-4 shadow backdrop-blur-sm md:col-span-3">
                  <p className="mb-2 text-sm text-muted-foreground">Scope of Work</p>
                  <div className="flex flex-wrap gap-2">
                    {project.scope.map((item, index) => (
                      <span
                        key={index}
                        className="rounded-full bg-primary/15 px-3 py-1 text-sm text-primary"
                      >
                        {item.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="border-t border-border pt-4" />
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </>
  );
}
