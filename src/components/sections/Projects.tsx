import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github } from "lucide-react"
import retirementCalculator from "@/assets/retirement-calculator.jpg"
import titanicDashboard from "@/assets/titanic-dashboard.jpg"
import salesDashboard from "@/assets/sales-dashboard.jpg"
import olympicsDashboard from "@/assets/olympics-dashboard.jpg"

const projects = [
  {
    title: "Retirement Premium Calculator",
    description: "A comprehensive financial planning tool built with Python and Tkinter that automates retirement calculations. Features user-friendly interface for calculating monthly and annual contributions with accurate actuarial formulas.",
    image: retirementCalculator,
    technologies: ["Python", "Tkinter", "Financial Modeling", "GUI Development"],
    category: "Software Development"
  },
  {
    title: "Titanic Dataset Dashboard",
    description: "Interactive data visualization dashboard analyzing passenger demographics and survival rates from the Titanic dataset. Built with advanced filtering and statistical insights.",
    image: titanicDashboard,
    technologies: ["Power BI", "Data Visualization", "Statistical Analysis", "DAX"],
    category: "Data Analytics"
  },
  {
    title: "Sales Analytics Dashboard",
    description: "Comprehensive business intelligence dashboard tracking sales performance, revenue metrics, and KPIs. Features real-time data updates and interactive visualizations.",
    image: salesDashboard,
    technologies: ["Tableau", "SQL", "Business Intelligence", "KPI Tracking"],
    category: "Business Intelligence"
  },
  {
    title: "Tokyo Olympics Dashboard",
    description: "Dynamic sports analytics dashboard visualizing Olympic medal counts, country performance, and athlete statistics with interactive Olympic-themed design.",
    image: olympicsDashboard,
    technologies: ["Power BI", "Sports Analytics", "Data Modeling", "Interactive Design"],
    category: "Data Visualization"
  }
]

export function Projects() {
  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            Featured Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Showcase of my data analytics and software development projects
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card key={index} className="glass-card group hover:shadow-xl transition-all duration-300 overflow-hidden">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <Badge variant="secondary" className="mb-2">
                      {project.category}
                    </Badge>
                    <CardTitle className="text-xl mb-2">{project.title}</CardTitle>
                  </div>
                </div>
                <p className="text-muted-foreground">{project.description}</p>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge
                        key={techIndex}
                        variant="outline"
                        className="text-xs hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm" className="flex-1">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Project
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Github className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}