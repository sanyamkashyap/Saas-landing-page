import { Navbar } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { ProductShowcase } from "@/sections/ProductShowcase";
import { Pricing } from "@/sections/Pricing";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <LogoTicker></LogoTicker>
      <ProductShowcase></ProductShowcase>
      <Pricing></Pricing>
    </>
  )
}