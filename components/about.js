import { Code, Database, Globe, Shield } from "lucide-react"

export default function About() {
  const features = [
    {
      icon: <Globe className="h-6 w-6 text-purple-400" />,
      title: "Web Development",
      description: "Creating responsive and interactive web applications",
    },
    {
      icon: <Code className="h-6 w-6 text-blue-400" />,
      title: "Full Stack",
      description: "Developing both client and server-side applications",
    },
    {
      icon: <Database className="h-6 w-6 text-cyan-400" />,
      title: "Database",
      description: "Designing and managing MongoDB databases",
    },
    {
      icon: <Shield className="h-6 w-6 text-indigo-400" />,
      title: "Cybersecurity",
      description: "Basic penetration testing and ethical hacking",
    },
  ]

  return (
    <section id="about" className="section-padding relative">
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full filter blur-[100px]"></div>
      </div>

      <div className="container-custom relative z-10">
        <div className="text-center mb-12">
          <h2 className="section-title gradient-text">About Me</h2>
          <p className="section-subtitle">Get to know more about my background and expertise</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="glass-card p-8">
            <h3 className="text-2xl font-bold mb-6">Who I Am</h3>
            <div className="space-y-4 text-gray-300">
              <p>
                I'm Baseer Afridi, a passionate self-taught Full Stack Developer with a strong foundation in web
                development, backend architecture, and database management. From starting with HTML, CSS, and
                JavaScript, I've dived deep into backend development and database handling, particularly using{" "}
                <span className="text-purple-400 font-medium">MongoDB</span>.
              </p>
              <p>
                I love problem-solving, creating efficient systems, and learning new technologies to enhance my skill
                set.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="glass-card p-6 card-hover">
                <div className="flex flex-col h-full">
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center mb-4">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-gray-400 text-sm">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

