import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(prev => !prev);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
  { label: "Strona główna", path: "/" },
  { label: "Kursy", path: "/courses" },
  { label: "Słownik", path: "/dictionary" }
];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-2 flex justify-between items-center">
        <h1 className="text-3xl font-extrabold text-indigo-600 tracking-wide">
          <Link
            to="/"
            onClick={closeMenu}
            className="hover:text-indigo-800 transition-colors duration-300"
          >
            What's up Granny?
          </Link>
        </h1>

        {/* Desktop nav */}
        <nav className="hidden md:flex gap-6">
          {navLinks.map((item) => (
            <Link
              key={item.label}
              to={item.path}
              className="text-gray-600 hover:text-indigo-600 font-semibold text-lg transition-colors duration-300"
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Mobile burger */}
        <div className="md:hidden relative">
          <button
            aria-label="Toggle menu"
            className="text-indigo-600 focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              className="w-8 h-8"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                // X icon (close)
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                // Hamburger icon (open)
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>

          {/* Dropdown menu */}
          {isOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-50">
              {navLinks.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  onClick={closeMenu}
                  className="block px-4 py-2 text-gray-700 hover:bg-indigo-100 hover:text-indigo-700 font-semibold"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
