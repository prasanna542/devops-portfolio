export default function Projects() {
  const projects = [
    {
      title: "Kubernetes Three Tier Application",
      icon: "☸️",
      description:
        "Deployed a full-stack application on Kubernetes using Deployments, Services, Ingress, ConfigMaps and Secrets.",
      architecture: [
        "React Frontend",
        "NodeJS Backend",
        "MySQL Database",
      ],
      tech: ["Kubernetes", "Docker", "AWS", "Ingress"],
      github: "#",
    },

    {
      title: "CI/CD Pipeline",
      icon: "🚀",
      description:
        "Automated application deployment using Jenkins, Docker and Kubernetes.",
      architecture: [
        "GitHub",
        "Jenkins",
        "Docker",
        "Kubernetes",
      ],
      tech: ["Jenkins", "Docker", "GitHub", "Kubernetes"],
      github: "#",
    },

    {
      title: "AWS Infrastructure with Terraform",
      icon: "☁️",
      description:
        "Provisioned cloud infrastructure using Infrastructure as Code principles.",
      architecture: [
        "VPC",
        "EC2",
        "IAM",
        "Security Groups",
      ],
      tech: ["AWS", "Terraform", "Linux"],
      github: "#",
    },
  ];

  return (
    <section id="projects" className="py-24 px-6">

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="text-sky-400 uppercase tracking-widest">
            Portfolio
          </p>

          <h2 className="text-5xl font-bold text-white mt-3">
            Featured Projects
          </h2>

          <p className="text-slate-400 mt-4">
            Hands-on projects demonstrating cloud,
            automation and container orchestration skills.
          </p>

        </div>

        {/* Cards */}
        <div className="grid lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="
                group
                bg-white/5
                backdrop-blur-xl
                border border-white/10
                rounded-3xl
                p-8
                hover:border-sky-500/30
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >

              {/* Header */}
              <div className="flex items-center gap-4">

                <div className="text-4xl">
                  {project.icon}
                </div>

                <div>
                  <h3 className="text-xl font-bold text-white">
                    {project.title}
                  </h3>
                </div>

              </div>

              {/* Description */}
              <p className="text-slate-400 mt-6">
                {project.description}
              </p>

              {/* Architecture */}
              <div className="mt-8">

                <h4 className="text-sky-400 text-sm uppercase tracking-wider mb-4">
                  Architecture
                </h4>

                <div className="space-y-2">

                  {project.architecture.map((item, i) => (
                    <div key={i}>

                      <div className="text-slate-300">
                        {item}
                      </div>

                      {i !== project.architecture.length - 1 && (
                        <div className="text-sky-400 ml-3">
                          ↓
                        </div>
                      )}

                    </div>
                  ))}

                </div>

              </div>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mt-8">

                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="
                      px-3 py-1
                      rounded-full
                      bg-slate-800
                      border border-slate-700
                      text-sm
                      text-slate-300
                    "
                  >
                    {tech}
                  </span>
                ))}

              </div>

              {/* Buttons */}
              <div className="flex gap-3 mt-8">

                <a
                  href={project.github}
                  className="
                    flex-1
                    text-center
                    py-3
                    rounded-xl
                    bg-sky-500
                    hover:bg-sky-400
                    text-white
                  "
                >
                  GitHub
                </a>

                <button
                  className="
                    flex-1
                    py-3
                    rounded-xl
                    border
                    border-slate-600
                    text-white
                  "
                >
                  Details
                </button>

              </div>

            </div>
          ))}

        </div>

      </div>

    </section>
  );
}