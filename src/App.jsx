import { useState } from "react";
import { fruits } from "./data/fruits";
import FruitButton from "./components/FruitButton";
import DropBox from "./components/DropBox";
import FruitDetails from "./components/FruitDetails";

function App() {
  const [selectedFruit, setSelectedFruit] = useState(null);

  const handleDrop = (e) => {
    const fruit = JSON.parse(e.dataTransfer.getData("fruit"));
    setSelectedFruit(fruit);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white p-8">

      {/* Top Buttons */}
      <div className="flex flex-wrap gap-4 mb-12">
        {fruits.map((fruit) => (
          <FruitButton key={fruit.id} fruit={fruit} />
        ))}
      </div>

      {/* Main Section */}
      <div className="flex gap-16">
        <DropBox fruit={selectedFruit} onDrop={handleDrop} />
        <FruitDetails fruit={selectedFruit} />
      </div>

    </div>
  );
}

export default App;
