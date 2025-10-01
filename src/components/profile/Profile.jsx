import person from "../../assets/images/person2.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import SocialMedia from "../common/socialMedia/SocialMedia";

const Profile = () => {
  return (
    <div
      className="relative mx-4 xxl:mx-0.5 -bottom-20 lg:-bottom-28 z-10 rounded-2xl bg-white drop-shadow-2xl shadow-white xl:p-28 lg:p-20 md:p-16 sm:p-10 p-6"
      id="profile"
    >
      <div className="flex max-md:flex-col justify-between items-center gap-10">
        
        {/* Profile image */}
        <div className="xxl:max-w-106 w-auto h-auto xxl:max-h-126 text-center">
          <div className="w-44 h-44 sm:w-56 sm:h-56 mx-auto rounded-full border-4 border-gradient-to-r from-picto-primary to-blue-400 shadow-lg overflow-hidden">
            <img
              className="w-full h-full object-cover hover:scale-110 duration-500"
              src={person}
              alt="Profile"
            />
          </div>

          {/* Social media section */}
          <div className="mt-6">
            <div className="inline-block px-6 py-3 bg-white rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <SocialMedia />
            </div>
          </div>
        </div>

        {/* Profile details */}
        <div className="max-sm:w-full w-[33rem] text-center md:text-left">
          <h2 className="text-3xl sm:text-4xl lg:text-[38px] font-bold mb-6 text-gray-800">
            I am <span className="text-picto-primary">Full-Stack Web Developer</span>
          </h2>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed">
            I specialize in building{" "}
            <span className="bg-highlight px-1 rounded">
              responsive and scalable web applications
            </span>{" "}
            using <strong>React.js</strong> and <strong>Laravel</strong>.  
            With expertise in REST APIs, modern UI frameworks, and clean coding
            practices, I deliver solutions that combine functionality with
            user-friendly design.
          </p>

          <p className="mt-4 text-base sm:text-lg text-gray-600 leading-relaxed">
            My passion is to create impactful web applications and contribute to
            dynamic development teams by solving real-world problems through
            technology.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex max-md:justify-center gap-4">
            <a
              className="px-6 py-3 rounded-lg text-white bg-picto-primary hover:bg-picto-dark transition-all duration-300 shadow-md text-sm sm:text-base"
              href="#portfolio"
            >
              🚀 My Projects
            </a>
            <a
              className="px-6 py-3 rounded-lg border border-gray-300 bg-white hover:border-picto-primary hover:text-picto-primary transition-all duration-300 shadow-md text-sm sm:text-base flex items-center gap-2"
              href={`${import.meta.env.BASE_URL}Kamran_Khan_CV.pdf`}
              download="Kamran_Khan_CV.pdf"
            >
              <FontAwesomeIcon icon={faDownload} /> Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
