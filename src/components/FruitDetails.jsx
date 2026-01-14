export default function FruitDetails({ fruit }) {
  if (!fruit) return null;

  return (
    <div className="w-full max-w-xl bg-gray-800 border border-gray-700 rounded-2xl p-6 shadow-2xl flex flex-col md:flex-row gap-6">
      
      {/* Text Info */}
      <div className="flex-1 space-y-2 text-sm md:text-base">
        <p><span className="font-semibold text-gray-300">Name:</span> {fruit.name}</p>
        <p><span className="font-semibold text-gray-300">Class:</span> {fruit.class}</p>
        <p><span className="font-semibold text-gray-300">Colour:</span> {fruit.colour}</p>
        <p><span className="font-semibold text-gray-300">Speciality:</span> {fruit.speciality}</p>
      </div>

      {/* Image Box */}
      <div className="flex items-center justify-center bg-gray-900 rounded-xl p-6 min-w-[200px] min-h-[200px]">
        <img
          src={fruit.image}
          alt={fruit.name}
          className="w-32 h-32 object-contain drop-shadow-xl"
        />
      </div>
    </div>
  );
}

