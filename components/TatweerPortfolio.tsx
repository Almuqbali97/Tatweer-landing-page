"use client";

import { useEffect, useRef, type CSSProperties, type ReactNode } from "react";
import Header01Finsyc from "@/components/templates/finance-management-landing-page-finsyc/Header 01 Finsyc";
import MetricsWithLogo01Finsyc from "@/components/templates/finance-management-landing-page-finsyc/Metrics with logo 01 Finsyc";
import Feature01Finsyc from "@/components/templates/finance-management-landing-page-finsyc/Feature 01 Finsyc";
import GlobalPresence01Finsyc from "@/components/templates/finance-management-landing-page-finsyc/Global Presence 01 Finsyc";
import HowItWorks01Finsyc from "@/components/templates/finance-management-landing-page-finsyc/How it Works 01 Finsyc";
import WhyChooseUs01Finsyc from "@/components/templates/finance-management-landing-page-finsyc/Why Choose us 01 Finsyc";
import Pricing01Finsyc from "@/components/templates/finance-management-landing-page-finsyc/Pricing 01 Finsyc";
import CTAWithFooter01Finsyc from "@/components/templates/finance-management-landing-page-finsyc/CTA with Footer 01 Finsyc";

type StackPanelStyle = CSSProperties & {
  "--stack-top": string;
};

function StackPanel({
  children,
  zIndex,
}: {
  children: ReactNode;
  zIndex: number;
}) {
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const panel = panelRef.current;
    if (!panel) return;

    let animationFrame = 0;

    const updateStickyTop = () => {
      cancelAnimationFrame(animationFrame);
      animationFrame = requestAnimationFrame(() => {
        const panelHeight = panel.getBoundingClientRect().height;
        const stickyTop = Math.min(0, window.innerHeight - panelHeight);
        panel.style.setProperty("--stack-top", `${stickyTop}px`);
      });
    };

    updateStickyTop();

    const resizeObserver = new ResizeObserver(updateStickyTop);
    resizeObserver.observe(panel);
    window.addEventListener("resize", updateStickyTop);

    return () => {
      cancelAnimationFrame(animationFrame);
      resizeObserver.disconnect();
      window.removeEventListener("resize", updateStickyTop);
    };
  }, []);

  const style: StackPanelStyle = {
    zIndex,
    "--stack-top": "0px",
  };

  return (
    <div ref={panelRef} className="stack-panel" style={style}>
      {children}
    </div>
  );
}

export default function TatweerPortfolio({ skipLoadingCover = false }: { skipLoadingCover?: boolean }) {
  return (
    <main className="stack-page min-h-screen">
      <StackPanel zIndex={1}>
        <Header01Finsyc skipLoadingCover={skipLoadingCover} />
      </StackPanel>

      <div className="site-content">
        <MetricsWithLogo01Finsyc />
        <Feature01Finsyc />
        <GlobalPresence01Finsyc />
        <HowItWorks01Finsyc />
        <WhyChooseUs01Finsyc />
        <Pricing01Finsyc />
        <CTAWithFooter01Finsyc />
      </div>
    </main>
  );
}
