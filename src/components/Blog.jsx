export default function Blog() {
  const posts = [
    {
      title: "Why I Started Coding",
      date: "October 2025",
      content:
        "I began coding to turn ideas into something real. Every bug taught me patience, and every project gave me confidence.",
    },
    {
      title: "React vs Plain HTML",
      date: "September 2025",
      content:
        "React’s component system makes reusing UI parts simple, while HTML alone can get messy for complex apps.",
    },
  ];

  return (
    <section id="blog" className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">Blog</h2>
        <div className="space-y-8">
          {posts.map((post, index) => (
            <article key={index} className="bg-white p-6 rounded-xl shadow-md">
              <h3 className="text-2xl font-semibold text-blue-600">{post.title}</h3>
              <p className="text-sm text-gray-500 mb-2">{post.date}</p>
              <p className="text-gray-700">{post.content}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
