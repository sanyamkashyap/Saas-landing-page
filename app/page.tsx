import { Navbar } from "@/sections/Header";
import { Hero } from "@/sections/Hero";
import { LogoTicker } from "@/sections/LogoTicker";

export default function Home() {
  return (
    <>
      <Navbar></Navbar>
      <Hero></Hero>
      <LogoTicker></LogoTicker>
    </>
  )
}