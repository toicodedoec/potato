import { PawPrint } from 'lucide-react';
import StoryCard from './pawrise_story_card';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; // Basic styles
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export default function SuccessStoriesSection() {
  const stories = [
    {
      name: "Olivia Martinez",
      pet: "Luna (Cat)",
      story:
        "Luna has made our family complete. She was a bit nervous when we first brought her home, but she quickly warmed up and has become such an affectionate and playful cat. Her sweet personality and purring bring us so much comfort, especially after a long day.",
      date: "December 6, 2024",
      imageUrl: "/stories/luna.jpg",
    },
    {
      name: "Mark Rivera",
      pet: "Buddy (Dog)",
      story:
        "Buddy changed everything for me. He’s loyal, gentle, and always knows when I need a cuddle. Adopting him was the best decision I’ve ever made.",
      date: "January 10, 2025",
      imageUrl: "/stories/buddy.jpg",
    },
    {
      name: "Lisa Wong",
      pet: "Milo (Bunny)",
      story:
        "Milo is so full of energy and charm. Watching him hop around has brought so much joy to our kids and made our home feel more complete.",
      date: "March 4, 2025",
      imageUrl: "/stories/milo.jpg",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        {/* Icon and Label */}
        <div className="flex justify-center items-center mb-4">
          <div className="bg-blue-500 rounded-full p-2 mr-2">
            <PawPrint className="text-white w-5 h-5" />
          </div>
          <p className="uppercase text-orange-500 text-sm tracking-wide">- Success Stories -</p>
        </div>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Loyal Hearts, Forever Homes<span className="text-blue-500">.</span>
        </h2>

        {/* Description */}
        <p className="text-gray-700 max-w-2xl mx-auto">
          Read the heartwarming stories of those who gave a second chance to animals in need.
        </p>

        <Swiper
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1.2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {stories.map((s, i) => (
            <SwiperSlide key={i}>
              <StoryCard {...s} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}