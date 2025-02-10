import React, { useState, useEffect } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Cerrar el menú al cambiar el tamaño de la ventana (responsive)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="bg-gray-900 text-white shadow-lg p-3 w-full z-50 static">
      <nav className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo y Nombre del Sitio */}
          <div className="flex items-center space-x-2 md:space-x-3">
            <span className="text-lg md:text-xl font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
              Lataku
            </span>
          </div>

          {/* Menú Principal - Desktop */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <a
              href="/"
              className="hover:text-purple-400 transition-colors duration-200 text-sm lg:text-base"
            >
              Inicio
            </a>
            <a
              href="/category"
              className="hover:text-purple-400 transition-colors duration-200 text-sm lg:text-base"
            >
              Categorias
            </a>
          </div>

          {/* Búsqueda - Desktop */}
          <div className="hidden md:flex items-center">
            <div className="relative">
              <input
                type="search"
                placeholder="Buscar anime..."
                className="bg-gray-800 text-white px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-purple-500 w-48 lg:w-64 text-sm"
              />
              <button className="absolute right-3 top-2.5">
                <svg
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
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
        <div
          className={`md:hidden ${isMenuOpen ? "block" : "hidden"} transition-all duration-300`}
        >
          <div className="px-2 pt-4 pb-3">
            {/* Barra de búsqueda móvil */}
            <div className="relative">
              <input
                type="search"
                placeholder="Buscar anime..."
                className="w-full bg-gray-800 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 text-sm"
              />
              <button className="absolute right-3 top-2.5">
                <svg
                  className="w-4 h-4 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>
          {/* Enlaces de navegación móvil */}
          <div className="px-2 pt-2 pb-3 space-y-1">
            <a
              href="/"
              className="block px-3 py-2 rounded-md hover:bg-gray-800 transition-colors duration-200"
            >
              Inicio
            </a>
            <a
              href="/category"
              className="block px-3 py-2 rounded-md hover:bg-gray-800 transition-colors duration-200"
            >
              Categorias
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;