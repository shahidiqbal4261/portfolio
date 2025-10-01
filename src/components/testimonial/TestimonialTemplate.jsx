import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft } from '@fortawesome/free-solid-svg-icons'; // Quote Icon

const TestimonialTemplate = ({ testimonial }) => {
  return (
    // Outer container: Added vertical padding for spacing inside the Swiper slide
    <div className="flex flex-col items-center h-full text-center py-10 sm:py-12 md:py-16 px-4">
      
      {/* Quote Icon - Color is now stronger highlight */}
      <FontAwesomeIcon 
        icon={faQuoteLeft} 
        className="text-highlight text-4xl sm:text-5xl mb-6 opacity-70" // Stronger color, slightly transparent
      />

      {/* Main Quote (The detailed feedback) - Darker and more impactful text */}
      <p className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 max-w-3xl leading-snug mb-8 sm:mb-10">
        “{testimonial?.quote}”
      </p>
      
      {/* Divider */}
      <div className="w-16 h-1 bg-gray-300 mb-8 rounded-full"></div>

      {/* Client Info */}
      <div className="flex flex-col items-center">
        
        {/* Optional Avatar - Styled for prominence */}
        {testimonial?.avatar && (
          <img
            src={testimonial.avatar}
            alt={testimonial?.name}
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover mb-4 border-4 border-highlight/30 shadow-md" // Border added with highlight color
          />
        )}

        {/* Client Name - Given the Highlight Color for better visibility */}
        <p className="text-lg sm:text-xl font-extrabold text-highlight mt-2">
          {testimonial?.name}
        </p>
        
        {/* Designation - Light Grey, often italicized for secondary info */}
        <p className="text-sm sm:text-base text-gray-500 italic">
          {testimonial?.designation}
        </p>
        
        {/* Testimonial message (The short summary) - Added back with distinct light color */}
        <p className="text-md sm:text-lg text-gray-600 mt-6 max-w-xl italic">
            — {testimonial?.message}
        </p>
      </div>
    </div>
  );
};

export default TestimonialTemplate;