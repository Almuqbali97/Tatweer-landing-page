"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { Sparkles } from "lucide-react";

interface Project {
  title: string;
  description: string;
  location: string;
  category: string;
  uiSrc: string;
}

function MobileProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <motion.article
      initial={{ y: 32, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
        ease: [0.21, 0.45, 0.32, 0.9] as const,
      }}
      className="overflow-hidden rounded-[24px] border border-[#042718]/10 bg-white shadow-[0_16px_45px_rgba(2,23,14,0.07)] sm:rounded-[30px]"
    >
      <div className="relative h-[310px] overflow-hidden sm:h-[380px]">
        <img
          src={project.uiSrc}
          alt={project.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#02160f]/85 via-[#02160f]/5 to-black/10" />

        <div className="absolute inset-x-0 bottom-0 p-6 text-white sm:p-8">
          <div className="mb-3 flex items-center">
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/70">
              {String(index + 1).padStart(2, "0")} · {project.category}
            </span>
          </div>
          <h3 className="font-onest text-2xl font-semibold tracking-[-0.7px] sm:text-[30px]">
            {project.title}
          </h3>
          <p className="mt-3 max-w-xl font-inter text-sm leading-6 text-white/75 sm:text-base">
            {project.description}
          </p>
        </div>
      </div>
    </motion.article>
  );
}

function ExpandingProjectCard({
  project,
  index,
  isActive,
  onActivate,
}: {
  project: Project;
  index: number;
  isActive: boolean;
  onActivate: () => void;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <button
      type="button"
      aria-expanded={isActive}
      aria-label={`${project.title}. ${isActive ? "Expanded" : "Expand project"}`}
      onMouseEnter={onActivate}
      onFocus={onActivate}
      onClick={onActivate}
      style={{
        flexGrow: isActive ? 4.6 : 1,
        transitionDuration: reduceMotion ? "0ms" : "750ms",
      }}
      className="group relative h-[590px] min-w-0 basis-0 cursor-pointer overflow-hidden rounded-[28px] border border-white/45 bg-[#0a241a] text-left shadow-[0_18px_55px_rgba(2,23,14,0.13)] outline-none ring-[#CF573F] ring-offset-4 ring-offset-white transition-[flex-grow,filter] ease-[cubic-bezier(0.4,0,0.2,1)] will-change-[flex-grow] focus-visible:ring-2"
    >
      <img
        src={project.uiSrc}
        alt=""
        className={`absolute inset-0 h-full w-full object-cover transition-[transform,filter] duration-700 ease-out ${
          isActive ? "scale-100" : "scale-105 saturate-[0.78]"
        }`}
      />
      <div
        className={`absolute inset-0 transition-colors duration-700 ${
          isActive
            ? "bg-gradient-to-t from-[#02160f]/95 via-[#02160f]/20 to-black/15"
            : "bg-[#02160f]/45"
        }`}
      />

      <div className="absolute inset-x-0 top-0 p-6">
        <span className="rounded-full border border-white/35 bg-white/15 px-3 py-2 font-inter text-[11px] font-semibold uppercase tracking-[0.16em] text-white backdrop-blur-md">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <div className="absolute inset-x-0 bottom-0 p-7 text-white">
        <div
          className={`overflow-hidden transition-[max-height,opacity,transform] duration-700 ease-out ${
            isActive
              ? "max-h-16 translate-y-0 opacity-100"
              : "max-h-0 translate-y-3 opacity-0"
          }`}
        >
          <div className="mb-4 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.17em] text-white/70">
            <span>{project.category}</span>
            <span className="h-1 w-1 rounded-full bg-white/45" />
            <span>{project.location}</span>
          </div>
        </div>

        <h3
          className={`font-onest font-semibold leading-[1.06] tracking-[-1px] transition-[font-size] duration-700 ${
            isActive ? "text-[34px] xl:text-[40px]" : "text-[23px]"
          }`}
        >
          {project.title}
        </h3>

        <div
          className={`overflow-hidden transition-[max-height,opacity,transform] duration-700 ease-out ${
            isActive
              ? "mt-4 max-h-36 translate-y-0 opacity-100 delay-100"
              : "max-h-0 translate-y-4 opacity-0"
          }`}
        >
          <p className="max-w-[580px] font-inter text-[15px] leading-6 text-white/76">
            {project.description}
          </p>
        </div>
      </div>
    </button>
  );
}

export default function OriginaFinsycFeature({
  className,
}: {
  className?: string;
}) {
  const [activeProject, setActiveProject] = useState(0);

  const projects: Project[] = [
    {
      title: "Muscat Hills Boulevard",
      description:
        "Development experience at Muscat Hills, including work connected to a landmark commercial building and 10 mansions.",
      location: "Muscat, Oman",
      category: "Real estate",
      uiSrc: "/portfolio/muscat-hills.png",
    },
    {
      title: "Al Daymaniyat Island Qisma",
      description:
        "A mixed-use island development shaped by the ambition to create responsibly within a UNESCO-protected setting.",
      location: "Oman",
      category: "Island development",
      uiSrc: "/portfolio/al-daymaniyat-island-qisma.png",
    },
    {
      title: "Sultan Haitham City",
      description:
        "Project-management leadership across 14 million square metres, structured in four phases through detailed design.",
      location: "Oman",
      category: "Master planning",
      uiSrc: "/portfolio/sultan-haitham-city.png",
    },
    {
      title: "Wadi Kabeer Industrial City",
      description:
        "Project-management leadership for a 3 million square metre industrial development across two phases through detailed design.",
      location: "Muscat, Oman",
      category: "Industrial",
      uiSrc: "/portfolio/wadi-kabeer-industrial-city.png",
    },
  ];

  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Onest:wght@400;500;600;700&family=Playfair+Display:ital,wght@1,600&display=swap"
        rel="stylesheet"
        crossOrigin="anonymous"
      />

      <section
        className={`w-full overflow-clip bg-white py-20 lg:py-32 ${
          className || ""
        }`}
      >
        <div className="mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center">
            <div className="flex flex-col items-center">
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex items-center gap-2 whitespace-nowrap rounded-full border border-[#CF573F]/10 bg-[#CF573F]/5 px-4 py-1.5"
              >
                <Sparkles className="h-4 w-4 text-[#CF573F]" />
                <span className="text-center font-inter text-base font-normal leading-6 tracking-[-0.3px] text-[#CF573F]">
                  Selected Portfolio
                </span>
              </motion.div>

              <motion.h2
                initial={{ y: 24, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="mt-6 w-full max-w-[686px] text-center font-onest text-[32px] font-semibold leading-tight tracking-[-1.2px] text-[#042718] sm:text-[40px] sm:tracking-[-1.8px] lg:text-[52px] lg:leading-[58px]"
              >
                Projects shaping cities,
                <br className="block sm:hidden" />
                {" industry, and "}
                <span className="font-playfair font-semibold italic text-black/40">
                  islands
                </span>
              </motion.h2>

              <motion.p
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="mt-3 w-full max-w-[560px] text-center font-inter text-base font-normal leading-relaxed text-[#042718] opacity-80 sm:text-lg sm:leading-7"
              >
                Representative developments from Tatweer’s real-estate and
                project-management portfolio in Oman.
              </motion.p>
            </div>

            <div className="mt-12 grid w-full grid-cols-1 gap-5 lg:hidden">
              {projects.map((project, index) => (
                <MobileProjectCard
                  key={project.title}
                  project={project}
                  index={index}
                />
              ))}
            </div>

            <motion.div
              initial={{ y: 32, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              onMouseLeave={() => setActiveProject(0)}
              className="mt-16 hidden h-[590px] w-full items-stretch gap-3 lg:flex"
            >
              {projects.map((project, index) => (
                <ExpandingProjectCard
                  key={project.title}
                  project={project}
                  index={index}
                  isActive={activeProject === index}
                  onActivate={() => setActiveProject(index)}
                />
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
