import ArrowupRightIcon from "@/assets/icons/arrow-up-right.svg";

export const ContactSection = () => {
  return (
    <section className="py-16 pt-14 relative z-20" id="contact">
      <div className="container">
        <div className="bg-gradient-to-r from-[#512DCD] to-[#A880F1] text-[#EFEFEF] py-8 px-10 rounded-3xl text-center md:text-left">
          <div className="flex flex-col md:flex-row gap-8 items-center md:gap-16">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                Let's create something amazing together
              </h2>
              <p className="text-sm mt-2 md:text-base lg:text-base">
                Ready to bring your next project to life? Let'connect and
                discuss how I can help you achieve your goals.
              </p>
            </div>
            <div >
              <a
                href="https://www.linkedin.com/in/giovannafalcon/" 
                className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900"
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className="font-semibold">Contact Me</span>
                <ArrowupRightIcon className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
