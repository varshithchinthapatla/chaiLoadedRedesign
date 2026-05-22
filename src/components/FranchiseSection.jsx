import { motion } from "framer-motion";

const FranchiseSection = () => {
  return (
    <section
      id="franchise"
      className="relative py-32 bg-black overflow-hidden text-white"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-transparent to-red-500/10" />

      <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[50px] border border-orange-500/20 bg-[#111111] px-8 md:px-20 py-20 text-center"
        >
          <p className="uppercase tracking-[8px] text-orange-400 text-sm mb-6">
            Franchise Opportunity
          </p>

          <h2 className="text-5xl md:text-7xl font-black leading-tight mb-8">
            Build The Next
            <br />
            Chai Loaded Spot.
          </h2>

          <p className="text-gray-300 max-w-3xl mx-auto text-lg leading-relaxed mb-12">
            Join the growing Chai Loaded family and bring loaded flavors,
            energetic vibes, and unforgettable food experiences to your city.
          </p>

          <div className="flex flex-wrap justify-center gap-6 relative z-10">

  <button
    onClick={() =>
      document
        .getElementById("contact")
        ?.scrollIntoView({ behavior: "smooth" })
    }
    className="bg-orange-500 hover:bg-orange-600 transition-all px-10 py-5 rounded-full text-lg font-bold shadow-[0_0_40px_rgba(255,120,0,0.4)]"
  >
    Apply For Franchise
  </button>

  <button
    onClick={() =>
      document
        .getElementById("contact")
        ?.scrollIntoView({ behavior: "smooth" })
    }
    className="border border-white/20 hover:bg-white hover:text-black transition-all px-10 py-5 rounded-full text-lg font-bold"
  >
    Contact Us
  </button>

</div>

        </motion.div>

      </div>
    </section>
  );
};

export default FranchiseSection;