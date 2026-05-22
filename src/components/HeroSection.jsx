import { motion } from "framer-motion";
import chaiLogo from "../assets/logo.png";
import burgerImg from "../assets/burger.png";
import friesImg from "../assets/fried-chicken.png";
import chaiCupImg from "../assets/loaded-fries.png";

const floating = {
  animate: {
    y: [0, -20, 0],
    rotate: [0, 5, -5, 0],
    transition: {
      repeat: Infinity,
      duration: 4,
      ease: "easeInOut",
    },
  },
};

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden bg-[#050505] text-white flex items-center pt-36 md:pt-44"
    >
      {/* BACKGROUND */}

      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-orange-500/20 blur-[140px]" />

      <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-red-500/10 blur-[140px]" />

      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(to right, rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "70px 70px",
        }}
      />

      {/* CONTENT */}

      <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10 grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT */}

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <p className="uppercase tracking-[8px] text-orange-400 text-sm mb-6">
            Hyderabad’s Craziest Chai Spot
          </p>

          <h1 className="text-6xl md:text-8xl font-black leading-none mb-8">
            Loaded
            <br />
            Flavors.
            <br />
            Loaded
            <br />
            Vibes.
          </h1>

          <p className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-2xl mb-12">
            Burgers, chai, fries, milkshakes and unforgettable vibes —
            all packed into one loaded experience.
          </p>

          <div className="flex flex-wrap gap-6">

            <a
              href="#menu"
              className="bg-orange-500 hover:bg-orange-600 transition-all px-10 py-5 rounded-full text-lg font-bold shadow-[0_0_40px_rgba(255,120,0,0.45)]"
            >
              Explore Menu
            </a>

            <a
              href="#franchise"
              className="border border-white/20 hover:bg-white hover:text-black transition-all px-10 py-5 rounded-full text-lg font-bold"
            >
              Franchise
            </a>

          </div>
        </motion.div>

        {/* RIGHT SIDE */}

        <div className="relative flex justify-center items-center h-[700px]">

          {/* CENTER LOGO */}

          <motion.img
            src={chaiLogo}
            alt="logo"
            animate={{
              rotate: 360,
            }}
            transition={{
              repeat: Infinity,
              duration: 30,
              ease: "linear",
            }}
            className="absolute w-[420px] opacity-20"
          />

          {/* CHAI CUP */}

          <motion.img
            src={chaiCupImg}
            alt="chai"
            variants={floating}
            animate="animate"
            className="absolute z-20 w-[220px] top-[120px]"
          />

          {/* BURGER */}

          <motion.img
            src={burgerImg}
            alt="burger"
            animate={{
              y: [0, -25, 0],
              x: [0, 10, 0],
              rotate: [0, -8, 8, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 5,
              ease: "easeInOut",
            }}
            className="absolute z-20 w-[220px] left-0 top-[260px]"
          />

          {/* FRIES */}

          <motion.img
            src={friesImg}
            alt="fries"
            animate={{
              y: [0, -20, 0],
              x: [0, -10, 0],
              rotate: [0, 8, -8, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 5,
              ease: "easeInOut",
            }}
            className="absolute z-20 w-[200px] right-0 top-[280px]"
          />

          {/* GLOW RINGS */}

          <motion.div
            animate={{ rotate: 360 }}
            transition={{
              repeat: Infinity,
              duration: 18,
              ease: "linear",
            }}
            className="absolute w-[500px] h-[500px] border border-orange-500/20 rounded-full"
          />

          <motion.div
            animate={{ rotate: -360 }}
            transition={{
              repeat: Infinity,
              duration: 28,
              ease: "linear",
            }}
            className="absolute w-[620px] h-[620px] border border-white/10 rounded-full"
          />

        </div>
      </div>

      {/* BOTTOM FADE */}

      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black to-transparent" />
    </section>
  );
};

export default Hero;