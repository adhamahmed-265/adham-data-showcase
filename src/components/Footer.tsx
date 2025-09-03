import { Button } from "@/components/ui/button"
import { Heart, Github, Linkedin, Mail } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="bg-hero-bg text-hero-text py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-xl font-bold gradient-text mb-4">Adham Ahmed</h3>
            <p className="text-hero-text/70 mb-4">
              Data Analyst passionate about transforming data into actionable insights.
            </p>
            <div className="flex gap-3">
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

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {[
                { label: "About", href: "#about" },
                { label: "Projects", href: "#projects" },
                { label: "Experience", href: "#experience" },
                { label: "Skills", href: "#skills" },
                { label: "Contact", href: "#contact" }
              ].map((link) => (
                <button
                  key={link.label}
                  onClick={() => {
                    const element = document.querySelector(link.href)
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" })
                    }
                  }}
                  className="block text-hero-text/70 hover:text-primary transition-colors duration-300"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-4">Contact Info</h4>
            <div className="space-y-2 text-hero-text/70">
              <p>Cairo, Egypt</p>
              <p>adhamnabbil@gmail.com</p>
              <p>01001065214</p>
              <Button
                variant="hero"
                size="sm"
                onClick={scrollToTop}
                className="mt-4"
              >
                Back to Top
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-hero-text/60 flex items-center justify-center gap-2">
            © {currentYear} Adham Ahmed. Made with <Heart className="w-4 h-4 text-red-500" /> and lots of data.
          </p>
        </div>
      </div>
    </footer>
  )
}