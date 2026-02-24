"use client";

import Image from "next/image";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative z-10 overflow-hidden pt-35 md:pt-40 xl:pt-45"
    >
      {/* ---------- Background Shapes ---------- */}
      <div className="mx-auto max-w-7xl">
        <div className="pointer-events-none absolute inset-0 -z-10 -mx-28 overflow-hidden">
          <div className="hero-circle-gradient absolute -top-[128%] left-1/2 h-[1282px] w-full max-w-[1282px] -translate-x-1/2 rounded-full sm:-top-[107%] xl:-top-[73%]" />
          <div className="hero-circle-gradient absolute -top-[112%] left-1/2 h-[1046px] w-full max-w-[1046px] -translate-x-1/2 rounded-full sm:-top-[93%] xl:-top-[62%]" />
        </div>
        <div className="-u-z-10 absolute top-0 left-1/2 h-full w-full -translate-x-1/2 bg-[url(/images/blur/blur-01.svg)] bg-cover bg-top bg-no-repeat" />
      </div>

      {/* ---------- Hero Content ---------- */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 xl:px-0">
        <div className="grid items-start gap-12 lg:grid-cols-2">
          {/* ---------- LEFT COLUMN: Text ---------- */}
          <div className="text-center">
            <h1 className="mb-5 text-2xl block font-semibold sm:text-4xl xl:text-heading-2">
              <span className="hero-subtitle-text mb-5 text-2xl block font-semibold sm:text-4xl xl:text-heading-2">
                Hello, I'm
              </span>
              <span className="text-white">
                <Typewriter
                  words={[
                    "Josiah Williams",
                    "An Active Duty Sailor",
                    "A Web Developer",
                  ]}
                  loop
                  typeSpeed={70}
                  deleteSpeed={45}
                  delaySpeed={1200}
                  cursor
                  cursorStyle="|"
                />
              </span>
            </h1>

            <p className="mx-auto mb-9 max-w-[500px] font-medium md:text-lg">
              A freelance web developer with a commitment to quality, performance, and continuous improvment.
            </p>
          </div>

          {/* ---------- RIGHT COLUMN: Avatar ---------- */}
          <div className="flex justify-center lg:center">
            <div className="relative h-90 w-50 overflow-hidden rounded-full ring-5 ring-white/20">
              <Image
                src="/images/hero/AvatarPhoto.PNG"
                alt="avatar"
                fill
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;