import {
  Bike,
  Binoculars,
  Bird,
  CircleDot,
  Flame,
  Footprints,
  Gamepad2,
  Goal,
  Ham,
  Leaf,
  MoonStar,
  Mountain,
  Palmtree,
  PersonStanding,
  Sprout,
  Star,
  Sun,
  Waves,
  Wheat,
} from "lucide-react";

import activitiesImage from "@/assets/farm-activities.jpg.asset.json";
import bonfireImage from "@/assets/farm-bonfire.jpg.asset.json";
import foodImage from "@/assets/farm-food.jpg.asset.json";
import heroImage from "@/assets/farm-hero.jpg.asset.json";
import sunsetImage from "@/assets/farm-sunset.jpg.asset.json";
import cottageImage from "@/assets/stay-cottage.jpg.asset.json";

export const images = {
  hero: heroImage.url,
  cottage: cottageImage.url,
  activities: activitiesImage.url,
  food: foodImage.url,
  bonfire: bonfireImage.url,
  sunset: sunsetImage.url,
};

export const navItems = [
  ["Home", "home"], ["Our Farm", "farm"], ["Stay", "stay"],
  ["Activities", "activities"], ["Food", "food"], ["Gallery", "gallery"],
  ["Packages", "packages"], ["Contact", "contact"],
] as const;

export const features = [
  { icon: Leaf, title: "Nature", text: "Open spaces, fresh air and peaceful surroundings." },
  { icon: Palmtree, title: "Stay", text: "Comfortable accommodation surrounded by greenery." },
  { icon: Goal, title: "Play", text: "Outdoor adventures, games and activities for everyone." },
  { icon: Ham, title: "Food", text: "Simple, delicious, farm-style meals made with care." },
];

export const dayPlan = [
  ["08:00 AM", "Farm Breakfast", Sun], ["10:00 AM", "Adventure & Games", Goal],
  ["01:00 PM", "Farm-style Lunch", Ham], ["04:00 PM", "Explore & Relax", Footprints],
  ["06:30 PM", "Sunset & Chai", Mountain], ["08:00 PM", "Dinner & Bonfire", Flame],
] as const;

export const stays = [
  { name: "The Farmhouse", image: images.hero, description: "Comfortable rooms for families and small groups.", capacity: "Up to 8 guests", amenities: "Ensuite rooms · Veranda · Garden" },
  { name: "The Cottage", image: images.cottage, description: "A cozy private stay surrounded by greenery.", capacity: "Up to 4 guests", amenities: "Private room · Patio · Garden view" },
  { name: "The Farm Tents", image: images.sunset, description: "For those who want a closer-to-nature experience.", capacity: "2 guests per tent", amenities: "Bedding · Shared washroom · Campfire" },
];

export const activityGroups = [
  { title: "Adventure", image: images.activities, icon: Bike, items: ["Archery", "Cycling", "Nature Trails", "Rope Activities", "Outdoor Challenges"] },
  { title: "Games", image: images.hero, icon: Gamepad2, items: ["Cricket", "Badminton", "Volleyball", "Tug of War", "Frisbee", "Carrom", "Board Games"] },
  { title: "Farm Experiences", image: images.sunset, icon: Sprout, items: ["Farm Walk", "Vegetable Picking", "Tractor Ride", "Animal Feeding", "Village Activities"] },
  { title: "Relax", image: images.bonfire, icon: Waves, items: ["Swimming Pool", "Hammocks", "Sunset Spot", "Bonfire", "Stargazing"] },
];

export const foodMenus = [
  ["Breakfast", "Parathas · Poha · Eggs · Fresh Fruit · Chai"],
  ["Lunch", "Dal · Seasonal Sabzi · Roti · Rice · Salad"],
  ["Evening", "Chai · Pakoras · Farm Snacks"],
  ["Dinner", "Farm-style dishes · Tandoor · BBQ"],
] as const;

export const packages = [
  { name: "Day Escape", price: "₹1,499", note: "/ person", items: ["Breakfast", "Lunch", "Evening snacks", "Farm access", "Games", "Selected activities"] },
  { name: "Farm Weekend", price: "₹3,999", note: "/ person", popular: true, items: ["1 night stay", "Breakfast", "Lunch", "Dinner", "Activities", "Games", "Bonfire"] },
  { name: "Adventure Night", price: "₹2,999", note: "/ person", items: ["Tent stay", "Dinner", "Breakfast", "Campfire", "Stargazing", "Outdoor activities"] },
];

export const gallery = [
  { src: images.hero, alt: "The farmhouse lawn at sunrise", tall: true },
  { src: images.activities, alt: "Friends cycling and playing outdoors" },
  { src: images.food, alt: "Farm-style lunch served outdoors" },
  { src: images.cottage, alt: "The cottage veranda", tall: true },
  { src: images.sunset, alt: "A sunset walk through the farm" },
  { src: images.bonfire, alt: "Friends gathered around a bonfire", tall: true },
  { src: images.activities, alt: "A friendly cricket game on the lawn" },
  { src: images.hero, alt: "The old banyan tree beside the farmhouse" },
  { src: images.food, alt: "Fresh homemade dishes" },
  { src: images.sunset, alt: "Golden hour in the fields", tall: true },
];

export const testimonials = [
  { quote: "Exactly what we needed after weeks in the city. Great food, lots of activities and such a peaceful place.", name: "Rhea & Arjun", visit: "Weekend stay" },
  { quote: "Perfect for a weekend with friends. The bonfire was definitely the highlight.", name: "Kabir Mehta", visit: "Friends' getaway" },
  { quote: "Feels like visiting the countryside, but with all the comfort you actually need.", name: "Neha S.", visit: "Family day escape" },
];

export const activityIcons = { Binoculars, Bird, CircleDot, MoonStar, PersonStanding, Star, Wheat };