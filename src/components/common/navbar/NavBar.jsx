import { useEffect, useState } from "react";
import logo from "../../../assets/logo.jpg";
import { Link } from "react-scroll";

const navItems = [
  { id: 1, name: "Home", url: "introduction" },
  { id: 2, name: "About", url: "profile" },
  { id: 3, name: "Process", url: "work-process" },
  { id: 4, name: "Portfolio", url: "portfolio" },
  { id: 5, name: "Blog", url: "blog" },
  { id: 6, name: "Services", url: "services" },
];

const NavBar = () => {
  const [position, setPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => setPosition(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menu = navItems.map((item) => (
    <li key={item.id} onMouseDown={(e) => e.preventDefault()}>
      <Link
        to={item.url}
        smooth={true}
        duration={800}
        spy={true}
        offset={-120}
        activeClass="text-white bg-gradient-to-r from-picto-primary to-blue-500 rounded-lg shadow-md"
        className="px-5 py-2 mx-1 cursor-pointer transition-all duration-300 rounded-md hover:text-picto-primary hover:bg-gray-100"
      >
        {item.name}
      </Link>
    </li>
  ));

  return (
    <div
      className={`sticky top-0 ${
        position > 50
          ? "bg-white/90 backdrop-blur-md border-b border-gray-200 shadow-md"
          : "bg-white"
      } z-50 transition-all duration-500`}
    >
      <div className="navbar flex justify-between items-center mx-auto content px-4 lg:px-10">
        {/* Logo & Brand */}
        <Link
          to="introduction"
          smooth={true}
          duration={800}
          className="flex items-center gap-3 cursor-pointer"
        >
          <img
            src={logo}
            alt="Shahid Iqbal"
            className="h-12 w-12 rounded-full border-2 border-picto-primary shadow-md hover:scale-105 hover:border-blue-500 transition-all duration-300 object-cover"
          />
          <p className="text-2xl sm:text-[28px] font-bold tracking-wide text-gray-800 hover:text-picto-primary transition-colors duration-300">
            Shahid Iqbal
          </p>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center">
          <ul className="flex items-center space-x-2 text-[15px] font-medium">
            {menu}
          </ul>
          <Link
            to="contact"
            smooth={true}
            duration={800}
            className="ml-4 px-5 py-2 rounded-md text-white bg-gradient-to-r from-picto-primary to-blue-500 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300 cursor-pointer"
          >
            Contact
          </Link>
        </div>

        {/* Mobile Dropdown */}
        <div className="dropdown lg:hidden">
          <div tabIndex={0} role="button" className="btn btn-ghost">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-7 w-7 text-gray-700"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-lg dropdown-content rounded-lg z-10 mt-3 w-56 p-3 shadow-lg font-medium bg-white text-gray-700 space-y-1"
          >
            {menu}
            <li>
              <Link
                to="contact"
                smooth={true}
                duration={800}
                className="w-full text-center px-5 py-2 rounded-md text-white bg-gradient-to-r from-picto-primary to-blue-500 shadow hover:scale-105 transition-all duration-300"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
