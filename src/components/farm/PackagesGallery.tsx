import { Check, Images, Sparkles } from "lucide-react";
import { gallery, packages } from "@/content/farmData";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { AnchorButton, Reveal, SectionHeading } from "./shared";

export function PackagesGallery() {
  return <>
    <section id="packages" className="bg-primary px-5 py-24 text-primary-foreground md:px-10 md:py-32"><div className="mx-auto max-w-7xl"><Reveal><SectionHeading eyebrow="Simple ways to get away" title="Pick Your Escape" intro="Starting prices shown below. Final pricing depends on dates and group size." /></Reveal>
      <div className="grid items-stretch gap-6 lg:grid-cols-3">{packages.map((item, index) => <Reveal key={item.name} delay={index * 90}><article className={cn("relative flex h-full flex-col rounded-2xl border p-7 transition-all duration-300 hover:-translate-y-1", item.popular ? "border-accent bg-cream text-foreground shadow-2xl lg:-translate-y-4 lg:hover:-translate-y-5" : "border-primary-foreground/20 bg-primary-foreground/5")}>
        {item.popular && <span className="absolute right-5 top-5 inline-flex items-center gap-1 rounded-full bg-accent px-3 py-1 text-[0.62rem] font-bold uppercase tracking-[0.14em] text-accent-foreground"><Sparkles className="size-3"/> Most Loved</span>}<p className="text-xs font-bold uppercase tracking-[0.2em]">{item.name}</p><p className="mt-6 font-serif text-5xl">{item.price}<span className="ml-2 font-sans text-xs font-medium opacity-65">{item.note}</span></p><ul className="my-7 flex-1 space-y-3 border-t border-current/15 pt-6">{item.items.map((feature) => <li className="flex items-center gap-2 text-sm" key={feature}><Check className="size-4 text-accent"/>{feature}</li>)}</ul><Button asChild variant={item.popular ? "default" : "cream"} size="lg"><a href="#contact">Choose {item.name}</a></Button>
      </article></Reveal>)}</div>
    </div></section>
    <section id="gallery" className="px-5 py-24 md:px-10 md:py-32"><div className="mx-auto max-w-7xl"><Reveal><SectionHeading eyebrow="Life, unhurried" title="Moments from The Banyan" /></Reveal>
      <div className="columns-2 gap-3 md:columns-3 lg:columns-4 md:gap-5">{gallery.map((item, index) => <Reveal key={`${item.alt}-${index}`} className="mb-3 break-inside-avoid md:mb-5" delay={(index % 4) * 50}><figure className="group overflow-hidden rounded-xl"><img src={item.src} alt={item.alt} width={900} height={item.tall ? 1100 : 700} loading="lazy" className={cn("w-full object-cover transition-transform duration-700 group-hover:scale-105", item.tall ? "aspect-[3/4]" : "aspect-[4/3]")} /></figure></Reveal>)}</div>
      <Reveal className="mt-10 text-center"><AnchorButton href="#contact" variant="outline"><Images/> View Full Gallery</AnchorButton></Reveal>
    </div></section>
  </>;
}