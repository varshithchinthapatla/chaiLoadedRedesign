import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

const IntroLoader = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>

      {showLoader && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            transition: {
              duration: 1,
            },
          }}
          className="fixed inset-0 z-[9999] bg-black flex items-center justify-center overflow-hidden"
        >

          <div className="absolute w-[400px] h-[400px] bg-orange-500/20 blur-[120px] rounded-full" />

          <motion.img
            initial={{
              opacity: 0,
              scale: 0.7,
              y: 30,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            transition={{
              duration: 1.2,
              ease: "easeOut",
            }}
            src="https://chailoaded.in/assets/images/logo.png"
            alt="Chai Loaded Logo"
            className="w-64 relative z-10 drop-shadow-[0_0_40px_rgba(255,120,0,0.4)]"
          />

        </motion.div>
      )}

    </AnimatePresence>
  );
};

export default IntroLoader;