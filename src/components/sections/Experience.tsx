import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Building } from "lucide-react"

const experiences = [
  {
    title: "Data Analyst Trainee",
    company: "Digital Egypt Pioneers Initiative (DEPI)",
    location: "Hybrid, Cairo",
    period: "June 2025 – Present",
    type: "Training Program",
    description: [
      "Training in Power BI, Tableau, and DAX to create dashboards, KPIs, and advanced visualizations",
      "Applying data cleaning, transformation, and modeling techniques to build structured reports",
      "Collaborating in a hybrid environment, applying industry practices in data-driven decision-making"
    ],
    skills: ["Power BI", "Tableau", "DAX", "Data Modeling", "KPI Development"]
  },
  {
    title: "Software Development Intern",
    company: "GiG Egypt",
    location: "Cairo",
    period: "Aug – Sep 2024",
    type: "Internship",
    description: [
      "Developed a Retirement Premium Calculator using Python and Tkinter to automate financial planning",
      "Designed and implemented a user-friendly UI for calculating monthly and annual contributions",
      "Applied financial logic and actuarial formulas to support accurate retirement planning",
      "Gained hands-on experience in real-world application development with practical problem-solving"
    ],
    skills: ["Python", "Tkinter", "GUI Development", "Financial Modeling", "Problem Solving"]
  }
]

const certifications = [
  {
    title: "Python: From Beginner to Pro",
    issuer: "CBT Nuggets",
    date: "Aug 2023",
    description: [
      "Learned Python programming fundamentals, including data structures, functions, and OOP concepts",
      "Applied Python in practical scenarios such as data manipulation, automation, and basic analytics",
      "Built confidence in writing clean, efficient, and maintainable Python code"
    ],
    skills: ["Python", "OOP", "Data Structures", "Automation"]
  },
  {
    title: "Power BI for Beginners",
    issuer: "Microsoft & Simplilearn",
    date: "Aug 2025",
    description: [
      "Learned to design interactive dashboards and visual reports for business insights",
      "Connected, cleaned, and transformed raw datasets into structured visualizations",
      "Built proficiency in creating data-driven KPIs, charts, and performance summaries"
    ],
    skills: ["Power BI", "Data Visualization", "Business Intelligence", "Dashboard Design"]
  }
]

export function Experience() {
  return (
    <section id="experience" className="section-padding bg-section-bg">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            Experience & Education
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Professional experience and continuous learning journey
          </p>
        </div>

        {/* Professional Experience */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Professional Experience</h3>
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <Card key={index} className="glass-card p-6">
                <CardHeader className="pb-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl mb-2">{exp.title}</CardTitle>
                      <div className="flex items-center gap-2 text-muted-foreground mb-2">
                        <Building className="w-4 h-4" />
                        <span className="font-medium">{exp.company}</span>
                        <Badge variant="outline" className="ml-2">{exp.type}</Badge>
                      </div>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {exp.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-muted-foreground flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Courses & Certifications</h3>
          <div className="space-y-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="glass-card p-6">
                <CardHeader className="pb-4">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <CardTitle className="text-xl mb-2">{cert.title}</CardTitle>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Building className="w-4 h-4" />
                          <span className="font-medium">{cert.issuer}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>{cert.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 mb-4">
                    {cert.description.map((item, itemIndex) => (
                      <li key={itemIndex} className="text-muted-foreground flex items-start gap-2">
                        <span className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="outline"
                        className="text-xs hover:bg-accent hover:text-accent-foreground transition-colors duration-300"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}