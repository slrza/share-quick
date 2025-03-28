import GetStartedButton from "./GetStartedButton";
import DigitalCard from "./DigitalCard";

const Hero = () => {
  return (
    <section id="hero" className="py-32 px-8 bg-[#ffffff]">
      <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-14 items-center justify-between">
        <div className="text-center lg:text-left max-w-md">
          <h1 className="text-4xl lg:text-5xl font-extrabold mb-6">
            Your digital identity, simplified
          </h1>
          <div className="text-gray-600 mb-10 text-lg">
            Create your personalized digital card in seconds. Share your contact
            info via QR code or link. Connect instantly.
          </div>
          <GetStartedButton />
        </div>

        <div className="shadow-xl rounded-2xl">
          <DigitalCard />
        </div>
      </div>
    </section>
  );
};

export default Hero;
