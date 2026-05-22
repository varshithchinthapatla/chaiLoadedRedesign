import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-black border-t border-orange-500/10 text-white py-16">

      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        <div className="grid md:grid-cols-3 gap-12">

          <div>

            <img
              src={logo}
              alt="logo"
              className="w-20 mb-6"
            />

            <p className="text-gray-400 leading-relaxed">
              Loaded flavors, crazy vibes, and unforgettable chai moments.
            </p>

          </div>

          <div>

            <h3 className="text-2xl font-bold mb-6">
              Quick Links
            </h3>

            <div className="flex flex-col gap-4 text-gray-400">

              <a href="#home">Home</a>
              <a href="#menu">Menu</a>
              <a href="#about">About</a>
              <a href="#testimonials">Testimonials</a>

            </div>

          </div>

          <div>

            <h3 className="text-2xl font-bold mb-6">
              Contact
            </h3>

            <div className="flex flex-col gap-4 text-gray-400">

              <p>+91 9876543210</p>
              <p>contact@chailoaded.in</p>
              <p>Hyderabad, India</p>

            </div>

          </div>

        </div>

        <div className="border-t border-white/10 mt-16 pt-8 text-center text-gray-500">
          © 2026 Chai Loaded. All rights reserved.
        </div>

      </div>

    </footer>
  );
};

export default Footer;