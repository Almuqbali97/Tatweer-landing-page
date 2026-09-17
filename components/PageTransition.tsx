"use client";

import { createContext, useContext, useEffect, useRef, type ReactNode, type MouseEvent } from "react";
import { motion, useAnimationControls, useReducedMotion } from "framer-motion";
import { usePathname, useRouter } from "next/navigation";

const NavigationContext = createContext<(event: MouseEvent<HTMLAnchorElement>) => void>(() => {});

export function usePageTransition() {
  return useContext(NavigationContext);
}

export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const router = useRouter();
  const controls = useAnimationControls();
  const reduceMotion = useReducedMotion();
  const navigating = useRef(false);

  useEffect(() => {
    navigating.current = false;
    controls.set({ opacity: 0, y: reduceMotion ? 0 : 16 });
    void controls.start({ opacity: 1, y: 0, transition: { duration: reduceMotion ? 0 : 0.55, ease: [0.22, 1, 0.36, 1] } });
  }, [pathname, controls, reduceMotion]);

  const navigate = async (event: MouseEvent<HTMLAnchorElement>) => {
    if (event.button !== 0 || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    if (navigating.current) return;
    navigating.current = true;
    const href = event.currentTarget.getAttribute("href")!;
    router.prefetch(href);
    await controls.start({ opacity: 0, y: reduceMotion ? 0 : -12, transition: { duration: reduceMotion ? 0 : 0.3, ease: "easeInOut" } });
    router.push(href);
  };

  return (
    <NavigationContext.Provider value={navigate}>
      <motion.div initial={false} animate={controls}>{children}</motion.div>
    </NavigationContext.Provider>
  );
}
