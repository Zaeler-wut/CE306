import React from "react";

interface NavbarProps {
  isOpen: boolean;
  toggleMenu: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ isOpen, toggleMenu }) => {
  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="text-blue-600 text-xl font-bold">MySite</div>

          <div className="hidden md:flex space-x-8 text-gray-700">
            <a href="#" className="hover:text-blue-600">Home</a>
            <a href="#" className="hover:text-blue-600">About</a>
            <a href="#" className="hover:text-blue-600">Services</a>
            <a href="#" className="hover:text-blue-600">Contact</a>
          </div>

          <div className="md:hidden">
            <button onClick={toggleMenu} className="focus:outline-none" type="button" aria-label="Toggle menu">
              {isOpen ? (
                <span className="text-2xl font-bold">✕</span>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white px-4 pt-2 pb-4 space-y-2 shadow-md">
          <a href="#" className="block text-gray-700 hover:text-blue-600">Home</a>
          <a href="#" className="block text-gray-700 hover:text-blue-600">About</a>
          <a href="#" className="block text-gray-700 hover:text-blue-600">Services</a>
          <a href="#" className="block text-gray-700 hover:text-blue-600">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
