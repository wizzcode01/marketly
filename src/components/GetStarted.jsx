const GetStarted = ({ eyebrow, title, description, image, imageAlt }) => {
  return (
    <section className="px-5 sm:px-8 lg:px-12 mt-16 lg:mt-20">
      <div className="mx-auto grid max-w-8xl overflow-hidden rounded-xl bg-[#005c3b] text-white lg:grid-cols-2">
        <div className="relative flex flex-col justify-center px-7 py-12 sm:px-12 sm:py-16 lg:px-16 lg:py-20">
          <div className="absolute -left-16 -top-16 size-56 rounded-full bg-[#f8c85b]/15 blur-2xl" />
          <div className="absolute -bottom-20 left-1/3 size-56 rounded-full border-[24px] border-[#f8c85b]/10" />
          <div className="relative max-w-lg">
            <p className="inline-flex rounded-full bg-white/10 px-3 py-1.5 text-xs font-bold uppercase tracking-[0.14em] text-[#ffe59a]">
              {eyebrow}
            </p>
            <h2 className="mt-5 text-4xl font-extrabold leading-[0.98] tracking-[-0.065em] sm:text-5xl">
              {title}
            </h2>
            <p className="mt-5 max-w-md text-base leading-7 text-emerald-50/80">
              {description}
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a
                href="#download-google"
                className="flex items-center gap-2.5 rounded-xl bg-white px-8 py-4.5 text-[#075b40] transition hover:-translate-y-0.5 hover:bg-[#f8c85b]"
              >
                <img
                  src="https://img.icons8.com/color/96/google-play.png"
                  alt=""
                  className="size-10"
                />
                <span className="text-left leading-tight">
                  <span className="block text-[12px] font-semibold">
                    Download on
                  </span>
                  <span className="block text-lg font-extrabold">
                    Google Play
                  </span>
                </span>
              </a>
              <a
                href="#download-apple"
                className="flex items-center gap-2.5 rounded-xl bg-white px-8 py-4.5 text-[#075b40] transition hover:-translate-y-0.5 hover:bg-[#f8c85b]"
              >
                <img
                  src="https://img.icons8.com/ios-filled/100/005c3b/mac-os.png"
                  alt=""
                  className="size-10"
                />
                <span className="text-left leading-tight">
                  <span className="block text-[12px] font-semibold">
                    Download on the
                  </span>
                  <span className="block text-lg font-extrabold">
                    App Store
                  </span>
                </span>
              </a>
            </div>
          </div>
        </div>
        <div className="relative min-h-80 overflow-hidden bg-[#e3b35b] sm:min-h-96 lg:min-h-full">
          <img
            src={image}
            alt={imageAlt}
            className="absolute inset-0 size-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-[#003c29]/15 via-transparent to-[#f8c85b]/20" />
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
