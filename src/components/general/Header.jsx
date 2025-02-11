import React, { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gray-900 text-white shadow-lg fixed w-full z-50">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo y Nombre del Sitio */}
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-pink-500">Lataku</span>
          </div>

          {/* Menú Principal - Desktop */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="#" className="hover:text-pink-500 transition-colors duration-200">
              Sin Censura
            </a>
            <a href="#" className="hover:text-pink-500 transition-colors duration-200">
              Harem
            </a>
            <a href="#" className="hover:text-pink-500 transition-colors duration-200">
              Tetonas
            </a>
            <a href="#" className="hover:text-pink-500 transition-colors duration-200">
              Fury
            </a>
            <a href="#" className="hover:text-pink-500 transition-colors duration-200">
              Top 10
            </a>
            <a href="#" className="hover:text-pink-500 transition-colors duration-200">
              Al Porn
            </a>
          </div>

          {/* Botones de Login y Sign-up - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-600 transition-colors duration-200">
              Login
            </a>
            <a href="#" className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-600 transition-colors duration-200">
              Sign-up
            </a>
          </div>

          {/* Menú Móvil - Botón */}
          <button
            className="md:hidden p-2 hover:bg-gray-800 rounded-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Menú"
          >
            <div className="w-6 h-6 relative">
              <span
                className={`block absolute h-0.5 w-full bg-white transition-all duration-300 ${
                  isMenuOpen ? "rotate-45 top-1/2" : "top-1/4"
                }`}
              ></span>
              <span
                className={`block absolute h-0.5 w-full bg-white transition-all duration-300 top-1/2 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              ></span>
              <span
                className={`block absolute h-0.5 w-full bg-white transition-all duration-300 ${
                  isMenuOpen ? "-rotate-45 top-1/2" : "bottom-1/4"
                }`}
              ></span>
            </div>
          </button>
        </div>

        {/* Menú Móvil - Contenido */}
        <div className={`md:hidden ${isMenuOpen ? "block" : "hidden"} transition-all duration-300`}>
          <div className="px-2 pt-4 pb-3 space-y-2">
            <a href="#" className="block px-3 py-2 rounded-md hover:bg-gray-800 transition-colors duration-200">
              Sin Censura
            </a>
            <a href="#" className="block px-3 py-2 rounded-md hover:bg-gray-800 transition-colors duration-200">
              Harem
            </a>
            <a href="#" className="block px-3 py-2 rounded-md hover:bg-gray-800 transition-colors duration-200">
              Tetonas
            </a>
            <a href="#" className="block px-3 py-2 rounded-md hover:bg-gray-800 transition-colors duration-200">
              Fury
            </a>
            <a href="#" className="block px-3 py-2 rounded-md hover:bg-gray-800 transition-colors duration-200">
              Top 10
            </a>
            <a href="#" className="block px-3 py-2 rounded-md hover:bg-gray-800 transition-colors duration-200">
              Al Porn
            </a>
            <div className="flex flex-col space-y-2">
              <a
                href="#"
                className="bg-pink-500 text-white px-4 py-2 rounded text-center hover:bg-pink-600 transition-colors duration-200"
              >
                Login
              </a>
              <a
                href="#"
                className="bg-purple-500 text-white px-4 py-2 rounded text-center hover:bg-purple-600 transition-colors duration-200"
              >
                Sign-up
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;