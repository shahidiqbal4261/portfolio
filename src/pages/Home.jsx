import Introduction from "../components/introduction/Introduction";
import Profile from "../components/profile/Profile";
import WorkProcess from "../components/workProcess/WorkProcess";
import Portfolio from "../components/portfolio/Portfolio";
import WorkTogether from "../components/workTogether/WorkTogether";
import Blog from "../components/blog/Blog";
import Profession from "../components/profession/Profession";
import HappyClients from "../components/happyClients/HappyClients";
import Testimonial from "../components/testimonial/Testimonial";
import Contact from "../components/contact/Contact";
import "../../index.css";

const Home = () => {
  return (
    <div className="relative overflow-hidden">
      
      {/* 1. Hero (Intro + Profile) - Removed max-width on content */}
      <div className="introduction-profile-background bg-gradient-to-br from-blue-50 via-green-50 to-purple-100">
        {/* MODIFIED: Content now takes full width, maintaining padding */}
        <div className="content px-4 md:px-8"> 
          <Introduction />
          <Profile />
        </div>
      </div>

      {/* 2. Work Process - Removed max-width on content */}
      <div className="bg-gradient-to-br from-gray-50 via-white to-gray-100 pt-32 pb-32">
        {/* MODIFIED */}
        <div className="px-4 md:px-8">
            <WorkProcess />
        </div>
      </div>

      {/* 3. Portfolio - Removed max-width on content */}
      <div className="bg-white">
        {/* MODIFIED */}
        <div> 
            <Portfolio />
        </div>
      </div>

      {/* 4. Work Together (Call to Action) - Removed max-width on content */}
      <div className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-950 py-32 border-t border-gray-700">
        {/* MODIFIED */}
        <div className="px-4 md:px-8">
            <WorkTogether />
        </div>
      </div>

      {/* 5. Blog - Removed max-width on content */}
      <div className="blog-background bg-gradient-to-tr from-green-50 via-white to-blue-100 py-32">
        {/* MODIFIED */}
        <div className="px-4 md:px-8">
            <Blog />
        </div>
      </div>

      {/* 6. Profession - Removed max-width on content */}
      <div className="bg-gradient-to-br from-white via-purple-50 to-pink-50 py-32">
        {/* MODIFIED */}
        <div className="px-4 md:px-8">
            <Profession />
        </div>
      </div>

      {/* 7. Happy Clients - Removed max-width on content */}
      <div className="bg-white py-32 border-b border-gray-100">
        {/* MODIFIED */}
        <div className="px-4 md:px-8">
            <HappyClients />
        </div>
      </div>

      {/* 8. Testimonial - Removed max-width on content */}
      <div className="bg-gradient-to-br from-blue-50 via-green-50 to-purple-100 pt-32 pb-32">
        {/* MODIFIED */}
        <div className="px-4 md:px-8">
            <Testimonial />
        </div>
      </div>

      {/* 9. Contact - Removed max-width on content */}
      <div className="bg-gray-50 pt-20 pb-16">
        {/* MODIFIED */}
        <div className="px-4 md:px-8">
            <Contact />
        </div>
      </div>
      
    </div>
  );
};

export default Home;