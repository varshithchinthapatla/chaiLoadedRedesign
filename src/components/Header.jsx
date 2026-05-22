import { useState, useEffect } from "react";
import logo from "../assets/logo.png";

const Header = () => {
  const [active, setActive] = useState("home");

  const navItems = [
    { name: "Home", id: "home" },
    { name: "Menu", id: "menu" },
    { name: "About", id: "about" },
    { name: "Testimonials", id: "testimonials" },
    { name: "Franchise", id: "franchise" },
  ];

  const scrollToSection = (e, id) => {
    e.preventDefault();

    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      setActive(id);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      navItems.forEach((item) => {
        const section = document.getElementById(item.id);

        if (section) {
          const rect = section.getBoundingClientRect();

          if (rect.top <= 150 && rect.bottom >= 150) {
            setActive(item.id);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-full flex justify-center px-4">

      <div className="bg-black/80 backdrop-blur-xl border border-orange-500/20 rounded-full px-5 md:px-8 py-4 flex items-center justify-between gap-8 shadow-[0_0_40px_rgba(255,98,0,0.25)] w-fit">

        {/* LOGO */}

        <button
          onClick={(e) => scrollToSection(e, "home")}
          className="cursor-pointer"
        >
          <img
            src={logo}
            alt="logo"
            className="w-14 h-14 object-contain"
          />
        </button>

        {/* NAV ITEMS */}

        <nav className="hidden md:flex items-center gap-8">

          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={(e) => scrollToSection(e, item.id)}
              className={`relative text-lg font-semibold transition-all duration-300 ${
                active === item.id
                  ? "text-orange-400"
                  : "text-white hover:text-orange-300"
              }`}
            >
              {item.name}

              {active === item.id && (
                <span className="absolute left-0 -bottom-2 w-full h-[3px] bg-orange-500 rounded-full" />
              )}
            </button>
          ))}

        </nav>

        {/* CTA BUTTON */}

        <button
          onClick={(e) => scrollToSection(e, "menu")}
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold px-7 py-3 rounded-full transition-all duration-300 shadow-[0_0_25px_rgba(255,115,0,0.45)]"
        >
          Explore Menu
        </button>

      </div>

    </header>
  );
};

export default Header;