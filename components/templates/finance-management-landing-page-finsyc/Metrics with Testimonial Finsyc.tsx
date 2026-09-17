"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";

// --- Testimonial Data ---

interface Testimonial {
  id: number;
  text: string;
  name: string;
  role: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    text: "Tatweer and Futurebuilders have delivered projects at Muscat Hills, including work connected to a landmark commercial building and the development of 10 mansions.",
    name: "Muscat Hills Boulevard",
    role: "Real-estate development · Muscat, Oman",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop",
  },
  {
    id: 2,
    text: "A mixed-use island development shaped by the ambition to create responsibly within a UNESCO-protected setting.",
    name: "Al Daymaniyat Island Qisma",
    role: "Mixed-use island development · Oman",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop",
  },
  {
    id: 3,
    text: "Project management leadership across 14 million square metres of development, organised into four phases through detailed design.",
    name: "Sultan Haitham City",
    role: "City-scale project management · Oman",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop",
  },
  {
    id: 4,
    text: "Project management leadership for a 3 million square metre industrial-city development delivered across two phases through detailed design.",
    name: "Wadi Kabeer Industrial City",
    role: "Industrial development · Oman",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop",
  },
  {
    id: 5,
    text: "Infrastructure opportunities developed with engineering partners, contractors, and government entities to balance technical performance with long-term investment value.",
    name: "Dams & Infrastructure",
    role: "Infrastructure investment & delivery",
    avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop",
  },
];

const displayTestimonials: Testimonial[] = [...testimonials, ...testimonials, ...testimonials];

// --- Main Component ---

export default function MetricAndTestimonials({ className }: { className?: string }) {
  const [currentIndex, setCurrentIndex] = useState(testimonials.length);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isTransitioning, setIsTransitioning] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [carouselWidth, setCarouselWidth] = useState(0);
  const carouselTrackRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(660);
  const gap = 24;

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsMounted(true);
    }, 0);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!carouselTrackRef.current) return;
    const observer = new ResizeObserver((entries: ResizeObserverEntry[]) => {
      if (entries[0]) {
        setCarouselWidth(entries[0].contentRect.width);
      }
    });
    observer.observe(carouselTrackRef.current);
    return () => observer.disconnect();
  }, [isMounted]);

  useEffect(() => {
    if (isAutoPlaying && isMounted) {
      resetTimeout();
      timeoutRef.current = setTimeout(() => {
        setIsTransitioning(true);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 5000);
    }
    return () => resetTimeout();
  }, [currentIndex, isAutoPlaying, isMounted]);

  useEffect(() => {
    if (currentIndex >= testimonials.length * 2) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(currentIndex % testimonials.length + testimonials.length);
      }, 500);
      return () => clearTimeout(timer);
    }
    if (currentIndex < testimonials.length) {
      const timer = setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(currentIndex + testimonials.length);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [currentIndex]);

  useEffect(() => {
    const handleResizeWidth = () => {
      const width = window.innerWidth;
      if (width < 640) {
        setCardWidth(width - 48);
      } else if (width < 1024) {
        setCardWidth(500);
      } else {
        setCardWidth(660);
      }
    };
    handleResizeWidth();
    window.addEventListener("resize", handleResizeWidth);
    return () => window.removeEventListener("resize", handleResizeWidth);
  }, []);

  const handleNext = () => {
    setIsAutoPlaying(false);
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    setIsAutoPlaying(false);
    setIsTransitioning(true);
    setCurrentIndex((prev) => prev - 1);
  };

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" crossOrigin="anonymous" />

      <div className={"flex flex-col w-full " + (className || "")}>
        {/* Testimonial Section */}
        <section className="w-full bg-[#F6FDFF] py-16 lg:py-32 overflow-hidden flex justify-center">
          <div className="w-full max-w-[1440px] flex flex-col items-center overflow-hidden">

            <div className="w-full max-w-[1248px] px-6 lg:px-0 flex flex-col items-center text-center mt-0 mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-0.5 rounded-full bg-[#C7AA85]/[0.08] border border-[#C7AA85]/20 mb-4">
                <Star className="w-3.5 h-3.5 text-[#C7AA85] fill-[#C7AA85]" />
                <span className="text-[14px] font-medium text-[#C7AA85] tracking-tight">Selected Portfolio</span>
              </div>

              <h2 className="text-[#042718] text-[28px] sm:text-[36px] md:text-[52px] font-semibold leading-tight tracking-tight max-w-[690px] mb-4 lg:mb-6">
                Experience across <i className="text-[rgba(0,0,0,0.40)]">cities, industry</i> and infrastructure
              </h2>

              <p className="text-[#042718] opacity-80 text-[16px] md:text-[18px] leading-[24px] md:leading-[28px] max-w-[576px]">
                Selected assignments and investment directions from Tatweer’s real-estate, infrastructure, and energy portfolio.
              </p>
            </div>

            <div ref={carouselTrackRef} className="relative w-full overflow-visible">
              <div className="relative flex justify-start items-center overflow-visible min-h-[400px] md:min-h-[500px]">
                <motion.div
                  className="flex gap-6 items-center flex-nowrap"
                  animate={{
                    x: (carouselWidth / 2) - (cardWidth / 2) - (currentIndex * (cardWidth + gap)),
                  }}
                  transition={isTransitioning ? { type: "spring" as const, stiffness: 300, damping: 30 } : { duration: 0 }}
                >
                  {displayTestimonials.map((item: Testimonial, idx: number) => {
                    const isActive = idx === currentIndex;
                    return (
                      <div
                        key={item.id + "-" + idx}
                        className={
                          "relative flex flex-col items-center shrink-0 rounded-[24px] md:rounded-[30px] transition-all duration-500 overflow-hidden " +
                          "p-[32px] md:p-[48px_48px_40px_48px] " +
                          (isActive
                            ? "border border-[rgba(255,255,255,0.1)] shadow-[0_20px_50px_rgba(4,39,24,0.1)]"
                            : "border border-[rgba(4,39,24,0.08)] bg-[rgba(255,255,255,0.20)]")
                        }
                        style={{ width: cardWidth + "px" }}
                      >
                        {isActive && isMounted && (
                          <div className="absolute inset-0 z-0">
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
                            <div className="absolute inset-0 bg-black/20" />
                          </div>
                        )}

                        {isActive && (
                          <div className="absolute bottom-0 left-0 right-0 h-[140px] bg-white/[0.05] backdrop-blur-md z-[5] pointer-events-none [mask-image:linear-gradient(to_top,black_40%,transparent)]" />
                        )}

                        <div className="relative z-10 flex flex-col items-center w-full h-full justify-center">
                          <div className="flex items-center justify-center min-h-[90px] md:min-h-[102px] mb-[48px]">
                            <p
                              className={
                                "font-medium text-center transition-colors duration-500 " +
                                (isActive ? "text-white " : "text-[#042718] ") +
                                (isActive
                                  ? "text-[20px] md:text-[26px] leading-[28px] md:leading-[34px] line-clamp-4"
                                  : "text-[18px] md:text-[22px] leading-[24px] md:leading-[30px] line-clamp-3")
                              }
                            >
                              {item.text}
                            </p>
                          </div>

                          <div className="flex flex-col items-center">
                            <div className="w-[48px] h-[48px] rounded-full overflow-hidden mb-[12px] border-2 border-white/20">
                              <img src={item.avatar} alt={item.name} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                            </div>

                            <p
                              className={
                                "font-medium text-[16px] md:text-[18px] leading-[28px] text-center mb-[4px] transition-colors duration-500 " +
                                (isActive ? "text-white" : "text-[#042718]")
                              }
                            >
                              {item.name}
                            </p>

                            <p
                              className={
                                "text-[12px] md:text-[14px] leading-[20px] text-center transition-colors duration-500 " +
                                (isActive ? "text-white/80" : "text-[#042718] opacity-80")
                              }
                            >
                              {item.role}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </motion.div>
              </div>

              <div className="absolute inset-y-0 left-0 w-[100px] md:w-[180px] z-20 pointer-events-none bg-gradient-to-r from-[#F6FDFF] via-[#F6FDFF]/70 to-transparent" />
              <div className="absolute inset-y-0 right-0 w-[100px] md:w-[180px] z-20 pointer-events-none bg-gradient-to-l from-[#F6FDFF] via-[#F6FDFF]/70 to-transparent" />
            </div>

            <div className="w-full max-w-[1248px] flex items-center justify-center gap-3 mt-12">
              <button
                onClick={() => handlePrev()}
                className="w-[48px] h-[48px] md:w-[60px] md:h-[60px] rounded-full border transition-all duration-300 flex items-center justify-center cursor-pointer border-[rgba(4,39,24,0.08)] bg-white/5 hover:bg-white/20"
              >
                <ArrowLeft className="w-5 h-5 md:w-6 md:h-6 text-[#042718]" />
              </button>
              <button
                onClick={() => handleNext()}
                className="w-[48px] h-[48px] md:w-[60px] md:h-[60px] rounded-full transition-all duration-300 flex items-center justify-center cursor-pointer bg-[#C7AA85] hover:bg-[#A88A63] shadow-lg"
              >
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-white" />
              </button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
