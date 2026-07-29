"use client";

import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpRight,
  Building2,
  Check,
  Compass,
  HardHat,
  ShieldCheck,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface ServiceGroup {
  id: number;
  label: string;
  icon: LucideIcon;
  heading: string;
  subheading: string;
  list: string[];
}

const serviceGroups: ServiceGroup[] = [
  {
    id: 1,
    label: "Plan the vision",
    icon: Compass,
    heading: "Masterplanning & Feasibility Studies",
    subheading:
      "Urban infrastructure planning, development demand analysis, and real-estate feasibility studies that shape sustainable city concepts.",
    list: [
      "Urban infrastructure masterplanning",
      "Development demand and feasibility analysis",
      "Sustainable city concepts",
    ],
  },
  {
    id: 2,
    label: "Lead the project",
    icon: HardHat,
    heading: "Project Management & Value Engineering",
    subheading:
      "Lead consultancy from concept to completion, supported by value engineering that optimises cost, quality, and performance.",
    list: [
      "Lead consultancy and project management",
      "Cost and performance optimisation",
      "Integrated project controls",
    ],
  },
  {
    id: 3,
    label: "Design & supervise",
    icon: Building2,
    heading: "Engineering Design & Construction Supervision",
    subheading:
      "Coordinated civil, structural, and MEP concept and detailed design, backed by on-site management that safeguards quality standards.",
    list: [
      "Civil and structural engineering",
      "MEP concept and detailed design",
      "On-site construction supervision",
    ],
  },
  {
    id: 4,
    label: "Protect long-term value",
    icon: ShieldCheck,
    heading: "Energy, Sustainability & Asset Management",
    subheading:
      "Green-building expertise, energy audits, smart-city design, and asset-management services that strengthen long-term performance.",
    list: [
      "Green buildings and energy audits",
      "Smart-city and sustainable design",
      "Infrastructure operations and due diligence",
    ],
  },
];

export default function FinsycOriginal4step({ className }: { className?: string }) {
  const [activeTab, setActiveTab] = useState(1);
  const [isHoveringBtn, setIsHoveringBtn] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  const activeGroup =
    serviceGroups.find((group: ServiceGroup) => group.id === activeTab) ||
    serviceGroups[0];

  return (
    <section
      className={
        "w-full bg-[#F6FDFF] py-20 lg:py-32 overflow-hidden " +
        (className || "")
      }
    >
      <div className="w-full max-w-[1248px] mx-auto relative px-4 md:px-6">
        <div className="flex flex-col items-start gap-12 lg:gap-16">
          <div className="flex flex-col items-start">
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#CF573F]/10 bg-[#CF573F]/5 whitespace-nowrap mb-6"
            >
              <Sparkles
                className="w-4 h-4 text-[#CF573F]"
                strokeWidth={2.5}
              />
              <span className="text-[#CF573F] text-center font-inter text-base font-medium leading-6 tracking-[-0.3px]">
                Comprehensive Services
              </span>
            </motion.div>

            <motion.h2
              initial={{ x: -30, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-[#042718] font-onest text-[32px] sm:text-[44px] lg:text-[52px] font-semibold leading-tight lg:leading-[58px] tracking-[-1.2px] lg:tracking-[-1.8px] w-full lg:max-w-[700px] text-left"
            >
              Integrated expertise across{" "}
              <span className="text-black/40 font-playfair italic font-semibold">
                every phase
              </span>{" "}
              of the project lifecycle
            </motion.h2>
          </div>

          <div className="w-full flex flex-col gap-6">
            <div className="w-full">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="w-full bg-white p-4 lg:px-6 lg:py-4 rounded-2xl shadow-[0_1px_20px_0_rgba(4,39,24,0.04)] flex items-center lg:justify-between gap-2 overflow-x-auto overflow-y-hidden scrollbar-hide snap-x"
              >
                {serviceGroups.map((group: ServiceGroup) => {
                  const isActive = activeTab === group.id;

                  return (
                    <button
                      key={group.id}
                      onClick={() => setActiveTab(group.id)}
                      className={cn(
                        "flex items-center gap-3 px-4 sm:px-6 py-2.5 rounded-xl transition-all duration-300 shrink-0 snap-start",
                        isActive
                          ? "bg-[#E86F56] shadow-[0_6px_18px_rgba(232,111,86,0.22)]"
                          : "hover:bg-[#E86F56]/10",
                      )}
                    >
                      <group.icon
                        className={cn(
                          "w-[22px] h-[22px]",
                          isActive
                            ? "text-white"
                            : "text-[#042718]/60",
                        )}
                        strokeWidth={2.5}
                      />
                      <span
                        className={cn(
                          "font-inter text-base sm:text-[18px] leading-[28px] whitespace-nowrap",
                          isActive
                            ? "text-white font-medium"
                            : "text-[#042718]/60 font-normal",
                        )}
                      >
                        {group.label}
                      </span>
                    </button>
                  );
                })}
              </motion.div>
            </div>

            <div className="w-full">
              <div className="w-full bg-white rounded-[32px] border border-[#042718]/[0.04] shadow-[0_0_20px_0_rgba(4,39,24,0.04)] flex flex-col lg:flex-row items-center justify-between p-6 lg:pt-4 lg:pr-4 lg:pb-4 lg:pl-16 gap-12 lg:gap-0 overflow-hidden">
                <div className="w-full lg:w-[534px] flex flex-col items-start text-left">
                  <motion.div
                    key={"icon-" + activeTab}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="w-16 h-16 rounded-xl border border-[#CF573F]/15 bg-[#CF573F]/5 shadow-sm flex items-center justify-center p-4 mb-3"
                  >
                    <activeGroup.icon
                      className="w-8 h-8 text-[#CF573F]"
                      strokeWidth={2.5}
                    />
                  </motion.div>

                  <motion.h3
                    key={"heading-" + activeTab}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3 }}
                    className="text-[#042718] font-onest text-[28px] lg:text-[34px] font-semibold leading-tight lg:leading-[38px] tracking-[-1px] mb-4"
                  >
                    {activeGroup.heading}
                  </motion.h3>

                  <motion.p
                    key={"description-" + activeTab}
                    initial={{ y: 20, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.1, duration: 0.3 }}
                    className="text-[#042718] font-inter text-base lg:text-[18px] font-normal leading-relaxed lg:leading-[28px] opacity-80 mb-8"
                  >
                    {activeGroup.subheading}
                  </motion.p>

                  <div className="flex flex-col gap-3 mb-12">
                    {activeGroup.list.map((item: string, index: number) => (
                      <motion.div
                        key={activeTab + "-" + item}
                        initial={{ x: -10, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                          delay: 0.2 + index * 0.1,
                          duration: 0.3,
                        }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-5 h-5 rounded-full bg-[#CF573F]/10 flex items-center justify-center shrink-0">
                          <Check className="w-3 h-3 text-[#CF573F] stroke-[3px]" />
                        </div>
                        <span className="text-[#042718] font-inter text-base font-medium leading-6 tracking-[-0.3px]">
                          {item}
                        </span>
                      </motion.div>
                    ))}
                  </div>

                  <motion.button
                    onMouseEnter={() => setIsHoveringBtn(true)}
                    onMouseLeave={() => setIsHoveringBtn(false)}
                    layout
                    className={cn(
                      "flex items-center gap-3 py-2 rounded-full bg-[#E86F56] hover:bg-[#CF573F] shadow-[0_8px_24px_rgba(232,111,86,0.24)] group cursor-pointer relative h-14 transition-all duration-300",
                      isHoveringBtn
                        ? "flex-row-reverse pl-2 pr-5"
                        : "flex-row pl-5 pr-2",
                    )}
                  >
                    <motion.span
                      layout
                      className="font-inter text-base lg:text-[18px] font-medium leading-[28px] text-white"
                    >
                      Discuss a Project
                    </motion.span>
                    <motion.div
                      layout
                      className="w-10 h-10 rounded-full bg-white flex items-center justify-center relative overflow-hidden"
                    >
                      <motion.div
                        animate={{
                          x: isHoveringBtn ? [-20, 0] : 0,
                          opacity: isHoveringBtn ? [0, 1] : 1,
                        }}
                        transition={{
                          duration: 0.3,
                          delay: isHoveringBtn ? 0.1 : 0,
                        }}
                      >
                        <ArrowUpRight className="w-4 h-4 text-[#CF573F]" />
                      </motion.div>
                    </motion.div>
                  </motion.button>
                </div>

                <div className="w-full lg:w-[516px] h-[400px] sm:h-[500px] lg:h-[560px] relative rounded-[24px] overflow-hidden bg-[#042718]">
                  {isMounted && (
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="absolute inset-0 w-full h-full object-cover"
                    >
                      <source
                        src="https://d8j0ntlcm91z4.cloudfront.net/user_3H8ze3swGqehMVleCUDX2hFhcKm/hf_20260728_220144_6964d811-e0df-4c32-8171-2e83eb6f5f3d.mp4"
                        type="video/mp4"
                      />
                    </video>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#042718]/90 via-[#042718]/20 to-transparent" />

                  <AnimatePresence mode="wait">
                    <motion.div
                      key={"visual-" + activeTab}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.35 }}
                      className="absolute left-6 right-6 bottom-6 lg:left-8 lg:right-8 lg:bottom-8 rounded-2xl border border-white/20 bg-white/10 p-5 lg:p-6 backdrop-blur-md"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-xl bg-[#E86F56] flex items-center justify-center shrink-0">
                          <activeGroup.icon
                            className="w-6 h-6 text-white"
                            strokeWidth={2.4}
                          />
                        </div>
                        <div>
                          <p className="text-white/70 font-inter text-sm">
                            Tatweer expertise
                          </p>
                          <p className="mt-1 text-white font-onest text-lg lg:text-xl font-semibold leading-tight">
                            {activeGroup.heading}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
