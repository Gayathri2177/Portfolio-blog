// src/components/Footer.jsx
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-300 py-6 mt-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        <p className="text-sm mb-4 md:mb-0">
          © {new Date().getFullYear()} Gayathri Peddi. All rights reserved.
        </p>

        <div className="flex space-x-6 text-xl">
          <a
            href="https://github.com/Gayathri2177"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/peddi-gayathri-53406922a"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:peddigayathri89@gmail.com"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}
