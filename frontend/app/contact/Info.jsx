"use client";

import H1 from "@/components/ui/H1";
import { motion } from "motion/react";
import Link from "next/link";
import { informations, socials } from "@/data/static/contact";

const Info = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <H1 title="contact info" />

      <div className="flex w-[90%] flex-col items-center justify-center py-9">
        <motion.div
          className="flex w-[90%] flex-col"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {informations.map((info, i) => (
            <motion.div
              key={i}
              className="m-3 flex w-full items-center gap-4 rounded-2xl border border-border bg-card/80 p-4 shadow-md transition-all duration-300 hover:border-primary/40 hover:shadow-lg"
              whileHover={{ scale: 1.02 }}
            >
              <div className="text-2xl text-primary">{info.icon}</div>
              <div className="text-muted-foreground">{info.value}</div>
            </motion.div>
          ))}
        </motion.div>

        <div className="m-6 w-[70%] border-t border-border" />

        <motion.div
          className="flex w-[90%] flex-col items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-sm uppercase tracking-widest text-muted-foreground">
            Find us on
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {socials.map((social, i) => (
              <motion.div
                key={i}
                className="rounded-full bg-muted p-3 shadow transition-all duration-300 hover:scale-110 hover:bg-primary/20"
                whileHover={{ scale: 1.08 }}
              >
                <Link
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-2xl text-primary"
                >
                  {social.icon}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Info;
