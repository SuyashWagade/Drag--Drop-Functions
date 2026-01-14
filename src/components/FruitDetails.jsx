const FruitDetails = ({ fruit }) => {
  if (!fruit) {
    return (
      <div className="text-gray-400">
        Drag a fruit to see details
      </div>
    );
  }

  return (
    <div className="bg-white text-black rounded-2xl shadow-xl p-6 w-72">
      <h3 className="text-xl font-bold mb-4">Fruit Details</h3>
      <p className="mb-2">
        <span className="font-semibold">Name:</span> {fruit.name}
      </p>
      <p className="mb-2">
        <span className="font-semibold">Class:</span> {fruit.className}
      </p>
      <p>
        <span className="font-semibold">Color:</span> {fruit.color}
      </p>
    </div>
  );
};

export default FruitDetails;
