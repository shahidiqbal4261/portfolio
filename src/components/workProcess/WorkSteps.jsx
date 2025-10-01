import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WorkSteps = ({ data, style }) => {
  const [hover, setHover] = useState(false);

  return (
    <div
      className={`rounded-xl bg-gradient-to-br from-gray-50 to-white border border-gray-200 
                  shadow-sm hover:shadow-xl transform transition-all duration-700 p-6 sm:p-8 
                  cursor-pointer ${style}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {/* Icon */}
      <div
        className={`w-14 h-14 sm:w-16 sm:h-16 flex items-center justify-center rounded-full 
                   transition-all duration-700 ease-out
                   ${
                     hover
                       ? "bg-gradient-to-tr from-blue-600 to-teal-500 text-white rotate-12 scale-110"
                       : "bg-gray-100 text-blue-600"
                   }`}
      >
        <FontAwesomeIcon
          icon={data?.icon}
          className={`text-xl sm:text-2xl transition-transform duration-700 ${
            hover ? "scale-125" : "scale-100"
          }`}
        />
      </div>

      {/* Title */}
      <p
        className={`mt-6 font-semibold text-lg sm:text-xl transition-all duration-700 ${
          hover ? "text-blue-700" : "text-gray-800"
        }`}
      >
        {`${data?.id}. ${data?.title}`}
      </p>

      {/* Description */}
      <p
        className={`mt-3 text-sm sm:text-base leading-relaxed transition-all duration-700 ${
          hover ? "text-gray-700 translate-x-2" : "text-gray-600 translate-x-0"
        }`}
      >
        {data?.description}
      </p>
    </div>
  );
};

export default WorkSteps;
