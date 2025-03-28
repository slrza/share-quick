import React from "react";

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white p-8 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300">
      <div className="flex justify-center mb-6">{icon}</div>
      <h3 className="text-2xl font-bold text-center mb-4">{title}</h3>
      <p className="text-gray-600 text-center">{description}</p>
    </div>
  );
};

const About = () => {
  return (
    <section id="about" className="py-24 px-8 bg-[#f8f9fc]" href="#about">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-8">Why ShareQuick?</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <FeatureCard
            icon={
              <div className="w-20 h-20 rounded-full bg-[#e6efff] flex items-center justify-center border-4 border-[#f0f7ff]">
                <svg
                  className="w-10 h-10 text-[#2575f3]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z" />
                </svg>
              </div>
            }
            title="All-in-One Profile"
            description="Create a stunning digital card that showcases your contact info, social media links, and professional details in one beautiful place."
          />

          <FeatureCard
            icon={
              <div className="w-20 h-20 rounded-full bg-[#e6efff] flex items-center justify-center border-4 border-[#f0f7ff]">
                <svg
                  className="w-10 h-10 text-[#2575f3]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                </svg>
              </div>
            }
            title="Easy Sharing"
            description="Share your digital card instantly through QR codes or direct links. No more running out of physical business cards or missing connections."
          />

          <FeatureCard
            icon={
              <div className="w-20 h-20 rounded-full bg-[#e6efff] flex items-center justify-center border-4 border-[#f0f7ff]">
                <svg
                  className="w-10 h-10 text-[#2575f3]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z"
                  />
                </svg>
              </div>
            }
            title="Full Customization"
            description="Make your digital card truly yours with customizable themes, layouts, and colors. Stand out with a design that matches your personal brand."
          />
        </div>
      </div>
    </section>
  );
};

export default About;
