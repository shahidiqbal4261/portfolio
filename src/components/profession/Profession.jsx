import Roles from "./Roles";

const rolesData = [
  {
    id: 1,
    title: "Frontend Development (React.js)",
    description:
      "I build responsive, modern, and user-friendly interfaces with React.js, ensuring smooth performance and great user experience across all devices.",
  },
  {
    id: 2,
    title: "Backend Development (Laravel)",
    description:
      "I develop secure and scalable backend systems using Laravel, implementing REST APIs and database management for seamless integration.",
  },
  {
    id: 3,
    title: "UI Frameworks & Styling",
    description:
      "I use Bootstrap and TailwindCSS to craft clean, responsive, and visually appealing layouts that adapt beautifully across devices.",
  },
  {
    id: 4,
    title: "Database Management",
    description:
      "I manage relational databases like MySQL, ensuring optimized queries, smooth performance, and scalability for large applications.",
  },
];

const Profession = () => {
  return (
    // ✅ Full width background
    <section
      className="bg-slate-800 py-2 md:py-20"
      id="services"
    >
      {/* ✅ Content container (centered + max-width) */}
      <div className="mx-auto max-w-7xl  grid md:grid-cols-2 gap-12">
        
        {/* Left Section */}
        <div className="flex flex-col justify-center max-md:text-center md:pr-10">
          <p className="text-sm font-semibold uppercase tracking-widest text-amber-400 mb-2">
            What I Do?
          </p>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6 leading-tight">
            My Expertise and Focus
          </h2>

          <div className="text-lg text-gray-300 space-y-4">
            <p>
              I specialize in creating responsive web applications with{" "}
              <strong className="text-amber-300">React.js</strong> and{" "}
              <strong className="text-amber-300">Laravel</strong>, focusing on
              robust functionality and modern, clean design.
            </p>
            <p>
              My skills span{" "}
              <strong className="text-amber-300">TailwindCSS</strong>, UI/UX
              design principles, and scalable{" "}
              <strong className="text-amber-300">database management</strong>,
              delivering end-to-end user-friendly solutions.
            </p>
          </div>

          <a
            href="#contact"
            className="mt-10 bg-amber-500 hover:bg-amber-400 transition duration-300 text-slate-900 font-bold py-3 px-8 rounded-full shadow-lg w-fit max-md:mx-auto"
          >
            Say Hello!
          </a>
        </div>

        {/* Right Section */}
        <div className="bg-slate-7000 p-6 md:p-8 rounded-xl space-y-6">
          {rolesData.map((role) => (
            <Roles role={role} key={role.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Profession;
