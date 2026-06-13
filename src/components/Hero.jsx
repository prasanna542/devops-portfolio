export default function Hero() {
  const skills = [
    "AWS",
    "Docker",
    "Kubernetes",
    "Terraform",
    "Linux",
    "Jenkins",
  ];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">

      {/* Background Gradient Effects */}
      <div className="absolute inset-0 bg-slate-950"></div>

      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-500/20 rounded-full blur-3xl"></div>

      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-violet-500/20 rounded-full blur-3xl"></div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">

        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <div>

            <div className="inline-flex items-center px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400 text-sm mb-6">
              🚀 Open to DevOps Opportunities
            </div>

            <h1 className="text-6xl md:text-7xl font-extrabold text-white leading-tight">
              Prasanna
              <span className="block text-sky-400">
                Pawar
              </span>
            </h1>

            <h2 className="mt-4 text-2xl md:text-3xl font-semibold text-slate-300">
              DevOps Engineer
            </h2>

            <p className="mt-6 text-lg text-slate-400 max-w-xl leading-relaxed">
              System Administrator with 2 years of experience
              transitioning into DevOps through hands-on projects
              involving AWS, Docker, Kubernetes, Terraform,
              Linux and CI/CD pipelines.
            </p>

            {/* Buttons */}
            <div className="flex flex-wrap gap-4 mt-8">

              <a
                href="#projects"
                className="px-7 py-3 rounded-xl bg-sky-500 hover:bg-sky-400 transition text-white font-medium"
              >
                View Projects
              </a>

                <a
                href="/Resume_Prasanna_Pawar_DevOps.pdf"
                download
                className="px-7 py-3 rounded-xl border border-slate-600 hover:border-sky-400 text-white"
                >
                Download Resume
                </a>

            </div>



          </div>

          {/* Right Side */}
          <div className="flex justify-center">

            <div className="relative">

              {/* Glow */}
              <div className="absolute inset-0 bg-sky-500/20 blur-3xl rounded-full"></div>

              {/* Glass Card */}
              <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 w-[350px]">

                <img
                  src="profile.png"
                  alt="Prasanna Pawar"
                  className="w-50 h-50 rounded-full mx-auto object-cover border-4 border-sky-500"
                />
{/* 
                <h3 className="text-center mt-6 text-2xl font-bold text-white">
                  Transitioning to DevOps 
                </h3> */}
{/* 
                <div className="mt-6 space-y-4 text-slate-300">

                  <div className="flex justify-between">
                    <span>Linux</span>
                    <span>✓</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Docker</span>
                    <span>✓</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Kubernetes</span>
                    <span>Learning</span>
                  </div>

                  <div className="flex justify-between">
                    <span>Terraform</span>
                    <span>Learning</span>
                  </div>

                  <div className="flex justify-between">
                    <span>AWS</span>
                    <span>Projects</span>
                  </div>

                </div> */}

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}