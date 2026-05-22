const Navbar = () => {
  return (
    <div className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full flex justify-center px-4">
      
      <nav className="bg-black/70 backdrop-blur-2xl border border-orange-500/20 rounded-full px-8 py-4 flex items-center gap-10 shadow-[0_0_40px_rgba(255,120,0,0.2)]">
        
        <div className="flex items-center gap-3">
          <img
            src="https://chailoaded.in/assets/images/logo.png"
            alt="logo"
            className="h-12 object-contain"
          />
        </div>

        <div className="hidden md:flex items-center gap-8">
          
          <a
            href="/"
            className="text-white font-semibold text-lg hover:text-orange-400 transition"
          >
            Home
          </a>

          <a
            href="/menu"
            className="text-white font-semibold text-lg hover:text-orange-400 transition"
          >
            Menu
          </a>

          <a
            href="/about"
            className="text-white font-semibold text-lg hover:text-orange-400 transition"
          >
            About
          </a>

          <a
  href="/testimonials"
  className="text-white font-semibold text-lg hover:text-orange-400 transition"
>
  Testimonials
</a>

          <a
            href="/franchise"
            className="text-white font-semibold text-lg hover:text-orange-400 transition"
          >
            Franchise
          </a>

        </div>

        <button className="bg-orange-500 hover:bg-orange-600 transition-all px-6 py-3 rounded-full text-white font-bold">
          Order Now
        </button>

      </nav>
    </div>
  );
};

export default Navbar;