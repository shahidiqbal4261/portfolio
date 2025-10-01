import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Projects = ({ data }) => {
  return (
    // 1. Changed to <a> tag for accessibility (the entire card is clickable)
    // 2. Dark background, rounded corners.
    // 3. Added smooth transition, scale, and shadow effects for animation.
    <a 
      href={data?.link}
      target="_blank"
      rel="noopener noreferrer"
      className="block max-w-106 rounded-lg 
                 bg-gray-800 border border-gray-700 
                 transition-all duration-500 ease-in-out 
                 hover:shadow-2xl hover:shadow-teal-500/20 
                 transform hover:scale-[1.03] overflow-hidden" // Slight lift on hover
    >
      {/* Project Image */}
      {/* We add a subtle filter effect to the image on hover */}
      <img 
        src={data?.image} 
        alt={`${data?.title} image`} 
        className="w-full rounded-t-lg transition-all duration-500 hover:opacity-85" 
      />

      <div className="p-4 xs:p-8">
        {/* Category: Changed to a bright accent color */}
        <p className="text-teal-400 text-xs font-medium uppercase tracking-wider">
          {data?.category}
        </p>

        {/* Title: Changed to white for dark mode */}
        <p className="text-white text-md xxs:text-xl font-bold pt-1 mb-3">
          {data?.title}
        </p>

        {/* Description: Changed to a lighter gray */}
        <p
          className="text-gray-400 text-xs xxs:text-[14px] text-wrap"
        >
          {data?.description}
        </p>

        {/* Button: Simplified and restyled for dark mode */}
        <div className="mt-6">
          <span
            className="inline-flex items-center text-teal-400 font-semibold text-sm 
                       group transition-colors duration-300"
          >
            {/* The text changes based on the link (e.g., if it's "COMING SOON") */}
            {data?.link === '#!' ? 'View Details' : 'View Code / Case Study'}
            
            {/* Arrow icon with hover movement */}
            <span className="ms-2 transition-transform duration-300 group-hover:translate-x-1">
              <FontAwesomeIcon icon={faArrowRight} size="sm" />
            </span>
          </span>
        </div>
      </div>
    </a>
  );
};

export default Projects;