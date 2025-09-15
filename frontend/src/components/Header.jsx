import { useState } from "react";
import { HashLink } from "react-router-hash-link";
import { Link, useLocation } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };

  const navItems = [
    { href: "/", label: "Home", type: "route" },
    { href: "/#about", label: "About", type: "hash" },
    { href: "/#education", label: "Education", type: "hash" },
    { href: "/#skills", label: "Skills", type: "hash" },
    { href: "/all-projects", label: "Projects", type: "route" },
    { href: "/contact", label: "Contact", type: "route" },
  ];

  const renderNavLink = (item) => {
    const commonClasses =
      "text-gray-600 hover:text-gray-900 dark:text-white dark:hover:text-purple-100 transition-colors duration-300 font-medium relative group";
    const underline =
      "absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-600 dark:bg-purple-400 transition-all duration-300 group-hover:w-full";

    if (item.type === "hash") {
      return (
        <HashLink smooth to={item.href} onClick={() => setIsMenuOpen(false)}>
          <span className={commonClasses}>
            {item.label}
            <span className={underline}></span>
          </span>
        </HashLink>
      );
    }

    return (
      <Link to={item.href} onClick={() => setIsMenuOpen(false)}>
        <span
          className={`${commonClasses} ${
            pathname === item.href ? "text-purple-600 dark:text-purple-400" : ""
          }`}
        >
          {item.label}
          <span className={underline}></span>
        </span>
      </Link>
    );
  };

  return (
    <header className="p-2 fixed top-0 left-0 right-0 z-50 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200 dark:border-purple-800/30 transition-colors duration-300">
      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center justify-between px-8 py-4 max-w-7xl mx-auto">
        <div
          className="text-2xl font-bold text-gray-900 dark:text-white"
          title="Vignesh"
        >
          Vignesh
        </div>
        <div className="flex items-center space-x-6">
          <ul className="flex items-center space-x-8">
            {navItems.map((item) => (
              <li key={item.label}>{renderNavLink(item)}</li>
            ))}
          </ul>
          <ThemeToggle />
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="md:hidden flex items-center justify-between px-6 py-4">
        <div className="text-2xl font-bold text-gray-900 dark:text-white">
          Vignesh
        </div>
        <div className="flex items-center space-x-3">
          <ThemeToggle />

          <button
            onClick={toggleMenu}
            className="flex flex-col space-y-1.5 p-2 focus:outline-none"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-6 h-0.5 bg-gray-600 dark:bg-white transition-all duration-300 ${
                isMenuOpen ? "transform rotate-45 translate-y-2" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-gray-600 dark:bg-white transition-all duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            />
            <span
              className={`block w-6 h-0.5 bg-gray-600 dark:bg-white transition-all duration-300 ${
                isMenuOpen ? "transform -rotate-45 -translate-y-2" : ""
              }`}
            />
          </button>

          <div
            className={`absolute top-full right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-lg shadow-xl border border-gray-200 dark:border-purple-700/50 transition-all duration-300 transform ${
              isMenuOpen
                ? "opacity-100 scale-100"
                : "opacity-0 scale-95 pointer-events-none"
            }`}
          >
            <ul className="py-2">
              {navItems.map((item, index) => (
                <li key={item.label}>
                  {item.type === "hash" ? (
                    <HashLink
                      smooth
                      to={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block px-4 py-3 text-gray-600 hover:text-gray-900 dark:text-white dark:hover:text-purple-200 hover:bg-gray-50 dark:hover:bg-purple-900/30 transition-all duration-200 ${
                        index < navItems.length - 1
                          ? "border-b border-gray-100 dark:border-purple-700/30"
                          : ""
                      }`}
                    >
                      {item.label}
                    </HashLink>
                  ) : (
                    <Link
                      to={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`block px-4 py-3 text-gray-600 hover:text-gray-900 dark:text-white dark:hover:text-purple-200 hover:bg-gray-50 dark:hover:bg-purple-900/30 transition-all duration-200 ${
                        index < navItems.length - 1
                          ? "border-b border-gray-100 dark:border-purple-700/30"
                          : ""
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
