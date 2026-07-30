"use client";

import { motion } from "framer-motion";
import {
  Globe2,
  MapPin,
  Sparkles,
} from "lucide-react";

const locations = [
  {
    name: "UK",
    position: "left-[46.2%] top-[23.1%]",
    labelPosition: "right-5 top-1/2 -translate-y-1/2",
  },
  {
    name: "UAE",
    position: "left-[59.4%] top-[38.1%]",
    labelPosition: "bottom-5 left-1/2 -translate-x-1/2",
  },
  {
    name: "Egypt",
    position: "left-[54.9%] top-[36.9%]",
    labelPosition: "right-5 top-1/2 -translate-y-1/2",
  },
  {
    name: "Italy",
    position: "left-[50%] top-[29.6%]",
    labelPosition: "bottom-5 left-1/2 -translate-x-1/2",
  },
  {
    name: "Russia",
    position: "left-[59.4%] top-[21.5%]",
    labelPosition: "left-5 top-1/2 -translate-y-1/2",
  },
  {
    name: "Saudi Arabia",
    position: "left-[57.4%] top-[37%]",
    labelPosition: "top-5 left-1/2 -translate-x-1/2",
  },
  {
    name: "India",
    position: "left-[67.9%] top-[38.6%]",
    labelPosition: "bottom-5 left-1/2 -translate-x-1/2",
  },
  {
    name: "Vietnam",
    position: "left-[75.6%] top-[42.2%]",
    labelPosition: "left-5 top-1/2 -translate-y-1/2",
  },
];

export default function GlobalPresence01Finsyc({
  className = "",
}: {
  className?: string;
}) {
  return (
    <section
      className={`relative w-full overflow-hidden bg-[#F6FDFF] py-20 lg:py-32 ${className}`}
    >
      <div
        aria-hidden="true"
        className="absolute -right-40 top-12 h-[440px] w-[440px] rounded-full bg-[#CF573F]/[0.06] blur-3xl"
      />
      <div
        aria-hidden="true"
        className="absolute -left-48 bottom-0 h-[420px] w-[420px] rounded-full bg-[#138E5F]/[0.08] blur-3xl"
      />

      <div className="relative mx-auto w-full max-w-[1440px] px-6 lg:px-[96px]">
        <div className="mx-auto w-full max-w-[1248px]">
          <div className="grid items-center gap-14 lg:grid-cols-[0.78fr_1.22fr] lg:gap-20">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.7 }}
              className="flex flex-col items-start"
            >
              <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#CF573F]/15 bg-[#CF573F]/[0.06] px-4 py-2">
                <Sparkles className="h-4 w-4 fill-[#CF573F] text-[#CF573F]" />
                <span className="font-inter text-sm font-medium text-[#CF573F]">
                  Global Presence
                </span>
              </div>

              <h2 className="max-w-[520px] font-onest text-[36px] font-semibold leading-[1.08] tracking-[-1.5px] text-[#042718] sm:text-[48px] lg:text-[58px] lg:tracking-[-2.2px]">
                Local insight with a{" "}
                <span className="font-playfair italic text-black/40">
                  global perspective
                </span>
              </h2>

              <p className="mt-6 max-w-[520px] font-inter text-base leading-7 text-[#042718]/75 sm:text-lg">
                From our base in Oman, Tatweer connects regional delivery
                expertise with an international network spanning the UK, UAE,
                Egypt, Italy, Russia, Saudi Arabia, India, and Vietnam.
              </p>

              <div className="mt-9 flex items-start gap-4 rounded-[22px] border border-[#042718]/10 bg-white/70 p-5 backdrop-blur-sm">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#A94432] text-white">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-onest text-lg font-semibold text-[#042718]">
                    Muscat, Oman
                  </p>
                  <p className="mt-1 font-inter text-sm leading-6 text-[#042718]/65">
                    Our regional centre for development, investment, engineering,
                    and project-management partnerships.
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="relative mx-auto aspect-[1.55/1] w-full max-w-[880px] bg-transparent"
              aria-label="Tatweer global network across the UK, UAE, Egypt, Italy, Russia, Saudi Arabia, India, and Vietnam"
            >
              <div className="absolute inset-0 bg-transparent">
                <img
                  src="/world-map.svg"
                  alt=""
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-1/2 h-auto w-full -translate-y-1/2 select-none bg-transparent opacity-50 [filter:sepia(0.25)_saturate(0.6)_hue-rotate(92deg)]"
                />

                {locations.map((location, index) => (
                  <motion.div
                    key={location.name}
                    initial={{ opacity: 0, scale: 0.7 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.45, delay: 0.25 + index * 0.08 }}
                    className={`absolute z-10 ${location.position}`}
                  >
                    <div
                      className="relative h-3 w-3 rounded-full border-2 border-white bg-[#138E5F] shadow-[0_2px_10px_rgba(4,39,24,0.28)]"
                    >
                      <span className="absolute inset-0 animate-ping rounded-full bg-[#138E5F] opacity-25" />
                    </div>
                    <span
                      className={`absolute whitespace-nowrap rounded-full border border-[#042718]/10 bg-white/95 px-2.5 py-1 font-inter text-[9px] font-semibold uppercase tracking-[0.08em] text-[#042718] shadow-sm sm:text-[11px] ${location.labelPosition}`}
                    >
                      {location.name}
                    </span>
                  </motion.div>
                ))}

                <div className="absolute left-[5%] top-[7%] flex items-center gap-2 rounded-full border border-[#042718]/10 bg-white/95 px-3 py-2 shadow-sm">
                  <Globe2 className="h-4 w-4 text-[#CF573F]" />
                  <span className="font-inter text-[10px] font-semibold uppercase tracking-[0.1em] text-[#042718] sm:text-xs">
                    Connected markets
                  </span>
                </div>
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}
