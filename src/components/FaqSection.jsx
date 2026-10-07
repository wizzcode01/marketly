const FaqSection = ({ items }) => {
  return (
    <section className="mx-auto mt-15 max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28 ">
      <div className="grid gap-10 lg:grid-cols-[0.76fr_1.24fr] lg:gap-20 border-4 p-6 border-black rounded-2xl">
        <div>
          <p className="text-xs font-extrabold uppercase tracking-[0.15em] text-[#008f5b]">
            Frequently asked questions
          </p>
          <h2 className="mt-3 text-4xl font-extrabold leading-[1.02] tracking-[-0.06em] text-[#123d2d] sm:text-5xl">
            A little clarity goes a long way.
          </h2>
          <p className="mt-5 max-w-sm text-sm leading-6 text-[#648074]">
            Here are the essentials for discovering, ordering and receiving what
            you need.
          </p>
        </div>
        <div className="grid gap-3">
          {items.map((item, index) => (
            <article
              key={item.question}
              className="rounded-2xl border border-[#dfebe4] bg-white p-5 shadow-[0_8px_20px_rgba(0,70,46,0.05)] sm:p-6"
            >
              <div className="flex items-start gap-4">
                <span className="grid size-8 shrink-0 place-items-center rounded-lg bg-[#e9f4ed] text-xs font-extrabold text-[#005c3b]">
                  0{index + 1}
                </span>
                <div>
                  <h3 className="text-base font-extrabold tracking-[-0.025em] text-[#123d2d]">
                    {item.question}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-[#688277]">
                    {item.answer}
                  </p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
