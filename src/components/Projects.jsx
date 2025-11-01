export default function Projects() {
  const projects = [
    {
      title: "Portfolio + Blog Hybrid",
      desc: "A personal site built with React and Tailwind CSS.",
    },
    {
      title: "Recipe Book App",
      desc: "A fun web app to browse, save, and share recipes.",
    },
    {
      title: "Pet Adoption Website",
      desc: "A responsive site that connects pets with adopters.",
    },
  ];

  return (
    <section id="projects" className="py-16 bg-gray-50 text-gray-900">
    <div className="max-w-6xl mx-auto px-4">
    <h2 className="text-4xl font-bold mb-10 text-center">My Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((p, index) => (
            <div
              key={index}
              className="bg-gray-100 p-6 rounded-xl shadow-md hover:shadow-lg transition"
            >
              <h3 className="text-2xl font-semibold text-blue-600 mb-2">{p.title}</h3>
              <p className="text-gray-600">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
