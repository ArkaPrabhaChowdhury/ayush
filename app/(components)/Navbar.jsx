import { BiUserCircle,BiHealth } from "react-icons/bi";

function Navbar() {
  return (
    <header className="text-white body-font bg-gray-800">
      <div className="container flex flex-wrap p-3 flex-col md:flex-row md:justify-between">
        <div className="flex items-center ml-2">
          <BiHealth className="w-8 h-8" color="#5dd0ab"/>

          <span className="ml-2 text-2xl font-semibold text-white">Ayush</span>
        </div>

        <div>
          <button className="border-0 py-2 px-4 focus:outline-none rounded text-lg">
            <BiUserCircle className="w-6 h-6" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
