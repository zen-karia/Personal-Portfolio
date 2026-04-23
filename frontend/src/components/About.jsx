export default function About() {
  return (
    <section id="about" className="max-w-3xl mx-auto px-6 py-12 border-t border-gray-100 dark:border-gray-800">
      <h2 className="text-sm font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-5">
        About
      </h2>
      <div className="space-y-4 text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
        <p>
          I'm a Computer Science student at the University of Waterloo passionate about
          building software that solves real problems. My experience spans production backend
          systems, AI-powered applications, and embedded hardware projects. At eSentire I worked
          on refactoring threat-detection pipelines in Go and optimizing cloud deployments on AWS.
        </p>
        <p>
          Outside of work I enjoy skydiving, dancing, performing magic tricks, and exploring
          whatever AI tools are shipping that week. I believe the best software is the kind
          people barely notice — it just works.
        </p>
      </div>
    </section>
  );
}
