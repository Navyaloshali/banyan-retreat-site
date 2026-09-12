import { Flame } from "lucide-react";
import { foodMenus, images } from "@/content/farmData";
import { AnchorButton, Reveal, SectionHeading } from "./shared";

export function FoodBonfire() {
  return <>
    <section id="food" className="px-5 py-24 md:px-10 md:py-32"><div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.08fr_.92fr]">
      <Reveal><div className="relative"><img src={images.food} alt="Fresh farm-style food shared outdoors" width={1200} height={912} loading="lazy" className="aspect-[4/5] w-full rounded-[2rem] object-cover md:aspect-[5/4] lg:aspect-[4/5]" /><div className="absolute -bottom-5 right-4 rounded-2xl bg-accent px-5 py-4 text-accent-foreground shadow-lg md:right-8"><p className="font-serif text-xl">Farm-fresh.</p><p className="text-xs font-bold">Homemade. Served with love.</p></div></div></Reveal>
      <Reveal><SectionHeading align="left" eyebrow="From our kitchen" title="Good Food Tastes Better Outdoors" intro="Our kitchen keeps things simple: fresh ingredients, comforting recipes and food best enjoyed with good company." /><div className="divide-y divide-border">{foodMenus.map(([name, items]) => <div key={name} className="py-5 sm:grid sm:grid-cols-[8rem_1fr]"><h3 className="text-xs font-bold uppercase tracking-[0.18em] text-primary">{name}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground sm:mt-0">{items}</p></div>)}</div></Reveal>
    </div></section>
    <section className="relative flex min-h-[70svh] items-center overflow-hidden px-5 py-24 md:px-10"><img src={images.bonfire} alt="Friends enjoying a bonfire under the stars" width={1920} height={1088} loading="lazy" className="absolute inset-0 h-full w-full object-cover"/><div className="bonfire-scrim absolute inset-0"/><Reveal className="relative z-10 mx-auto w-full max-w-7xl text-hero-foreground"><Flame className="mb-5 size-9 text-accent"/><h2 className="max-w-2xl font-serif text-5xl leading-none md:text-7xl">End the Day Around the Fire</h2><p className="mt-6 max-w-xl text-base leading-7 text-hero-foreground/80 md:text-lg">Music, stories, warm food, stargazing and the kind of conversations that somehow last until midnight.</p><AnchorButton href="#contact" variant="cream" className="mt-8">Experience a Farm Night</AnchorButton></Reveal></section>
  </>;
}