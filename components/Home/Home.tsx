import About from "./About"
import Features from "./Features"
import Hero from "./Hero"


const Home = () => {

  const aboutSections = [
    {
      textOrder: "lg:order-1",
      imageOrder: "lg:order-2",
      title: "Pure sound, no added noise",
      linkText: "Learn More",
      features: [
        "Noise cancellation for pure sound",
        "High-quality wireless audio",
        "Ergonomic design for comfort",
        "High-resolution audio compatibility",
      ],
    },
    {
      textOrder: "lg:order-2",
      imageOrder: "lg:order-1",
      title: "Capture pure sound with the 70mm HD Driver",
      linkText: "Shop Now",
      features: [
        "70mm HD Driver for exceptional sound",
        "Adaptive Sound Control",
        "High-resolution audio compatibility",
        "Awesome sound quality",
      ],
    },
  ];

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
    </div>
  )
}

export default Home