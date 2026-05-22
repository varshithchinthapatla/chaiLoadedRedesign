import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="relative py-32 bg-black text-white overflow-hidden"
    >
      {/* BACKGROUND */}

      <div className="absolute inset-0 bg-gradient-to-b from-orange-500/10 via-black to-black" />

      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-orange-500/10 blur-[150px]" />

      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-red-500/10 blur-[150px]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-16 relative z-10">

        {/* TITLE */}

        <div className="text-center mb-20">

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="uppercase tracking-[8px] text-orange-400 text-sm mb-5"
          >
            Contact Us
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-black"
          >
            Let’s Connect.
          </motion.h2>

          <p className="text-gray-400 max-w-2xl mx-auto mt-6 text-lg">
            Want franchise details, collaborations, or just craving chai?
            Reach out to the Chai Loaded team.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT INFO */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-10"
          >

            <div className="flex items-start gap-5">

              <div className="w-16 h-16 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400">
                <Phone size={30} />
              </div>

              <div>

                <h3 className="text-2xl font-bold mb-2">
                  Call Us
                </h3>

                <p className="text-gray-400">
                  +91 98765 43210
                </p>

              </div>

            </div>

            <div className="flex items-start gap-5">

              <div className="w-16 h-16 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400">
                <Mail size={30} />
              </div>

              <div>

                <h3 className="text-2xl font-bold mb-2">
                  Email
                </h3>

                <p className="text-gray-400">
                  contact@chailoaded.in
                </p>

              </div>

            </div>

            <div className="flex items-start gap-5">

              <div className="w-16 h-16 rounded-2xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-400">
                <MapPin size={30} />
              </div>

              <div>

                <h3 className="text-2xl font-bold mb-2">
                  Location
                </h3>

                <p className="text-gray-400">
                  Hyderabad, Telangana, India
                </p>

              </div>

            </div>

          </motion.div>

          {/* CONTACT FORM */}

          <motion.form
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-[#111111] border border-orange-500/20 rounded-[40px] p-10 space-y-7 relative overflow-hidden"
          >

            <div className="absolute top-0 right-0 w-52 h-52 bg-orange-500/10 blur-[120px]" />

            <div>

              <label className="block text-sm mb-3 text-orange-400 uppercase tracking-[3px]">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="w-full bg-black border border-white/10 focus:border-orange-500 rounded-2xl px-5 py-4 outline-none transition-all"
              />

            </div>

            <div>

              <label className="block text-sm mb-3 text-orange-400 uppercase tracking-[3px]">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-black border border-white/10 focus:border-orange-500 rounded-2xl px-5 py-4 outline-none transition-all"
              />

            </div>

            <div>

              <label className="block text-sm mb-3 text-orange-400 uppercase tracking-[3px]">
                Message
              </label>

              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full bg-black border border-white/10 focus:border-orange-500 rounded-2xl px-5 py-4 outline-none transition-all resize-none"
              />

            </div>

            <button
              type="submit"
              className="w-full bg-orange-500 hover:bg-orange-600 transition-all duration-300 py-5 rounded-2xl text-lg font-bold shadow-[0_0_30px_rgba(255,115,0,0.35)]"
            >
              Send Message
            </button>

          </motion.form>

        </div>

      </div>
    </section>
  );
};

export default ContactSection;