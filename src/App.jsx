import { useState } from "react";
import HeaderFruits from "./components/HeaderFruits";
import DropZone from "./components/DropZone";
import FruitDetails from "./components/FruitDetails";

export default function App() {
  const [droppedFruits, setDroppedFruits] = useState([]);
  const [selectedFruit, setSelectedFruit] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white p-6 space-y-6">
      
      <HeaderFruits />

      <div className="flex flex-col lg:flex-row gap-6 justify-center items-start">
        <DropZone
          droppedFruits={droppedFruits}
          setDroppedFruits={setDroppedFruits}
          setSelectedFruit={setSelectedFruit}
        />

        <FruitDetails fruit={selectedFruit} />
      </div>
    </div>
  );
}

