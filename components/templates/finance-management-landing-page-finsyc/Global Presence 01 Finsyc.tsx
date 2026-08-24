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
    fullName: "United Kingdom",
    left: "46.7%",
    top: "23.1%",
    labelX: -38,
    labelY: -12,
  },
  {
    name: "Italy",
    fullName: "Italy",
    left: "50.5%",
    top: "29.6%",
    labelX: -46,
    labelY: 8,
  },
  {
    name: "Russia",
    fullName: "Russia",
    left: "58.6%",
    top: "20.2%",
    labelX: 42,
    labelY: -6,
  },
  {
    name: "Egypt",
    fullName: "Egypt",
    left: "55.8%",
    top: "36.3%",
    labelX: -48,
    labelY: 14,
  },
  {
    name: "KSA",
    fullName: "Saudi Arabia",
    left: "58.4%",
    top: "39.6%",
    labelX: -32,
    labelY: 34,
  },
  {
    name: "UAE",
    fullName: "United Arab Emirates",
    left: "61.5%",
    top: "37.6%",
    labelX: 14,
    labelY: -28,
  },
  {
    name: "Oman",
    fullName: "Oman",
    left: "63.3%",
    top: "40.5%",
    labelX: 8,
    labelY: 42,
  },
  {
    name: "India",
    fullName: "India",
    left: "69.8%",
    top: "39.1%",
    labelX: 46,
    labelY: 40,
  },
  {
    name: "Vietnam",
    fullName: "Vietnam",
    left: "76.5%",
    top: "42.2%",
    labelX: 12,
    labelY: -32,
  },
] as const;

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

            <div className="relative mx-auto w-full max-w-[880px]">
              <motion.div
                initial={{ opacity: 0, scale: 0.96 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="relative aspect-[1.55/1] w-full bg-transparent"
                aria-label="Tatweer global network across Oman, the UK, UAE, Egypt, Italy, Russia, Saudi Arabia, India, and Vietnam"
              >
              <div className="absolute inset-0 bg-transparent">
                <img
                  src="/world-map.svg"
                  alt=""
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-x-0 top-1/2 h-auto w-full -translate-y-1/2 select-none bg-transparent opacity-50 [filter:sepia(0.25)_saturate(0.6)_hue-rotate(92deg)]"
                />

                {locations.map((location, index) => (
                  <div
                    key={location.name}
                    title={location.fullName}
                    aria-label={location.fullName}
                    className="absolute z-10 -translate-x-1/2 -translate-y-1/2"
                    style={{ left: location.left, top: location.top }}
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0.7 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45, delay: 0.25 + index * 0.08 }}
                      className="relative"
                    >
                      <div className="relative h-3 w-3 rounded-full border-2 border-white bg-[#138E5F] shadow-[0_2px_10px_rgba(4,39,24,0.28)]">
                        <span className="absolute inset-0 animate-ping rounded-full bg-[#138E5F] opacity-25" />
                      </div>
                      <span
                        className="absolute z-20 hidden whitespace-nowrap rounded-full border border-[#042718]/10 bg-white/95 px-2.5 py-0.5 font-inter text-[11px] font-semibold uppercase tracking-[0.08em] text-[#042718] shadow-sm sm:inline-flex"
                        style={{
                          left: "50%",
                          top: "50%",
                          transform: `translate(calc(-50% + ${location.labelX}px), calc(-50% + ${location.labelY}px))`,
                        }}
                      >
                        {location.name}
                      </span>
                    </motion.div>
                  </div>
                ))}

                <div className="absolute left-[5%] top-[7%] flex items-center gap-2 rounded-full border border-[#042718]/10 bg-white/95 px-3 py-2 shadow-sm">
                  <Globe2 className="h-4 w-4 text-[#CF573F]" />
                  <span className="font-inter text-[10px] font-semibold uppercase tracking-[0.1em] text-[#042718] sm:text-xs">
                    Connected markets
                  </span>
                </div>
              </div>
            </motion.div>

              <div className="mt-5 flex flex-wrap justify-center gap-2 sm:hidden">
                {locations.map((location) => (
                  <span
                    key={location.name}
                    className="rounded-full border border-[#042718]/10 bg-white/95 px-2.5 py-1 font-inter text-[10px] font-semibold uppercase tracking-[0.08em] text-[#042718]"
                  >
                    {location.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
