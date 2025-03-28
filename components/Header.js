"use client";

import Image from "next/image";
import GetStartedButton from "./GetStartedButton";

const Header = () => {
  return (
    <section className="backdrop-blur-md bg-white/70 border-b sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-8 py-2">
        <nav className="flex items-center">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() =>
              document
                .getElementById("hero")
                .scrollIntoView({ behavior: "smooth" })
            }
          >
            <Image
              src="/images/Logo.png"
              alt="ShareQuick Logo"
              width={40}
              height={40}
              className="object-contain"
            />
            <span className="font-bold text-lg">ShareQuick</span>
          </div>

          {/* Center navigation links with absolute positioning */}
          <div className="absolute left-1/2 transform -translate-x-1/2 space-x-10 max-md:hidden">
            <a
              className="link link-hover"
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("about")
                  .scrollIntoView({ behavior: "smooth" });
              }}
            >
              About
            </a>
            <a
              className="link link-hover"
              href="#pricing"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("pricing")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              Pricing
            </a>

            <a
              className="link link-hover"
              href="#faq"
              onClick={(e) => {
                e.preventDefault();
                document
                  .getElementById("faq")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              FAQ
            </a>
          </div>

          {/* Push button to the right */}
          <div className="ml-auto">
            <GetStartedButton />
          </div>
        </nav>
      </div>
    </section>
  );
};

export default Header;
