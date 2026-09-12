import { createFileRoute } from "@tanstack/react-router";

import { AboutExperience } from "@/components/farm/AboutExperience";
import { Contact } from "@/components/farm/Contact";
import { FoodBonfire } from "@/components/farm/FoodBonfire";
import { Footer } from "@/components/farm/Footer";
import { Hero } from "@/components/farm/Hero";
import { Navbar } from "@/components/farm/Navbar";
import { PackagesGallery } from "@/components/farm/PackagesGallery";
import { StaysActivities } from "@/components/farm/StaysActivities";
import { Testimonials } from "@/components/farm/Testimonials";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "The Banyan Farms | Countryside Farm Getaway" },
    { name: "description", content: "Escape the city for farmhouse stays, fresh food, outdoor adventures, games and bonfire nights at The Banyan Farms." },
    { property: "og:title", content: "The Banyan Farms | Countryside Farm Getaway" },
    { property: "og:description", content: "Escape the city. Find your wild." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: Index,
});

function Index() {
  return <><Navbar/><main><Hero/><AboutExperience/><StaysActivities/><FoodBonfire/><PackagesGallery/><Testimonials/><Contact/></main><Footer/></>;
}
