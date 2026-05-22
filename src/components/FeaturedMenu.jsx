import { useState } from "react";
import menuData from "../data/menuData";

const categories = [
  "Tea",
  "Milk",
  "Snacks",
  "Milkshakes",
  "Refreshments",
];

const FeaturedMenu = () => {
  const [activeCategory, setActiveCategory] = useState("Tea");

  const filteredItems = menuData.filter(
    (item) => item.category === activeCategory
  );

  return (
    <section
      id="menu"
      className="relative py-28 bg-[#050505] text-white overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-orange-500/10 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">

        <div className="text-center mb-16">

          <p className="uppercase tracking-[6px] text-orange-400 mb-4 text-sm">
            Chai Loaded Specials
          </p>

          <h2 className="text-5xl md:text-6xl font-black">
            Explore Our Menu
          </h2>

        </div>

        {/* CATEGORY NAV */}

        <div className="flex gap-4 overflow-x-auto pb-6 mb-16 scrollbar-hide">

          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-8 py-4 rounded-full whitespace-nowrap font-semibold transition-all duration-300 border
              ${
                activeCategory === category
                  ? "bg-orange-500 text-black border-orange-500"
                  : "bg-[#111111] border-white/10 hover:border-orange-500/40"
              }`}
            >
              {category}
            </button>
          ))}

        </div>

        {/* MENU GRID */}

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

          {filteredItems.map((item, index) => (
            <div
              key={index}
              className="group bg-[#111111] rounded-[30px] p-6 border border-white/10 hover:border-orange-500/40 transition-all duration-500 hover:-translate-y-3 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-40 h-40 bg-orange-500/10 blur-[80px]" />

              <div className="flex justify-center mb-6">

                <img
                  src={item.image}
                  alt={item.title}
                  className="w-[160px] h-[160px] object-contain group-hover:scale-110 transition-all duration-500"
                />

              </div>

              <div className="text-center">

                <p className="uppercase tracking-[3px] text-orange-400 text-xs mb-2">
                  {item.category}
                </p>

                <h3 className="text-2xl font-bold mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-400 text-sm mb-5 leading-relaxed">
                  {item.description}
                </p>

                <div className="text-orange-400 text-xl font-bold">
                  {item.rating}
                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default FeaturedMenu;