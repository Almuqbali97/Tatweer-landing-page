"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Facebook, Twitter, Linkedin, Instagram, Sparkles, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface CTAButtonProps {
  text: string;
  variant?: 'primary' | 'secondary';
}

function CTAButton({ text, variant = 'primary' }: CTAButtonProps) {
  const isPrimary = variant === 'primary';
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "relative flex items-center h-[56px] rounded-full transition-all duration-500 overflow-hidden gap-3",
        isPrimary
          ? "bg-[#A94432] hover:bg-[#923A2B] text-white shadow-[0_8px_32px_rgba(169,68,50,0.20)]"
          : "bg-white/20 backdrop-blur-xl border border-white/60 text-[#042718] w-full sm:w-[276px] justify-between shadow-[0_8px_32px_rgba(255,255,255,0.1)]",
        isHovered ? "pl-[8px] pr-[20px] flex-row-reverse" : "pl-[20px] pr-[8px] flex-row"
      )}
    >
      <motion.span
        layout
        transition={{ type: "spring" as const, stiffness: 400, damping: 30 }}
        className="font-sans font-medium text-[18px] leading-[28px] whitespace-nowrap z-10"
      >
        {text}
      </motion.span>

      <motion.div
        layout
        transition={{ type: "spring" as const, stiffness: 400, damping: 30 }}
        className={cn(
          "flex items-center justify-center w-10 h-10 rounded-full shrink-0 z-20",
          isPrimary ? "bg-white" : "bg-[#A94432]"
        )}
      >
        <ArrowUpRight className={cn("w-4 h-4", isPrimary ? "text-[#042718]" : "text-white")} />
      </motion.div>
    </motion.button>
  );
}

export default function CtaWithFooter01Finsyc({ className }: { className?: string }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: [0.21, 0.45, 0.32, 0.9] as const,
      },
    },
  };

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Onest:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />

      <footer className={"relative w-full overflow-hidden flex flex-col items-center " + (className || "")}>
        {/* Background Video for the entire footer */}
        <div className="absolute inset-0 z-0">
          {isMounted && (
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source
                src="https://d8j0ntlcm91z4.cloudfront.net/user_3H8ze3swGqehMVleCUDX2hFhcKm/hf_20260728_222614_efaa8e5e-821a-4741-8719-4c08a527600f.mp4"
                type="video/mp4"
              />
            </video>
          )}
          {/* Soft overlay */}
          <div className="absolute inset-0 bg-white/20" />
          {/* Glass effect at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-[400px] bg-white/2 backdrop-blur-[2px] [mask-image:linear-gradient(to_top,black_40%,transparent)]" />
        </div>

        {/* CTA SECTION */}
        <section className="w-full relative pt-[120px] pb-0 overflow-hidden flex flex-col items-center">
          {/* Gradient Overlay */}
          <div className="absolute inset-0 z-0 bg-gradient-to-b from-white via-white/40 to-transparent" />

          <div className="max-w-[1440px] w-full mx-auto px-6 lg:px-[96px] relative z-10 flex flex-col items-center">
            <div className="max-w-[1248px] w-full flex flex-col items-center">

              {/* Tag */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#CF573F]/10 border border-[#CF573F]/10 mb-[30px]"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#CF573F]" />
                <span className="text-[#CF573F] text-[13px] font-sans font-medium uppercase tracking-wider">Partnerships</span>
              </motion.div>

              {/* Heading */}
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="w-full max-w-[742px] text-center text-[#042718] font-semibold text-[42px] md:text-[68px] leading-[1.1] md:leading-[80px] tracking-tight md:tracking-[-2.2px] mb-[12px]"
                style={{ fontFamily: "'Onest', sans-serif" }}
              >
                Let&apos;s build <span className="italic text-[rgba(0,0,0,0.40)]">future-ready</span> projects together
              </motion.h2>

              {/* Subheading */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="w-full max-w-[660px] text-center text-[#042718] font-sans text-lg md:text-[20px] leading-[1.5] md:leading-[30px] tracking-tight md:tracking-[-0.4px] opacity-80 mb-[64px]"
              >
                Tatweer is seeking long-term collaborations with reputable partners across real estate, infrastructure, energy, engineering, construction, and technology.
              </motion.p>

              {/* Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                className="flex flex-col sm:flex-row items-center gap-4"
              >
                <CTAButton text="Start a conversation" variant="primary" />
                <CTAButton text="Explore our services" variant="secondary" />
              </motion.div>

            </div>
          </div>
        </section>

        {/* FOOTER LINKS SECTION */}
        <div className="relative w-full flex flex-col items-center text-white">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -top-[180px] inset-x-0 bottom-0"
            style={{
              background:
                "linear-gradient(to bottom, transparent 0, rgba(2, 23, 14, 0.48) 180px, rgba(2, 23, 14, 0.78) 430px, rgba(2, 23, 14, 0.94) 100%)",
            }}
          />
          <div className="relative z-10 w-full max-w-[1440px] px-6 lg:px-[96px] pt-[64px] pb-[32px] flex flex-col items-start bg-transparent">

            {/* Content Row */}
            <motion.div
              className="w-full lg:w-[1248px] pt-[60px] lg:pt-[120px] pb-[60px] lg:pb-[96px] flex flex-col lg:flex-row items-start gap-[60px] lg:gap-[130px] [text-shadow:0_1px_3px_rgba(0,0,0,0.45)]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
            >
              {/* Left Column */}
              <div className="w-full lg:w-[440px] flex flex-col gap-6">
                <motion.h3
                  variants={itemVariants}
                  className="text-white text-[24px] font-semibold leading-[30px] tracking-[-0.8px]"
                  style={{ fontFamily: "'Onest', sans-serif" }}
                >
                  Build a lasting partnership
                </motion.h3>
                <motion.p
                  variants={itemVariants}
                  className="text-white/85 font-sans text-[18px] font-normal leading-[28px]"
                >
                  Connect with Tatweer to explore project alliances that create sustainable value for every party.
                </motion.p>

                {/* Subscribe Box */}
                <motion.div
                  variants={itemVariants}
                  className="mt-2 relative w-full lg:w-[440px] flex flex-col sm:flex-row items-stretch sm:items-center p-3 sm:p-[6px] gap-3 sm:gap-0 rounded-[28px] sm:rounded-full border border-white/60 bg-[#02170e]/35 backdrop-blur-xl shadow-[0_4px_30px_rgba(0,0,0,0.18)]"
                >
                  <input
                    type="email"
                    placeholder="Enter your work email"
                    className="flex-1 bg-transparent border-none outline-none px-4 py-2 sm:py-0 font-sans text-[18px] text-white placeholder:text-white/65 [text-shadow:none]"
                  />
                  <button className="flex items-center justify-between sm:justify-start gap-3 bg-white pl-6 pr-2 py-2 sm:pl-[24px] sm:pr-[8px] sm:py-[8px] rounded-full shadow-sm hover:shadow-md transition-all duration-300 group">
                    <span className="font-sans text-[18px] font-medium text-[#042718]">Connect</span>
                    <div className="w-[36px] h-[36px] bg-[#A94432] group-hover:bg-[#923A2B] rounded-full flex items-center justify-center transition-colors duration-300 shrink-0">
                      <ArrowRight size={18} strokeWidth={2.5} className="text-white" />
                    </div>
                  </button>
                </motion.div>
              </div>

              {/* Right Column (Link Lists) */}
              <div className="lg:ml-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:flex lg:flex-nowrap gap-y-12 gap-x-8 lg:gap-[64px] w-full lg:w-auto">
                {/* Product */}
                <div className="lg:w-[152px] flex flex-col gap-[20px] relative">
                  <motion.h4
                    variants={itemVariants}
                    className="text-white text-[24px] font-semibold leading-[30px] tracking-[-0.8px]"
                    style={{ fontFamily: "'Onest', sans-serif" }}
                  >Services</motion.h4>
                  <ul className="flex flex-col gap-[16px]">
                    {["Development", "Project Management", "Engineering", "Asset Management"].map((link: string) => (
                      <motion.li key={link} variants={itemVariants}>
                        <a href="#" className="text-white/80 font-sans text-[18px] font-normal leading-[28px] hover:text-white hover:font-medium transition-all">{link}</a>
                      </motion.li>
                    ))}
                  </ul>
                  <div className="absolute top-0 -right-[32px] h-full w-[1px] bg-white/20 hidden lg:block" />
                </div>

                {/* Company */}
                <div className="lg:w-[152px] flex flex-col gap-[20px] relative">
                  <motion.h4
                    variants={itemVariants}
                    className="text-white text-[24px] font-semibold leading-[30px] tracking-[-0.8px]"
                    style={{ fontFamily: "'Onest', sans-serif" }}
                  >Company</motion.h4>
                  <ul className="flex flex-col gap-[16px]">
                    {["About us", "Portfolio", "Partnerships", "Contact"].map((link: string) => (
                      <motion.li key={link} variants={itemVariants}>
                        <a href="#" className="text-white/80 font-sans text-[18px] font-normal leading-[28px] hover:text-white hover:font-medium transition-all">{link}</a>
                      </motion.li>
                    ))}
                  </ul>
                  <div className="absolute top-0 -right-[32px] h-full w-[1px] bg-white/20 hidden lg:block" />
                </div>

                {/* Social */}
                <div className="lg:w-[220px] flex flex-col gap-[20px]">
                  <motion.h4
                    variants={itemVariants}
                    className="text-white text-[24px] font-semibold leading-[30px] tracking-[-0.8px]"
                    style={{ fontFamily: "'Onest', sans-serif" }}
                  >Social</motion.h4>
                  <ul className="flex flex-col gap-[16px]">
                    {[
                      { name: "Facebook", icon: Facebook },
                      { name: "Twitter", icon: Twitter },
                      { name: "Linkedin", icon: Linkedin },
                      { name: "Instagram", icon: Instagram }
                    ].map((social: { name: string; icon: React.ElementType }) => (
                      <motion.li key={social.name} variants={itemVariants}>
                        <a href="#" className="flex items-center gap-3 text-white/80 font-sans text-[18px] font-normal leading-[28px] hover:text-white hover:font-medium transition-all">
                          <social.icon size={18} fill="currentColor" strokeWidth={0} className="opacity-100" />
                          {social.name}
                        </a>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Tatweer brand lockup */}
            <div className="w-full min-h-[120px] md:min-h-[250px] lg:min-h-[430px] flex justify-center items-center select-none">
              <motion.div
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.21, 0.45, 0.32, 0.9] as const }}
                className="flex items-center justify-center gap-3 md:gap-6 lg:gap-10"
              >
                <img
                  src="/logo.png"
                  alt=""
                  className="h-[58px] md:h-[118px] lg:h-[190px] w-auto drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]"
                />
                <span className="font-[Georgia,serif] text-[#F4E7D4] text-[52px] md:text-[112px] lg:text-[188px] font-bold leading-none tracking-[0.02em] [text-shadow:0_2px_8px_rgba(0,0,0,0.35)]">
                  TATWEER
                </span>
              </motion.div>
            </div>

            {/* Bottom Text Row */}
            <motion.div
              className="w-full lg:w-[1248px] mt-[24px] pt-8 flex flex-col lg:flex-row items-center justify-between gap-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="flex items-center gap-8 text-white font-sans text-[18px] font-normal leading-[28px] opacity-80">
                <a href="#" className="hover:opacity-100 hover:font-medium transition-all">Terms & Conditions</a>
                <a href="#" className="hover:opacity-100 hover:font-medium transition-all">Privacy Policy</a>
              </div>

              <div className="text-white font-sans text-[18px] font-normal leading-[28px] opacity-80 text-center lg:text-left">
                &copy; 2026 Tatweer Limited SPC. All rights reserved.
              </div>

              <div className="text-white font-sans text-[18px] font-normal leading-[28px] opacity-80">
                Real-Estate Development &bull; Investment &bull; PMO
              </div>
            </motion.div>

          </div>
        </div>
      </footer>
    </>
  );
}
