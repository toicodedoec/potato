'use client'; // Only needed for Next.js App Router
import { PawPrint, Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const items = [
  {
    title: "Commitment to Compassion",
    content:
      "We believe every animal deserves compassion, kindness, and dignity, no matter their background.",
  },
  {
    title: "Focus on Health and Happiness",
    content:
      "Our team ensures each pet receives quality veterinary care and a nurturing environment.",
  },
  {
    title: "Building Loving Connections",
    content:
      "We match pets with families who will cherish and care for them as lifelong friends.",
  },
];

export default function AboutUsSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) =>
    setOpenIndex(openIndex === index ? null : index);

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Image */}
        <div className="w-full lg:w-1/2">
          <img
            src="/about-us.jpg"
            alt="Woman holding bunny"
            className="rounded-lg w-full object-cover"
          />
        </div>

        {/* Text content */}
        <div className="w-full lg:w-1/2">
          <div className="flex items-center justify-start mb-4">
            <div className="bg-blue-500 rounded-full p-2 mr-2">
              <PawPrint className="text-white w-5 h-5" />
            </div>
            <p className="uppercase text-orange-500 text-sm tracking-wide">- About Us -</p>
          </div>

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-3 leading-tight">
            What Makes Us Care<br />About Pets<span className="text-yellow-500">.</span>
          </h2>

          <p className="text-gray-700 font-medium mb-2">
            Our love for animals drives everything we do.
          </p>
          <p className="text-gray-600 mb-6">
            We care about pets because we see their unique personalities, the joy they bring, and their unwavering loyalty. Every animal deserves a chance to live a happy, healthy life, surrounded by love. Our mission is to rescue, protect, and find forever homes for these animals, giving them the second chance they truly deserve.
          </p>

          {/* Accordion */}
          <div className="space-y-3">
            {items.map((item, index) => (
              <div key={index} className="border-b pb-3">
                <button
                  onClick={() => toggle(index)}
                  className="w-full text-left flex justify-between items-center text-gray-800 font-semibold text-base hover:text-blue-600 transition"
                >
                  {item.title}
                  {openIndex === index ? (
                    <Minus className="w-4 h-4" />
                  ) : (
                    <Plus className="w-4 h-4" />
                  )}
                </button>
                {openIndex === index && (
                  <p className="mt-2 text-gray-600 text-sm">{item.content}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}