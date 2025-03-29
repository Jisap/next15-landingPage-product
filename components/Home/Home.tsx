import { aboutSections } from "@/constants/constant";
import About from "./About"
import Features from "./Features"
import Hero from "./Hero"
import Review from "./ReviewSlider/Review";


const Home = () => {

  return (
    <div className="overflow-hidden">
      <Hero />
      <Features />

      {aboutSections.map((section, index) => (
        <About
          key={index}
          textOrder={section.textOrder}
          imageOrder={section.imageOrder}
          title={section.title}
          linkText={section.linkText}
          features={section.features}
        />
      ))}

      <Review />
    </div>
  )
}

export default Home