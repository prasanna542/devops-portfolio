const skills = [
  "AWS",
  "Linux",
  "Docker",
  "Kubernetes",
  "Terraform",
  "Ansible",
  "Git",
  "Jenkins",
  "Prometheus",
  "Grafana"
]

export default function Skills() {

    
  const skillGroups = [
    {
      icon: "☁️",
      title: "Cloud",
      tech: "AWS",
      desc: "EC2 • IAM • VPC • S3 • Load Balancer ",
    },
    {
      icon: "🐳",
      title: "Containers",
      tech: "Docker • Kubernetes",
      desc: "Pods • Deployments • Services",
    },
    {
      icon: "⚙️",
      title: "Infrastructure as Code",
      tech: "Terraform • Ansible",
      desc: "Provisioning • Automation",
    },
    {
      icon: "🚀",
      title: "CI/CD",
      tech: "GitHub Actions",
      desc: "Build • Test • Deploy",
    },
    // {
    //   icon: "📊",
    //   title: "Monitoring",
    //   tech: "Prometheus • Grafana",
    //   desc: "Metrics • Dashboards",
    // },
    {
      icon: "💻",
      title: "Operating Systems",
      tech: "Linux • Bash",
      desc: "Administration • Scripting",
    },
  ];

  return (
    <div className="relative">
  <div className="absolute left-0 top-0 w-96 h-96 bg-sky-500/10 blur-3xl rounded-full"></div>

  <div className="absolute right-0 bottom-0 w-96 h-96 bg-violet-500/10 blur-3xl rounded-full"></div>

  {/* Skills section here */}

    <section className="py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-sky-400 uppercase tracking-widest font-medium">
            Technical Expertise
          </p>

          <h2 className="text-5xl font-bold text-white mt-3">
            Skills & Technologies
          </h2>

          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Hands-on experience across cloud infrastructure,
            containerization, automation, CI/CD and monitoring.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {skillGroups.map((skill, index) => (
            <div
              key={index}
              className="
                group
                bg-white/5
                backdrop-blur-xl
                border border-white/10
                rounded-3xl
                p-8
                hover:border-sky-500/40
                hover:-translate-y-2
                transition-all
                duration-300
              "
            >
              <div className="text-5xl mb-6">
                {skill.icon}
              </div>

              <h3 className="text-2xl font-bold text-white">
                {skill.title}
              </h3>

              <p className="text-sky-400 font-medium mt-3">
                {skill.tech}
              </p>

              <p className="text-slate-400 mt-4 leading-relaxed">
                {skill.desc}
              </p>

              {/* Decorative line */}
              <div className="mt-6 h-1 w-0 bg-sky-400 group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}

        </div>

      </div>
    </section>
    </div>
  );
  
}