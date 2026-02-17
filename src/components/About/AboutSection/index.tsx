import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="overflow-hidden">
      <div className="relative mx-auto max-w-[1170px] px-4 py-20 sm:px-8 lg:py-25 xl:px-0">
        <div className="about-divider-gradient absolute bottom-0 left-0 h-[1px] w-full"></div>

        <div className="flex flex-wrap justify-between gap-11 xl:flex-nowrap">
          <div className="wow fadeInLeft w-full max-w-[570px]">
            <span className="hero-subtitle-text mb-5 text-2xl block font-semibold sm:text-4xl xl:text-heading-2">
              About Me
            </span>

            <p className="mb-9 font-medium">
              👋 Hi, I’m Josiah Williams — a U.S. Navy professional pivoting into full-stack web development and cybersecurity, with a focus on building clean, scalable, and reliable systems.
              <br />
              <br />
              My background comes from high-accountability operational environments where precision, discipline, and execution matter. I’ve led teams, managed complex workflows, and operated in settings where mistakes are not theoretical. That mindset directly shapes how I approach software development: structured thinking, attention to detail, and solutions that actually hold up under pressure.
               <br />
               <br />
              I work primarily with JavaScript, TypeScript, React, Next.js, Node.js, and modern CSS frameworks like Tailwind, and I’m actively expanding into secure system design, automation, and cloud-adjacent technologies. My goal is to bridge modern web development with security-aware engineering, creating applications that are not just functional, but resilient.
               <br />
               <br />
              Military service shaped how I lead and learn: mission-focused, adaptable, and results-driven. I value clean architecture, strong fundamentals, and continuous improvement over shortcuts or hype. Every project is an opportunity to refine systems, sharpen skills, and raise the standard.
               <br />
               <br />
              Outside of tech, I train in martial arts and strength conditioning, which reinforces the same principles I apply to my work: consistency, discipline, and composure under stress.
               <br />
               <br />
              🎯 Whether it’s building a web application, improving a workflow, or designing systems with security in mind, I focus on execution, growth, and long-term impact.
            </p>

            {/* <a
              href="#"
              className="hero-button-gradient inline-flex rounded-lg px-7 py-3 font-medium text-white duration-300 ease-in hover:opacity-80"
            >
              Start Writing - It{`'`}s Free
            </a> */}
          </div>

          {/* <div className="wow fadeInRight relative hidden aspect-556/401 w-full xl:block">
            <Image src="/images/about/about.svg" alt="about" fill />
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
