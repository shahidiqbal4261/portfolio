import WorkSteps from "./WorkSteps";
import { faProjectDiagram, faCode, faBug, faRocket } from "@fortawesome/free-solid-svg-icons";

const workStepData = [
  {
    id: 1,
    title: "Planning",
    description:
      "Understand client requirements, define features, and design a scalable project structure.",
    icon: faProjectDiagram,
  },
  {
    id: 2,
    title: "Development",
    description:
      "Build responsive and user-friendly applications using React.js, Laravel, APIs, and modern UI frameworks.",
    icon: faCode,
  },
  {
    id: 3,
    title: "Testing",
    description:
      "Debug, optimize, and ensure seamless performance across devices and browsers.",
    icon: faBug,
  },
  {
    id: 4,
    title: "Deployment",
    description:
      "Deploy applications on servers or cloud platforms, ensuring scalability and security.",
    icon: faRocket,
  },
];

const WorkProcess = () => {
  return (
    <section
      id="work-process"
      className="relative py-20 px-6 md:px-12 lg:px-20 
                 bg-gradient-to-br from-blue-50 via-indigo-100 to-purple-200"
    >
      {/* Decorative Overlay */}
      <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-10 pointer-events-none"></div>

      <div className="relative max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Text Section */}
        <div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-snug">
            My <span className="text-blue-700">Work Process</span>
          </h2>

          <p className="mt-6 text-gray-700 text-base md:text-lg leading-relaxed">
            From planning to deployment, I follow a structured workflow that ensures 
            every project is delivered with quality and precision.
          </p>

          <p className="mt-4 text-gray-700 text-base md:text-lg leading-relaxed">
            My process blends clean design, modern development practices, and rigorous 
            testing to build applications that are both robust and user-friendly.
          </p>
        </div>

        {/* Right Work Steps Grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {workStepData.map((data, index) => (
            <WorkSteps
              key={index}
              data={data}
              style="bg-white/80 backdrop-blur-md rounded-2xl shadow-lg hover:shadow-2xl"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkProcess;
