import { useState, useEffect } from "react";
import {
  FiMenu,
  FiCheck,
  FiUsers,
  FiPlayCircle,
  FiCircle,
  FiUploadCloud,
} from "react-icons/fi";
import Logo from "./Logo";

const Header = ({ toggleSidebar }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-30 transition-all duration-300 bg-[#FEFCFA]  overflow-auto border-b-2 ${
        scrolled ? " shadow-md bg-[#FEFCFA]" : "bg-[#FEFCFA]"
      }`}
    >
      <div className="  px-4 sm:px-6 lg:px-8">
        <div className="flex h-16  items-center justify-between">
        <div className="flex items-center whitespace-nowrap">
  <button
    onClick={toggleSidebar}
    className="mr-2 md:hidden p-2 rounded-md text-gray-500 hover:text-gray-700 hover:bg-gray-100"
  >
    <FiMenu className="h-6 w-6" />
  </button>
  <Logo />
</div>


          <div className="hidden md:flex items-center space-x-1">
            <ProgressBar />
          </div>

          <div className="flex items-center space-x-2 md:space-x-4">
            <a
              href="#"
              className="hidden md:flex items-center gap-1 text-gray-600 hover:text-gray-900"
            >
              <svg viewBox="64 64 896 896" focusable="false" data-icon="file-text" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M854.6 288.6L639.4 73.4c-6-6-14.1-9.4-22.6-9.4H192c-17.7 0-32 14.3-32 32v832c0 17.7 14.3 32 32 32h640c17.7 0 32-14.3 32-32V311.3c0-8.5-3.4-16.7-9.4-22.7zM790.2 326H602V137.8L790.2 326zm1.8 562H232V136h302v216a42 42 0 0042 42h216v494zM504 618H320c-4.4 0-8 3.6-8 8v48c0 4.4 3.6 8 8 8h184c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8zM312 490v48c0 4.4 3.6 8 8 8h384c4.4 0 8-3.6 8-8v-48c0-4.4-3.6-8-8-8H320c-4.4 0-8 3.6-8 8z"></path></svg>
              <span className="text-sm font-medium">Whitepaper</span>
            </a>
            <a
              href="#"
              className="hidden md:flex items-center gap-1 text-gray-600 hover:text-gray-900"
            >
              <svg viewBox="64 64 896 896" focusable="false" data-icon="github" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z"></path></svg>
              <span className="text-sm font-medium">11.7k</span>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

const ProgressBar = () => {
  const steps = [
    { id: "identity", label: "Identity", icon: "🌱", status: "completed" },
    { id: "memory", label: "Memory Upload", icon: "📝", status: "completed" },
    { id: "training", label: "Training", icon: "⚡", status: "current" },
    { id: "trained", label: "Trained", icon: <FiCheck />, status: "upcomming" },
  ];

  return (
    <div className="flex items-center justify-center space-x-1 overflow-hidden ">
      {steps.map((step, index) => (
        <div key={step.id} className="progress-bar-segment">
          {index > 0 && (
            <div
              className={`progress-bar-line ${
                step.status === "upcoming" ? "" : "active"
              }`}
            />
          )}

          <div className="flex  justify-center items-center mx-1 ">
            <div
              className={`mx-1 ${
                step.status === "current"
                  ? "active"
                  : step.status === "completed"
                  ? "completed"
                  : ""
              }`}
            >
              {step.icon}
            </div>
            <span
              className={`text-xs font-medium mt-1 whitespace-nowrap ${
                step.status === "completed"
                  ? "text-green-500"
                  : step.status === "current"
                  ? "text-blue-500"
                  : "text-gray-500"
              }`}
            >
              {step.label}
            </span>
          </div>
        </div>
      ))}
      <a
        href="#"
        className="text-sm  pl-4 flex items-center justify-center  space-x-2 px-3 py-1.5 rounded-full  text-gray-700 hover:bg-gray-200 transition-colors"
      >
        <FiCircle className=" h-2 w-2 border-none " fill="#EA5154" stroke="none" />
        <FiPlayCircle className=" h-4 w-4" />
        <span className="text-sm  mt-1 whitespace-nowrap">Start Service</span>
      </a>
      <a
        href="#"
        className="text-sm flex items-center justify-center space-x-2 px-3 py-1.5 rounded-full  text-gray-700 hover:bg-gray-200 transition-colors"
      >
         <FiCircle className=" h-2 w-2 border-none " fill="#EA5154" stroke="none" />
         <FiUploadCloud className=" h-4 w-4" />
        <span className="text-sm  mt-1 whitespace-nowrap">Join AI Network</span>
       
      </a>
    </div>
  );
};

export default Header;
