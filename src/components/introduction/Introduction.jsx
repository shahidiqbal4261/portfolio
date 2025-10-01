import person from "../../assets/images/person.png";
import "./introduction.css"; // Ensure this path is correct
import InformationSummary from "./InformationSummary"; // Ensure this component exists

const informationSummaryData = [
  {
    id: 1,
    title: "Years Experience",
    description: "2+ ",
  },
  {
    id: 2,
    title: "Projects Completed",
    description: "10+",
  },
  {
    id: 3,
    title: "Happy Clients",
    description: "5+",
  },
];

const Introduction = () => {
  return (
    // Main container setup for layout, spacing, and reversing order on large screens
    <div
      className="flex max-lg:flex-col lg:flex-row-reverse justify-between items-center py-20 lg:py-32 px-4 sm:px-8 xl:px-16 gap-12"
      id="introduction"
    >
      {/* Right Column (Image Container) - W-7/12 for large screens, includes animation classes */}
      <div
        className={`w-full lg:w-7/12 max-w-lg mx-auto aspect-[5/6] relative p-4 rounded-3xl overflow-hidden
          bg-gradient-to-br from-purple-100/70 via-white to-green-100/70 
          opacity-0 translate-y-10 lg:translate-y-0 lg:translate-x-10 animate-fade-in-up-lg`} 
      >
        <img
          className={`w-full h-full object-cover rounded-2xl shadow-2xl 
            transition duration-500 ease-in-out hover:scale-[1.03] hover:shadow-2xl-highlight`} 
          src={person}
          alt="Shahid Iqbal"
        />
      </div>

      {/* Left Column (Text and Stats) - W-5/12 for large screens */}
      <div className="w-full lg:w-5/12 flex flex-col justify-center max-lg:text-center">
        <div className="max-w-md mx-auto lg:mx-0">
          
          {/* Text line 1 - Animated with delay */}
          <p className="text-lg sm:text-xl font-medium text-gray-700 mb-1 
            opacity-0 translate-y-4 animate-fade-in-down delay-100"> 
            Hello, I’m
          </p>
          
          {/* Name (H1) - Smaller size, animated, and hover effect */}
          <h1 className="text-4xl xs:text-5xl md:text-6xl font-extrabold leading-tight mb-4 
            transition duration-300 ease-out hover:tracking-wide text-highlight
            opacity-0 translate-y-4 animate-fade-in-down delay-200">
            Shahid Iqbal
          </h1>

          {/* Description Paragraph - Smaller text size and updated badges, animated */}
          <p className="text-md sm:text-lg text-gray-700 mb-6 max-w-lg mx-auto lg:mx-0 
            opacity-0 translate-y-4 animate-fade-in-down delay-300">
            I’m a 
            {/* Badge 1: Black text on highlight background */}
            <span className="px-2 py-0.5 rounded-md bg-highlight font-semibold text-black 
                transition duration-300 ease-in-out hover:shadow-md">
                Full-Stack Web Developer
            </span>
            specializing in 
            {/* Badge 2 */}
            <span className="px-2 py-0.5 rounded-md bg-highlight font-semibold text-black 
                transition duration-300 ease-in-out hover:shadow-md">
                React.js
            </span>
            and
            {/* Badge 3 */}
            <span className="px-2 py-0.5 rounded-md bg-highlight font-semibold text-black 
                transition duration-300 ease-in-out hover:shadow-md">
                Laravel
            </span>
            . I build responsive,
            scalable, and user-friendly web applications with modern UI
            frameworks and REST API integrations.
          </p>
          
          {/* Call to Action (Button) - Animated and strong hover effect */}
          <div className="lg:text-start max-lg:text-center mb-10 
            opacity-0 animate-fade-in delay-500">
            <a
              className="btn-primary btn btn-md text-white shadow-lg shadow-highlight/50 transition duration-300 ease-in-out hover:scale-[1.05] hover:shadow-xl hover:shadow-highlight/70"
              href="mailto:mharwarer426@gmail.com?subject=Hello Shahid&body=Hi, I want to discuss a project with you."
            >
              Say Hello!
            </a>
          </div>
        </div>

        {/* Information Summary / Stats Section - Animated */}
        <div className="max-w-md mx-auto lg:mx-0 mt-8 
            opacity-0 translate-y-4 animate-fade-in-down delay-600">
          <div className="flex justify-center lg:justify-start gap-6 sm:gap-12">
            {informationSummaryData.map((item) => (
              <InformationSummary key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;