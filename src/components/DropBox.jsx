const DropBox = ({ fruit, onDrop }) => {
  return (
    <div
      onDragOver={(e) => e.preventDefault()}
      onDrop={onDrop}
      className={`
        w-80 h-96
        rounded-2xl
        border-2 border-dashed border-gray-400
        flex items-center justify-center
        text-gray-700 font-medium
        transition-colors duration-300
        ${fruit ? fruit.bg : "bg-gray-200"}
      `}
    >
      {!fruit && "Drop fruit here"}
    </div>
  );
};

export default DropBox;
