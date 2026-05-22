import { motion } from "framer-motion";

const founders = [
  {
    name: "Shaik Basha",
    role: "Founder & CEO",
    image: "https://chailoaded.in/assets/images/founder.jpeg",
  },

  {
    name: "Shaik Jeelani Basha",
    role: "Director",
    image: "https://chailoaded.in/assets/images/director.jpeg",
  },
];

const WhyChooseUs = () => {
  return (
    <section
      id="about"
      className="relative py-32 bg-black text-white overflow-hidden"
    >
      {/* BACKGROUND EFFECTS */}

      <div className="absolute inset-0 bg-gradient-to-b from-orange-500/10 via-black to-black" />

      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-orange-500/10 blur-[180px]" />

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-red-500/10 blur-[160px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">

        {/* TITLE */}

        <div className="text-center mb-24">

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="uppercase tracking-[8px] text-orange-400 mb-5 text-sm"
          >
            About Chai Loaded
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black leading-tight"
          >
            Brewing Vibes.
            <br />
            Serving Happiness.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.9 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-gray-400 text-lg leading-relaxed mt-8"
          >
            Chai Loaded is more than a café. It’s a vibe where loaded flavors,
            aesthetic ambience, energetic conversations, and unforgettable food
            experiences come together.
          </motion.p>

        </div>

        {/* FOUNDERS */}

        <div className="grid md:grid-cols-2 gap-12">

          {founders.map((person, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.8,
                delay: index * 0.2,
              }}
              viewport={{ once: true }}
              className="relative bg-[#111111] border border-orange-500/20 rounded-[40px] overflow-hidden group hover:-translate-y-3 transition-all duration-500"
            >

              {/* GLOW */}

              <div className="absolute top-0 right-0 w-52 h-52 bg-orange-500/20 blur-[120px]" />

              {/* IMAGE */}

              <div className="relative overflow-hidden">

                <img
  src={person.image}
  alt={person.name}
  className={`w-full h-[500px] rounded-t-[40px] transition-all duration-700 group-hover:scale-105 ${
    person.name === "Shaik Basha"
      ? "object-cover object-[center_top]"
      : "object-cover object-[center_top]"
  }`}
/>

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />

              </div>

              {/* CONTENT */}

              <div className="absolute bottom-0 left-0 p-10 w-full">

                <p className="uppercase tracking-[5px] text-orange-400 text-sm mb-3">
                  {person.role}
                </p>

                <h3 className="text-4xl font-black mb-4">
                  {person.name}
                </h3>

                <p className="text-gray-300 leading-relaxed max-w-md">
                  Passionately building the Chai Loaded experience with bold
                  flavors, modern café culture, and unforgettable customer
                  vibes.
                </p>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;