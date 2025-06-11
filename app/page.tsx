import HeroGrid from "./components/home/heroGrid"
import WorkGallery from "./components/home/workGallery"
import Contact from "./components/home/contact"

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <HeroGrid />
      <div data-section="work">
        <WorkGallery />
      </div>
      <div data-section="contact">
        <Contact />
      </div>
    </div>
  )
}