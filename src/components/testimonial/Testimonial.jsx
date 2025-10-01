import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import { EffectFade, Pagination, Autoplay } from "swiper/modules";
import TestimonialTemplate from "./TestimonialTemplate";
import "./testimonial.css";

const testimonialData = [
  // ... (Your testimonialData is here) ...
  {
    message: "Shahid Iqbal has been a reliable development partner, always delivering high-quality work on time.",
    quote: `From planning to execution, his attention to detail and strong technical expertise made our project a success. The final product was polished, scalable, and exceeded expectations.`,
    name: "Sarah Johnson",
    designation: "Product Manager, TechNova Solutions",
  },
  {
    message: "His expertise in React.js and Laravel helped us scale our web platform seamlessly.",
    quote: `Shahid quickly understood our requirements and built a solution that not only looked great but also performed flawlessly. His ability to blend UI/UX with functionality is impressive.`,
    name: "Michael Lee",
    designation: "CTO, BrightWave Digital",
  },
  {
    message: "Professional, creative, and dedicated — working with Shahid was a fantastic experience.",
    quote: `He revamped our existing website into a modern, user-friendly platform that boosted customer engagement significantly. His communication and problem-solving skills set him apart.`,
    name: "Emma Davis",
    designation: "CEO, NextGen Enterprises",
  },
];

const Testimonial = () => {
  return (
    <div className="py-16 md:py-24 px-4 sm:px-8 xl:px-16 
        opacity-0 translate-y-10 animate-fade-in-down delay-300">
      
      <div className="max-w-4xl mx-auto w-full h-full cursor-grab">
        
        <h2 className="text-3xl sm:text-4xl font-extrabold text-center mb-12 text-[#132238] transition duration-300 hover:text-highlight">
          Client <span className="text-highlight">Feedback</span>
        </h2>
        
        {/* Swiper Container: Background changed to Purple-Green Gradient */}
        <div className="p-4 sm:p-6 lg:p-8 rounded-2xl border border-purple-200/50 
            // === GRADIENT ADDED HERE ===
            bg-gradient-to-br from-purple-50 via-white to-green-50 
            shadow-xl shadow-gray-200/70 
            transition duration-500 ease-in-out hover:shadow-2xl hover:shadow-highlight/30"> 
          <Swiper
            id="testimonialSwiper"
            spaceBetween={50}
            effect="fade"
            loop={true}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true, 
            }}
            fadeEffect={{ crossFade: true }}
            pagination={{ clickable: true }}
            modules={[EffectFade, Pagination, Autoplay]}
            className="max-w-3xl mx-auto"
          >
            {testimonialData.map((testimonial, index) => (
              <SwiperSlide key={index}>
                <TestimonialTemplate testimonial={testimonial} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;