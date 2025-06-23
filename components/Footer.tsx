import { FaLocationArrow, FaWhatsapp } from "react-icons/fa6";

import { socialMedia } from "@/data";
import Button from "./ui/Button";
import WhatsappButton from "./ui/WhatsappButton";
import Background from "three/src/renderers/common/Background.js";
import { BackgroundBeamsWithCollision } from "./ui/beamwithcollision";

const Footer = () => {
  return (
    <footer
      className="w-full md:h-[450px] relative overflow-hidden  mb-10 md:mb-0"
      id="contact"
    >
      <BackgroundBeamsWithCollision className="w-full py-16 relative  ">
        <div className="flex flex-col items-center px-6 mt-10 md:-top-30 relative z-10">
          <h1 className="heading shrink-0 lg:max-w-[50vw] text-center md:text-4xl text-lg">
            Ready to take <span className="text-purple-300">your</span> digital
            presence to the next level?
          </h1>
          <p className="text-white-200 md:mt-10 my-5 text-center max-w-xl md:text-sm text-gray-400 text-sm ">
            Reach out to me today and let&apos;s discuss how I can help you
            achieve your goals.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap justify-center items-center gap-5 mt-4">
            <a
              href="mailto:shariquerahmani140@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                title="Let's get in touch"
                icon={<FaLocationArrow />}
                position="right"
              />
            </a>
            <a
              href="https://wa.me/917870603085"
              target="_blank"
              rel="noopener noreferrer"
              className="relative inline-flex h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2"
            >
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#25D366_0%,#075E54_50%,#25D366_100%)]" />
              <span className="inline-flex h-full w-full items-center justify-center rounded-full bg-black/80 px-5 py-1 text-sm font-semibold text-green-200 backdrop-blur-xl gap-2 shadow-lg">
                <FaWhatsapp className="text-green-400" />
                WhatsApp
              </span>
            </a>
          </div>

          {/* Footer Bottom */}
          <div className="w-full md:mb-0 mb-10 mt-12 md:mt-30 px-6 flex flex-col md:flex-row justify-between items-center relative z-10">
            <p className="text-sm font-light text-white-200 text-center md:text-left md:w-full">
              © 2025 Sharique Rahmani
            </p>
            <div className="flex gap-7 pt-4 md:pt-0">
              {socialMedia.map((info) => (
                <a
                  key={info.id}
                  href={info.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex justify-center items-center rounded-lg border border-b-gray-500 bg-black backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 hover:scale-110 transition-all duration-300 "
                >
                  <img src={info.img} alt="icon" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </BackgroundBeamsWithCollision>
    </footer>
  );
};

export default Footer;
