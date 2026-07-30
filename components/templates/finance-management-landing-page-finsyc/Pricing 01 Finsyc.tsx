"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ArrowUpRight, Check } from "lucide-react";

interface PricingPlan {
  name: string;
  description: string;
  index: string;
  features: string[];
}

const plans: PricingPlan[] = [
  {
    name: "Development Advisory",
    description: "Define viable, investable, and sustainable development opportunities.",
    index: "01",
    features: [
      "Market and feasibility studies",
      "Development strategy",
      "Financial and legal structuring",
      "Masterplanning",
      "Due diligence",
    ],
  },
  {
    name: "Project Management & PMO",
    description: "Lead complex programmes with coordinated governance and delivery control.",
    index: "02",
    features: [
      "Lead consultancy",
      "Programme and project controls",
      "Contract administration",
      "Value engineering",
      "Construction supervision",
    ],
  },
  {
    name: "Integrated Delivery",
    description: "Bring engineering, infrastructure, commissioning, and operations together.",
    index: "03",
    features: [
      "Multidisciplinary engineering",
      "Design-and-build support",
      "Testing and commissioning",
      "Asset management planning",
      "Partner-led delivery",
    ],
  },
];

function PricingCard({
  plan,
  isVisualActive,
  onClick,
  onMouseEnter,
  onMouseLeave,
}: {
  plan: PricingPlan;
  isVisualActive: boolean;
  onClick: () => void;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}) {
  const [isBtnHovered, setIsBtnHovered] = useState(false);

  return (
    <motion.div
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      className={"relative flex flex-col items-start w-full lg:w-[404px] p-[32px] rounded-[30px] border transition-all duration-500 overflow-hidden cursor-pointer group " + (isVisualActive ? "border-transparent shadow-2xl" : "border-[#042718]/08 bg-white")}
      animate={{
        y: isVisualActive ? -10 : 0,
      }}
      transition={{ duration: 0.5, ease: [0.21, 0.45, 0.32, 0.9] as const }}
    >
      <AnimatePresence>
        {isVisualActive && (
          <motion.div
            key="active-bg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="absolute inset-0 z-0"
          >
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
              suppressHydrationWarning
            >
              <source
                src="https://d8j0ntlcm91z4.cloudfront.net/user_3H8ze3swGqehMVleCUDX2hFhcKm/hf_20260728_220144_6964d811-e0df-4c32-8171-2e83eb6f5f3d.mp4"
                type="video/mp4"
              />
            </video>
            <div className="absolute inset-0 bg-gradient-to-b from-[#02170e]/75 via-[#02170e]/65 to-[#02170e]/80 backdrop-blur-[5px]" />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-10 w-full flex flex-col">
        <div className="flex flex-col gap-[6px]">
          <h3 className={"font-onest text-[28px] font-semibold leading-[34px] tracking-[-0.8px] transition-colors duration-300 " + (isVisualActive ? "text-white" : "text-[#042718]")}>
            {plan.name}
          </h3>
          <p className={"font-inter text-[16px] font-normal leading-[24px] tracking-[-0.3px] transition-colors duration-300 " + (isVisualActive ? "text-white/80" : "text-[#042718]/80")}>
            {plan.description}
          </p>
        </div>

        <div className={"mt-[16px] border-t w-full transition-colors duration-300 " + (isVisualActive ? "border-white/25" : "border-[#042718]/08")} />

        <div className="mt-[16px] flex flex-col">
          <div className="flex items-baseline">
            <span className={"font-onest text-[56px] font-semibold leading-[64px] tracking-[-2px] transition-colors duration-300 " + (isVisualActive ? "text-white" : "text-[#042718]")}>
              {plan.index}
            </span>
          </div>
          <p className={"mt-[16px] font-inter text-[18px] font-normal leading-[28px] tracking-[-0.3px] transition-colors duration-300 " + (isVisualActive ? "text-white/75" : "text-[#042718]/80")}>
            Engagement model
          </p>
        </div>

        <a
          href="#contact"
          onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
            e.stopPropagation();
            onClick();
          }}
          onMouseEnter={() => setIsBtnHovered(true)}
          onMouseLeave={() => setIsBtnHovered(false)}
          className={"mt-[24px] flex items-center justify-between self-stretch rounded-full border transition-all duration-500 relative overflow-hidden " + (isBtnHovered || isVisualActive ? "bg-[#A94432] border-[#A94432] text-white" : "bg-white border-[#042718]/10 text-[#042718]") + " " + (isBtnHovered ? "p-[8px_20px_8px_8px] flex-row-reverse" : "p-[8px_8px_8px_20px] flex-row")}
        >
          <motion.span
            layout
            className="font-inter text-[18px] font-medium leading-[28px] z-10"
          >
            Discuss a project
          </motion.span>
          <motion.div
            layout
            className={"flex items-center justify-center w-10 h-10 rounded-full transition-all duration-500 z-10 " + (isBtnHovered || isVisualActive ? "bg-white" : "bg-[#A94432]")}
          >
            <ArrowUpRight
              size={18}
              strokeWidth={2.5}
              className={"transition-colors duration-300 " + (isBtnHovered || isVisualActive ? "text-[#042718]" : "text-white")}
            />
          </motion.div>
        </a>

        <div className="mt-[24px] flex flex-col">
          <p
            className={"font-inter text-[14px] font-medium leading-[20px] uppercase transition-colors duration-300 " + (isVisualActive ? "text-white opacity-70" : "text-[#042718]/40")}
          >
            CAPABILITIES
          </p>

          <ul className="mt-[16px] flex flex-col gap-[12px]">
            {plan.features.map((feature: string, idx: number) => (
              <li key={idx} className="flex items-start gap-3">
                <div
                  className={"mt-1 flex items-center justify-center w-6 h-6 rounded-full transition-all duration-500 " + (isVisualActive ? "bg-white" : "bg-transparent")}
                >
                  <Check
                    size={14}
                    strokeWidth={3.5}
                    className={isVisualActive ? "text-[#042718]" : "text-[#CF573F]"}
                  />
                </div>
                <span
                  className={"font-inter text-[18px] font-normal leading-[28px] tracking-[-0.3px] transition-colors duration-300 " + (isVisualActive ? "text-white" : "text-[#042718]/80")}
                >
                  {feature}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export default function Pricing01Finsyc({ className }: { className?: string }) {
  const [activePlan, setActivePlan] = useState("Project Management & PMO");
  const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Onest:wght@400;500;600;700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;1,400;1,500;1,600&display=swap" rel="stylesheet" />

      <section
        id="services"
        className={"w-full bg-[#ffffff] py-20 lg:py-32 overflow-hidden flex justify-center " + (className || "")}
      >
        <div className="w-full max-w-[1248px] lg:px-0 px-6 flex flex-col items-center">

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#CF573F]/10 border border-[#CF573F]/10"
          >
            <Sparkles size={14} strokeWidth={3} className="text-[#CF573F]" />
            <span className="font-inter text-sm font-medium text-[#CF573F]">Engagement Models</span>
          </motion.div>

          <motion.h2
            initial={{ y: 24, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-6 w-full max-w-[800px] text-center text-[#042718] font-onest text-[36px] sm:text-[48px] lg:text-[64px] font-semibold leading-[1.1] tracking-[-2px] sm:tracking-[-3px]"
          >
            Choose the <span className="font-playfair italic font-medium text-black/40">expertise</span> your project needs
          </motion.h2>

          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-6 w-full max-w-[600px] text-center font-inter text-[16px] sm:text-[18px] font-normal leading-[24px] sm:leading-[28px] text-[#042718] opacity-80"
          >
            Engage Tatweer for focused advisory, end-to-end project leadership, or an integrated multidisciplinary delivery team.
          </motion.p>

          <div className="mt-16 flex flex-col lg:flex-row gap-6 w-full justify-center">
            {plans.map((plan: PricingPlan, idx: number) => {
              const isVisualActive = hoveredPlan ? hoveredPlan === plan.name : activePlan === plan.name;
              return (
                <motion.div
                  key={plan.name}
                  initial={{ y: 40, opacity: 0 }}
                  whileInView={{ y: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.5 + idx * 0.1, ease: [0.21, 0.45, 0.32, 0.9] as const }}
                  className="w-full lg:w-auto"
                >
                  <PricingCard
                    plan={plan}
                    isVisualActive={mounted && isVisualActive}
                    onClick={() => setActivePlan(plan.name)}
                    onMouseEnter={() => setHoveredPlan(plan.name)}
                    onMouseLeave={() => setHoveredPlan(null)}
                  />
                </motion.div>
              );
            })}
          </div>

        </div>
      </section>
    </>
  );
}
