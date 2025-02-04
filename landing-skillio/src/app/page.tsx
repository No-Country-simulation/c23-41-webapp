import { AboutUs } from "./components/AboutUs";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { HowItWorks } from "./components/HowItWorks";
import { Services } from "./components/Services";
import { Testimonials } from "./components/Testimonials";


export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="flex-1 w-full">
        <Hero />
        <Services />
        <HowItWorks />
        <AboutUs />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}

