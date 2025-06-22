export default function CallToActionSection() {
  return (
    <section className="bg-yellow-50 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Lend a Paw, Change a Life<span className="text-yellow-500">.</span>
        </h2>
        <p className="text-gray-700 max-w-2xl mx-auto mb-8">
          Join us in making a difference today. Your support helps rescue animals,
          provide care, and give them the chance to find loving homes.
        </p>

        <div className="text-left max-w-xl mx-auto mb-10 space-y-4 text-gray-800">
          <div className="flex items-start gap-2">
            <span className="text-yellow-600 text-xl">●</span>
            <p><strong>Adopt a Pet</strong> – Open your heart and home to a pet in need.</p>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-yellow-600 text-xl">●</span>
            <p><strong>Donate</strong> – Your donation directly funds veterinary care, food, and shelter.</p>
          </div>
          <div className="flex items-start gap-2">
            <span className="text-yellow-600 text-xl">●</span>
            <p><strong>Volunteer</strong> – Give your time to make a meaningful impact.</p>
          </div>
        </div>

        <a
          href="/contact"
          className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-lg transition"
        >
          Contact Us
        </a>
      </div>
    </section>
  );
}