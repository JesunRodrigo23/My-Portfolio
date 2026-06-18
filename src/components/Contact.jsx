import React from "react";
import {
  FaEnvelope,
  FaGithub,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

const Contact = () => {
  const contactInfo = [
    {
      id: 1,
      icon: FaEnvelope,
      title: "Email",
      value: "jesunrodrigo23@gmail.com",
      link: "mailto:jesunrodrigo23@gmail.com",
    },
    {
      id: 2,
      icon: FaGithub,
      title: "Github",
      value: "https://github.com/JesunRodrigo23",
      link: "https://github.com/JesunRodrigo23",
    },
    {
      id: 3,  
      icon: FaPhone,
      title: "Phone",
      value: "+63 985 772 6394",
      link: "tel:+639857726394",
    },
    {
      id: 4,
      icon: FaMapMarkerAlt,
      title: "Location",
      value: "Parañaque City, Philippines",
      link: null,
    },
  ];

  return (
    <section className="py-20 bg-gray-900" id="contact">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-2">
            Let's Connect
          </h2>

          <div className="w-28 h-1 bg-primary mx-auto rounded-full"></div>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div>
            <p className="text-gray-400 mb-8 leading-relaxed">
              Feel free to reach out regarding internships, projects,
              collaborations, or any opportunities where I can contribute my
              skills in web and mobile development.
            </p>

            <div className="space-y-6">
              {contactInfo.map((info) => {
                const Icon = info.icon;

                return (
                  <div
                    key={info.id}
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <Icon size={18} className="text-primary" />
                    </div>

                    <div>
                      <h4 className="text-white font-medium text-sm">
                        {info.title}
                      </h4>

                      {info.link ? (
                        <a
                          href={info.link}
                          className="text-gray-400 text-sm hover:text-primary transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="text-gray-400 text-sm">
                          {info.value}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-800 rounded-lg p-6">
            <form>
              <div className="mb-6">
                <label
                  htmlFor="message"
                  className="text-white block mb-2 text-sm font-medium"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white text-sm focus:outline-none focus:border-primary transition-colors"
                  placeholder="Your Message..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-2.5 bg-primary text-white rounded-lg font-medium hover:bg-primary/80 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;