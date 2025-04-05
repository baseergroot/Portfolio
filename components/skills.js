"use client"

import { useState } from "react"

export default function Skills() {
  const [activeTab, setActiveTab] = useState("frontend")

  const skillCategories = {
    frontend: [
      { name: "HTML & CSS", level: 90 },
      { name: "JavaScript", level: 85 },
      { name: "React.js", level: 80 },
      { name: "Next.js", level: 75 },
      { name: "Tailwind CSS", level: 85 },
    ],
    backend: [
      { name: "Node.js", level: 80 },
      { name: "Express.js", level: 75 },
      { name: "API Development", level: 85 },
      { name: "MongoDB", level: 90 },
      { name: "Firebase", level: 70 },
    ],
    tools: [
      { name: "Git & GitHub", level: 80 },
      { name: "Vite", level: 75 },
      { name: "NPM", level: 85 },
      { name: "Linux", level: 70 },
      { name: "Termux", level: 65 },
    ],
    other: [
      { name: "Cybersecurity", level: 60 },
      { name: "Ethical Hacking", level: 55 },
      { name: "Web3 Basics", level: 40 },
      { name: "Crypto Analysis", level: 50 },
      { name: "AI Tools", level: 45 },
    ],
  }

  const getTabColor = (tab) => {
    switch (tab) {
      case "frontend":
        return "bg-purple-500"
      case "backend":
        return "bg-blue-500"
      case "tools":
        return "bg-cyan-500"
      case "other":
        return "bg-indigo-500"
      default:
        return "bg-purple-500"
    }
  }

  return (
    <section id="skills" className="section-padding relative bg-gray-950/50">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full filter blur-[100px]"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-12">
          <h2 className="section-title gradient-text">Skills & Technologies</h2>
          <p className="section-subtitle">
            My technical skills and technologies I've worked with throughout my self-learning journey
          </p>
        </div>

        <div className="glass-card p-8 max-w-4xl mx-auto">
          <div className="flex flex-wrap mb-8 gap-2">
            {Object.keys(skillCategories).map((category) => (
              <button
                key={category}
                onClick={() => setActiveTab(category)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeTab === category
                    ? "text-white " + getTabColor(category)
                    : "text-gray-400 bg-white/5 hover:text-white hover:bg-white/10"
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories[activeTab].map((skill, index) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-gray-400">{skill.level}%</span>
                </div>
                <div className="h-2 w-full bg-gray-800 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full ${getTabColor(activeTab)}`}
                    style={{ width: `${skill.level}%`, transition: "width 1s ease-out" }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

