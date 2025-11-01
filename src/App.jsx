import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      <Navbar />
      <main className="flex-grow">
        <Hero />
        <Projects />
        <Blog />
        <Contact/>
      </main>
      <Footer />
    </div>
  );
}

export default App;
