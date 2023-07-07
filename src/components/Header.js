import React, { useEffect, useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrollUp, setIsScrollUp] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;

      if (scrollTop > 0) {
        setIsScrollUp(true);
      } else {
        setIsScrollUp(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // ............................................................................................................................................................

  return (
    // <header className="pt-10 pb-20 flex items-center justify-between relative">
    <header
      className={`py-5 container px-[5%] md:px-[10%] flex items-center justify-between fixed top-0 w-full transition-color duration-300 z-50 ${
        isScrollUp
          ? "bg-gray-200 bg-opacity-60 backdrop-filter backdrop-blur-lg h-16"
          : "bg-transparent"
      }`}
    >
      <div className="text-4xl font-extrabold text-text">Tourplace</div>
      <nav className="xl:hidden order-first">
        <button
          className="focus:outline-none text-gray-500 hover:text-gray-800"
          onClick={toggleMenu}
        >
          <svg
            className="h-6 w-6 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isMenuOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 6h16v2H4V6zm0 5h16v2H4v-2zm0 5h16v2H4v-2z"
              />
            ) : (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 5h16v2H4V5zm0 6h16v2H4v-2zm0 6h16v2H4v-2z"
              />
            )}
          </svg>
        </button>
      </nav>
      <nav
        className={`xl:flex ${isMenuOpen ? "block" : "hidden"} ${
          isScrollUp ? "top-16" : "top-0"
        } absolute inset-x-0 top-28 left-0 max-xl:bg-gray-200 max-xl:bg-opacity-90 max-xl:backdrop-filter max-xl:backdrop-blur-md z-10 xl:relative xl:top-0 xl:bg-opacity-0 rounded-b-3xl`}
      >
        <ul className="w-full px-10 py-5 flex flex-col xl:flex-row space-y-4 xl:space-y-0 xl:space-x-4 font-medium text-xl 2xl:text-2xl">
          <li className="xl:px-5">
            <a href="#" className="hover:text-gray-200 font-bold">
              Home
            </a>
          </li>
          <li className="xl:px-5">
            <a href="#" className="text-secol hover:text-gray-200">
              About Us
            </a>
          </li>
          <li className="xl:px-5">
            <a href="#" className="text-secol hover:text-gray-200">
              Destination
            </a>
          </li>
          <li className="xl:px-5">
            <a href="#" className="text-secol hover:text-gray-200">
              Tour
            </a>
          </li>
          <li className="xl:px-5">
            <a href="#" className="text-secol hover:text-gray-200">
              Blog
            </a>
          </li>
        </ul>
      </nav>
      <a href="#" className="bg-text text-lg text-white px-6 py-3 rounded-full">
        Book Now
      </a>
    </header>
  );
};

export default Header;
