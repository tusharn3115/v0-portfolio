'use client'

import { useState } from 'react'
import Link from 'next/link'
import { ArrowLeft, Moon, Sun, Github, ExternalLink } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"

const projects = [
  {
    id: 'devportfolio',
    title: 'Portfolio Website',
    description: "Showcasing my web development skills, projects, and achievements with a seamless, interactive experience enhanced by smooth animations and transitions.",
    technologies: ['React', 'Node.js', 'Tailwind', 'Typescript', 'Framer-Motion'],
    githubLink: 'https://github.com/tusharn3115/dev-portfolio',
    liveLink: 'https://dev-portfolio-livid-three.vercel.app/'
  },
  {
    id: 'significo',
    title: 'Significo',
    description: 'Significo project showcasing my animation skills, delivering a smooth and seamless experience with interactive, dynamic design elements.',
    technologies: ['HTML', 'CSS', 'Javascript', 'GSAP', 'Lenis'],
    githubLink: 'https://github.com/tusharn3115/significo',
    liveLink: 'https://significo-iota.vercel.app/'
  },
  {
    id: 'cliniccare',
    title: 'ClinicCare - Doctor Appointment App',
    description: "ClinicCare is a doctors appointment platform offering seamless booking, profile management, and clinic details with a user-friendly interface.",
    technologies: ['React', 'Tailwind', 'NodeJs', 'MongoDB', "Postman"],
    githubLink: 'https://github.com/tusharn3115/ClinicCare',
    liveLink: 'https://clinic-care-three.vercel.app/'
  }
]

export default function ProjectsPage() {
  const [isDark, setIsDark] = useState(true)

  return (
    <div className={`min-h-screen transition-colors duration-300 ${isDark ? 'dark' : ''}`}>
      <div className="bg-background text-foreground min-h-screen px-4 sm:px-8 py-8">
        {/* Navigation */}
        <nav className="max-w-4xl mx-auto flex items-center justify-between mb-16">
          <Link href="/" className="text-primary hover:text-primary/80 transition-colors flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsDark(!isDark)}
            className="rounded-full"
          >
            {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
        </nav>

        {/* Main Content */}
        <main className="max-w-4xl mx-auto space-y-16">
          <section className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl animate-in fade-in slide-in-from-bottom-3 duration-500">
              my projects
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed animate-in fade-in slide-in-from-bottom-4 duration-700">
              Here&apos;s a collection of my recent projects. Each one represents a unique challenge and learning experience.
            </p>
          </section>

          <section className="space-y-8">
            {projects.map((project, index) => (
              <Card key={project.id} id={project.id} className="overflow-hidden transition-all hover:shadow-lg animate-in fade-in slide-in-from-bottom-5 duration-900" style={{ '--index': index } as React.CSSProperties}>
                <CardContent className="p-6">
                  <h2 className="text-2xl font-semibold mb-2">{project.title}</h2>
                  <p className="text-muted-foreground mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-primary/10 text-primary rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="bg-muted p-6 flex justify-between">
                  <Button asChild variant="outline">
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <Github className="h-4 w-4" />
                      View on GitHub
                    </a>
                  </Button>
                  <Button asChild>
                    <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                      <ExternalLink className="h-4 w-4" />
                      Live Demo
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </section>
        </main>

        {/* Footer */}
        <footer className="max-w-4xl mx-auto mt-24 pt-8 border-t">
          <p className="text-center text-sm text-muted-foreground">
            © 2025 tushar negi. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  )
}
