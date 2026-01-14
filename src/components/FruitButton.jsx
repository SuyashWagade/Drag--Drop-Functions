const FruitButton = ({ fruit }) => {
  const handleDragStart = (e) => {
    e.dataTransfer.setData("fruit", JSON.stringify(fruit));
  };

  return (
    <div
      draggable
      onDragStart={handleDragStart}
      className={`
        ${fruit.bg}
        text-black font-semibold
        w-28 h-16
        rounded-xl
        flex items-center justify-center
        shadow-lg
        cursor-grab
        hover:scale-105 hover:shadow-xl
        active:cursor-grabbing
        transition-all duration-200
      `}
    >
      {fruit.name}
    </div>
  );
};

export default FruitButton;
