import { ChevronDown } from "lucide-react";
import { images } from "@/content/farmData";
import { AnchorButton } from "./shared";

export function Hero() {
  return <section id="home" className="relative flex min-h-[92svh] items-end overflow-hidden bg-primary md:min-h-screen">
    <img src={images.hero} alt="The Banyan Farms at sunrise" width={1920} height={1088} fetchPriority="high" className="absolute inset-0 h-full w-full object-cover" />
    <div className="hero-scrim absolute inset-0" />
    <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-24 pt-36 text-hero-foreground md:px-10 md:pb-24">
      <p className="mb-5 text-xs font-bold uppercase tracking-[0.3em] md:text-sm">The Banyan Farms</p>
      <h1 className="max-w-4xl font-serif text-6xl leading-[0.94] font-medium md:text-8xl lg:text-[7.5rem]">Escape the city.<br/><em className="font-normal">Find your wild.</em></h1>
      <p className="mt-7 max-w-xl text-base leading-7 text-hero-foreground/85 md:text-xl">A little countryside, a little adventure, and a lot of memories.</p>
      <div className="mt-9 flex flex-col gap-3 sm:flex-row"><AnchorButton href="#farm" variant="cream">Explore The Farm</AnchorButton><AnchorButton href="#stay" variant="ghostLight">Plan Your Stay</AnchorButton></div>
    </div>
    <a href="#farm" aria-label="Scroll to discover" className="absolute bottom-7 right-5 z-10 flex items-center gap-2 text-[0.65rem] font-bold uppercase tracking-[0.2em] text-hero-foreground md:right-10"><span>Discover</span><ChevronDown className="scroll-bob size-4" /></a>
  </section>;
}