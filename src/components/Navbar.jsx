import { Link } from "react-router";

const Navbar = () => {
  return (
    <header className="relative z-20 bg-[#005c3b] pt-4 font-['Plus_Jakarta_Sans'] sm:pt-6">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-5 sm:px-8 lg:px-12"
      >
        <Link
          to="/"
          className="flex items-center gap-2.5 rounded-2xl bg-white px-3 py-2.5 shadow-lg shadow-emerald-950/15 transition hover:-translate-y-0.5"
          aria-label="Marketly home"
        >
          <span className="grid size-8 place-items-center rounded-lg bg-[#005c3b] text-base font-black text-[#f8c85b]">
            M
          </span>
          <span className="hidden text-lg font-extrabold tracking-[-0.06em] text-[#005c3b] sm:inline">
            marketly
          </span>
        </Link>

        <ul className="hidden items-center gap-1 rounded-2xl bg-white p-1.5 text-sm font-semibold text-[#1d3d31] shadow-lg shadow-emerald-950/15 md:flex">
          <li>
            <Link
              to="/"
              className="block rounded-xl  px-4 py-2 text-[#005c3b] transition-colors hover:bg-[#dcefe4]"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/vendors"
              className="block rounded-xl px-4 py-2 transition-colors hover:bg-[#e9f4ed] hover:text-[#008f5b]"
            >
              Vendors
            </Link>
          </li>
          <li>
            <Link
              to="/delivery"
              className="block rounded-xl px-4 py-2 transition-colors hover:bg-[#e9f4ed] hover:text-[#008f5b]"
              href="#delivery"
            >
              Delivery
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="block rounded-xl px-4 py-2 transition-colors hover:bg-[#e9f4ed] hover:text-[#008f5b]"
              href="#about"
            >
              About Us
            </Link>
          </li>
        </ul>

        <Link
          to="/get-started"
          className="rounded-2xl bg-white px-4 py-3 text-sm font-extrabold text-[#005c3b] shadow-lg shadow-emerald-950/15 transition duration-200 hover:-translate-y-0.5 hover:bg-[#f8c85b] sm:px-5"
        >
          Get started
        </Link>
      </nav>
    </header>
  );
};

export default Navbar;
