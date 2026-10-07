const Footer = () => {
  const footerLinks = {
    Explore: ["Vendors", "Delivery", "How it works", "Become a vendor"],
    Company: ["About us", "Careers", "Newsroom", "Contact"],
    Support: ["Help centre", "Safety", "Terms of use", "Privacy policy"],
  };

  return (
    <footer className="bg-[#090b0a] px-5 pb-8 pt-16 font-['Plus_Jakarta_Sans'] text-white sm:px-8 lg:px-12 lg:pt-24">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden  px-6 py-8 sm:px-10 sm:py-10 lg:grid lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-14 lg:py-12">
          <div className="absolute -left-10 -top-16 size-56 rounded-full bg-[#f8c85b]/10 blur-3xl" />
          <div className="relative max-w-lg">
            <p className="text-xs font-extrabold uppercase tracking-[0.16em] text-[#f8c85b]">
              Made for your everyday
            </p>
            <h2 className="mt-4 text-3xl font-extrabold leading-tight tracking-[-0.055em] sm:text-4xl">
              A good day is always within reach.
            </h2>
            <p className="mt-4 max-w-md text-sm leading-6 text-white/60">
              Find something delicious, restock the essentials and make more
              time for the things that matter.
            </p>
            <a
              href="#home"
              className="mt-7 inline-flex rounded-xl bg-[#f8c85b] px-5 py-3 text-sm font-extrabold text-[#173d2d] transition hover:-translate-y-0.5 hover:bg-[#ffe091]"
            >
              Explore marketly
            </a>
          </div>
          <div className="relative mt-8 h-52 overflow-hidden rounded-2xl bg-[#845335] lg:mt-0 lg:h-64">
            <img
              src="https://images.unsplash.com/photo-1588964895597-cfccd6e2dbf9?auto=format&fit=crop&w=1000&q=85"
              alt="Brown paper food bag with fresh groceries"
              className="size-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#151916]/25 to-transparent" />
          </div>
        </div>

        <div className="grid gap-12 py-14 sm:grid-cols-2 lg:grid-cols-[1.4fr_repeat(3,1fr)] lg:gap-8 lg:py-20">
          <div className="max-w-xs">
            <a
              href="#home"
              className="flex items-center gap-2.5"
              aria-label="Marketly home"
            >
              <span className="grid size-9 place-items-center rounded-xl bg-[#f8c85b] text-lg font-black text-[#005c3b]">
                M
              </span>
              <span className="text-xl font-extrabold tracking-[-0.06em]">
                marketly
              </span>
            </a>
            <p className="mt-5 text-sm leading-6 text-white/55">
              Your neighbourhood marketplace for food, fresh finds and everyday
              essentials.
            </p>
            <div className="mt-6 flex gap-2">
              {["in", "f", "x"].map((social) => (
                <a
                  key={social}
                  href={`#${social}`}
                  className="grid size-9 place-items-center rounded-full border border-white/15 text-xs font-extrabold text-white/75 transition hover:border-[#f8c85b] hover:bg-[#f8c85b] hover:text-[#123d2d]"
                >
                  {social}
                </a>
              ))}
            </div>
          </div>

          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="text-sm font-extrabold text-white">{heading}</h3>
              <ul className="mt-5 space-y-3 text-sm text-white/55">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href={`#${link.toLowerCase().replaceAll(" ", "-")}`}
                      className="transition hover:text-[#f8c85b]"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 py-6 text-xs font-medium text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 marketly. Made for better everyday moments.</p>
          <p>Available wherever your day takes you.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
