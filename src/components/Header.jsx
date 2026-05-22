import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const Header = () => {
  const [active, setActive] = useState("home");
  const [mobileMenu, setMobileMenu] = useState(false);

  const navItems = [
    { name: "Home", id: "home" },
    { name: "Menu", id: "menu" },
    { name: "About", id: "about" },
    { name: "Testimonials", id: "testimonials" },
    { name: "Franchise", id: "franchise" },
    { name: "Contact", id: "contact" },
  ];

  const scrollToSection = (id) => {
    setActive(id);
    setMobileMenu(false);

    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
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
    <>
      <header className="fixed top-4 left-0 w-full z-50 px-4">

        <div className="max-w-7xl mx-auto">

          <div className="bg-black/90 backdrop-blur-xl border border-orange-500/20 rounded-full px-5 py-4 flex items-center justify-between shadow-[0_0_40px_rgba(255,98,0,0.25)]">

            {/* LOGO */}

            <button onClick={() => scrollToSection("home")}>
              <img
                src={logo}
                alt="logo"
                className="w-14 h-14 object-contain"
              />
            </button>

            {/* DESKTOP NAV */}

            <nav className="hidden md:flex items-center gap-8">

              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
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

            {/* DESKTOP BUTTON */}

            <button
              onClick={() => scrollToSection("menu")}
              className="hidden md:block bg-orange-500 hover:bg-orange-600 text-white font-bold px-7 py-3 rounded-full transition-all duration-300 shadow-[0_0_25px_rgba(255,115,0,0.45)]"
            >
              Explore Menu
            </button>

            {/* MOBILE MENU BUTTON */}

            <button
              onClick={() => setMobileMenu(!mobileMenu)}
              className="md:hidden text-white"
            >
              {mobileMenu ? <X size={32} /> : <Menu size={32} />}
            </button>

          </div>

        </div>

      </header>

      {/* MOBILE MENU */}

      {mobileMenu && (
        <div className="fixed top-24 left-4 right-4 z-40 bg-[#111111] border border-orange-500/20 rounded-[30px] p-6 md:hidden shadow-[0_0_40px_rgba(255,115,0,0.2)] backdrop-blur-xl">

          <div className="flex flex-col gap-5">

            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-left text-lg font-semibold transition-all ${
                  active === item.id
                    ? "text-orange-400"
                    : "text-white"
                }`}
              >
                {item.name}
              </button>
            ))}

            <button
              onClick={() => scrollToSection("menu")}
              className="mt-3 bg-orange-500 hover:bg-orange-600 text-white font-bold px-7 py-4 rounded-full transition-all duration-300"
            >
              Explore Menu
            </button>

          </div>

        </div>
      )}
    </>
  );
};

export default Header;