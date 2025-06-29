import HeroGrid from "./components/home/heroGrid"
import WorkGallery from "./components/home/workGallery"
import Unplugged from "./components/home/unplugged"
import Contact from "./components/home/contact"

export default function Home() {
  return (
    <div className="min-h-screen mt-16 md:mt-16 bg-white">
      <HeroGrid />
      <div data-section="work">
        <WorkGallery />
      </div>
      <div data-section="unplugged">
        <Unplugged />
      </div>
      <div data-section="contact">
        <Contact />
      </div>
    </div>
  )
}