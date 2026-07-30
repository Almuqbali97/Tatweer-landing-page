"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, Building2, Globe2, Target } from "lucide-react";

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  bgColor: string;
  delay?: number;
}

function FeatureCard({
  icon: Icon,
  title,
  description,
  bgColor,
  delay = 0,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] as const }}
      style={{ backgroundColor: bgColor }}
      className="flex w-full lg:w-[400px] p-6 md:p-8 flex-col items-start rounded-[24px]"
    >
      <div className="flex items-center gap-[12px] mb-[20px] text-[#042718]">
        <Icon className="w-7 h-7" strokeWidth={2.4} />
        <h3 className="font-heading text-[24px] md:text-[28px] font-semibold leading-tight tracking-[-0.8px]">
          {title}
        </h3>
      </div>

      <p className="font-sans text-[16px] md:text-[18px] font-medium leading-[24px] md:leading-[28px] text-[#042718] opacity-80 min-h-0 md:min-h-[112px]">
        {description}
      </p>
    </motion.div>
  );
}

export default function MetricsWithLogo01Finsyc({ className }: { className?: string }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <>
      <section
        id="about"
        className={"w-full bg-[#F6FDFF] py-20 lg:py-32 flex justify-center " + (className || "")}
      >
        <div className="w-full max-w-[1440px] px-6 lg:px-[96px]">
          <div className="w-full max-w-[1248px] mx-auto">
            {/* Header Row */}
            <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-10 md:mb-[64px] gap-8">
              <motion.h1
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" as const }}
                className="max-w-[584px] text-[36px] md:text-[52px] font-heading font-semibold leading-[42px] md:leading-[58px] tracking-[-1.2px] md:tracking-[-1.8px] text-[#042718]"
              >
                Proven capability across development, delivery, and <i className="text-[rgba(0,0,0,0.40)]">investment</i>
              </motion.h1>

              <motion.a
                href="#partnerships"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                animate={{
                  paddingLeft: isHovered ? 8 : 20,
                  paddingRight: isHovered ? 20 : 8,
                }}
                transition={{
                  duration: 0.5,
                  ease: [0.22, 1, 0.36, 1] as const,
                  opacity: { duration: 0.8 },
                  x: { duration: 0.8 },
                }}
                whileTap={{ scale: 0.98 }}
                className="flex items-center h-[56px] min-w-fit w-max bg-[#A94432] rounded-full group cursor-pointer transition-colors duration-300 hover:bg-[#923A2B] overflow-hidden gap-[12px]"
              >
                <motion.div
                  layout="position" 
                  style={{ order: isHovered ? 2 : 1 } as React.CSSProperties}
                  transition={{ type: "spring" as const, stiffness: 400, damping: 35 }}
                  className="font-sans text-[18px] font-medium leading-[28px] text-white whitespace-nowrap"
                >
                  Explore Opportunities
                </motion.div>
                <motion.div
                  layout="position" 
                  style={{ order: isHovered ? 1 : 2 } as React.CSSProperties}
                  transition={{ type: "spring" as const, stiffness: 400, damping: 35 }}
                  className="w-[40px] h-[40px] bg-white rounded-full flex items-center justify-center shrink-0"
                >
                  <ArrowUpRight className="w-[16px] h-[16px] text-[#042718]" />
                </motion.div>
              </motion.a>
            </div>

            {/* Cards Grid */}
            <div className="flex flex-col lg:flex-row gap-[24px]">
              <FeatureCard
                delay={0.1}
                bgColor="#D2DDEA"
                icon={Building2}
                title="Master Planning"
                description="Full integrated solutions from initial stages until project closure, promoting best practice sustainable developments."
              />
              <FeatureCard
                delay={0.2}
                bgColor="#EBE3D2"
                icon={Target}
                title="15+ Years of Experience"
                description="An entrepreneurial spirit backed by decades of combined expertise across the GCC real estate sector."
              />
              <FeatureCard
                delay={0.3}
                bgColor="#D4E5CD"
                icon={Globe2}
                title="Global Vision"
                description="Building futuristic cities that merge mixed-use developments into pioneering real estate models."
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
