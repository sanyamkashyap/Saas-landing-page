import { Navbar } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";
import { ProductShowcase } from "@/sections/ProductShowcase";
import { Pricing } from "@/sections/Pricing";
import { Testimonials } from "@/sections/Testimonials";
import { CallToAction } from "@/sections/CallToAction";
import { Footer } from "@/sections/Footer";
import Everythingyouneed from "@/sections/Everythingyouneed";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <LogoTicker></LogoTicker>
      <ProductShowcase></ProductShowcase>
      <Everythingyouneed></Everythingyouneed>
      <Pricing></Pricing>
      <Testimonials></Testimonials>
      <CallToAction></CallToAction>
      <Footer></Footer>
    </>
  )
}