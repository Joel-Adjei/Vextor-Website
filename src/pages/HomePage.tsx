import { Hero } from "@/components/Hero"
import { TechTicker } from "@/components/TechTicker"
import { Services } from "@/components/Services"
import { About } from "@/components/About"
import { Process } from "@/components/Process"
import { TechStack } from "@/components/TechStack"
import { Contact } from "@/components/Contact"

export function HomePage() {
  return (
    <>
      <Hero />
      <TechTicker />
      <Services />
      <About />
      <Process />
      <TechStack />
      <Contact />
    </>
  )
}
