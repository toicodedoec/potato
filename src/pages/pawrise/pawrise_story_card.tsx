type StoryCardProps = {
  name: string;
  pet: string;
  story: string;
  date: string;
  imageUrl: string;
};

export default function StoryCard({ name, pet, story, date, imageUrl }: StoryCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 flex flex-col h-full">
      {/* Image */}
      <div className="overflow-hidden rounded-md aspect-square mb-4">
        <img
          src={imageUrl}
          alt={pet}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Name */}
      <h3 className="text-lg font-semibold text-gray-800">{name}</h3>

      {/* Pet Info */}
      <p className="text-sm text-gray-500 mb-3">
        <span className="font-medium">Pet Adopted:</span> {pet}
      </p>

      {/* Story */}
      <blockquote className="text-gray-700 italic text-sm mb-4">
        “{story}”
      </blockquote>

      {/* Date */}
      <p className="text-xs text-gray-400 mt-auto font-semibold">{date}</p>
    </div>
  );
}