import Image from "next/image";

const Footer = () => {
  return (
    <>
      <footer className="relative z-10 pb-17.5 lg:pb-22.5 xl:pb-27.5">
        {/* Background gradient lines */}
        <div className="absolute bottom-0 left-0 -z-1 flex w-full flex-col gap-3 opacity-50">
          {[1.24, 2.47, 3.71, 4.99, 6.19, 7.42, 8.66, 9.9, 13].map(
            (height, i) => (
              <div
                key={i}
                className="footer-bg-gradient w-full"
                style={{ height: `${height}px` }}
              />
            )
          )}
        </div>

        <div className="relative mx-auto max-w-[1170px] px-4 pt-17.5 sm:px-8 xl:px-0">
          <div className="footer-divider-gradient absolute left-0 top-0 h-[1px] w-full"></div>

          {/* TOP SECTION */}
          <div className="flex flex-col gap-12 lg:flex-row lg:justify-between">
            {/* LEFT SIDE */}
            <div className="w-full lg:max-w-[520px]">
              <h3 className="mb-2 text-heading-5 font-semibold text-white">
                Let's Connect
              </h3>

              <p className="mb-8 xl:w-4/5">
                I'm currently looking for new opportunities. Whether you have a
                question, collaboration idea, or opportunity let's connect!
              </p>

              {/* SOCIALS */}
               <div className="flex items-center gap-5 text-white/70">
              {/* GitHub */}
              <a
                href="https://github.com/Jo-siah-J"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="transition hover:text-white"
              >
                <svg
                  className="fill-current"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0.5C5.65 0.5 0.5 5.65 0.5 12C0.5 17.1 3.85 21.45 8.45 23C9.05 23.1 9.25 22.75 9.25 22.5C9.25 22.25 9.25 21.5 9.2 20.6C5.95 21.3 5.3 19.1 5.3 19.1C4.8 17.8 4.05 17.5 4.05 17.5C3 16.75 4.15 16.75 4.15 16.75C5.3 16.85 5.95 17.95 5.95 17.95C6.95 19.65 8.55 19.15 9.25 18.85C9.35 18.1 9.65 17.6 10 17.3C7.45 17 4.75 16 4.75 11.6C4.75 10.35 5.2 9.35 5.95 8.6C5.85 8.3 5.45 7.1 6.05 5.5C6.05 5.5 7.05 5.2 9.25 6.7C10.15 6.45 11.1 6.35 12.05 6.35C13 6.35 13.95 6.45 14.85 6.7C17.05 5.2 18.05 5.5 18.05 5.5C18.65 7.1 18.25 8.3 18.15 8.6C18.9 9.35 19.35 10.35 19.35 11.6C19.35 16 16.65 17 14.1 17.3C14.55 17.7 14.95 18.5 14.95 19.7C14.95 21.35 14.95 22.2 14.95 22.5C14.95 22.75 15.15 23.1 15.75 23C20.35 21.45 23.5 17.1 23.5 12C23.5 5.65 18.35 0.5 12 0.5Z" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/josiah-w-80563a123"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="transition hover:text-white"
              >
                <svg
                  className="fill-current"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6C1.11 6 0 4.88 0 3.5C0 2.12 1.11 1 2.49 1C3.87 1 4.98 2.12 4.98 3.5ZM0.24 8.25H4.74V24H0.24V8.25ZM8.4 8.25H12.72V10.41H12.78C13.38 9.27 14.88 8.07 17.04 8.07C21.54 8.07 22.38 11.01 22.38 14.85V24H17.88V15.75C17.88 13.8 17.85 11.28 15.18 11.28C12.48 11.28 12.06 13.38 12.06 15.6V24H8.4V8.25Z" />
                </svg>
              </a>
               </div>
            </div>

            {/* RIGHT SIDE — CONTACT FORM */}
            <div className="w-full lg:max-w-[600px]">
              <form className="flex flex-col gap-6">
                <div className="flex flex-col gap-6 sm:flex-row">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    className="w-full rounded-lg border border-white/[0.12] bg-white/[0.05] px-6 py-3 text-white outline-none focus:border-purple"
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    className="w-full rounded-lg border border-white/[0.12] bg-white/[0.05] px-6 py-3 text-white outline-none focus:border-purple"
                  />
                </div>

                <input
                  type="text"
                  name="subject"
                  placeholder="Subject"
                  className="w-full rounded-lg border border-white/[0.12] bg-white/[0.05] px-6 py-3 text-white outline-none focus:border-purple"
                />

                <textarea
                  name="message"
                  rows={5}
                  placeholder="Your Message"
                  className="w-full resize-none rounded-lg border border-white/[0.12] bg-white/[0.05] px-6 py-4 text-white outline-none focus:border-purple"
                ></textarea>

                <button
                  type="submit"
                  className="button-border-gradient hover:button-gradient-hover relative flex items-center justify-center rounded-lg px-8 py-3.5 text-sm font-medium text-white shadow-button transition hover:shadow-none"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>

          {/* LOWER SECTION */}
          <div className="mt-16 flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <Image
                src={"/images/logo/Light Logo.PNG"}
                alt="Logo"
                width={220}
                height={200}
              />
            </div>

            <div className="text-right">
              <p className="font-medium">All rights reserved.</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
