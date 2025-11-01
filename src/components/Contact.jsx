import { useState } from "react";

const Contact = () => {
  const [status, setStatus] = useState(""); // "success" or "error"

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;

    const data = new FormData(form);
    const response = await fetch("https://formspree.io/f/mgvppljp", {
      method: "POST",
      body: data,
      headers: {
        Accept: "application/json",
      },
    });

    if (response.ok) {
      form.reset();
      setStatus("success");
    } else {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="py-16 bg-white text-gray-900">
      <div className="max-w-3xl mx-auto text-center px-4">
        <h2 className="text-4xl font-bold mb-6">Contact Me</h2>
        <p className="text-gray-600 mb-10">
          Have a question, idea, or project in mind? Let’s talk!
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-4 max-w-lg mx-auto"
        >
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            required
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            required
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
          <textarea
            name="message"
            placeholder="Your Message"
            required
            rows="5"
            className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
          ></textarea>
          <button
            type="submit"
            className="bg-indigo-600 text-white py-3 px-6 rounded-lg hover:bg-indigo-700 transition duration-200"
          >
            Send Message
          </button>
        </form>

        {status === "success" && (
          <p className="mt-4 text-green-600">Thanks! Your message has been sent.</p>
        )}
        {status === "error" && (
          <p className="mt-4 text-red-600">
            Oops! Something went wrong. Please try again.
          </p>
        )}
      </div>
    </section>
  );
};

export default Contact;
