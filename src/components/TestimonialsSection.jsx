import {
  ArrowLeft,
  ArrowRight,
  Quote,
} from "lucide-react";

const TestimonialsSection = () => {
  return (
    <section
      id="testimonials"
      className="relative py-28 bg-[#050505] text-white"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-16">

        <div className="text-center mb-20">

          <p className="uppercase tracking-[6px] text-orange-400 mb-4 text-sm">
            Testimonials
          </p>

          <h2 className="text-5xl md:text-6xl font-black">
            What People Say.
          </h2>

        </div>

        <div className="grid md:grid-cols-3 gap-8">

          {[1, 2, 3].map((item) => (
            <div
              key={item}
              className="bg-[#111111] border border-white/10 rounded-[35px] p-8"
            >
              <Quote className="text-orange-400 mb-6" size={40} />

              <p className="text-gray-300 leading-relaxed mb-8">
                One of the best chai and snacks experiences.
                Perfect ambience and loaded flavors.
              </p>

              <h3 className="font-bold text-xl">
                Customer {item}
              </h3>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;