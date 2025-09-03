import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Code, Database, BarChart3, Brain, Users, Clock } from "lucide-react"

const technicalSkills = [
  {
    category: "Programming Languages",
    icon: Code,
    skills: [
      { name: "Python", level: 90 },
      { name: "C++", level: 75 },
      { name: "SQL", level: 85 }
    ]
  },
  {
    category: "Data Analytics & BI",
    icon: BarChart3,
    skills: [
      { name: "Power BI", level: 90 },
      { name: "Tableau", level: 85 },
      { name: "DAX", level: 80 },
      { name: "Excel", level: 85 }
    ]
  },
  {
    category: "Data & Analytics",
    icon: Database,
    skills: [
      { name: "Data Visualization", level: 90 },
      { name: "Statistical Analysis", level: 80 },
      { name: "Dashboard Development", level: 85 },
      { name: "Business Reporting", level: 80 }
    ]
  },
  {
    category: "Tools & Platforms",
    icon: Brain,
    skills: [
      { name: "Microsoft Office", level: 90 },
      { name: "AI Tools", level: 75 },
      { name: "Data Modeling", level: 80 }
    ]
  }
]

const softSkills = [
  {
    category: "Communication & Leadership",
    skills: ["Communication", "Teamwork", "Leadership", "Adaptability"]
  },
  {
    category: "Problem Solving",
    skills: ["Problem-Solving", "Critical Thinking", "Analytical Mindset", "Attention to Detail"]
  },
  {
    category: "Personal Management",
    skills: ["Time Management", "Self-Learning", "Continuous Improvement"]
  }
]

export function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Technical proficiencies and soft skills that drive results
          </p>
        </div>

        {/* Technical Skills */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Technical Skills</h3>
          <div className="grid md:grid-cols-2 gap-6">
            {technicalSkills.map((category, index) => {
              const IconComponent = category.icon
              return (
                <Card key={index} className="glass-card p-6">
                  <CardHeader className="pb-4">
                    <CardTitle className="flex items-center gap-3">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        <IconComponent className="w-5 h-5 text-primary" />
                      </div>
                      <span className="text-lg">{category.category}</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {category.skills.map((skill, skillIndex) => (
                        <div key={skillIndex} className="space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="font-medium">{skill.name}</span>
                            <span className="text-sm text-muted-foreground">{skill.level}%</span>
                          </div>
                          <Progress 
                            value={skill.level} 
                            className="h-2"
                          />
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Soft Skills */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Soft Skills</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {softSkills.map((category, index) => (
              <Card key={index} className="glass-card p-6">
                <CardHeader className="pb-4">
                  <CardTitle className="text-lg text-center">{category.category}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 justify-center">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="px-3 py-1 text-sm hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-default"
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

        {/* Skills Summary */}
        <div className="mt-16">
          <Card className="glass-card p-8">
            <CardContent>
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4">Core Competencies</h3>
                <p className="text-muted-foreground mb-6 max-w-3xl mx-auto">
                  Proficient in transforming complex datasets into actionable business insights through 
                  advanced analytics tools and programming languages. Strong foundation in statistical 
                  analysis, dashboard development, and data-driven decision making with excellent 
                  communication skills to bridge technical and business stakeholders.
                </p>
                <div className="flex flex-wrap gap-3 justify-center">
                  <Badge variant="outline" className="px-4 py-2">
                    <BarChart3 className="w-4 h-4 mr-2" />
                    Data Analytics Expert
                  </Badge>
                  <Badge variant="outline" className="px-4 py-2">
                    <Code className="w-4 h-4 mr-2" />
                    Python Developer
                  </Badge>
                  <Badge variant="outline" className="px-4 py-2">
                    <Database className="w-4 h-4 mr-2" />
                    BI Specialist
                  </Badge>
                  <Badge variant="outline" className="px-4 py-2">
                    <Users className="w-4 h-4 mr-2" />
                    Team Collaborator
                  </Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}