import React from "react";
import Image from "../assets/Image4.jpg";

const About = () => {
  return (
    <section
      className="text-white mt-5 relative overflow-hidden"
      id="about"
    >
      <div className="max-w-7xl mx-auto px-4 md:grid md:grid-cols-2 gap-12 items-center py-16 xl:px-16 relative z-10">
        
        {/* LEFT */}
        <div data-aos="fade-right">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            More <span className="text-primary">About</span> Me
          </h2>

          <p className="text-gray-400 lg:text-lg mb-10 leading-relaxed">
            A highly motivated person, with a hands on experience in creating web and mobile applications development,
            eager to learn and gain more skills and knowledge willing to be train and enhance my knowledge while
            experiencing the real world environment.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 max-w-xl">
            <div className="text-center rounded-2xl bg-[#111a3e] border border-[#1f1641] p-5 transition-all duration-300 hover:border-primary/50">
              <h3 className="text-primary font-bold text-2xl md:text-3xl">
                0
              </h3>
              <p className="text-xs text-gray-400 uppercase tracking-wider mt-0.5">
                Clients
              </p>
            </div>

            <div className="text-center rounded-2xl bg-[#111a3e] border border-[#1f1641] p-5 transition-all duration-300 hover:border-primary/50">
              <h3 className="text-primary font-bold text-2xl md:text-3xl">
                3
              </h3>
              <p className="text-xs text-gray-400 uppercase tracking-wider mt-0.5">
                Projects
              </p>
            </div>

            <div className="text-center rounded-2xl bg-[#111a3e] border border-[#1f1641] p-5 transition-all duration-300 hover:border-primary/50">
              <h3 className="text-primary font-bold text-2xl md:text-3xl">
                +24
              </h3>
              <p className="text-xs text-gray-400 uppercase tracking-wider mt-0.5">
                Years
              </p>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div
          className="mt-16 md:mt-0 flex justify-center lg:justify-end relative"
          data-aos="fade-left"
        >
          <div className="relative w-64 h-64 md:w-96 md:h-[30rem]">
            
            {/* border glow */}
            <div className="absolute inset-0 z-0 rounded-full shadow-lg border border-primary translate-x-4 translate-y-4"></div>

            {/* image */}
            <div className="relative z-10 w-full h-full bg-[#111a3e] rounded-full overflow-hidden border border-[#1f1641]">
              <img
                src={Image}
                alt="About"
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;