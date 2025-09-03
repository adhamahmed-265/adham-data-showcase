import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { GraduationCap, MapPin, Phone, Mail } from "lucide-react"

export function About() {
  const highlights = [
    "Data Analytics Specialist",
    "Python Programming",
    "SQL & Database Management",
    "Power BI & Tableau Expert",
    "Dashboard Development",
    "Problem-Solving Mindset"
  ]

  return (
    <section id="about" className="section-padding bg-section-bg">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            About Me
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Passionate about transforming data into actionable insights
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Personal Info */}
          <Card className="glass-card p-8">
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <GraduationCap className="w-5 h-5 text-primary" />
                  <div>
                    <h3 className="font-semibold">Education</h3>
                    <p className="text-sm text-muted-foreground">
                      Bachelor of Computer Science
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Modern University for Technology and Information (MTI)
                    </p>
                    <p className="text-sm text-muted-foreground">2022 – 2026</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-primary" />
                  <div>
                    <h3 className="font-semibold">Location</h3>
                    <p className="text-sm text-muted-foreground">Cairo, Egypt</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-primary" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-sm text-muted-foreground">01001065214</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-primary" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-sm text-muted-foreground">adhamnabbil@gmail.com</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Summary & Highlights */}
          <div className="space-y-8">
            <Card className="glass-card p-8">
              <CardContent>
                <h3 className="text-xl font-semibold mb-4">Professional Summary</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Motivated Computer Science student specializing in Data Analytics and Programming, 
                  with hands-on experience in building analytical tools and interactive dashboards. 
                  Skilled in Python, SQL, Power BI, and Tableau, with a strong focus on problem-solving 
                  and delivering clear data insights. Eager to apply technical expertise and analytical 
                  mindset to support data-driven decision-making in professional environments.
                </p>
              </CardContent>
            </Card>

            <Card className="glass-card p-8">
              <CardContent>
                <h3 className="text-xl font-semibold mb-4">Key Highlights</h3>
                <div className="flex flex-wrap gap-2">
                  {highlights.map((highlight, index) => (
                    <Badge
                      key={index}
                      variant="secondary"
                      className="px-3 py-1 text-sm hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                    >
                      {highlight}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card className="glass-card p-8">
              <CardContent>
                <h3 className="text-xl font-semibold mb-4">Languages</h3>
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="font-medium">Arabic</span>
                    <Badge variant="outline">Native</Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="font-medium">English</span>
                    <Badge variant="outline">B2 (Upper Intermediate)</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}