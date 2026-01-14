import { fruits } from "../data/fruits";
import { fruitColors } from "../data/fruits";

export default function HeaderFruits() {
  return (
    <div className="flex flex-wrap justify-center gap-3">
      {fruits.map((fruit) => (
        <button
          key={fruit.id}
          draggable
          onDragStart={(e) =>
            e.dataTransfer.setData("fruit", JSON.stringify(fruit))
          }
          className={`px-5 py-2 rounded-full font-semibold shadow-lg transition-all ${fruitColors[fruit.name]}`}
        >
          {fruit.name}
        </button>
      ))}
    </div>
  );
}

