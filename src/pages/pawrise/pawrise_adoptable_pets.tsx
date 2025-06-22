import { Users, Calendar, Bone } from 'lucide-react';

const dogs = [
  {
    name: "Rocky",
    image: "/dogs/rocky.jpg",
    weight: "75 lbs",
    age: "4 years",
    favorite: "Chicken treats",
    description: "Rocky is always ready for an adventure and loves being around people."
  },
  {
    name: "Bella",
    image: "/dogs/bella.jpg",
    weight: "20 lbs",
    age: "5 years",
    favorite: "Salmon snacks",
    description: "Bella is a loyal companion who brings calm and warmth to her family."
  },
  {
    name: "Max",
    image: "/dogs/max.jpg",
    weight: "60 lbs",
    age: "3 years",
    favorite: "Chicken treats",
    description: "Max is an affectionate dog who’s always up for some fun and adventure."
  }
];

export default function AdoptableDogs() {
  return (
    <section className="bg-gray-50 py-16 px-4" id="pets">
      <div className="max-w-6xl mx-auto">
        {/* Tabs placeholder */}
        <div className="flex justify-center mb-8 border-b border-gray-300">
          <ul className="flex space-x-8 text-gray-500 font-medium">
            <li className="border-b-2 border-blue-500 text-gray-900 pb-2">Dogs</li>
            <li className="hover:text-gray-700 cursor-pointer">Cats</li>
            <li className="hover:text-gray-700 cursor-pointer">Bunnies</li>
          </ul>
        </div>

        {/* Dog Cards */}
        <div className="grid md:grid-cols-3 gap-8">
          {dogs.map((dog, idx) => (
            <div key={idx} className="bg-white p-4 shadow-sm rounded-lg">
              <img
                src={dog.image}
                alt={dog.name}
                className="rounded-lg w-full aspect-square object-cover border"
              />
              <h3 className="text-xl font-semibold mt-4">{dog.name}</h3>
              <div className="w-8 border-b-2 border-blue-500 my-2" />
              <div className="flex gap-4 text-gray-500 text-sm items-center mb-3 flex-wrap">
                <span className="flex items-center gap-1"><Users className="w-4 h-4" /> {dog.weight}</span>
                <span className="flex items-center gap-1"><Calendar className="w-4 h-4" /> {dog.age}</span>
                <span className="flex items-center gap-1"><Bone className="w-4 h-4" /> {dog.favorite}</span>
              </div>
              <p className="text-gray-600 text-sm">{dog.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}