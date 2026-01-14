import { fruitColors } from "../data/fruits.js";

export default function DropZone({
  droppedFruits,
  setDroppedFruits,
  setSelectedFruit,
}) {
  const handleDrop = (e) => {
    e.preventDefault();
    const fruit = JSON.parse(e.dataTransfer.getData("fruit"));

    if (!droppedFruits.find((f) => f.id === fruit.id)) {
      setDroppedFruits([...droppedFruits, fruit]);
    }
  };

  return (
    <div
      onDragOver={(e) => e.preventDefault()}
      onDrop={handleDrop}
      className="w-full sm:w-64 min-h-[320px] bg-gray-800 border border-gray-700 rounded-2xl p-4 shadow-xl"
    >
      <p className="text-sm text-gray-400 mb-3">Drag fruits here</p>

      {droppedFruits.map((fruit) => (
        <button
          key={fruit.id}
          onClick={() => setSelectedFruit(fruit)}
          className={`w-full py-2 mb-2 rounded-lg font-semibold shadow-md transition-all ${fruitColors[fruit.name]}`}
        >
          {fruit.name}
        </button>
      ))}
    </div>
  );
}

