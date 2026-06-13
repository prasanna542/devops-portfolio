export default function Experience() {
  return (
    <section className="py-24 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">
          <p className="text-sky-400 uppercase tracking-widest font-medium">
            Professional Experience
          </p>

          <h2 className="text-5xl font-bold text-white mt-3">
            My Journey
          </h2>

          <p className="text-slate-400 mt-4">
            From enterprise application administration to cloud and DevOps technologies.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Vertical Line */}
          <div className="absolute left-6 top-0 bottom-0 w-1 bg-slate-700"></div>

          {/* Experience Card */}
          <div className="relative pl-20">

            {/* Timeline Dot */}
            <div className="absolute left-0 top-6 w-12 h-12 rounded-full bg-sky-500 flex items-center justify-center text-white text-xl shadow-lg shadow-sky-500/40">
              💼
            </div>

            <div
              className="
                bg-white/5
                backdrop-blur-xl
                border border-white/10
                rounded-3xl
                p-8
                hover:border-sky-500/30
                transition-all
                duration-300
              "
            >
              {/* Company */}
              <div className="flex flex-col md:flex-row md:justify-between md:items-center">

                <div>
                  <h3 className="text-3xl font-bold text-white">
                    Godrej Infotech
                  </h3>

                  <p className="text-sky-400 text-lg mt-1">
                    ERP System Administrator (Assistant Manager)
                  </p>
                </div>

                <div className="mt-4 md:mt-0">
                  <span className="px-4 py-2 rounded-full bg-sky-500/10 border border-sky-500/30 text-sky-400">
                    2024 - Present
                  </span>
                </div>

              </div>

              {/* Description */}
              <p className="mt-6 text-slate-300 leading-relaxed">
                Supporting enterprise ERP environments, handling production
                incidents, system administration, user management and deployment
                activities while actively expanding expertise in cloud and DevOps.
              </p>

              {/* Highlights */}
              <div className="grid md:grid-cols-2 gap-4 mt-8">

                <div className="bg-slate-900/60 rounded-xl p-4">
                  <h4 className="font-semibold text-white">
                    Production Support
                  </h4>
                  <p className="text-slate-400 text-sm mt-2">
                    Troubleshooting and resolving application issues.
                  </p>
                </div>

                <div className="bg-slate-900/60 rounded-xl p-4">
                  <h4 className="font-semibold text-white">
                    ERP Administration
                  </h4>
                  <p className="text-slate-400 text-sm mt-2">
                    Managing Infor LN environments and configurations.
                  </p>
                </div>

                <div className="bg-slate-900/60 rounded-xl p-4">
                  <h4 className="font-semibold text-white">
                    Documentation
                  </h4>
                  <p className="text-slate-400 text-sm mt-2">
                    SOP creation and operational documentation.
                  </p>
                </div>

                <div className="bg-slate-900/60 rounded-xl p-4">
                  <h4 className="font-semibold text-white">
                    DevOps Learning
                  </h4>
                  <p className="text-slate-400 text-sm mt-2">
                    AWS, Docker, Kubernetes, Terraform and CI/CD projects.
                  </p>
                </div>

              </div>

              {/* Technologies */}
              <div className="flex flex-wrap gap-3 mt-8">

                {[
                  "Infor LN",
                  "Linux",
                  "AWS",
                  "Docker",
                  "Kubernetes",
                  "Terraform",
                  "Git"
                ].map((tech) => (
                  <span
                    key={tech}
                    className="
                      px-4 py-2
                      rounded-full
                      bg-slate-800
                      border border-slate-700
                      text-slate-300
                    "
                  >
                    {tech}
                  </span>
                ))}

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}