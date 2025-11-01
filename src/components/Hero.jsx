export default function Hero() {
  return (
    <section id="home" className="h-screen flex flex-col justify-center items-center bg-gray-100 text-center">
      <h2 className="text-5xl font-bold text-gray-800 mb-4">Hi, I'm Gayathri 👋</h2>
      <p className="text-lg text-gray-600 mb-6">A passionate Web Developer and blogger.</p>
      <a
        href="#projects"
        className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition duration-200"
        >
        View My Work
      </a>

    </section>
  );
}
