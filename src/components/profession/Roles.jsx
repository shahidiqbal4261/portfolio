import { useState } from "react";

const Roles = ({ role }) => {
  const [mouseHover, setMouseHover] = useState(false);

  return (
    <div
      onMouseEnter={() => setMouseHover(true)}
      onMouseLeave={() => setMouseHover(false)}
      // KEY CHANGES: 
      // 1. bg-slate-700 for a dark, slightly lighter card background than the main section.
      // 2. hover:shadow-xl hover:shadow-amber-500/30 for a professional, highlighted shadow.
      // 3. border border-slate-600 for definition.
      className="p-4 xs:p-8 bg-slate-700 border border-slate-600 hover:shadow-xl hover:shadow-amber-500/30 ease-out duration-500 rounded-xl my-6 flex relative overflow-hidden"
    >
      {/* Left Hover Accent Bar */}
      <span
        // KEY CHANGE: Used bg-amber-400 for the bright accent color.
        className={`bg-amber-400 absolute left-0 top-0 h-full transition-all duration-300 ${
          mouseHover ? "w-1" : "w-0" // Increased width slightly to 'w-1' (4px)
        }`}
      />

      <div>
        {/* Title: White text for high contrast */}
        <p className="text-xl sm:text-2xl font-bold text-white pb-3">
          {role?.title}
        </p>
        {/* Description: Lighter gray text for readability on dark background */}
        <p className="text-[13px] sm:text-[16px] font-normal text-gray-300">
          {role?.description}
        </p>
      </div>
    </div>
  );
};

export default Roles;