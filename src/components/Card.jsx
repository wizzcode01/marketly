const Card = ({
  title,
  desc,
  vendor,
  image,
  category,
  rating,
  deliveryTime,
  accent = "#f8c85b",
}) => {
  return (
    <article className="group overflow-hidden rounded-[1.7rem] bg-white shadow-[0_14px_35px_rgba(0,70,46,0.09)] transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_22px_45px_rgba(0,70,46,0.16)]">
      <div className="relative aspect-[1.23] overflow-hidden bg-emerald-100">
        <img
          src={image}
          alt={title}
          className="size-full object-cover transition duration-500 group-hover:scale-105"
        />
        <span
          className="absolute left-4 top-4 rounded-full px-3 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.12em] text-[#164032] shadow-sm"
          style={{ backgroundColor: accent }}
        >
          {category}
        </span>
        <span className="absolute right-4 top-4 flex items-center gap-1 rounded-full bg-white px-2.5 py-1.5 text-xs font-extrabold text-[#174534] shadow-sm">
          <span className="text-[#e5a414]">★</span> {rating}
        </span>
      </div>

      <div className="p-5">
        <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#6d897d]">
          {vendor}
        </p>
        <h2 className="mt-2 text-xl font-extrabold tracking-[-0.045em] text-[#123d2d]">
          {title}
        </h2>
        <p className="mt-2 min-h-10 text-sm leading-5 text-[#688277]">{desc}</p>

        <div className="mt-5 flex items-center justify-between border-t border-[#e8efeb] pt-4">
          <span className="flex items-center gap-1.5 text-xs font-bold text-[#245943]">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="size-4 fill-none stroke-current stroke-[2.25]"
            >
              <circle cx="12" cy="12" r="8.5" />
              <path d="M12 7v5l3.5 2" />
            </svg>
            {deliveryTime}
          </span>
          <span className="grid size-9 place-items-center rounded-xl bg-[#e9f4ed] text-lg font-medium text-[#005c3b] transition group-hover:bg-[#005c3b] group-hover:text-white">
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              className="size-4 fill-none stroke-current stroke-[2.25]"
            >
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          </span>
        </div>
      </div>
    </article>
  );
};

export default Card;
