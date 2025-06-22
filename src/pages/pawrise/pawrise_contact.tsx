import { PawPrint } from 'lucide-react';

export default function ContactSection() {
  return (
    <section className="bg-white py-16 px-4" id="contact">
      <div className="max-w-6xl mx-auto text-center">
        {/* Icon + Subtitle */}
        <div className="flex justify-center items-center mb-4">
          <div className="bg-blue-500 rounded-full p-2 mr-2">
            <PawPrint className="text-white w-5 h-5" />
          </div>
          <p className="uppercase text-orange-500 text-sm tracking-wide">- Contacts -</p>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Let's Get In Touch<span className="text-blue-500">.</span>
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-12">
          Whether you’re interested in adopting, donating, or simply want to learn more, don’t hesitate to reach out!
        </p>

        {/* Contact Form */}
        <form className="max-w-2xl mx-auto text-left space-y-6">
          <div className="grid sm:grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-blue-400"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-blue-400"
              required
            />
          </div>
          <textarea
            placeholder="Your Message"
            className="w-full border border-gray-300 rounded-md px-4 py-2 h-32 resize-none focus:outline-blue-400"
            required
          />
          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition"
          >
            Send Message
          </button>
        </form>

        {/* Google Maps Error Message */}
        <div className="mt-12 text-center text-red-500 text-sm">
          <p>Oops! Something went wrong.</p>
          <p>This page didn't load Google Maps correctly. See the JavaScript console for technical details.</p>
        </div>
      </div>
    </section>
  );
}