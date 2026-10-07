const Hero = ({
  eyebrow,
  title,
  description,
  inputPlaceholder,
  buttonLabel,
  note = "Fast, friendly delivery from businesses you love.",
  visual,
  spices,
  largeText,
  startSelling,
  login,
}) => {
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-[#005c3b] font-['Plus_Jakarta_Sans'] text-white"
    >
      <div className="absolute -left-28 top-16 size-72 rounded-full bg-[#f8c85b]/15 blur-3xl" />
      <div className="absolute -right-24 bottom-0 size-96 rounded-full bg-[#e9b744]/15 blur-3xl" />
      <div className="absolute right-[9%] top-10 hidden size-24 rounded-full border border-white/15 lg:block" />
      <div className="absolute right-[20%] top-28 hidden size-3 rounded-full bg-[#f8c85b] lg:block" />

      <div className="relative mx-auto grid min-h-[620px] max-w-7xl items-center gap-6 px-5 pb-16 pt-12 sm:px-8 sm:pb-20 sm:pt-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-8 lg:px-12 lg:pb-20 lg:pt-14">
        <div className="max-w-2xl">
          {eyebrow && (
            <p className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3.5 py-2 text-xs font-bold uppercase tracking-[0.14em] text-[#ffe59a] backdrop-blur-sm">
              <span className="size-2 rounded-full bg-[#f8c85b]" />
              {eyebrow}
            </p>
          )}

          <h1
            className={`max-w-xl whitespace-pre-line font-extrabold leading-[0.98] tracking-[-0.065em] ${
              largeText
                ? "text-6xl sm:text-7xl lg:text-8xl"
                : "text-5xl sm:text-6xl lg:text-7xl"
            }`}
          >
            {title}
          </h1>
          <p
            className={`mt-6 max-w-lg leading-7 text-emerald-50/80 ${
              largeText ? "text-lg sm:text-xl" : "text-base sm:text-lg"
            }`}
          >
            {description}
          </p>

          {inputPlaceholder && buttonLabel && (
            <>
              <form className="mt-9 flex max-w-xl flex-col gap-3 rounded-[1.35rem] bg-white p-2.5 shadow-2xl shadow-emerald-950/25 sm:flex-row">
                <label className="flex min-w-0 flex-1 items-center gap-3 px-3 py-2 text-[#005c3b]">
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 24 24"
                    className="size-5 shrink-0 fill-none stroke-current stroke-[2.5]"
                  >
                    <path d="M20 10c0 5-8 11-8 11S4 15 4 10a8 8 0 1 1 16 0Z" />
                    <circle cx="12" cy="10" r="2.5" />
                  </svg>
                  <input
                    className="min-w-0 flex-1 bg-transparent text-sm font-semibold text-[#173d30] outline-none placeholder:text-[#789287]"
                    type="text"
                    placeholder={inputPlaceholder}
                  />
                </label>
                <button
                  className="rounded-xl bg-[#f8c85b] px-5 py-3.5 text-sm font-extrabold text-[#19402f] transition hover:bg-[#ffda7d] sm:px-6"
                  type="button"
                >
                  {buttonLabel}
                </button>
              </form>

              <p className="mt-4 flex items-center gap-2 text-xs font-medium text-emerald-50/65">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="size-4 fill-[#f8c85b]"
                >
                  <path d="m12 2.7 2.2 6.1 6.4.2-5 4 1.7 6.2-5.3-3.5-5.3 3.5 1.7-6.2-5-4 6.4-.2L12 2.7Z" />
                </svg>
                {note}
              </p>
            </>
          )}
          {startSelling && login && (
            <div className="mt-6 flex flex-wrap gap-3 ">
              <button className="bg-[#f8c85b] text-4xl text-center px-10 py-2 text-black border-2 border-black rounded-2xl">
                {startSelling}
              </button>
              <button className="bg-white border-2 border-[#005c3b] text-4xl text-center px-10 py-2 text-black rounded-2xl">
                {login}
              </button>
            </div>
          )}
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          {visual || (
            <div className="relative mx-auto aspect-square max-w-[31rem]">
              <div className="absolute inset-[8%] rotate-6 rounded-[3rem] border border-white/20 bg-white/10 backdrop-blur-sm" />
              <div className="absolute inset-[14%] -rotate-6 rounded-[2.5rem] bg-[#f8c85b] shadow-2xl shadow-emerald-950/30" />
              <div className="absolute inset-[20%] grid place-items-center rounded-[2rem] bg-[#f8f8f3] p-6 shadow-[0_22px_0_rgba(0,50,32,0.17)] sm:p-9">
                <div className="w-full rounded-[1.6rem] bg-[#d76232] p-5 shadow-lg sm:p-7">
                  <div className="mx-auto grid aspect-[1.2] w-full place-items-center rounded-[1.2rem] bg-[#f6c85e]">
                    <div className="relative grid size-28 place-items-center rounded-full bg-[#fbf7e9] shadow-inner sm:size-36">
                      <span className="absolute left-5 top-6 size-7 rounded-full bg-[#168b56] sm:left-7 sm:top-8" />
                      <span className="absolute bottom-5 right-5 size-9 rounded-full bg-[#d84f31] sm:bottom-7 sm:right-7" />
                      <span className="size-9 rounded-full border-4 border-[#f0ad38] sm:size-12" />
                    </div>
                  </div>
                  <div className="mt-4 flex items-center justify-between text-[#fff7df]">
                    <span className="text-sm font-extrabold">{spices}</span>
                    <span className="grid size-8 place-items-center rounded-full bg-white/20 text-lg">
                      →
                    </span>
                  </div>
                </div>
              </div>

              <div className="absolute -left-3 top-[18%] rounded-2xl bg-white px-3.5 py-3 text-[#005c3b] shadow-xl sm:-left-9 sm:px-4">
                <p className="text-[10px] font-bold uppercase tracking-wider text-[#749286]">
                  Delivery
                </p>
                <p className="mt-0.5 text-sm font-extrabold">At your door</p>
              </div>
              <div className="absolute -bottom-1 right-0 flex items-center gap-2.5 rounded-2xl border border-white/15 bg-[#073e2c] px-3.5 py-3 shadow-xl sm:-right-5 sm:px-4">
                <span className="grid size-9 place-items-center rounded-xl bg-[#f8c85b] text-base">
                  ✦
                </span>
                <span className="text-xs font-bold leading-tight">
                  Made for
                  <br />
                  your day
                </span>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
