import { ArrowRight } from "lucide-react";
import { type ReactNode, useEffect, useRef, useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Brand({ light = false }: { light?: boolean }) {
  return <a href="#home" className={cn("leading-none", light && "text-hero-foreground")} aria-label="The Banyan Farms home"><span className="block font-serif text-xl font-semibold">THE BANYAN</span><span className="mt-1 block text-[0.58rem] font-bold tracking-[0.36em]">FARMS</span></a>;
}

export function SectionHeading({ eyebrow, title, intro, align = "center" }: { eyebrow?: string; title: ReactNode; intro?: string; align?: "center" | "left" }) {
  return <div className={cn("mb-10 md:mb-14", align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-2xl")}>
    {eyebrow && <p className="mb-3 text-xs font-bold uppercase tracking-[0.22em] text-accent">{eyebrow}</p>}
    <h2 className="font-serif text-4xl leading-[1.05] font-medium text-foreground md:text-6xl">{title}</h2>
    {intro && <p className="mt-5 text-base leading-7 text-muted-foreground md:text-lg">{intro}</p>}
  </div>;
}

export function AnchorButton({ href, children, variant = "default", className }: { href: string; children: ReactNode; variant?: "default" | "outline" | "cream" | "ghostLight"; className?: string }) {
  return <Button asChild variant={variant} size="lg" className={className}><a href={href}>{children}<ArrowRight /></a></Button>;
}

export function Reveal({ children, className, delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => { if (entry?.isIntersecting) { setVisible(true); observer.disconnect(); } }, { threshold: 0.12 });
    observer.observe(node);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} style={{ transitionDelay: `${delay}ms` }} className={cn("reveal", visible && "reveal-visible", className)}>{children}</div>;
}