"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Linkedin, Sparkles, ArrowUpRight, MapPin } from "lucide-react";
import { cn } from "@/lib/utils";
import BrandWordmark from "@/components/BrandWordmark";

interface CTAButtonProps {
  text: string;
  href: string;
  variant?: 'primary' | 'secondary';
}

function CTAButton({ text, href, variant = 'primary' }: CTAButtonProps) {
  const isPrimary = variant === 'primary';
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <motion.a
      href={href}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileTap={{ scale: 0.98 }}
      className={cn(
        "relative flex items-center h-[56px] rounded-full transition-all duration-500 overflow-hidden gap-3",
        isPrimary
          ? "bg-[#C7AA85] hover:bg-[#A88A63] text-white shadow-[0_8px_32px_rgba(199,170,133,0.28)]"
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
          isPrimary ? "bg-white" : "bg-[#C7AA85]"
        )}
      >
        <ArrowUpRight className={cn("w-4 h-4", isPrimary ? "text-[#042718]" : "text-white")} />
      </motion.div>
    </motion.a>
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

      <footer id="contact" className={"relative w-full overflow-hidden flex flex-col items-center " + (className || "")}>
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
                src="/tatweer-main-video.mp4"
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
        <section id="partnerships" className="w-full relative pt-[120px] pb-0 overflow-hidden flex flex-col items-center">
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
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#C7AA85]/10 border border-[#C7AA85]/20 mb-[30px]"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#C7AA85]" />
                <span className="text-[#C7AA85] text-[13px] font-sans font-medium uppercase tracking-wider">Partnerships</span>
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
                <CTAButton text="Start a conversation" href="#contact-details" variant="primary" />
                <CTAButton text="Explore our services" href="#services" variant="secondary" />
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
              id="contact-details"
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

                <motion.a
                  variants={itemVariants}
                  href="https://maps.app.goo.gl/nuvFvhgdHnq4WVsaA"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-start gap-3 rounded-[22px] border border-white/35 bg-[#02170e]/30 p-4 text-white backdrop-blur-xl transition-colors hover:bg-[#02170e]/45"
                  aria-label="Open Future Builders office location in Google Maps"
                >
                  <span className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#C7AA85]">
                    <MapPin className="h-5 w-5" />
                  </span>
                  <span className="font-sans text-[15px] leading-6 text-white/85">
                    <strong className="block text-base font-semibold text-white">
                      Company Address
                    </strong>
                    Al Qurum Gardens Building — Front Building Gate
                    <br />
                    Penthouse · Future Builders Office 55
                    <span className="mt-1 block font-medium text-white underline decoration-white/40 underline-offset-4 group-hover:decoration-white">
                      View on Google Maps
                    </span>
                  </span>
                </motion.a>

                <motion.a
                  variants={itemVariants}
                  href="https://www.linkedin.com/company/tatweer-limited"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group mt-2 flex w-full items-center justify-between gap-3 rounded-full border border-white/60 bg-[#02170e]/35 p-[6px] pl-6 shadow-[0_4px_30px_rgba(0,0,0,0.18)] backdrop-blur-xl transition-colors hover:bg-[#02170e]/50 lg:w-[440px]"
                >
                  <span className="font-sans text-[17px] font-medium text-white">
                    Connect with us on LinkedIn
                  </span>
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-[#042718] transition-transform group-hover:rotate-[-8deg]">
                    <ArrowUpRight size={18} strokeWidth={2.5} />
                  </span>
                </motion.a>
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
                        <a href="#services" className="text-white/80 font-sans text-[18px] font-normal leading-[28px] hover:text-white hover:font-medium transition-all">{link}</a>
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
                    {[
                      { label: "About us", href: "#about" },
                      { label: "Portfolio", href: "#portfolio" },
                      { label: "Partnerships", href: "#partnerships" },
                      { label: "Contact", href: "#contact-details" },
                    ].map((link) => (
                      <motion.li key={link.label} variants={itemVariants}>
                        <a href={link.href} className="text-white/80 font-sans text-[18px] font-normal leading-[28px] hover:text-white hover:font-medium transition-all">{link.label}</a>
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
                    <motion.li variants={itemVariants}>
                      <a
                        href="https://www.linkedin.com/company/tatweer-limited"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-3 text-white/80 font-sans text-[18px] font-normal leading-[28px] hover:text-white hover:font-medium transition-all"
                      >
                        <Linkedin size={18} fill="currentColor" strokeWidth={0} />
                        LinkedIn
                      </a>
                    </motion.li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Tatweer brand lockup */}
            <div className="flex min-h-[130px] w-full select-none items-center justify-center md:min-h-[250px] lg:min-h-[430px]">
              <motion.div
                initial={{ y: "100%" }}
                whileInView={{ y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1.2, ease: [0.21, 0.45, 0.32, 0.9] as const }}
                className="flex w-full items-center justify-center gap-2 px-1 sm:gap-3 md:gap-6 lg:gap-10"
              >
                <img
                  src="/logo-new.png"
                  alt=""
                  className="h-[clamp(44px,13vw,58px)] w-auto drop-shadow-[0_4px_14px_rgba(0,0,0,0.55)] md:h-[118px] lg:h-[190px]"
                />
                <BrandWordmark
                  arabicClassName="font-[Georgia,'Noto Naskh Arabic','Traditional Arabic',serif] text-[clamp(40px,13vw,52px)] font-bold leading-none text-[#F4E7D4] [text-shadow:0_2px_8px_rgba(0,0,0,0.35)] md:text-[112px] lg:text-[188px]"
                  englishClassName="mt-2 font-[Georgia,serif] text-[clamp(40px,13vw,52px)] font-bold leading-none tracking-[0.01em] text-[#F4E7D4] [text-shadow:0_2px_8px_rgba(0,0,0,0.35)] md:mt-3 md:text-[112px] md:tracking-[0.02em] lg:mt-4 lg:text-[188px]"
                />
              </motion.div>
            </div>

            {/* Bottom Text Row */}
            <motion.div
              className="mt-6 flex w-full flex-col items-center gap-5 rounded-[24px] border border-white/15 bg-black/15 p-4 font-sans text-white backdrop-blur-sm lg:w-[1248px] lg:flex-row lg:justify-between lg:rounded-none lg:border-x-0 lg:border-b-0 lg:bg-transparent lg:px-0 lg:py-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.5 }}
            >
              <div className="grid w-full max-w-[380px] grid-cols-2 overflow-hidden rounded-full border border-white/15 bg-white/[0.06] text-center text-[13px] font-medium leading-5 text-white/75 lg:order-1 lg:flex lg:w-auto lg:max-w-none lg:gap-8 lg:overflow-visible lg:rounded-none lg:border-0 lg:bg-transparent lg:text-left lg:text-[18px] lg:leading-7">
                <span className="border-r border-white/15 px-3 py-2.5 lg:border-0 lg:p-0">Terms & Conditions</span>
                <span className="px-3 py-2.5 lg:p-0">Privacy Policy</span>
              </div>

              <div className="order-3 border-t border-white/10 pt-4 text-center text-[13px] font-normal leading-5 text-white/60 lg:order-2 lg:border-0 lg:p-0 lg:text-left lg:text-[18px] lg:leading-7 lg:text-white/80">
                &copy; 2026 Tatweer Limited SPC. All rights reserved.
              </div>

              <div className="order-2 flex flex-wrap items-center justify-center gap-2 lg:order-3 lg:flex-nowrap">
                {["Real-Estate Development", "Investment", "PMO"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/15 bg-white/[0.06] px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.06em] text-white/70 lg:border-0 lg:bg-transparent lg:p-0 lg:text-[18px] lg:font-normal lg:normal-case lg:tracking-normal lg:text-white/80"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>

          </div>
        </div>
      </footer>
    </>
  );
}
