import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import { navItems } from "@/content/farmData";
import { cn } from "@/lib/utils";
import { AnchorButton, Brand } from "./shared";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return <header className={cn("fixed inset-x-0 top-0 z-50 transition-all duration-500", scrolled || open ? "border-b border-border/60 bg-background/95 text-foreground shadow-sm backdrop-blur-xl" : "text-hero-foreground")}>
    <div className="mx-auto grid h-20 max-w-[90rem] grid-cols-[minmax(0,1fr)_auto] items-center gap-5 px-5 lg:grid-cols-[auto_1fr_auto] lg:px-10">
      <Brand light={!scrolled && !open} />
      <nav className="hidden items-center justify-center gap-6 lg:flex" aria-label="Main navigation">
        {navItems.map(([label, id]) => <a key={id} href={`#${id}`} className="text-xs font-semibold transition-colors hover:text-accent">{label}</a>)}
      </nav>
      <div className="hidden lg:block"><AnchorButton href="#contact" className="h-11">Plan Your Escape</AnchorButton></div>
      <Button variant="ghost" size="icon" className="lg:hidden" aria-label={open ? "Close menu" : "Open menu"} onClick={() => setOpen((value) => !value)}>{open ? <X /> : <Menu />}</Button>
    </div>
    <div className={cn("grid overflow-hidden transition-all duration-300 lg:hidden", open ? "grid-rows-[1fr] border-t border-border" : "grid-rows-[0fr]")}><nav className="min-h-0 bg-background px-5" aria-label="Mobile navigation"><div className="flex flex-col py-4">{navItems.map(([label, id]) => <a key={id} href={`#${id}`} onClick={() => setOpen(false)} className="border-b border-border py-3 text-sm font-semibold">{label}</a>)}<AnchorButton href="#contact" className="mt-5" >Plan Your Escape</AnchorButton></div></nav></div>
  </header>;
}