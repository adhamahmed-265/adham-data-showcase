import { Button } from "@/components/ui/button"
import { Download, Mail, Github, Linkedin } from "lucide-react"
import heroBg from "@/assets/hero-bg.jpg"

export function Hero() {
  const downloadCV = () => {
    window.open("https://docs.google.com/document/d/1LDBaxo1fGXa7ocGN679p9WT_dQ_y6hVVOj-q7PACAIo/edit?usp=sharing", "_blank")
  }

  const scrollToContact = () => {
    const element = document.querySelector("#contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBg}
          alt="Data Analytics Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-gradient opacity-90"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-hero-text mb-6">
              Hi, I'm{" "}
              <span className="gradient-text">Adham Ahmed</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-hero-text/80 mb-6">
              Undergraduate Data Analyst
            </h2>
            <p className="text-lg text-hero-text/70 mb-8 max-w-2xl">
              Motivated Computer Science student specializing in Data Analytics and Programming. 
              Skilled in Python, SQL, Power BI, and Tableau with a strong focus on delivering 
              clear data insights and supporting data-driven decision-making.
            </p>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Button variant="hero" size="lg" onClick={downloadCV}>
                <Download className="w-5 h-5 mr-2" />
                Download CV
              </Button>
              <Button variant="glass" size="lg" onClick={scrollToContact}>
                <Mail className="w-5 h-5 mr-2" />
                Contact Me
              </Button>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center lg:justify-start">
              <Button
                variant="ghost"
                size="icon"
                className="text-hero-text hover:text-primary hover:bg-white/10"
                onClick={() => window.open("https://www.linkedin.com/in/adham-ahmed-551b11356/", "_blank")}
              >
                <Linkedin className="w-5 h-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="text-hero-text hover:text-primary hover:bg-white/10"
                onClick={() => window.open("mailto:adhamnabbil@gmail.com")}
              >
                <Mail className="w-5 h-5" />
              </Button>
            </div>
          </div>

          {/* Profile Photo Placeholder */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-r from-primary to-accent p-1 animate-float">
                <div className="w-full h-full rounded-full bg-hero-bg flex items-center justify-center">
                  <div className="text-hero-text text-center">
                    <div className="text-6xl mb-4">👨‍💻</div>
                    <p className="text-sm opacity-70">
                      Upload your LinkedIn photo here
                    </p>
                  </div>
                </div>
              </div>
              <div className="absolute -inset-4 bg-gradient-to-r from-primary to-accent rounded-full opacity-20 blur-lg animate-glow"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}