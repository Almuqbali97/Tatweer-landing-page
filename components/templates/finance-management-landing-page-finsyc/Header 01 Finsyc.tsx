"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight, Sparkles, Menu, X } from "lucide-react";
import BrandWordmark from "@/components/BrandWordmark";

const futureBuildersClients = [
  { src: "/clients-logos/aces-removebg-preview.png", alt: "ACES" },
  { src: "/clients-logos/bank-muscat-removebg-preview.png", alt: "Bank Muscat" },
  { src: "/clients-logos/dubai-gov-removebg-preview.png", alt: "Government of Dubai" },
  { src: "/clients-logos/dusit-thani-removebg-preview.png", alt: "Dusit Thani Hotels & Resorts" },
  { src: "/clients-logos/kempinski-removebg-preview.png", alt: "Kempinski Hotel Muscat" },
  { src: "/clients-logos/oman-airport-managment-company-removebg-preview.png", alt: "Oman Airports Management Company" },
  { src: "/clients-logos/oman-airports-removebg-preview.png", alt: "Oman Airports" },
  { src: "/clients-logos/ominfest-removebg-preview.png", alt: "Ominvest" },
  { src: "/clients-logos/schon-removebg-preview.png", alt: "Schön Properties" },
  { src: "/clients-logos/sky-holdings-removebg-preview.png", alt: "Sky Holding" },
  { src: "/clients-logos/sudir-princess-removebg-preview.png", alt: "Dusit Princess ACES Dubai" },
] as const;

export default function FinsycOriginalHeader({ className }: { className?: string }) {
  const [isNavHovered, setIsNavHovered] = useState(false);
  const [isCTAHovered, setIsCTAHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isVideoReady, setIsVideoReady] = useState(false);
  const [showLoadingCover, setShowLoadingCover] = useState(true);
  const coverStartedAt = React.useRef(Date.now());

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 0);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen || showLoadingCover) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen, showLoadingCover]);

  useEffect(() => {
    const fallbackTimer = window.setTimeout(() => setIsVideoReady(true), 6500);
    return () => window.clearTimeout(fallbackTimer);
  }, []);

  useEffect(() => {
    if (!isVideoReady) return;

    const elapsed = Date.now() - coverStartedAt.current;
    const remainingDelay = Math.max(0, 900 - elapsed);
    const exitTimer = window.setTimeout(
      () => setShowLoadingCover(false),
      remainingDelay
    );

    return () => window.clearTimeout(exitTimer);
  }, [isVideoReady]);

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Portfolio", href: "#portfolio" },
    { label: "Partnerships", href: "#partnerships" },
  ];

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Onest:wght@400;500;600;700&family=Playfair+Display:ital,wght@1,600&display=swap" rel="stylesheet" crossOrigin="anonymous" />

      <AnimatePresence>
        {showLoadingCover && (
          <motion.div
            key="tatweer-loading-cover"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[200] flex min-h-screen items-center justify-center overflow-hidden bg-[#031d13]"
          >
            <div
              aria-hidden="true"
              className="absolute -left-[20vw] -top-[30vw] h-[70vw] w-[70vw] rounded-full bg-[#138E5F]/20 blur-[120px]"
            />
            <div
              aria-hidden="true"
              className="absolute -bottom-[30vw] -right-[20vw] h-[70vw] w-[70vw] rounded-full bg-[#CF573F]/15 blur-[140px]"
            />

            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
              className="relative mx-6 flex min-w-[280px] flex-col items-center rounded-[30px] border border-white/20 bg-white/[0.08] px-10 py-10 shadow-[0_24px_80px_rgba(0,0,0,0.22)] backdrop-blur-2xl sm:min-w-[390px] sm:px-14 sm:py-12"
              role="status"
              aria-label="Loading Tatweer"
            >
              <div className="flex items-center justify-center gap-4 sm:gap-5">
                <img
                  src="/logo.png"
                  alt=""
                  className="h-14 w-auto drop-shadow-[0_3px_14px_rgba(0,0,0,0.25)] sm:h-[72px]"
                />
                <BrandWordmark
                  arabicClassName="font-[Georgia,'Noto Naskh Arabic','Traditional Arabic',serif] text-[34px] font-bold leading-none text-[#F4E7D4] [text-shadow:0_2px_12px_rgba(0,0,0,0.3)] sm:text-[48px]"
                  englishClassName="mt-1.5 font-[Georgia,serif] text-[34px] font-bold leading-none tracking-[0.04em] text-[#F4E7D4] [text-shadow:0_2px_12px_rgba(0,0,0,0.3)] sm:text-[48px]"
                />
              </div>

              <div className="mt-8 h-px w-full overflow-hidden bg-white/15">
                <motion.div
                  className="h-full w-1/2 bg-gradient-to-r from-transparent via-[#F4E7D4] to-transparent"
                  animate={{ x: ["-100%", "200%"] }}
                  transition={{
                    duration: 1.45,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
              </div>

              <motion.span
                animate={{ opacity: [0.45, 0.9, 0.45] }}
                transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
                className="mt-4 font-inter text-[10px] font-medium uppercase tracking-[0.24em] text-white/65 sm:text-xs"
              >
                Building lasting value
              </motion.span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.section
        id="home"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" as const }}
        className={"relative w-full overflow-hidden min-h-[800px] lg:min-h-[900px] " + (className || "")}
      >
        {/* Background Video */}
        <div className="absolute inset-0 z-0">
          {isMounted && (
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              onCanPlay={() => setIsVideoReady(true)}
              className="w-full h-full object-cover"
            >
              <source
                src="https://d8j0ntlcm91z4.cloudfront.net/user_3H8ze3swGqehMVleCUDX2hFhcKm/hf_20260912_212147_dd3d2589-edc4-4446-97e5-d1e97bbbe925.mp4"
                type="video/mp4"
              />
            </video>
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/35 to-black/55" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 lg:pt-8 pb-12">
          {/* Navigation */}
          <motion.nav
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "easeOut" as const }}
            className="flex items-center justify-between"
          >
            <a href="/" aria-label="Tatweer home" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
              <img
                src="/logo.png"
                alt=""
                className="h-10 lg:h-11 w-auto"
              />
              <BrandWordmark
                arabicClassName="font-[Georgia,'Noto Naskh Arabic','Traditional Arabic',serif] text-[22px] font-bold leading-none text-[#F4E7D4] [text-shadow:0_1px_8px_rgba(0,0,0,0.35)] lg:text-[26px]"
                englishClassName="mt-0.5 font-[Georgia,serif] text-[22px] font-bold leading-none tracking-[0.02em] text-[#F4E7D4] [text-shadow:0_1px_8px_rgba(0,0,0,0.35)] lg:text-[26px]"
              />
            </a>

            {/* Desktop Menu */}
            <ul className="hidden lg:flex items-center gap-8">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className={
                      "font-inter text-base leading-6 tracking-[-0.3px] text-white [text-shadow:0_1px_8px_rgba(0,0,0,0.45)] transition-all " +
                      (item.label === "Home"
                        ? "font-bold opacity-100"
                        : "font-normal opacity-80 hover:opacity-100 hover:font-bold")
                    }
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-4">
              <motion.a
                href="#partnerships"
                onMouseEnter={() => setIsNavHovered(true)}
                onMouseLeave={() => setIsNavHovered(false)}
                layout
                className={
                  "hidden sm:flex items-center gap-3 py-1.5 rounded-full bg-black/20 backdrop-blur-md border border-white/50 group cursor-pointer relative h-11 transition-all duration-300 " +
                  (isNavHovered ? "flex-row-reverse pl-1.5 pr-[18px]" : "flex-row pl-[18px] pr-1.5")
                }
              >
                <motion.span
                  layout
                  className="font-inter text-base font-medium leading-6 tracking-[-0.3px] text-white"
                >
                  Partner With Us
                </motion.span>

                <motion.div
                  layout
                  className="w-8 h-8 rounded-full bg-white flex items-center justify-center relative overflow-hidden shrink-0"
                >
                  <motion.div
                    animate={{
                      x: isNavHovered ? [-20, 0] : 0,
                      opacity: isNavHovered ? [0, 1] : 1
                    }}
                    transition={{ duration: 0.3, delay: isNavHovered ? 0.1 : 0 }}
                  >
                    <ArrowUpRight className="w-3 h-3 text-[#042718]" />
                  </motion.div>
                </motion.div>
              </motion.a>

              {/* Mobile Menu Toggle */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-white bg-black/20 border border-white/30 backdrop-blur-md rounded-full"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </motion.nav>

          {/* Mobile Navigation Drawer */}
          <AnimatePresence>
            {isMobileMenuOpen && (
              <motion.div
                key="mobile-menu"
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "spring" as const, damping: 25, stiffness: 200 }}
                className="fixed inset-0 z-[100] lg:hidden bg-white px-6 py-8 flex flex-col gap-8"
              >
                <div className="flex items-center justify-between">
                  <a href="/" aria-label="Tatweer home" className="flex items-center gap-3">
                    <img
                      src="/logo.png"
                      alt=""
                      className="h-11 w-auto"
                    />
                    <BrandWordmark
                      arabicClassName="font-[Georgia,'Noto Naskh Arabic','Traditional Arabic',serif] text-[25px] font-bold leading-none text-[#4B3028]"
                      englishClassName="mt-1 font-[Georgia,serif] text-[25px] font-bold leading-none tracking-[0.02em] text-[#4B3028]"
                    />
                  </a>
                  <button
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-2 text-[#042718] bg-[#042718]/5 rounded-full"
                  >
                    <X size={24} />
                  </button>
                </div>

                <ul className="flex flex-col gap-6">
                  {navItems.map((item, idx: number) => (
                    <motion.li
                      key={item.label}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.1 * idx, ease: "easeOut" as const }}
                    >
                      <a
                        href={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className="font-inter text-2xl font-semibold text-[#042718]"
                      >
                        {item.label}
                      </a>
                    </motion.li>
                  ))}
                </ul>

                <div className="mt-auto">
                  <a
                    href="#partnerships"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block w-full rounded-full bg-[#A94432] py-4 text-center font-inter text-lg font-medium text-white transition-colors hover:bg-[#923A2B]"
                  >
                    Partner With Us
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Hero Content */}
          <div className="flex flex-col items-center mt-12 lg:mt-[80px]">
            {/* Rating Box */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8, ease: "easeOut" as const }}
              className="flex flex-row items-center gap-1.5 sm:gap-2 px-3 sm:px-[14px] py-1.5 rounded-full bg-black/25 backdrop-blur-md border border-white/45 mb-6 whitespace-nowrap"
            >
              <div className="flex items-center gap-1 shrink-0">
                <Sparkles className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-white text-white" />
                <span className="font-inter text-sm sm:text-base lg:text-[18px] font-medium leading-[28px] text-white">
                  2026 profile
                </span>
              </div>
              <span className="font-inter text-sm sm:text-base lg:text-[18px] font-normal leading-[28px] text-white/75 shrink-0">
                partnership & collaboration
              </span>
            </motion.div>

            {/* Heading */}
            <motion.h1
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8, ease: "easeOut" as const }}
              className="w-full max-w-[1180px] text-center font-onest text-[40px] font-semibold leading-[1.05] tracking-tight text-white [text-shadow:0_3px_24px_rgba(0,0,0,0.55)] sm:text-[56px] lg:whitespace-nowrap lg:text-[66px] lg:tracking-[-3px]"
            >
              Developments Beyond Possibilities
            </motion.h1>

            {/* Subheading */}
            <motion.p
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8, ease: "easeOut" as const }}
              className="mt-2 w-full max-w-[900px] text-center font-playfair text-[40px] font-semibold italic leading-none tracking-normal text-white/70 [text-shadow:0_3px_24px_rgba(0,0,0,0.55)] sm:text-[56px] lg:text-[66px] lg:tracking-[-3.566px]"
            >
              Real estate & infrastructure
            </motion.p>

            {/* CTA Button */}
            <motion.a
              href="#about"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, duration: 0.8, ease: "easeOut" as const }}
              onMouseEnter={() => setIsCTAHovered(true)}
              onMouseLeave={() => setIsCTAHovered(false)}
              layout
              className={
                "flex items-center gap-3 py-2 rounded-full bg-[#A94432] hover:bg-[#923A2B] mt-8 lg:mt-12 group cursor-pointer relative h-14 border border-white/20 transition-all duration-300 " +
                (isCTAHovered ? "flex-row-reverse pl-2 pr-5" : "flex-row pl-5 pr-2")
              }
            >
              <motion.span
                layout
                className="font-inter text-base lg:text-[18px] font-medium leading-[28px] text-white"
              >
                Explore Our Portfolio
              </motion.span>

              <motion.div
                layout
                className="w-10 h-10 rounded-full bg-white flex items-center justify-center relative overflow-hidden shrink-0"
              >
                <motion.div
                  animate={{
                    x: isCTAHovered ? [-24, 0] : 0,
                    opacity: isCTAHovered ? [0, 1] : 1
                  }}
                  transition={{ duration: 0.3, delay: isCTAHovered ? 0.1 : 0 }}
                >
                  <ArrowUpRight className="w-4 h-4 text-[#042718]" />
                </motion.div>
              </motion.div>
            </motion.a>

            {/* Bottom Branding Section */}
            <motion.div
              initial={{ y: 40, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1.2, duration: 1, ease: "easeOut" as const }}
              className="mt-14 lg:mt-[96px] flex flex-col items-center gap-8 w-full"
            >
              <div className="px-[16px] py-1.5 rounded-full bg-white/5 backdrop-blur-sm border border-white/20">
                <p className="font-inter text-sm lg:text-base font-medium leading-6 tracking-[-0.3px] text-white text-center">
                  Built through collaboration across development, engineering, and investment
                </p>
              </div>

              <div className="mt-4 flex w-full flex-col items-center gap-6">
                <div className="flex items-center justify-center gap-3 sm:gap-5">
                  <BrandWordmark
                    arabicClassName="font-[Georgia,'Noto Naskh Arabic','Traditional Arabic',serif] text-[18px] font-bold leading-none text-[#F4E7D4] [text-shadow:0_1px_8px_rgba(0,0,0,0.35)] sm:text-[22px] lg:text-[26px]"
                    englishClassName="mt-0.5 font-[Georgia,serif] text-[18px] font-bold leading-none tracking-[0.02em] text-[#F4E7D4] [text-shadow:0_1px_8px_rgba(0,0,0,0.35)] sm:text-[22px] lg:text-[26px]"
                  />
                  <img
                    src="/future-builders-logo.png"
                    alt="Future Builders"
                    className="h-7 w-auto brightness-0 invert sm:h-8 lg:h-10"
                  />
                </div>

                <div
                  className="client-logo-mask relative w-full overflow-hidden"
                  aria-label="Future Builders clients"
                >
                  <div className="flex w-max animate-logo-marquee py-1">
                    {[0, 1].map((copy) => (
                      <div
                        key={copy}
                        className="flex shrink-0 gap-3 pr-3 sm:gap-4 sm:pr-4"
                        aria-hidden={copy === 1}
                      >
                        {futureBuildersClients.map((client) => (
                          <div
                            key={`${copy}-${client.src}`}
                            className="flex h-[68px] w-[140px] shrink-0 items-center justify-center px-3 sm:h-[76px] sm:w-[156px]"
                          >
                            <img
                              src={client.src}
                              alt={copy === 0 ? client.alt : ""}
                              className="max-h-12 max-w-full object-contain brightness-0 invert sm:max-h-14"
                            />
                          </div>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </>
  );
}
