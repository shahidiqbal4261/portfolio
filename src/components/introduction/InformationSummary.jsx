const InformationSummary = ({ item }) => {
  return (
    // Outer container: Added hover effects, cleaner background, and better padding
    <div
      className={`
        bg-white/50 border border-gray-100 backdrop-blur-sm shadow-lg shadow-gray-200/50 
        rounded-xl text-center transition-all duration-300 ease-in-out 
        hover:shadow-xl hover:scale-[1.03] hover:border-highlight/50
        w-full
      `}
    >
      <div className="p-3 sm:p-4">
        {/* Description (The main number/stat) */}
        <p
          className={`
            text-2xl xxs:text-3xl sm:text-4xl font-extrabold text-highlight
            transition-all duration-300
          `}
        >
          {item.description}
        </p>
        
        {/* Title (The label below the stat) */}
        <p
          className={`
            text-xs xxs:text-sm sm:text-base font-medium 
            mt-1 text-gray-500
          `}
        >
          {item.title}
        </p>
      </div>
    </div>
  );
};

export default InformationSummary;