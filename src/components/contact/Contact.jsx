import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import Address from "./Address";
import Form from "./Form";
import SocialMedia from "../common/socialMedia/SocialMedia";

const addressData = [
  {
    icon: faLocationDot,
    title: "Address",
    description: "Lahore, Pakistan",
    link: "https://www.google.com/maps?q=Lahore,+Pakistan",
  },
  {
    icon: faEnvelope,
    title: "My Email",
    description: "mharwarer426@gmail.com",
    link: "mailto:mharwarer426@gmail.com",
  },
  {
    icon: faPhone,
    title: "Call Me Now",
    description: "+92 3055668426",
    link: "tel:+92 3055668426",
  },
];

const Contact = () => {
  return (
    // Outer container: Adjust bottom positioning and padding
    <div className="relative z-10 -mt-16 sm:-mt-20 px-4 md:px-8 xl:px-16" id="contact-section">
      <div
        className="content p-6 sm:p-10 lg:p-16 xl:p-20 bg-white rounded-3xl shadow-xl shadow-gray-300/50" // Updated shadow for a softer look
        id="contact"
      >
        <div className="flex flex-col-reverse lg:flex-row justify-between gap-12 lg:gap-24">
          
          {/* Left Section - Info (The contact details part) */}
          <div className="flex-1 lg:max-w-md">
            <div>
              {/* Desktop Heading (Always visible on large screens) */}
              <h2 className="text-4xl xl:text-5xl font-extrabold text-[#132238] hidden lg:block mb-4">
                Let’s discuss your <span className="text-highlight">Project</span>
              </h2>
              
              <p className="text-md sm:text-lg max-lg:text-center font-normal text-gray-600 leading-relaxed mb-10">
                I'm available for freelance work. Drop me a line if you have a
                project you think I'd be a good fit for.
              </p>
            </div>

            {/* Address cards */}
            <div className="my-8 grid sm:grid-cols-2 lg:grid-cols-1 gap-6">
              {addressData.map((item, index) => (
                <Address item={item} key={index} />
              ))}
            </div>

            {/* Social Media */}
            <div className="w-full max-lg:text-center mt-8">
              {/* Optional: Add a small label above social media icons */}
              <p className="text-lg font-semibold text-gray-700 max-lg:hidden mb-3">Connect with me:</p>
              <SocialMedia />
            </div>
          </div>

          {/* Right Section - Form (The form submission part) */}
          <div className="flex-1 w-full lg:py-4">
            {/* Mobile/Tablet Heading (Hidden on large screens) */}
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#132238] lg:hidden text-center mb-8">
              Let’s discuss your <span className="text-highlight">Project</span>
            </h2>
            <Form />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;