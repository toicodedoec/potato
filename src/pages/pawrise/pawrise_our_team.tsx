import { PawPrint } from 'lucide-react';

const team = [
  {
    name: 'Emma Johnson',
    role: 'FOUNDER',
    image: '/team/emma-johnson.jpg',
    description: 'Emma leads our team with a passion for animal welfare and years of experience.',
  },
  {
    name: 'David Smith',
    role: 'VETERINARY SPECIALIST',
    image: '/team/david-smith.jpg',
    description: 'David provides expert medical care to ensure the health and well-being of our animals.',
  },
  {
    name: 'Sophia Lee',
    role: 'ADOPTION COORDINATOR',
    image: '/team/sophia-lee.jpg',
    description: 'Sophia helps connect animals with loving families through her dedication and care.',
  },
  {
    name: 'Emma Brown',
    role: 'VOLUNTEER MANAGER',
    image: '/team/emma-brown.jpg',
    description: 'Emma manages our volunteers, ensuring they have the support needed to make a difference.',
  },
];

export default function OurTeamSection() {
  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto text-center">
        {/* Icon and Subtitle */}
        <div className="flex justify-center items-center mb-4">
          <div className="bg-blue-500 rounded-full p-2 mr-2">
            <PawPrint className="text-white w-5 h-5" />
          </div>
          <p className="uppercase text-orange-500 text-sm tracking-wide">- Our Team -</p>
        </div>

        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Loyal, Passionate, and Driven<span className="text-blue-500">.</span>
        </h2>
        <p className="text-gray-600 mb-12 max-w-2xl mx-auto">
          Our team is made up of dedicated individuals who share a common love for animals.
        </p>

        {/* Team Grid */}
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          {team.map((member, idx) => (
            <div key={idx} className="text-left">
              <img
                src={member.image}
                alt={member.name}
                className="rounded-lg w-full object-cover aspect-[3/4] mb-4"
              />
              <h3 className="text-lg font-semibold text-gray-800">{member.name}</h3>
              <p className="text-sm text-blue-600 font-medium uppercase">{member.role}</p>
              <p className="text-gray-600 text-sm mt-2">{member.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}