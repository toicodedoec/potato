import React from "react";
import { PawPrint, HeartHandshake, Dog } from "lucide-react";

export default function Home() {
  return (
    <main className="min-h-screen bg-orange-50 text-gray-800 font-sans">
      {/* Hero Section */}
      <section className="bg-orange-100 py-20 px-6 md:px-12">
        <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center gap-12">
          <div className="md:w-1/2 text-center md:text-left space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-orange-600 leading-tight">
              Give a Pet a Forever Home
            </h1>
            <p className="text-gray-700 text-lg">
              Adopt, donate, or volunteer — your kindness saves lives. Meet our dogs and cats waiting to meet you!
            </p>
            <div className="flex justify-center md:justify-start gap-4">
              <button className="px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-full transition">
                View Pets
              </button>
              <button className="px-6 py-3 border border-orange-500 text-orange-600 hover:bg-orange-100 rounded-full transition">
                Donate
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src="/hero-pet.png"
              alt="Adoptable dog and cat"
              className="w-full max-w-md mx-auto rounded-3xl shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Pet Grid Section */}
      <section className="py-16 bg-white px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl text-center text-orange-600 font-semibold mb-10">
            Meet Our Adoptable Pets
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
            {[
              { name: "Kitty", gender: "girl", image: "/cat1.jpg" },
              { name: "Rocky", gender: "boy", image: "/dog1.jpg" },
              { name: "Felix", gender: "boy", image: "/cat2.jpg" },
            ].map((pet) => (
              <div
                key={pet.name}
                className="bg-orange-50 rounded-3xl shadow-md p-6 flex flex-col items-center relative"
              >
                <img
                  src={pet.image}
                  alt={pet.name}
                  className="h-56 object-cover rounded-xl mb-4"
                />
                <h3 className="text-xl font-semibold text-gray-800">{pet.name}</h3>
                <p className="text-sm text-gray-600">2 years old • {pet.gender}</p>
                <button className="mt-4 px-6 py-2 bg-lime-300 hover:bg-lime-400 text-gray-800 rounded-full text-sm">
                  Adopt
                </button>
                <div className="absolute top-4 right-4 bg-black w-8 h-8 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm">❤</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Adopt Section */}
      <section className="bg-orange-100 py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-semibold text-orange-700">
            Why Adopt From Us?
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
            <div className="flex flex-col items-center">
              <PawPrint className="w-10 h-10 text-orange-600 mb-2" />
              <p className="font-medium">Rescue & Rehabilitate</p>
            </div>
            <div className="flex flex-col items-center">
              <HeartHandshake className="w-10 h-10 text-orange-600 mb-2" />
              <p className="font-medium">Trusted Adoption Process</p>
            </div>
            <div className="flex flex-col items-center">
              <Dog className="w-10 h-10 text-orange-600 mb-2" />
              <p className="font-medium">Loving Companions</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-orange-200 text-center py-6 text-sm text-orange-900">
        &copy; 2025 Pet Shelter. All rights reserved.
      </footer>
    </main>
  );
}