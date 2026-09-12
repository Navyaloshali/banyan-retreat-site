import { dayPlan, features } from "@/content/farmData";
import { Reveal, SectionHeading } from "./shared";

export function AboutExperience() {
  return <>
    <section id="farm" className="px-5 py-24 md:px-10 md:py-32"><div className="mx-auto max-w-7xl">
      <Reveal><SectionHeading eyebrow="Welcome to the countryside" title="More Than Just a Farm Stay" intro="The Banyan Farms is a place to slow down, reconnect and have a little fun. Come for a day in the countryside or stay for the weekend. Enjoy farm-fresh food, outdoor adventures, games, peaceful surroundings and evenings under the stars." /></Reveal>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">{features.map(({ icon: Icon, title, text }, index) => <Reveal key={title} delay={index * 80} className="h-full"><article className="h-full rounded-2xl border border-border bg-card p-6 shadow-sm transition-transform duration-300 hover:-translate-y-1"><div className="mb-8 grid size-12 place-items-center rounded-full bg-secondary text-primary"><Icon className="size-5" /></div><h3 className="font-serif text-2xl">{title}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{text}</p></article></Reveal>)}</div>
    </div></section>
    <section className="overflow-hidden bg-primary px-5 py-24 text-primary-foreground md:px-10 md:py-28"><div className="mx-auto max-w-7xl">
      <Reveal><SectionHeading eyebrow="From sunrise to starlight" title="Your Day at The Banyan" /></Reveal>
      <div className="relative grid gap-8 md:grid-cols-3 lg:grid-cols-6"><div className="absolute left-[8%] right-[8%] top-6 hidden h-px bg-primary-foreground/25 lg:block" />{dayPlan.map(([time, label, Icon], index) => <Reveal key={time} delay={index * 70} className="relative"><div className="relative z-10 mb-5 grid size-12 place-items-center rounded-full border border-primary-foreground/30 bg-primary text-accent"><Icon className="size-5" /></div><p className="text-xs font-bold tracking-[0.12em] text-sage">{time}</p><h3 className="mt-2 font-serif text-xl leading-tight">{label}</h3></Reveal>)}</div>
    </div></section>
  </>;
}