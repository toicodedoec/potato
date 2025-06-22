import { PawPrint } from 'lucide-react'; // Optional: install lucide-react for the paw icon

export default function HeroSection() {
  return (
    <section className="text-center py-16 px-4 bg-white relative">
      {/* Icon */}
      <div className="flex justify-center mb-4">
        <div className="bg-blue-500 rounded-full p-3">
          <PawPrint className="text-white w-6 h-6" />
        </div>
      </div>

      {/* Tagline */}
      <p className="text-sm uppercase text-orange-500 tracking-wide mb-2">
        - Adopt Now -
      </p>

      {/* Headline */}
      <h1 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3">
        Every Animal Deserves a Loving Home<span className="text-blue-500">.</span>
      </h1>

      {/* Description */}
      <p className="text-gray-600 max-w-2xl mx-auto">
        Adoption is a lifelong promise of love and care — open your heart and give a homeless pet a forever home.
      </p>

      {/* Optional background decorative ovals */}
      <div className="absolute left-0 top-0 h-full w-1/4 opacity-10 pointer-events-none">
        <div className="bg-blue-100 rounded-full w-32 h-32 absolute top-16 left-4 blur-2xl"></div>
        <div className="bg-blue-100 rounded-full w-24 h-24 absolute top-48 left-16 blur-xl"></div>
      </div>
    </section>
  );
}