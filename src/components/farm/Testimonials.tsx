import { Quote, Star } from "lucide-react";
import { testimonials } from "@/content/farmData";
import { Reveal, SectionHeading } from "./shared";

export function Testimonials() {
  return <section className="bg-secondary/55 px-5 py-24 md:px-10 md:py-28"><div className="mx-auto max-w-7xl"><Reveal><SectionHeading eyebrow="From the guestbook" title="Good Times, According to Our Guests" /></Reveal><div className="grid gap-5 lg:grid-cols-3">{testimonials.map((item, index) => <Reveal key={item.name} delay={index * 80}><figure className="h-full rounded-2xl bg-card p-7 shadow-sm"><Quote className="size-8 text-accent/50"/><div className="mt-5 flex gap-1 text-accent">{Array.from({ length: 5 }).map((_, star) => <Star key={star} className="size-3 fill-current" />)}</div><blockquote className="mt-5 font-serif text-2xl leading-snug">“{item.quote}”</blockquote><figcaption className="mt-7 border-t border-border pt-5"><p className="text-sm font-bold">{item.name}</p><p className="text-xs text-muted-foreground">{item.visit}</p></figcaption></figure></Reveal>)}</div></div></section>;
}